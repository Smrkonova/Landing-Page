import React, { useEffect, useState } from 'react';
import { X, User, Mail, MessageSquare, Phone } from 'lucide-react';

export default function ContactDrawer({ isOpen, onClose }) {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' });
  const [status, setStatus] = useState('idle');

  const handleChange = (e) => setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      if (res.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', phone: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch (err) {
      setStatus('error');
    }
  };

  // Disable body scroll when drawer is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    // Cleanup on unmount
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  return (
    <>
      {/* Backdrop */}
      <div 
        className={`fixed inset-0 z-[60] bg-black/60 backdrop-blur-sm transition-opacity duration-500 ${isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
        onClick={onClose}
      />

      {/* Drawer Wrapper (Handles sliding, no overflow clipping) */}
      <div 
        className={`fixed top-0 right-0 z-[70] h-full w-full sm:w-[500px] md:w-[600px] transform transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}
      >
        {/* Floating Close Button (Outside the scroll area) */}
        <button 
          onClick={onClose}
          className={`absolute top-1/2 -left-20 -translate-y-1/2 w-14 h-14 bg-[#111111] hidden sm:flex items-center justify-center rounded-[12px] shadow-2xl border border-white/5 z-10 transition-all duration-500 hover:bg-[#222] hover:scale-105 ${isOpen ? 'opacity-100 translate-x-0 delay-200' : 'opacity-0 translate-x-8 pointer-events-none'}`}
        >
          <X className="w-6 h-6 text-white" />
        </button>

        {/* Inner Scrolling Content Area */}
        <div className="w-full h-full bg-[#111111] border-l border-white/5 shadow-2xl overflow-y-auto relative">
          {/* Mobile Close Button (Inside) */}
          <button 
            onClick={onClose}
            className="absolute top-6 right-6 w-10 h-10 bg-[#222] sm:hidden flex items-center justify-center rounded-full text-white z-10"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="p-8 md:p-14 flex flex-col min-h-full">
            <h2 className="text-4xl md:text-5xl font-black uppercase text-white mb-12 font-good-times tracking-tight">Get in touch</h2>

          <form onSubmit={handleSubmit} className="flex flex-col flex-1 gap-8">
            {status === 'success' && (
              <div className="bg-green-500/10 border border-green-500/20 text-green-400 p-4 rounded text-xs font-mono text-center">
                Message sent successfully! We'll get back to you soon.
              </div>
            )}
            {status === 'error' && (
              <div className="bg-red-500/10 border border-red-500/20 text-red-400 p-4 rounded text-xs font-mono text-center">
                Failed to send message. Please try again or email us directly.
              </div>
            )}
            <div className="flex flex-col gap-3">
              <label className="text-[10px] md:text-xs text-white uppercase tracking-widest flex items-center gap-2 font-mono">
                <User className="w-4 h-4" /> Name*
              </label>
              <input 
                type="text" 
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Full Name" 
                className="w-full bg-[#1a1a1a] border border-white/5 p-4 text-gray-400 text-xs font-mono focus:outline-none focus:border-white/20 transition-colors"
              />
            </div>

            <div className="flex flex-col gap-3">
              <label className="text-[10px] md:text-xs text-white uppercase tracking-widest flex items-center gap-2 font-mono">
                <Mail className="w-4 h-4" /> Email*
              </label>
              <input 
                type="email" 
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="exemple@mail.com" 
                className="w-full bg-[#1a1a1a] border border-white/5 p-4 text-gray-400 text-xs font-mono focus:outline-none focus:border-white/20 transition-colors"
              />
            </div>

            <div className="flex flex-col gap-3">
              <label className="text-[10px] md:text-xs text-white uppercase tracking-widest flex items-center gap-2 font-mono">
                <Phone className="w-4 h-4" /> Phone*
              </label>
              <input 
                type="tel" 
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                placeholder="+1 234 567 8900" 
                className="w-full bg-[#1a1a1a] border border-white/5 p-4 text-gray-400 text-xs font-mono focus:outline-none focus:border-white/20 transition-colors"
              />
            </div>

            <div className="flex flex-col gap-3">
              <label className="text-[10px] md:text-xs text-white uppercase tracking-widest flex items-center gap-2 font-mono">
                <MessageSquare className="w-4 h-4" /> Message*
              </label>
              <textarea 
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                placeholder="Tell me more about your project. Don't hesitate to include links if necessary."
                rows={5}
                className="w-full bg-[#1a1a1a] border border-white/5 p-4 text-gray-400 text-[11px] leading-relaxed font-mono focus:outline-none focus:border-white/20 transition-colors resize-none"
              />
            </div>

            <button type="submit" disabled={status === 'loading'} className="w-full mt-4 p-4 bg-white text-black hover:bg-gray-200 transition-colors text-xs font-bold tracking-widest uppercase disabled:opacity-50 disabled:cursor-not-allowed">
              {status === 'loading' ? 'Sending...' : 'Send Message'}
            </button>

            <div className="mt-auto pt-12 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] text-gray-500 font-mono uppercase tracking-widest">
              <span>Don't like forms ?</span>
              <a href="mailto:hello@smrkonova.com" className="flex items-center gap-2 text-white hover:underline underline-offset-4 decoration-white/30">
                <Mail className="w-3 h-3" /> Send an email
              </a>
            </div>
          </form>
        </div>
        </div>
      </div>
    </>
  );
}
