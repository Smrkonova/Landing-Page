class SoundManager {
  private ctx: AudioContext | null = null;
  private isMuted: boolean = true;
  private droneOsc: OscillatorNode | null = null;
  private droneGain: GainNode | null = null;
  private noiseGain: GainNode | null = null;
  private filter: BiquadFilterNode | null = null;

  private init() {
    if (this.ctx) return;
    try {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      this.ctx = new AudioCtx();

      // Drone oscillator (deep cinematic sci-fi hum)
      this.droneOsc = this.ctx.createOscillator();
      this.droneOsc.type = "sine";
      this.droneOsc.frequency.setValueAtTime(55, this.ctx.currentTime); // A1 note

      this.droneGain = this.ctx.createGain();
      this.droneGain.gain.setValueAtTime(0, this.ctx.currentTime);

      this.droneOsc.connect(this.droneGain);
      this.droneGain.connect(this.ctx.destination);
      this.droneOsc.start();

      // Wind noise buffer
      const bufferSize = this.ctx.sampleRate * 2;
      const noiseBuffer = this.ctx.createBuffer(1, bufferSize, this.ctx.sampleRate);
      const output = noiseBuffer.getChannelData(0);
      for (let i = 0; i < bufferSize; i++) {
        output[i] = Math.random() * 2 - 1;
      }

      const whiteNoise = this.ctx.createBufferSource();
      whiteNoise.buffer = noiseBuffer;
      whiteNoise.loop = true;

      this.filter = this.ctx.createBiquadFilter();
      this.filter.type = "bandpass";
      this.filter.frequency.setValueAtTime(320, this.ctx.currentTime);
      this.filter.Q.setValueAtTime(1.5, this.ctx.currentTime);

      this.noiseGain = this.ctx.createGain();
      this.noiseGain.gain.setValueAtTime(0, this.ctx.currentTime);

      whiteNoise.connect(this.filter);
      this.filter.connect(this.noiseGain);
      this.noiseGain.connect(this.ctx.destination);
      whiteNoise.start();
    } catch {
      // Audio not supported or blocked
    }
  }

  public toggle(): boolean {
    if (!this.ctx) {
      this.init();
    }
    if (this.ctx && this.ctx.state === "suspended") {
      this.ctx.resume();
    }

    this.isMuted = !this.isMuted;
    if (this.ctx && this.droneGain && this.noiseGain) {
      const now = this.ctx.currentTime;
      const targetGain = this.isMuted ? 0 : 0.08;
      const noiseTarget = this.isMuted ? 0 : 0.04;
      this.droneGain.gain.setTargetAtTime(targetGain, now, 0.2);
      this.noiseGain.gain.setTargetAtTime(noiseTarget, now, 0.2);
    }
    return !this.isMuted;
  }

  public updateVelocity(progress: number, velocity: number) {
    if (this.isMuted || !this.ctx || !this.droneOsc || !this.filter) return;
    const now = this.ctx.currentTime;
    // Modulate pitch with progress and scroll speed
    const baseFreq = 50 + progress * 40;
    const speedBoost = Math.min(60, Math.abs(velocity) * 15);
    this.droneOsc.frequency.setTargetAtTime(baseFreq + speedBoost, now, 0.1);
    this.filter.frequency.setTargetAtTime(250 + progress * 600 + speedBoost * 5, now, 0.1);
  }

  public getMuted(): boolean {
    return this.isMuted;
  }
}

export const soundManager = typeof window !== "undefined" ? new SoundManager() : null;
