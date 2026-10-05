"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
    Check, 
    Loader2, 
    DollarSign, 
    Users, 
    Activity, 
    Mail, 
    Lock, 
    Calendar, 
    Clock, 
    MessageSquare, 
    Send, 
    ShoppingBag, 
    Star, 
    Sparkles, 
    CheckCircle2, 
    ArrowRight, 
    ShieldCheck, 
    Box, 
    BarChart2, 
    Layers, 
    Cpu, 
    Smartphone, 
    Monitor, 
    Palette, 
    Type, 
    Code, 
    Eye, 
    RefreshCw, 
    Zap, 
    TrendingUp, 
    Search, 
    ThumbsUp, 
    Play, 
    Award, 
    Compass, 
    FileText,
    Flame,
    CreditCard,
    Crown,
    Bug,
    Sliders,
    Gauge,
    HeartPulse,
    UploadCloud,
    ShieldAlert
} from 'lucide-react';

/* =========================================================================
   1. ADMIN DASHBOARD MOCKUP
   ========================================================================= */
function AdminDashboardMockup() {
    const [stage, setStage] = useState(0);
    const [typedEmail, setTypedEmail] = useState("");
    const [typedPass, setTypedPass] = useState("");

    const fullEmail = "admin@system.io";
    const fullPass = "••••••••";

    useEffect(() => {
        let isMounted = true;
        let timer;

        const loop = () => {
            setStage(0);
            setTypedEmail("");
            setTypedPass("");

            timer = setTimeout(() => {
                if (!isMounted) return;
                setStage(1);

                let idx = 0;
                let cur = "";
                const eInterval = setInterval(() => {
                    if (!isMounted) { clearInterval(eInterval); return; }
                    if (idx < fullEmail.length) {
                        cur += fullEmail[idx];
                        setTypedEmail(cur);
                        idx++;
                    } else {
                        clearInterval(eInterval);
                        let pIdx = 0;
                        let pCur = "";
                        const pInterval = setInterval(() => {
                            if (!isMounted) { clearInterval(pInterval); return; }
                            if (pIdx < fullPass.length) {
                                pCur += fullPass[pIdx];
                                setTypedPass(pCur);
                                pIdx++;
                            } else {
                                clearInterval(pInterval);
                                timer = setTimeout(() => {
                                    if (!isMounted) return;
                                    setStage(2);
                                    timer = setTimeout(() => {
                                        if (!isMounted) return;
                                        setStage(3);
                                        timer = setTimeout(() => {
                                            if (!isMounted) return;
                                            setStage(4);
                                            timer = setTimeout(() => {
                                                if (!isMounted) return;
                                                loop();
                                            }, 3800);
                                        }, 700);
                                    }, 800);
                                }, 350);
                            }
                        }, 60);
                    }
                }, 45);
            }, 500);
        };

        loop();
        return () => { isMounted = false; clearTimeout(timer); };
    }, []);

    const isDashboard = stage >= 4;

    return (
        <div className="w-full max-w-[270px] bg-white/20 backdrop-blur-md rounded-2xl p-3.5 border border-white/40 shadow-lg min-h-[220px] flex flex-col justify-between overflow-hidden">
            <div className="flex items-center justify-between pb-2 border-b border-white/20">
                <div className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-white/70" />
                    <span className="w-2 h-2 rounded-full bg-white/40" />
                    <span className="w-2 h-2 rounded-full bg-white/40" />
                </div>
                <div className="flex items-center gap-1">
                    <span className={`w-1.5 h-1.5 rounded-full ${isDashboard ? 'bg-emerald-400 animate-pulse' : 'bg-white/50'}`} />
                    <span className="text-[9px] font-bold text-white tracking-wider uppercase">
                        {isDashboard ? "DASHBOARD LIVE" : "ADMIN CONSOLE"}
                    </span>
                </div>
            </div>

            <div className="min-h-[145px] flex flex-col justify-center my-1">
                <AnimatePresence mode="wait">
                    {!isDashboard ? (
                        <motion.div key="login" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0, y: -6 }} className="flex flex-col gap-2.5">
                            <div className="h-8 rounded-lg bg-white/30 border border-white/50 px-2.5 flex items-center justify-between text-white text-[10px]">
                                <div className="flex items-center gap-1.5 truncate">
                                    <Mail className="w-3 h-3 text-white/70 shrink-0" />
                                    {typedEmail ? <span className="font-mono">{typedEmail}</span> : <span className="h-2 w-20 bg-white/40 rounded-full" />}
                                </div>
                                {typedEmail === fullEmail && <Check className="w-3 h-3 text-emerald-300" />}
                            </div>

                            <div className="h-8 rounded-lg bg-white/30 border border-white/50 px-2.5 flex items-center justify-between text-white text-[10px]">
                                <div className="flex items-center gap-1.5">
                                    <Lock className="w-3 h-3 text-white/70 shrink-0" />
                                    {typedPass ? <span className="font-mono tracking-widest">{typedPass}</span> : <span className="h-2 w-14 bg-white/40 rounded-full" />}
                                </div>
                                {typedPass === fullPass && <Check className="w-3 h-3 text-emerald-300" />}
                            </div>

                            <div className={`w-full py-2.5 rounded-lg font-bold tracking-widest uppercase text-[10px] flex items-center justify-center gap-1.5 shadow-sm transition-colors ${
                                stage === 3 ? "bg-emerald-500 text-white" : stage === 2 ? "bg-black text-white" : "bg-white text-black"
                            }`}>
                                {stage === 2 ? (<><Loader2 className="w-3 h-3 animate-spin" /><span>LOGGING IN...</span></>) : 
                                 stage === 3 ? (<><Check className="w-3.5 h-3.5 text-white" /><span>AUTHORIZED</span></>) : 
                                 <span>ADMIN LOGIN</span>}
                            </div>
                        </motion.div>
                    ) : (
                        <motion.div key="dash" initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0 }} className="flex flex-col gap-2">
                            <div className="grid grid-cols-2 gap-2">
                                <div className="bg-white/30 border border-white/40 rounded-xl p-2 shadow-sm">
                                    <span className="text-[8px] font-semibold text-white/80 uppercase">Revenue</span>
                                    <div className="flex items-baseline justify-between mt-0.5">
                                        <span className="text-[12px] font-bold text-white">$48.2K</span>
                                        <span className="text-[7px] font-bold text-emerald-300 bg-emerald-950/30 px-1 py-0.5 rounded">+24%</span>
                                    </div>
                                </div>
                                <div className="bg-white/30 border border-white/40 rounded-xl p-2 shadow-sm">
                                    <span className="text-[8px] font-semibold text-white/80 uppercase">Users</span>
                                    <div className="flex items-baseline justify-between mt-0.5">
                                        <span className="text-[12px] font-bold text-white">2,840</span>
                                        <span className="text-[7px] font-bold text-emerald-300 bg-emerald-950/30 px-1 py-0.5 rounded">+12%</span>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-white/25 border border-white/40 rounded-xl p-1.5 shadow-sm">
                                <div className="h-8 flex items-end justify-between gap-1 px-1">
                                    {[35, 65, 50, 90, 60, 100, 75].map((val, i) => (
                                        <motion.div key={i} initial={{ height: 0 }} animate={{ height: `${val}%` }} transition={{ duration: 0.5, delay: i * 0.05 }} className={`flex-1 rounded-t-sm ${i === 5 ? "bg-white shadow-sm" : "bg-white/60"}`} />
                                    ))}
                                </div>
                            </div>

                            <div className="h-6 bg-white/35 border border-white/40 rounded-lg px-2 flex items-center justify-between text-white text-[8.5px]">
                                <span className="truncate font-medium flex items-center gap-1">
                                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-300 animate-ping" />
                                    Order #1042 processed
                                </span>
                                <span className="font-bold text-emerald-200">+$280</span>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>

            <div className="w-full bg-white/20 h-1 rounded-full overflow-hidden">
                <motion.div key={isDashboard ? "d1" : "l1"} initial={{ width: "0%" }} animate={{ width: "100%" }} transition={{ duration: isDashboard ? 3.8 : 3.2, ease: "linear" }} className="h-full bg-white/70 rounded-full" />
            </div>
        </div>
    );
}

/* =========================================================================
   2. CUSTOMER / USER PORTAL MOCKUP
   ========================================================================= */
function CustomerLoginMockup() {
    const [step, setStep] = useState(0);

    useEffect(() => {
        let isMounted = true;
        let timer;
        const loop = () => {
            setStep(0);
            timer = setTimeout(() => {
                if (!isMounted) return;
                setStep(1); // logging in
                timer = setTimeout(() => {
                    if (!isMounted) return;
                    setStep(2); // authenticated profile
                    timer = setTimeout(() => {
                        if (!isMounted) return;
                        loop();
                    }, 4000);
                }, 1000);
            }, 1200);
        };
        loop();
        return () => { isMounted = false; clearTimeout(timer); };
    }, []);

    return (
        <div className="w-full max-w-[270px] bg-white/25 backdrop-blur-md rounded-2xl p-3.5 border border-white/40 shadow-lg min-h-[220px] flex flex-col justify-between overflow-hidden text-gray-800">
            <div className="flex items-center justify-between pb-2 border-b border-purple-200/50">
                <span className="text-[9px] font-bold text-gray-800 tracking-wider uppercase flex items-center gap-1">
                    <Users className="w-3 h-3 text-purple-600" />
                    CLIENT PORTAL
                </span>
                <span className="text-[7.5px] bg-purple-100 text-purple-700 px-1.5 py-0.5 rounded font-bold">AUTH</span>
            </div>

            <div className="min-h-[145px] flex flex-col justify-center my-1">
                {step < 2 ? (
                    <div className="flex flex-col gap-2.5">
                        <div className="h-8 rounded-lg bg-white/70 border border-purple-200 px-2.5 flex items-center text-gray-800 text-[10px] font-mono">
                            alex@domain.com
                        </div>
                        <div className="h-8 rounded-lg bg-white/70 border border-purple-200 px-2.5 flex items-center text-gray-800 text-[10px] tracking-widest font-mono">
                            ••••••••
                        </div>
                        <div className={`w-full py-2.5 rounded-lg font-bold text-[10px] tracking-widest uppercase flex items-center justify-center gap-1.5 shadow-sm ${
                            step === 1 ? "bg-black text-white" : "bg-purple-600 text-white"
                        }`}>
                            {step === 1 ? <><Loader2 className="w-3 h-3 animate-spin" /><span>VERIFYING...</span></> : <span>LOGIN</span>}
                        </div>
                    </div>
                ) : (
                    <motion.div initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} className="flex flex-col gap-2">
                        <div className="flex items-center justify-between bg-white/80 rounded-xl p-2 border border-purple-200/60 shadow-sm">
                            <div className="flex items-center gap-2">
                                <div className="w-6 h-6 rounded-full bg-purple-600 text-white flex items-center justify-center text-[10px] font-bold">AM</div>
                                <div>
                                    <div className="text-[10px] font-bold text-gray-900 leading-tight">Alex Miller</div>
                                    <div className="text-[7.5px] text-purple-700 font-semibold">Active Session</div>
                                </div>
                            </div>
                            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                        </div>

                        <div className="bg-white/70 rounded-xl p-2 border border-purple-200/60 shadow-sm">
                            <div className="flex items-center justify-between text-[8px] font-bold text-gray-600 mb-1">
                                <span>ORDER #4892</span>
                                <span className="text-emerald-600">IN TRANSIT 🚚</span>
                            </div>
                            <div className="w-full bg-purple-100 h-1.5 rounded-full overflow-hidden">
                                <motion.div initial={{ width: "20%" }} animate={{ width: "85%" }} transition={{ duration: 0.8 }} className="h-full bg-purple-600 rounded-full" />
                            </div>
                        </div>

                        <div className="h-6 bg-white/80 rounded-lg px-2 flex items-center justify-between text-[8px] font-bold text-purple-700">
                            <span className="flex items-center gap-1"><Star className="w-3 h-3 fill-purple-600" />850 Points Earned</span>
                            <span className="text-emerald-600">+50 Today</span>
                        </div>
                    </motion.div>
                )}
            </div>

            <div className="w-full bg-purple-200/60 h-1 rounded-full overflow-hidden">
                <motion.div key={step} initial={{ width: "0%" }} animate={{ width: "100%" }} transition={{ duration: step === 2 ? 4.0 : 2.2, ease: "linear" }} className="h-full bg-purple-600 rounded-full" />
            </div>
        </div>
    );
}

/* =========================================================================
   3. APPOINTMENT / CALENDAR SCHEDULER MOCKUP
   ========================================================================= */
function AppointmentBookingMockup() {
    const [step, setStep] = useState(0);

    useEffect(() => {
        let isMounted = true;
        let timer;
        const loop = () => {
            setStep(0);
            timer = setTimeout(() => {
                if (!isMounted) return;
                setStep(1); // slot selected
                timer = setTimeout(() => {
                    if (!isMounted) return;
                    setStep(2); // confirmed
                    timer = setTimeout(() => {
                        if (!isMounted) return;
                        loop();
                    }, 3800);
                }, 1000);
            }, 1200);
        };
        loop();
        return () => { isMounted = false; clearTimeout(timer); };
    }, []);

    return (
        <div className="w-full max-w-[270px] bg-white/30 backdrop-blur-md rounded-2xl p-3.5 border border-white/60 shadow-lg min-h-[220px] flex flex-col justify-between overflow-hidden text-gray-800">
            <div className="flex items-center justify-between pb-2 border-b border-sky-200/60">
                <span className="text-[9px] font-bold text-gray-800 tracking-wider uppercase flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5 text-sky-700" />
                    {step === 2 ? "SLOT CONFIRMED" : "SCHEDULE MEETING"}
                </span>
                <span className={`w-1.5 h-1.5 rounded-full ${step === 2 ? "bg-emerald-500" : "bg-sky-500 animate-pulse"}`} />
            </div>

            <div className="min-h-[145px] flex flex-col justify-center my-1">
                {step < 2 ? (
                    <div className="flex flex-col gap-2">
                        <div className="flex items-center justify-between gap-1">
                            {["M 14", "T 15", "W 16", "T 17", "F 18"].map((d, i) => (
                                <div key={i} className={`flex-1 py-1 rounded-lg text-center text-[8px] font-bold ${
                                    i === 2 ? "bg-sky-600 text-white shadow-sm" : "bg-white/60 text-gray-600"
                                }`}>{d}</div>
                            ))}
                        </div>
                        <div className="grid grid-cols-2 gap-1.5">
                            {["10:00 AM", "02:30 PM", "04:00 PM", "05:30 PM"].map((slot, i) => (
                                <div key={i} className={`py-1.5 px-2 rounded-lg text-center text-[9px] font-medium ${
                                    i === 1 && step >= 1 ? "bg-black text-white font-bold" : "bg-white/70 text-gray-700"
                                }`}>{slot}</div>
                            ))}
                        </div>
                        <div className="w-full py-2.5 rounded-lg font-bold tracking-widest uppercase text-[10px] bg-white text-black text-center shadow-sm">
                            BOOK NOW
                        </div>
                    </div>
                ) : (
                    <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="flex flex-col gap-2">
                        <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-2.5 text-center">
                            <div className="w-6 h-6 mx-auto rounded-full bg-emerald-500 text-white flex items-center justify-center mb-1">
                                <Check className="w-3.5 h-3.5 stroke-[3]" />
                            </div>
                            <div className="text-[11px] font-bold text-emerald-950">Booked Successfully</div>
                            <div className="text-[8px] text-emerald-700">Wed, Oct 16 · 02:30 PM</div>
                        </div>
                        <div className="bg-white/80 border border-sky-200/60 rounded-xl p-2 flex items-center justify-between text-[8px]">
                            <span className="font-bold text-gray-900">Strategy Call</span>
                            <span className="bg-sky-100 text-sky-800 px-1.5 py-0.5 rounded font-bold">CALENDAR SYNCED</span>
                        </div>
                    </motion.div>
                )}
            </div>

            <div className="w-full bg-sky-200/60 h-1 rounded-full overflow-hidden">
                <motion.div key={step} initial={{ width: "0%" }} animate={{ width: "100%" }} transition={{ duration: step === 2 ? 3.8 : 2.2, ease: "linear" }} className="h-full bg-sky-600 rounded-full" />
            </div>
        </div>
    );
}

/* =========================================================================
   4. E-COMMERCE & INVENTORY SYNCHRONISATION MOCKUP
   ========================================================================= */
function EcommerceInventoryMockup({ title, buttonText }) {
    const [synced, setSynced] = useState(false);

    useEffect(() => {
        let isMounted = true;
        let timer;
        const loop = () => {
            setSynced(false);
            timer = setTimeout(() => {
                if (!isMounted) return;
                setSynced(true);
                timer = setTimeout(() => {
                    if (!isMounted) return;
                    loop();
                }, 3800);
            }, 1800);
        };
        loop();
        return () => { isMounted = false; clearTimeout(timer); };
    }, []);

    return (
        <div className="w-full max-w-[270px] bg-white/30 backdrop-blur-md rounded-2xl p-3.5 border border-white/60 shadow-lg min-h-[220px] flex flex-col justify-between overflow-hidden text-gray-800">
            <div className="flex items-center justify-between pb-1.5 border-b border-blue-200/50">
                <span className="text-[9px] font-bold text-gray-800 tracking-wider uppercase flex items-center gap-1">
                    <Box className="w-3.5 h-3.5 text-blue-700" />
                    {title.includes("Warehouse") ? "WAREHOUSE CONTROL" : "INVENTORY SYNC"}
                </span>
                <span className="text-[7.5px] font-bold text-blue-700 bg-blue-100 px-1.5 py-0.5 rounded">
                    {synced ? "100% SYNCED" : "UPDATING"}
                </span>
            </div>

            <div className="flex flex-col gap-2 my-1">
                <div className="bg-white/80 rounded-xl p-2.5 border border-blue-200/60 shadow-sm">
                    <div className="flex items-center justify-between text-[8px] font-semibold text-gray-600 mb-1">
                        <span>Multi-Channel SKU #8941</span>
                        <span className="text-blue-700 font-bold">Bin A-14</span>
                    </div>
                    <div className="flex items-baseline justify-between">
                        <span className="text-[13px] font-bold text-gray-900">1,480 Units</span>
                        <span className={`text-[7.5px] font-bold px-1.5 py-0.5 rounded ${synced ? "bg-emerald-100 text-emerald-700" : "bg-blue-100 text-blue-700"}`}>
                            {synced ? "+250 Restocked ✓" : "Syncing Channels..."}
                        </span>
                    </div>

                    <div className="w-full bg-blue-100 h-1.5 rounded-full overflow-hidden mt-2">
                        <motion.div 
                            initial={{ width: "30%" }} 
                            animate={{ width: synced ? "98%" : "55%" }} 
                            transition={{ duration: 0.8 }} 
                            className="h-full bg-blue-600 rounded-full" 
                        />
                    </div>
                </div>

                <div className="grid grid-cols-3 gap-1 text-[7.5px] font-bold text-center">
                    <div className="bg-white/70 py-1 rounded border border-blue-100">Shopify: 620</div>
                    <div className="bg-white/70 py-1 rounded border border-blue-100">Amazon: 540</div>
                    <div className="bg-white/70 py-1 rounded border border-blue-100">POS: 320</div>
                </div>

                <div className={`w-full py-2 rounded-lg font-bold tracking-widest uppercase text-[10px] text-center shadow-sm transition-all ${
                    synced ? "bg-emerald-600 text-white" : "bg-black text-white"
                }`}>
                    {synced ? "INVENTORY UP TO DATE ✓" : buttonText}
                </div>
            </div>

            <div className="w-full bg-blue-200/60 h-1 rounded-full overflow-hidden">
                <motion.div key={synced ? "s1" : "s2"} initial={{ width: "0%" }} animate={{ width: "100%" }} transition={{ duration: synced ? 3.8 : 1.8, ease: "linear" }} className="h-full bg-blue-600 rounded-full" />
            </div>
        </div>
    );
}

/* =========================================================================
   5. UI / UX DESIGN (FIGMA, TOKENS, AUTO-LAYOUT) MOCKUP
   ========================================================================= */
function UiUxDesignMockup({ title, buttonText }) {
    const [activeTab, setActiveTab] = useState(0);

    useEffect(() => {
        let isMounted = true;
        const interval = setInterval(() => {
            if (!isMounted) return;
            setActiveTab(prev => (prev + 1) % 3);
        }, 2200);
        return () => { isMounted = false; clearInterval(interval); };
    }, []);

    return (
        <div className="w-full max-w-[270px] bg-white/30 backdrop-blur-md rounded-2xl p-3.5 border border-white/60 shadow-lg min-h-[220px] flex flex-col justify-between overflow-hidden text-gray-800">
            <div className="flex items-center justify-between pb-1.5 border-b border-indigo-200/50">
                <span className="text-[9px] font-bold text-gray-800 tracking-wider uppercase flex items-center gap-1">
                    <Layers className="w-3.5 h-3.5 text-indigo-700" />
                    DESIGN SYSTEM
                </span>
                <span className="text-[7.5px] font-bold text-indigo-700 bg-indigo-100 px-1.5 py-0.5 rounded">
                    FIGMA SPEC
                </span>
            </div>

            <div className="flex flex-col gap-2 my-1">
                {/* Simulated Component Variant / Token Selector */}
                <div className="flex items-center justify-between bg-white/80 p-1 rounded-lg border border-indigo-100 text-[8px] font-bold text-center">
                    {["Primary", "Ghost", "Outline"].map((tab, i) => (
                        <div key={i} className={`flex-1 py-1 rounded transition-all ${
                            activeTab === i ? "bg-indigo-600 text-white shadow-xs" : "text-gray-600"
                        }`}>{tab}</div>
                    ))}
                </div>

                {/* Live Spec Preview Box */}
                <div className="bg-white/80 rounded-xl p-2.5 border border-indigo-200/60 shadow-sm flex flex-col gap-1.5">
                    <div className="flex items-center justify-between text-[8px]">
                        <span className="text-gray-500 font-mono">auto-layout: flex</span>
                        <span className="bg-emerald-100 text-emerald-700 px-1 py-0.5 rounded font-bold">16px gap</span>
                    </div>

                    <div className="flex items-center gap-1.5 mt-0.5">
                        <div className="w-4 h-4 rounded-full bg-[#4464DD] shadow-xs" />
                        <div className="w-4 h-4 rounded-full bg-[#BC44DD] shadow-xs" />
                        <div className="w-4 h-4 rounded-full bg-[#008EDF] shadow-xs" />
                        <span className="text-[8px] font-mono text-gray-700 ml-1">#4464DD (Brand)</span>
                    </div>
                </div>

                <div className="w-full py-2 rounded-lg font-bold tracking-widest uppercase text-[10px] bg-black text-white text-center shadow-sm">
                    {buttonText || "INSPECT SPECS"}
                </div>
            </div>

            <div className="w-full bg-indigo-200/60 h-1 rounded-full overflow-hidden">
                <motion.div key={activeTab} initial={{ width: "0%" }} animate={{ width: "100%" }} transition={{ duration: 2.2, ease: "linear" }} className="h-full bg-indigo-600 rounded-full" />
            </div>
        </div>
    );
}

/* =========================================================================
   6. DIGITAL MARKETING & SEO FOUNDATIONS MOCKUP
   ========================================================================= */
function DigitalMarketingMockup({ title, buttonText }) {
    const [score, setScore] = useState(70);

    useEffect(() => {
        let isMounted = true;
        let timer;
        const loop = () => {
            setScore(70);
            timer = setTimeout(() => {
                if (!isMounted) return;
                setScore(99);
                timer = setTimeout(() => {
                    if (!isMounted) return;
                    loop();
                }, 3800);
            }, 1500);
        };
        loop();
        return () => { isMounted = false; clearTimeout(timer); };
    }, []);

    return (
        <div className="w-full max-w-[270px] bg-white/30 backdrop-blur-md rounded-2xl p-3.5 border border-white/60 shadow-lg min-h-[220px] flex flex-col justify-between overflow-hidden text-gray-800">
            <div className="flex items-center justify-between pb-1.5 border-b border-emerald-200/50">
                <span className="text-[9px] font-bold text-gray-800 tracking-wider uppercase flex items-center gap-1">
                    <TrendingUp className="w-3.5 h-3.5 text-emerald-700" />
                    GROWTH METRICS
                </span>
                <span className="text-[7.5px] font-bold text-emerald-800 bg-emerald-100 px-1.5 py-0.5 rounded">
                    LIGHTHOUSE 100
                </span>
            </div>

            <div className="flex flex-col gap-2 my-1">
                <div className="bg-white/80 rounded-xl p-2.5 border border-emerald-200/60 shadow-sm">
                    <div className="flex items-center justify-between">
                        <div>
                            <div className="text-[8px] text-gray-500 font-semibold uppercase">SEO Performance</div>
                            <div className="text-[13px] font-bold text-gray-900 mt-0.5">Top #1 Rank</div>
                        </div>
                        <div className="w-9 h-9 rounded-full border-2 border-emerald-500 flex items-center justify-center font-bold text-[11px] text-emerald-700 shadow-xs">
                            {score}
                        </div>
                    </div>

                    <div className="grid grid-cols-2 gap-1.5 mt-2 text-[7.5px] font-semibold text-gray-600">
                        <div className="bg-emerald-50/80 p-1 rounded flex items-center justify-between">
                            <span>ROAS:</span>
                            <span className="text-emerald-700 font-bold">4.8x</span>
                        </div>
                        <div className="bg-emerald-50/80 p-1 rounded flex items-center justify-between">
                            <span>CTR:</span>
                            <span className="text-emerald-700 font-bold">+18.4%</span>
                        </div>
                    </div>
                </div>

                <div className="w-full py-2 rounded-lg font-bold tracking-widest uppercase text-[10px] bg-emerald-700 text-white text-center shadow-sm">
                    {buttonText || "OPTIMISE"}
                </div>
            </div>

            <div className="w-full bg-emerald-200/60 h-1 rounded-full overflow-hidden">
                <motion.div key={score} initial={{ width: "0%" }} animate={{ width: "100%" }} transition={{ duration: score === 99 ? 3.8 : 1.5, ease: "linear" }} className="h-full bg-emerald-600 rounded-full" />
            </div>
        </div>
    );
}

/* =========================================================================
   7. DEDICATED CUSTOM MOBILE DEVELOPMENT MOCKUPS (MATCHING HEADERS)
   ========================================================================= */

// 7.1 FEATURE ENHANCEMENTS MOCKUP
function FeatureEnhancementsMockup({ buttonText }: { buttonText?: string }) {
    const [step, setStep] = useState(0);
    const [toggles, setToggles] = useState({ aiSearch: false, offline: false });

    useEffect(() => {
        let isMounted = true;
        let timer: NodeJS.Timeout;

        const loop = () => {
            setStep(0);
            setToggles({ aiSearch: false, offline: false });

            timer = setTimeout(() => {
                if (!isMounted) return;
                setToggles({ aiSearch: true, offline: false });

                timer = setTimeout(() => {
                    if (!isMounted) return;
                    setToggles({ aiSearch: true, offline: true });

                    timer = setTimeout(() => {
                        if (!isMounted) return;
                        setStep(1); // compiling flags

                        timer = setTimeout(() => {
                            if (!isMounted) return;
                            setStep(2); // complete rollout

                            timer = setTimeout(() => {
                                if (!isMounted) return;
                                loop();
                            }, 3800);
                        }, 900);
                    }, 800);
                }, 700);
            }, 600);
        };

        loop();
        return () => { isMounted = false; clearTimeout(timer); };
    }, []);

    return (
        <div className="w-full max-w-[270px] bg-white/30 backdrop-blur-md rounded-2xl p-3.5 border border-white/60 shadow-lg min-h-[220px] flex flex-col justify-between overflow-hidden text-gray-800">
            <div className="flex items-center justify-between pb-1.5 border-b border-indigo-200/50">
                <span className="text-[9px] font-bold text-gray-800 tracking-wider uppercase flex items-center gap-1.5">
                    <Sliders className="w-3.5 h-3.5 text-indigo-700" />
                    FEATURE LABS
                </span>
                <span className="text-[7.5px] font-bold text-indigo-700 bg-indigo-100/90 px-1.5 py-0.5 rounded flex items-center gap-1">
                    <span className={`w-1.5 h-1.5 rounded-full ${step === 2 ? 'bg-emerald-500 animate-pulse' : 'bg-indigo-600'}`} />
                    {step === 2 ? "100% COHORT" : "A/B FLAGS"}
                </span>
            </div>

            <div className="min-h-[145px] flex flex-col justify-center my-1">
                <AnimatePresence mode="wait">
                    {step < 2 ? (
                        <motion.div key="flags" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0, scale: 0.95 }} className="flex flex-col gap-2">
                            <div className="bg-white/80 rounded-xl px-2.5 py-1.5 border border-indigo-100/80 shadow-xs flex items-center justify-between">
                                <div className="flex items-center gap-1.5">
                                    <Sparkles className="w-3 h-3 text-indigo-600 shrink-0" />
                                    <span className="text-[9px] font-bold text-gray-800">AI Smart Search</span>
                                </div>
                                <div className={`w-7 h-4 rounded-full p-0.5 transition-colors duration-300 ${toggles.aiSearch ? 'bg-indigo-600' : 'bg-gray-300'}`}>
                                    <div className={`w-3 h-3 rounded-full bg-white transition-transform duration-300 ${toggles.aiSearch ? 'translate-x-3 shadow-xs' : 'translate-x-0'}`} />
                                </div>
                            </div>

                            <div className="bg-white/80 rounded-xl px-2.5 py-1.5 border border-indigo-100/80 shadow-xs flex items-center justify-between">
                                <div className="flex items-center gap-1.5">
                                    <Zap className="w-3 h-3 text-amber-500 shrink-0" />
                                    <span className="text-[9px] font-bold text-gray-800">Offline Sync Mode</span>
                                </div>
                                <div className={`w-7 h-4 rounded-full p-0.5 transition-colors duration-300 ${toggles.offline ? 'bg-indigo-600' : 'bg-gray-300'}`}>
                                    <div className={`w-3 h-3 rounded-full bg-white transition-transform duration-300 ${toggles.offline ? 'translate-x-3 shadow-xs' : 'translate-x-0'}`} />
                                </div>
                            </div>

                            <div className={`w-full py-2 rounded-lg font-bold tracking-widest uppercase text-[10px] flex items-center justify-center gap-1.5 shadow-sm transition-all duration-300 ${
                                step === 1 ? 'bg-black text-white' : 'bg-indigo-600 text-white'
                            }`}>
                                {step === 1 ? (
                                    <>
                                        <Loader2 className="w-3 h-3 animate-spin text-white" />
                                        <span>ACTIVATING...</span>
                                    </>
                                ) : (
                                    <span>{buttonText || "ENHANCE"}</span>
                                )}
                            </div>
                        </motion.div>
                    ) : (
                        <motion.div key="rolled" initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0 }} className="bg-white/85 border border-emerald-200 rounded-xl p-3 flex flex-col justify-between shadow-sm">
                            <div className="flex items-center justify-between mb-1.5">
                                <div className="flex items-center gap-1.5">
                                    <div className="w-6 h-6 rounded-full bg-emerald-500 text-white flex items-center justify-center shadow-xs">
                                        <Check className="w-3.5 h-3.5 stroke-[3]" />
                                    </div>
                                    <div>
                                        <div className="text-[10.5px] font-bold text-gray-900 leading-tight">Features Deployed</div>
                                        <div className="text-[7.5px] text-emerald-700 font-semibold">Release v2.5.0 Live</div>
                                    </div>
                                </div>
                                <span className="text-[7.5px] bg-emerald-100 text-emerald-800 px-1.5 py-0.5 rounded font-bold">100% ROLLOUT</span>
                            </div>

                            <div className="space-y-1 text-[8px] text-gray-600 bg-white/70 rounded-lg p-1.5 border border-emerald-100">
                                <div className="flex items-center justify-between">
                                    <span>Active Features</span>
                                    <span className="font-bold text-gray-900">+2 New Modules</span>
                                </div>
                                <div className="flex items-center justify-between">
                                    <span>User Adoption</span>
                                    <span className="font-bold text-emerald-600">42,800 Users</span>
                                </div>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>

            <div className="w-full bg-indigo-200/60 h-1 rounded-full overflow-hidden">
                <motion.div key={step === 2 ? "e2" : "e1"} initial={{ width: "0%" }} animate={{ width: "100%" }} transition={{ duration: step === 2 ? 3.8 : 2.4, ease: "linear" }} className="h-full bg-indigo-600 rounded-full" />
            </div>
        </div>
    );
}

// 7.2 BUG FIXES MOCKUP
function BugFixesMockup({ buttonText }: { buttonText?: string }) {
    const [step, setStep] = useState(0);

    useEffect(() => {
        let isMounted = true;
        let timer: NodeJS.Timeout;

        const loop = () => {
            setStep(0);

            timer = setTimeout(() => {
                if (!isMounted) return;
                setStep(1); // patching

                timer = setTimeout(() => {
                    if (!isMounted) return;
                    setStep(2); // 0 crashes

                    timer = setTimeout(() => {
                        if (!isMounted) return;
                        loop();
                    }, 3800);
                }, 1000);
            }, 1400);
        };

        loop();
        return () => { isMounted = false; clearTimeout(timer); };
    }, []);

    return (
        <div className="w-full max-w-[270px] bg-white/30 backdrop-blur-md rounded-2xl p-3.5 border border-white/60 shadow-lg min-h-[220px] flex flex-col justify-between overflow-hidden text-gray-800">
            <div className="flex items-center justify-between pb-1.5 border-b border-rose-200/50">
                <span className="text-[9px] font-bold text-gray-800 tracking-wider uppercase flex items-center gap-1.5">
                    <Bug className="w-3.5 h-3.5 text-rose-600" />
                    CRASH RESOLVER
                </span>
                <span className={`text-[7.5px] font-bold px-1.5 py-0.5 rounded flex items-center gap-1 ${
                    step === 2 ? "bg-emerald-100 text-emerald-800" : "bg-rose-100 text-rose-800"
                }`}>
                    <span className={`w-1.5 h-1.5 rounded-full ${step === 2 ? "bg-emerald-500" : "bg-rose-500 animate-pulse"}`} />
                    {step === 2 ? "ZERO CRASHES" : "2 EXCEPTIONS"}
                </span>
            </div>

            <div className="min-h-[145px] flex flex-col justify-center my-1">
                <AnimatePresence mode="wait">
                    {step < 2 ? (
                        <motion.div key="issues" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0, scale: 0.95 }} className="flex flex-col gap-2">
                            <div className="bg-white/80 rounded-xl p-2 border border-rose-100 shadow-xs flex flex-col gap-1">
                                <div className="flex items-center justify-between text-[8px] font-bold text-rose-600">
                                    <span className="truncate">EXC_BAD_ACCESS CartView</span>
                                    <span className="bg-rose-100 px-1 py-0.2 rounded font-mono">HIGH</span>
                                </div>
                                <div className="w-full bg-rose-100 h-1 rounded-full overflow-hidden">
                                    <div className="h-full bg-rose-500 w-3/4 rounded-full" />
                                </div>
                            </div>

                            <div className="bg-white/80 rounded-xl p-2 border border-amber-100 shadow-xs flex flex-col gap-1">
                                <div className="flex items-center justify-between text-[8px] font-bold text-amber-600">
                                    <span className="truncate">Memory leak NativeBridge</span>
                                    <span className="bg-amber-100 px-1 py-0.2 rounded font-mono">MED</span>
                                </div>
                                <div className="w-full bg-amber-100 h-1 rounded-full overflow-hidden">
                                    <div className="h-full bg-amber-500 w-1/2 rounded-full" />
                                </div>
                            </div>

                            <div className={`w-full py-2 rounded-lg font-bold tracking-widest uppercase text-[10px] flex items-center justify-center gap-1.5 shadow-sm transition-all duration-300 ${
                                step === 1 ? 'bg-black text-white' : 'bg-rose-600 text-white'
                            }`}>
                                {step === 1 ? (
                                    <>
                                        <Loader2 className="w-3 h-3 animate-spin text-white" />
                                        <span>PATCHING...</span>
                                    </>
                                ) : (
                                    <span>{buttonText || "RESOLVE"}</span>
                                )}
                            </div>
                        </motion.div>
                    ) : (
                        <motion.div key="resolved" initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0 }} className="bg-white/85 border border-emerald-200 rounded-xl p-3 flex flex-col justify-between shadow-sm">
                            <div className="flex items-center gap-2 mb-2">
                                <div className="w-7 h-7 rounded-full bg-emerald-500 text-white flex items-center justify-center shadow-xs">
                                    <CheckCircle2 className="w-4 h-4 stroke-[2.5]" />
                                </div>
                                <div>
                                    <div className="text-[11px] font-bold text-gray-900 leading-tight">All Issues Resolved</div>
                                    <div className="text-[8px] text-emerald-700 font-semibold">99.98% Crash-Free Sessions</div>
                                </div>
                            </div>

                            <div className="bg-emerald-50/90 border border-emerald-200/80 rounded-lg p-1.5 flex items-center justify-between text-[8px] text-emerald-900 font-mono">
                                <span>HOTFIX #242</span>
                                <span className="font-bold uppercase text-emerald-700">OTA DEPLOYED ✓</span>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>

            <div className="w-full bg-rose-200/60 h-1 rounded-full overflow-hidden">
                <motion.div key={step === 2 ? "b2" : "b1"} initial={{ width: "0%" }} animate={{ width: "100%" }} transition={{ duration: step === 2 ? 3.8 : 2.4, ease: "linear" }} className="h-full bg-rose-600 rounded-full" />
            </div>
        </div>
    );
}

// 7.3 PERFORMANCE IMPROVEMENTS MOCKUP
function PerformanceImprovementsMockup({ buttonText }: { buttonText?: string }) {
    const [step, setStep] = useState(0);

    useEffect(() => {
        let isMounted = true;
        let timer: NodeJS.Timeout;

        const loop = () => {
            setStep(0);

            timer = setTimeout(() => {
                if (!isMounted) return;
                setStep(1); // tuning

                timer = setTimeout(() => {
                    if (!isMounted) return;
                    setStep(2); // 60 fps optimized

                    timer = setTimeout(() => {
                        if (!isMounted) return;
                        loop();
                    }, 3800);
                }, 1000);
            }, 1400);
        };

        loop();
        return () => { isMounted = false; clearTimeout(timer); };
    }, []);

    return (
        <div className="w-full max-w-[270px] bg-white/30 backdrop-blur-md rounded-2xl p-3.5 border border-white/60 shadow-lg min-h-[220px] flex flex-col justify-between overflow-hidden text-gray-800">
            <div className="flex items-center justify-between pb-1.5 border-b border-sky-200/50">
                <span className="text-[9px] font-bold text-gray-800 tracking-wider uppercase flex items-center gap-1.5">
                    <Gauge className="w-3.5 h-3.5 text-sky-700" />
                    ENGINE BENCHMARK
                </span>
                <span className={`text-[7.5px] font-bold px-1.5 py-0.5 rounded flex items-center gap-1 ${
                    step === 2 ? "bg-emerald-100 text-emerald-800" : "bg-sky-100 text-sky-800"
                }`}>
                    {step === 2 ? "60 FPS LOCKED" : "PROFILING"}
                </span>
            </div>

            <div className="min-h-[145px] flex flex-col justify-center my-1">
                <div className="bg-white/80 rounded-xl p-2.5 border border-sky-100 shadow-sm flex flex-col gap-2">
                    <div className="grid grid-cols-3 gap-1.5 text-center">
                        <div className="bg-sky-50/80 p-1.5 rounded-lg border border-sky-100">
                            <span className="text-[7.5px] text-gray-500 font-bold block uppercase">FPS</span>
                            <span className={`text-[12px] font-black transition-colors ${step === 2 ? "text-emerald-600" : "text-amber-600"}`}>
                                {step === 2 ? "60" : "42"}
                            </span>
                        </div>
                        <div className="bg-sky-50/80 p-1.5 rounded-lg border border-sky-100">
                            <span className="text-[7.5px] text-gray-500 font-bold block uppercase">Launch</span>
                            <span className={`text-[12px] font-black transition-colors ${step === 2 ? "text-emerald-600" : "text-gray-900"}`}>
                                {step === 2 ? "0.38s" : "2.4s"}
                            </span>
                        </div>
                        <div className="bg-sky-50/80 p-1.5 rounded-lg border border-sky-100">
                            <span className="text-[7.5px] text-gray-500 font-bold block uppercase">RAM</span>
                            <span className={`text-[12px] font-black transition-colors ${step === 2 ? "text-emerald-600" : "text-gray-900"}`}>
                                {step === 2 ? "92MB" : "310MB"}
                            </span>
                        </div>
                    </div>

                    <div className="flex items-center justify-between text-[8px] font-medium text-gray-600">
                        <span>Hermes Bytecode JIT</span>
                        <span className="text-emerald-600 font-bold">{step === 2 ? "OPTIMAL ✓" : "WARMING UP"}</span>
                    </div>

                    <div className="w-full bg-sky-100 h-1.5 rounded-full overflow-hidden">
                        <motion.div
                            initial={{ width: "40%" }}
                            animate={{ width: step === 2 ? "100%" : step === 1 ? "75%" : "40%" }}
                            transition={{ duration: 0.8 }}
                            className={`h-full rounded-full ${step === 2 ? "bg-emerald-500" : "bg-sky-600"}`}
                        />
                    </div>
                </div>

                <div className={`w-full py-2 rounded-lg font-bold tracking-widest uppercase text-[10px] mt-2 flex items-center justify-center gap-1.5 shadow-sm transition-all duration-300 ${
                    step === 2 ? "bg-emerald-600 text-white" : step === 1 ? "bg-black text-white" : "bg-sky-600 text-white"
                }`}>
                    {step === 1 ? (
                        <>
                            <Loader2 className="w-3 h-3 animate-spin text-white" />
                            <span>TUNING ENGINE...</span>
                        </>
                    ) : step === 2 ? (
                        <span>60 FPS OPTIMIZED ✓</span>
                    ) : (
                        <span>{buttonText || "OPTIMIZE"}</span>
                    )}
                </div>
            </div>

            <div className="w-full bg-sky-200/60 h-1 rounded-full overflow-hidden">
                <motion.div key={step === 2 ? "p2" : "p1"} initial={{ width: "0%" }} animate={{ width: "100%" }} transition={{ duration: step === 2 ? 3.8 : 2.4, ease: "linear" }} className="h-full bg-sky-600 rounded-full" />
            </div>
        </div>
    );
}

// 7.4 OS COMPATIBILITY UPDATES MOCKUP
function OsCompatibilityMockup({ buttonText }: { buttonText?: string }) {
    const [step, setStep] = useState(0);

    useEffect(() => {
        let isMounted = true;
        let timer: NodeJS.Timeout;

        const loop = () => {
            setStep(0);

            timer = setTimeout(() => {
                if (!isMounted) return;
                setStep(1); // verifying

                timer = setTimeout(() => {
                    if (!isMounted) return;
                    setStep(2); // pass

                    timer = setTimeout(() => {
                        if (!isMounted) return;
                        loop();
                    }, 3800);
                }, 1000);
            }, 1400);
        };

        loop();
        return () => { isMounted = false; clearTimeout(timer); };
    }, []);

    return (
        <div className="w-full max-w-[270px] bg-white/30 backdrop-blur-md rounded-2xl p-3.5 border border-white/60 shadow-lg min-h-[220px] flex flex-col justify-between overflow-hidden text-gray-800">
            <div className="flex items-center justify-between pb-1.5 border-b border-indigo-200/50">
                <span className="text-[9px] font-bold text-gray-800 tracking-wider uppercase flex items-center gap-1.5">
                    <Smartphone className="w-3.5 h-3.5 text-indigo-700" />
                    OS COMPATIBILITY
                </span>
                <span className={`text-[7.5px] font-bold px-1.5 py-0.5 rounded flex items-center gap-1 ${
                    step === 2 ? "bg-emerald-100 text-emerald-800" : "bg-indigo-100 text-indigo-800"
                }`}>
                    {step === 2 ? "100% PASS" : "MATRIX RUN"}
                </span>
            </div>

            <div className="min-h-[145px] flex flex-col justify-center my-1">
                <div className="flex flex-col gap-2">
                    <div className="bg-white/80 rounded-xl p-2 border border-indigo-100 shadow-xs flex items-center justify-between">
                        <div className="flex items-center gap-2">
                            <div className="w-5 h-5 rounded-md bg-black text-white flex items-center justify-center text-[10px] font-bold">🍎</div>
                            <div>
                                <div className="text-[9.5px] font-bold text-gray-900 leading-tight">iOS 18 (Swift 6)</div>
                                <div className="text-[7.5px] text-gray-500">Liquid Retina & Dynamic Island</div>
                            </div>
                        </div>
                        {step === 2 ? (
                            <span className="text-[7.5px] bg-emerald-100 text-emerald-700 font-bold px-1.5 py-0.5 rounded flex items-center gap-0.5">
                                <Check className="w-2.5 h-2.5" /> PASS
                            </span>
                        ) : (
                            <span className="text-[7.5px] bg-gray-100 text-gray-600 font-semibold px-1.5 py-0.5 rounded">SDK 18.0</span>
                        )}
                    </div>

                    <div className="bg-white/80 rounded-xl p-2 border border-indigo-100 shadow-xs flex items-center justify-between">
                        <div className="flex items-center gap-2">
                            <div className="w-5 h-5 rounded-md bg-emerald-600 text-white flex items-center justify-center text-[10px] font-bold">🤖</div>
                            <div>
                                <div className="text-[9.5px] font-bold text-gray-900 leading-tight">Android 15 (SDK 35)</div>
                                <div className="text-[7.5px] text-gray-500">Edge-to-Edge & 120Hz ProMotion</div>
                            </div>
                        </div>
                        {step === 2 ? (
                            <span className="text-[7.5px] bg-emerald-100 text-emerald-700 font-bold px-1.5 py-0.5 rounded flex items-center gap-0.5">
                                <Check className="w-2.5 h-2.5" /> PASS
                            </span>
                        ) : (
                            <span className="text-[7.5px] bg-gray-100 text-gray-600 font-semibold px-1.5 py-0.5 rounded">API 35</span>
                        )}
                    </div>

                    <div className={`w-full py-2 rounded-lg font-bold tracking-widest uppercase text-[10px] flex items-center justify-center gap-1.5 shadow-sm transition-all duration-300 ${
                        step === 2 ? "bg-emerald-600 text-white" : step === 1 ? "bg-black text-white" : "bg-indigo-600 text-white"
                    }`}>
                        {step === 1 ? (
                            <>
                                <Loader2 className="w-3 h-3 animate-spin text-white" />
                                <span>TESTING SUITE...</span>
                            </>
                        ) : step === 2 ? (
                            <span>OS 18 & 15 READY ✓</span>
                        ) : (
                            <span>{buttonText || "UPDATE"}</span>
                        )}
                    </div>
                </div>
            </div>

            <div className="w-full bg-indigo-200/60 h-1 rounded-full overflow-hidden">
                <motion.div key={step === 2 ? "os2" : "os1"} initial={{ width: "0%" }} animate={{ width: "100%" }} transition={{ duration: step === 2 ? 3.8 : 2.4, ease: "linear" }} className="h-full bg-indigo-600 rounded-full" />
            </div>
        </div>
    );
}

// 7.5 SECURITY UPDATES MOCKUP
function SecurityUpdatesMockup({ buttonText }: { buttonText?: string }) {
    const [step, setStep] = useState(0);

    useEffect(() => {
        let isMounted = true;
        let timer: NodeJS.Timeout;

        const loop = () => {
            setStep(0);

            timer = setTimeout(() => {
                if (!isMounted) return;
                setStep(1); // encrypting

                timer = setTimeout(() => {
                    if (!isMounted) return;
                    setStep(2); // secured

                    timer = setTimeout(() => {
                        if (!isMounted) return;
                        loop();
                    }, 3800);
                }, 1000);
            }, 1400);
        };

        loop();
        return () => { isMounted = false; clearTimeout(timer); };
    }, []);

    return (
        <div className="w-full max-w-[270px] bg-white/30 backdrop-blur-md rounded-2xl p-3.5 border border-white/60 shadow-lg min-h-[220px] flex flex-col justify-between overflow-hidden text-gray-800">
            <div className="flex items-center justify-between pb-1.5 border-b border-red-200/50">
                <span className="text-[9px] font-bold text-gray-800 tracking-wider uppercase flex items-center gap-1.5">
                    <ShieldCheck className="w-3.5 h-3.5 text-red-700" />
                    SECURITY SHIELD
                </span>
                <span className={`text-[7.5px] font-bold px-1.5 py-0.5 rounded flex items-center gap-1 ${
                    step === 2 ? "bg-emerald-100 text-emerald-800" : "bg-red-100 text-red-800"
                }`}>
                    {step === 2 ? "ZERO THREATS" : "SCANNING"}
                </span>
            </div>

            <div className="min-h-[145px] flex flex-col justify-center my-1">
                <div className="bg-white/80 rounded-xl p-2.5 border border-red-100 shadow-sm flex flex-col gap-1.5">
                    <div className="flex items-center justify-between text-[8px]">
                        <span className="font-semibold text-gray-700 flex items-center gap-1">
                            <Lock className="w-2.5 h-2.5 text-red-600" />
                            Biometric Keychain
                        </span>
                        <span className="font-mono text-emerald-700 font-bold">AES-256 GCM</span>
                    </div>

                    <div className="flex items-center justify-between text-[8px]">
                        <span className="font-semibold text-gray-700 flex items-center gap-1">
                            <ShieldAlert className="w-2.5 h-2.5 text-amber-500" />
                            Anti-Jailbreak Guard
                        </span>
                        <span className="font-mono text-emerald-700 font-bold">ACTIVE</span>
                    </div>

                    <div className="flex items-center justify-between text-[8px]">
                        <span className="font-semibold text-gray-700 flex items-center gap-1">
                            <CheckCircle2 className="w-2.5 h-2.5 text-emerald-600" />
                            OWASP Mobile Standard
                        </span>
                        <span className="font-mono text-emerald-700 font-bold">PASS 100%</span>
                    </div>

                    <div className="w-full bg-red-100 h-1.5 rounded-full overflow-hidden mt-0.5">
                        <motion.div
                            initial={{ width: "30%" }}
                            animate={{ width: step === 2 ? "100%" : step === 1 ? "70%" : "30%" }}
                            transition={{ duration: 0.8 }}
                            className={`h-full rounded-full ${step === 2 ? "bg-emerald-500" : "bg-red-600"}`}
                        />
                    </div>
                </div>

                <div className={`w-full py-2 rounded-lg font-bold tracking-widest uppercase text-[10px] mt-2 flex items-center justify-center gap-1.5 shadow-sm transition-all duration-300 ${
                    step === 2 ? "bg-emerald-600 text-white" : step === 1 ? "bg-black text-white" : "bg-red-700 text-white"
                }`}>
                    {step === 1 ? (
                        <>
                            <Loader2 className="w-3 h-3 animate-spin text-white" />
                            <span>ENCRYPTING...</span>
                        </>
                    ) : step === 2 ? (
                        <span>SHIELD VERIFIED ✓</span>
                    ) : (
                        <span>{buttonText || "SECURE"}</span>
                    )}
                </div>
            </div>

            <div className="w-full bg-red-200/60 h-1 rounded-full overflow-hidden">
                <motion.div key={step === 2 ? "sec2" : "sec1"} initial={{ width: "0%" }} animate={{ width: "100%" }} transition={{ duration: step === 2 ? 3.8 : 2.4, ease: "linear" }} className="h-full bg-red-600 rounded-full" />
            </div>
        </div>
    );
}

// 7.6 MOBILE ANALYTICS & MONITORING MOCKUP
function MobileAnalyticsMockup({ buttonText }: { buttonText?: string }) {
    const [barHeights, setBarHeights] = useState([40, 70, 55, 90, 65, 95, 80]);

    useEffect(() => {
        let isMounted = true;
        const interval = setInterval(() => {
            if (!isMounted) return;
            setBarHeights([
                Math.floor(Math.random() * 40) + 40,
                Math.floor(Math.random() * 30) + 65,
                Math.floor(Math.random() * 40) + 50,
                Math.floor(Math.random() * 20) + 80,
                Math.floor(Math.random() * 30) + 60,
                Math.floor(Math.random() * 20) + 80,
                Math.floor(Math.random() * 30) + 70,
            ]);
        }, 1600);

        return () => { isMounted = false; clearInterval(interval); };
    }, []);

    return (
        <div className="w-full max-w-[270px] bg-white/30 backdrop-blur-md rounded-2xl p-3.5 border border-white/60 shadow-lg min-h-[220px] flex flex-col justify-between overflow-hidden text-gray-800">
            <div className="flex items-center justify-between pb-1.5 border-b border-sky-200/50">
                <span className="text-[9px] font-bold text-gray-800 tracking-wider uppercase flex items-center gap-1.5">
                    <Activity className="w-3.5 h-3.5 text-sky-700" />
                    MOBILE TELEMETRY
                </span>
                <span className="text-[7.5px] font-bold text-emerald-800 bg-emerald-100 px-1.5 py-0.5 rounded flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping" />
                    LIVE STREAM
                </span>
            </div>

            <div className="min-h-[145px] flex flex-col justify-center my-1">
                <div className="bg-white/80 rounded-xl p-2.5 border border-sky-100 shadow-sm flex flex-col gap-2">
                    <div className="flex items-baseline justify-between">
                        <div>
                            <span className="text-[7.5px] text-gray-500 font-bold uppercase block">Active Mobile Users</span>
                            <span className="text-[14px] font-black text-gray-900 tracking-tight">42,850</span>
                        </div>
                        <span className="text-[8px] font-bold text-emerald-700 bg-emerald-100/90 px-1.5 py-0.5 rounded">+19.4% DAU</span>
                    </div>

                    <div className="h-9 flex items-end justify-between gap-1 px-1 bg-sky-50/60 rounded-lg p-1">
                        {barHeights.map((h, i) => (
                            <motion.div
                                key={i}
                                animate={{ height: `${h}%` }}
                                transition={{ duration: 0.6, ease: "easeInOut" }}
                                className={`flex-1 rounded-t-sm ${i === 5 ? "bg-sky-600 shadow-xs" : "bg-sky-400/80"}`}
                            />
                        ))}
                    </div>

                    <div className="flex items-center justify-between text-[7.5px] text-gray-600 font-medium">
                        <span>Crash-Free: <b className="text-emerald-700">99.96%</b></span>
                        <span>D30 Retention: <b className="text-sky-700">68.2%</b></span>
                    </div>
                </div>

                <div className="w-full py-2 rounded-lg font-bold tracking-widest uppercase text-[10px] bg-sky-700 text-white text-center shadow-sm mt-2">
                    {buttonText || "MONITOR"}
                </div>
            </div>

            <div className="w-full bg-sky-200/60 h-1 rounded-full overflow-hidden">
                <motion.div initial={{ width: "0%" }} animate={{ width: "100%" }} transition={{ duration: 3.5, repeat: Infinity, ease: "linear" }} className="h-full bg-sky-600 rounded-full" />
            </div>
        </div>
    );
}

// 7.7 USER FEEDBACK IMPROVEMENTS MOCKUP
function UserFeedbackImprovementsMockup({ buttonText }: { buttonText?: string }) {
    const [step, setStep] = useState(0);

    useEffect(() => {
        let isMounted = true;
        let timer: NodeJS.Timeout;

        const loop = () => {
            setStep(0);

            timer = setTimeout(() => {
                if (!isMounted) return;
                setStep(1); // processing feedback

                timer = setTimeout(() => {
                    if (!isMounted) return;
                    setStep(2); // 4.9 stars

                    timer = setTimeout(() => {
                        if (!isMounted) return;
                        loop();
                    }, 3800);
                }, 1000);
            }, 1400);
        };

        loop();
        return () => { isMounted = false; clearTimeout(timer); };
    }, []);

    return (
        <div className="w-full max-w-[270px] bg-white/30 backdrop-blur-md rounded-2xl p-3.5 border border-white/60 shadow-lg min-h-[220px] flex flex-col justify-between overflow-hidden text-gray-800">
            <div className="flex items-center justify-between pb-1.5 border-b border-purple-200/50">
                <span className="text-[9px] font-bold text-gray-800 tracking-wider uppercase flex items-center gap-1.5">
                    <Star className="w-3.5 h-3.5 text-amber-500 fill-amber-400" />
                    USER FEEDBACK
                </span>
                <span className="text-[7.5px] font-bold text-purple-800 bg-purple-100 px-1.5 py-0.5 rounded flex items-center gap-1">
                    {step === 2 ? "4.9 ★ RATING" : "COMMUNITY VOICES"}
                </span>
            </div>

            <div className="min-h-[145px] flex flex-col justify-center my-1">
                <AnimatePresence mode="wait">
                    {step < 2 ? (
                        <motion.div key="feedback" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0, scale: 0.95 }} className="flex flex-col gap-2">
                            <div className="bg-white/80 rounded-xl p-2.5 border border-purple-100 shadow-sm flex flex-col gap-1.5">
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center gap-1">
                                        {[1, 2, 3, 4].map(s => (
                                            <Star key={s} className="w-2.5 h-2.5 text-amber-500 fill-amber-400" />
                                        ))}
                                        <Star className="w-2.5 h-2.5 text-gray-300" />
                                    </div>
                                    <span className="text-[8px] font-bold text-purple-700">App Store Sentiment</span>
                                </div>
                                <div className="text-[8.5px] font-medium text-gray-800 bg-purple-50/70 p-1.5 rounded-lg border border-purple-100">
                                    &ldquo;Love the interface, please add instant filter toggles!&rdquo;
                                </div>
                                <div className="flex items-center justify-between text-[7.5px] text-gray-500">
                                    <span>Ticket #418: Backlog</span>
                                    <span className="text-amber-600 font-bold">PRIORITY QUEUE</span>
                                </div>
                            </div>

                            <div className={`w-full py-2 rounded-lg font-bold tracking-widest uppercase text-[10px] flex items-center justify-center gap-1.5 shadow-sm transition-all duration-300 ${
                                step === 1 ? 'bg-black text-white' : 'bg-purple-600 text-white'
                            }`}>
                                {step === 1 ? (
                                    <>
                                        <Loader2 className="w-3 h-3 animate-spin text-white" />
                                        <span>APPLYING FEEDBACK...</span>
                                    </>
                                ) : (
                                    <span>{buttonText || "IMPROVE"}</span>
                                )}
                            </div>
                        </motion.div>
                    ) : (
                        <motion.div key="rating" initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0 }} className="bg-white/85 border border-emerald-200 rounded-xl p-3 flex flex-col justify-between shadow-sm">
                            <div className="flex items-center justify-between mb-1.5">
                                <div className="flex items-center gap-1.5">
                                    <div className="w-7 h-7 rounded-full bg-amber-400 text-amber-950 flex items-center justify-center shadow-xs">
                                        <Award className="w-4 h-4 stroke-[2.5]" />
                                    </div>
                                    <div>
                                        <div className="text-[11px] font-bold text-gray-900 leading-tight">4.9 ★ Satisfaction</div>
                                        <div className="text-[7.5px] text-emerald-700 font-semibold">18,400+ Verified Reviews</div>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-emerald-50 border border-emerald-200/80 rounded-lg p-1.5 space-y-1 text-[8px] text-emerald-950">
                                <div className="flex items-center justify-between">
                                    <span>Shipped Feature</span>
                                    <b className="text-emerald-700">Instant Filters ✓</b>
                                </div>
                                <div className="flex items-center justify-between">
                                    <span>Positive Sentiment</span>
                                    <b className="text-emerald-700">98.4%</b>
                                </div>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>

            <div className="w-full bg-purple-200/60 h-1 rounded-full overflow-hidden">
                <motion.div key={step === 2 ? "uf2" : "uf1"} initial={{ width: "0%" }} animate={{ width: "100%" }} transition={{ duration: step === 2 ? 3.8 : 2.4, ease: "linear" }} className="h-full bg-purple-600 rounded-full" />
            </div>
        </div>
    );
}

// 7.8 NEW MODULE DEVELOPMENT MOCKUP
function NewModuleDevelopmentMockup({ buttonText }: { buttonText?: string }) {
    const [step, setStep] = useState(0);

    useEffect(() => {
        let isMounted = true;
        let timer: NodeJS.Timeout;

        const loop = () => {
            setStep(0);

            timer = setTimeout(() => {
                if (!isMounted) return;
                setStep(1); // compiling

                timer = setTimeout(() => {
                    if (!isMounted) return;
                    setStep(2); // linked

                    timer = setTimeout(() => {
                        if (!isMounted) return;
                        loop();
                    }, 3800);
                }, 1000);
            }, 1400);
        };

        loop();
        return () => { isMounted = false; clearTimeout(timer); };
    }, []);

    return (
        <div className="w-full max-w-[270px] bg-white/30 backdrop-blur-md rounded-2xl p-3.5 border border-white/60 shadow-lg min-h-[220px] flex flex-col justify-between overflow-hidden text-gray-800">
            <div className="flex items-center justify-between pb-1.5 border-b border-blue-200/50">
                <span className="text-[9px] font-bold text-gray-800 tracking-wider uppercase flex items-center gap-1.5">
                    <Box className="w-3.5 h-3.5 text-blue-700" />
                    MODULE BUILDER
                </span>
                <span className={`text-[7.5px] font-bold px-1.5 py-0.5 rounded flex items-center gap-1 ${
                    step === 2 ? "bg-emerald-100 text-emerald-800" : "bg-blue-100 text-blue-800"
                }`}>
                    {step === 2 ? "LINKED ✓" : "SCAFFOLDING"}
                </span>
            </div>

            <div className="min-h-[145px] flex flex-col justify-center my-1">
                <div className="flex flex-col gap-2">
                    <div className="bg-white/80 rounded-xl p-2 border border-blue-100 shadow-xs flex items-center justify-between">
                        <div className="flex items-center gap-1.5">
                            <Cpu className="w-3.5 h-3.5 text-blue-600" />
                            <div>
                                <div className="text-[9px] font-bold text-gray-900 leading-tight">CoreEngine.framework</div>
                                <div className="text-[7.5px] text-gray-500">Base Kernel • Ready</div>
                            </div>
                        </div>
                        <span className="text-[7.5px] bg-emerald-100 text-emerald-700 font-bold px-1.5 py-0.5 rounded">READY</span>
                    </div>

                    <div className="bg-white/80 rounded-xl p-2 border border-blue-100 shadow-xs flex items-center justify-between">
                        <div className="flex items-center gap-1.5">
                            <Layers className="w-3.5 h-3.5 text-indigo-600" />
                            <div>
                                <div className="text-[9px] font-bold text-gray-900 leading-tight">NFC_Payment.bundle</div>
                                <div className="text-[7.5px] text-gray-500">Dynamic Plugin • Zero Overhead</div>
                            </div>
                        </div>
                        <span className={`text-[7.5px] font-bold px-1.5 py-0.5 rounded ${
                            step === 2 ? "bg-emerald-100 text-emerald-700" : "bg-amber-100 text-amber-700"
                        }`}>
                            {step === 2 ? "ACTIVE ✓" : "COMPILING"}
                        </span>
                    </div>

                    <div className={`w-full py-2 rounded-lg font-bold tracking-widest uppercase text-[10px] flex items-center justify-center gap-1.5 shadow-sm transition-all duration-300 ${
                        step === 2 ? "bg-emerald-600 text-white" : step === 1 ? "bg-black text-white" : "bg-blue-600 text-white"
                    }`}>
                        {step === 1 ? (
                            <>
                                <Loader2 className="w-3 h-3 animate-spin text-white" />
                                <span>LINKING BUNDLE...</span>
                            </>
                        ) : step === 2 ? (
                            <span>MODULE BUILT ✓</span>
                        ) : (
                            <span>{buttonText || "BUILD"}</span>
                        )}
                    </div>
                </div>
            </div>

            <div className="w-full bg-blue-200/60 h-1 rounded-full overflow-hidden">
                <motion.div key={step === 2 ? "m2" : "m1"} initial={{ width: "0%" }} animate={{ width: "100%" }} transition={{ duration: step === 2 ? 3.8 : 2.4, ease: "linear" }} className="h-full bg-blue-600 rounded-full" />
            </div>
        </div>
    );
}

// 7.9 STORE UPDATES MOCKUP
function StoreUpdatesMockup({ buttonText }: { buttonText?: string }) {
    const [step, setStep] = useState(0);

    useEffect(() => {
        let isMounted = true;
        let timer: NodeJS.Timeout;

        const loop = () => {
            setStep(0);

            timer = setTimeout(() => {
                if (!isMounted) return;
                setStep(1); // fastlane publishing

                timer = setTimeout(() => {
                    if (!isMounted) return;
                    setStep(2); // live on stores

                    timer = setTimeout(() => {
                        if (!isMounted) return;
                        loop();
                    }, 3800);
                }, 1000);
            }, 1400);
        };

        loop();
        return () => { isMounted = false; clearTimeout(timer); };
    }, []);

    return (
        <div className="w-full max-w-[270px] bg-white/30 backdrop-blur-md rounded-2xl p-3.5 border border-white/60 shadow-lg min-h-[220px] flex flex-col justify-between overflow-hidden text-gray-800">
            <div className="flex items-center justify-between pb-1.5 border-b border-sky-200/50">
                <span className="text-[9px] font-bold text-gray-800 tracking-wider uppercase flex items-center gap-1.5">
                    <UploadCloud className="w-3.5 h-3.5 text-sky-700" />
                    STORE DEPLOYMENT
                </span>
                <span className={`text-[7.5px] font-bold px-1.5 py-0.5 rounded flex items-center gap-1 ${
                    step === 2 ? "bg-emerald-100 text-emerald-800" : "bg-sky-100 text-sky-800"
                }`}>
                    {step === 2 ? "RELEASE LIVE" : "BUILD 384"}
                </span>
            </div>

            <div className="min-h-[145px] flex flex-col justify-center my-1">
                <div className="flex flex-col gap-2">
                    <div className="bg-white/80 rounded-xl p-2 border border-sky-100 shadow-xs flex items-center justify-between">
                        <div className="flex items-center gap-2">
                            <span className="text-[12px]"></span>
                            <div>
                                <div className="text-[9px] font-bold text-gray-900 leading-tight">App Store Connect</div>
                                <div className="text-[7.5px] text-gray-500">iOS · iPadOS · watchOS</div>
                            </div>
                        </div>
                        <span className={`text-[7.5px] font-bold px-1.5 py-0.5 rounded ${
                            step === 2 ? "bg-emerald-100 text-emerald-700" : "bg-sky-100 text-sky-700"
                        }`}>
                            {step === 2 ? "READY FOR SALE ✓" : "IN REVIEW"}
                        </span>
                    </div>

                    <div className="bg-white/80 rounded-xl p-2 border border-sky-100 shadow-xs flex items-center justify-between">
                        <div className="flex items-center gap-2">
                            <span className="text-[12px]">▶</span>
                            <div>
                                <div className="text-[9px] font-bold text-gray-900 leading-tight">Google Play Console</div>
                                <div className="text-[7.5px] text-gray-500">Android 100% Production</div>
                            </div>
                        </div>
                        <span className={`text-[7.5px] font-bold px-1.5 py-0.5 rounded ${
                            step === 2 ? "bg-emerald-100 text-emerald-700" : "bg-sky-100 text-sky-700"
                        }`}>
                            {step === 2 ? "PUBLISHED ✓" : "STAGED"}
                        </span>
                    </div>

                    <div className={`w-full py-2 rounded-lg font-bold tracking-widest uppercase text-[10px] flex items-center justify-center gap-1.5 shadow-sm transition-all duration-300 ${
                        step === 2 ? "bg-emerald-600 text-white" : step === 1 ? "bg-black text-white" : "bg-sky-600 text-white"
                    }`}>
                        {step === 1 ? (
                            <>
                                <Loader2 className="w-3 h-3 animate-spin text-white" />
                                <span>SUBMITTING BINARY...</span>
                            </>
                        ) : step === 2 ? (
                            <span>PUBLISHED TO STORES ✓</span>
                        ) : (
                            <span>{buttonText || "PUBLISH"}</span>
                        )}
                    </div>
                </div>
            </div>

            <div className="w-full bg-sky-200/60 h-1 rounded-full overflow-hidden">
                <motion.div key={step === 2 ? "st2" : "st1"} initial={{ width: "0%" }} animate={{ width: "100%" }} transition={{ duration: step === 2 ? 3.8 : 2.4, ease: "linear" }} className="h-full bg-sky-600 rounded-full" />
            </div>
        </div>
    );
}

// 7.10 LONG-TERM MAINTENANCE MOCKUP
function LongTermMaintenanceMockup({ buttonText }: { buttonText?: string }) {
    const [step, setStep] = useState(0);

    useEffect(() => {
        let isMounted = true;
        let timer: NodeJS.Timeout;

        const loop = () => {
            setStep(0);

            timer = setTimeout(() => {
                if (!isMounted) return;
                setStep(1); // diagnostic scan

                timer = setTimeout(() => {
                    if (!isMounted) return;
                    setStep(2); // optimal

                    timer = setTimeout(() => {
                        if (!isMounted) return;
                        loop();
                    }, 3800);
                }, 1000);
            }, 1400);
        };

        loop();
        return () => { isMounted = false; clearTimeout(timer); };
    }, []);

    return (
        <div className="w-full max-w-[270px] bg-white/30 backdrop-blur-md rounded-2xl p-3.5 border border-white/60 shadow-lg min-h-[220px] flex flex-col justify-between overflow-hidden text-gray-800">
            <div className="flex items-center justify-between pb-1.5 border-b border-indigo-200/50">
                <span className="text-[9px] font-bold text-gray-800 tracking-wider uppercase flex items-center gap-1.5">
                    <HeartPulse className="w-3.5 h-3.5 text-indigo-700" />
                    24/7 SLA & UPTIME
                </span>
                <span className="text-[7.5px] font-bold text-emerald-800 bg-emerald-100 px-1.5 py-0.5 rounded flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                    99.99% UPTIME
                </span>
            </div>

            <div className="min-h-[145px] flex flex-col justify-center my-1">
                <div className="bg-white/80 rounded-xl p-2.5 border border-indigo-100 shadow-sm flex flex-col gap-2">
                    <div className="flex items-center justify-between">
                        <div>
                            <span className="text-[7.5px] text-gray-500 font-bold uppercase block">API Response Ping</span>
                            <span className="text-[13px] font-black text-gray-900 tracking-tight">14ms Global</span>
                        </div>
                        <span className="text-[8px] font-bold text-emerald-700 bg-emerald-100/90 px-1.5 py-0.5 rounded">All Healthy</span>
                    </div>

                    <div className="h-6 flex items-center justify-center bg-indigo-50/70 rounded-lg px-2 border border-indigo-100">
                        <div className="w-full flex items-center justify-between gap-0.5 h-3">
                            {[4, 6, 4, 12, 4, 8, 4, 14, 4, 6, 4, 8].map((h, i) => (
                                <motion.div
                                    key={i}
                                    animate={{ height: [h, h * 1.5, h] }}
                                    transition={{ duration: 1.2, repeat: Infinity, delay: i * 0.08 }}
                                    className="w-1 bg-indigo-600 rounded-full"
                                />
                            ))}
                        </div>
                    </div>

                    <div className="flex items-center justify-between text-[7.5px] text-gray-600 font-medium">
                        <span>Database Backups: <b className="text-emerald-700">Encrypted ✓</b></span>
                        <span>SRE Status: <b className="text-indigo-700">24/7 Active</b></span>
                    </div>
                </div>

                <div className={`w-full py-2 rounded-lg font-bold tracking-widest uppercase text-[10px] mt-2 flex items-center justify-center gap-1.5 shadow-sm transition-all duration-300 ${
                    step === 2 ? "bg-emerald-600 text-white" : step === 1 ? "bg-black text-white" : "bg-indigo-600 text-white"
                }`}>
                    {step === 1 ? (
                        <>
                            <Loader2 className="w-3 h-3 animate-spin text-white" />
                            <span>DIAGNOSING HEALTH...</span>
                        </>
                    ) : step === 2 ? (
                        <span>SYSTEMS OPTIMAL ✓</span>
                    ) : (
                        <span>{buttonText || "MAINTAIN"}</span>
                    )}
                </div>
            </div>

            <div className="w-full bg-indigo-200/60 h-1 rounded-full overflow-hidden">
                <motion.div key={step === 2 ? "lt2" : "lt1"} initial={{ width: "0%" }} animate={{ width: "100%" }} transition={{ duration: step === 2 ? 3.8 : 2.4, ease: "linear" }} className="h-full bg-indigo-600 rounded-full" />
            </div>
        </div>
    );
}

// 7.11 GENERAL MOBILE APP DEV FALLBACK MOCKUP
function MobileAppDevMockup({ title, buttonText }: { title?: string, buttonText?: string }) {
    const [resolved, setResolved] = useState(false);

    useEffect(() => {
        let isMounted = true;
        let timer: NodeJS.Timeout;
        const loop = () => {
            setResolved(false);
            timer = setTimeout(() => {
                if (!isMounted) return;
                setResolved(true);
                timer = setTimeout(() => {
                    if (!isMounted) return;
                    loop();
                }, 3800);
            }, 1600);
        };
        loop();
        return () => { isMounted = false; clearTimeout(timer); };
    }, []);

    return (
        <div className="w-full max-w-[270px] bg-white/30 backdrop-blur-md rounded-2xl p-3.5 border border-white/60 shadow-lg min-h-[220px] flex flex-col justify-between overflow-hidden text-gray-800">
            <div className="flex items-center justify-between pb-1.5 border-b border-blue-200/50">
                <span className="text-[9px] font-bold text-gray-800 tracking-wider uppercase flex items-center gap-1">
                    <Smartphone className="w-3.5 h-3.5 text-blue-700" />
                    MOBILE APP CORE
                </span>
                <span className="text-[7.5px] font-bold text-blue-700 bg-blue-100 px-1.5 py-0.5 rounded">
                    IOS · ANDROID
                </span>
            </div>

            <div className="flex flex-col gap-2 my-1">
                <div className="bg-white/80 rounded-xl p-2.5 border border-blue-200/60 shadow-sm">
                    <div className="flex items-center justify-between text-[8px] font-semibold text-gray-600 mb-1">
                        <span>Sprint Release v2.4.0</span>
                        <span className="text-emerald-600 font-bold">60 FPS</span>
                    </div>

                    <div className="flex items-center justify-between mt-1">
                        <div className="text-[12px] font-bold text-gray-900">
                            {resolved ? "0 Critical Issues" : "Scanning Modules..."}
                        </div>
                        <span className={`text-[7.5px] font-bold px-1.5 py-0.5 rounded ${
                            resolved ? "bg-emerald-100 text-emerald-700" : "bg-amber-100 text-amber-700"
                        }`}>
                            {resolved ? "Deployed ✓" : "Testing"}
                        </span>
                    </div>

                    <div className="w-full bg-blue-100 h-1.5 rounded-full overflow-hidden mt-2">
                        <motion.div initial={{ width: "35%" }} animate={{ width: resolved ? "100%" : "60%" }} transition={{ duration: 0.8 }} className="h-full bg-blue-600 rounded-full" />
                    </div>
                </div>

                <div className={`w-full py-2 rounded-lg font-bold tracking-widest uppercase text-[10px] text-center shadow-sm transition-all ${
                    resolved ? "bg-emerald-600 text-white" : "bg-black text-white"
                }`}>
                    {resolved ? "BUILD PASSED ✓" : buttonText || "EXPLORE"}
                </div>
            </div>

            <div className="w-full bg-blue-200/60 h-1 rounded-full overflow-hidden">
                <motion.div key={resolved ? "r1" : "r2"} initial={{ width: "0%" }} animate={{ width: "100%" }} transition={{ duration: resolved ? 3.8 : 1.6, ease: "linear" }} className="h-full bg-blue-600 rounded-full" />
            </div>
        </div>
    );
}

/* =========================================================================
   8. CREATIVE STUDIO & 3D MOTION MOCKUP
   ========================================================================= */
function CreativeMotionMockup({ title, buttonText }) {
    const [renderFrame, setRenderFrame] = useState(1);

    useEffect(() => {
        let isMounted = true;
        const interval = setInterval(() => {
            if (!isMounted) return;
            setRenderFrame(prev => (prev % 60) + 1);
        }, 80);
        return () => { isMounted = false; clearInterval(interval); };
    }, []);

    return (
        <div className="w-full max-w-[270px] bg-white/30 backdrop-blur-md rounded-2xl p-3.5 border border-white/60 shadow-lg min-h-[220px] flex flex-col justify-between overflow-hidden text-gray-800">
            <div className="flex items-center justify-between pb-1.5 border-b border-indigo-200/50">
                <span className="text-[9px] font-bold text-gray-800 tracking-wider uppercase flex items-center gap-1">
                    <Play className="w-3.5 h-3.5 text-indigo-700" />
                    3D MOTION VIEWPORT
                </span>
                <span className="text-[7.5px] font-bold text-indigo-700 bg-indigo-100 px-1.5 py-0.5 rounded">
                    4K 60FPS
                </span>
            </div>

            <div className="flex flex-col gap-2 my-1">
                {/* 3D Wireframe / Render Viewport Simulation */}
                <div className="relative h-18 bg-black/90 rounded-xl overflow-hidden p-2 flex items-center justify-center border border-white/20">
                    <motion.div 
                        animate={{ rotate: 360 }}
                        transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                        className="w-10 h-10 border-2 border-indigo-400 border-dashed rounded-lg flex items-center justify-center"
                    >
                        <div className="w-5 h-5 bg-gradient-to-tr from-pink-500 to-indigo-400 rounded-sm" />
                    </motion.div>
                    <div className="absolute bottom-1 right-2 text-[7px] font-mono text-white/70">
                        Frame {renderFrame}/60
                    </div>
                </div>

                <div className="w-full py-2 rounded-lg font-bold tracking-widest uppercase text-[10px] bg-black text-white text-center shadow-sm">
                    {buttonText || "PREVIEW 3D"}
                </div>
            </div>

            <div className="w-full bg-indigo-200/60 h-1 rounded-full overflow-hidden">
                <motion.div initial={{ width: "0%" }} animate={{ width: "100%" }} transition={{ duration: 4.8, repeat: Infinity, ease: "linear" }} className="h-full bg-indigo-600 rounded-full" />
            </div>
        </div>
    );
}

/* =========================================================================
   9. BRANDING & IDENTITY MOCKUP
   ========================================================================= */
function BrandingIdentityMockup({ title, buttonText }) {
    return (
        <div className="w-full max-w-[270px] bg-white/30 backdrop-blur-md rounded-2xl p-3.5 border border-white/60 shadow-lg min-h-[220px] flex flex-col justify-between overflow-hidden text-gray-800">
            <div className="flex items-center justify-between pb-1.5 border-b border-rose-200/50">
                <span className="text-[9px] font-bold text-gray-800 tracking-wider uppercase flex items-center gap-1">
                    <Palette className="w-3.5 h-3.5 text-rose-700" />
                    BRAND GUIDELINES
                </span>
                <span className="text-[7.5px] font-bold text-rose-700 bg-rose-100 px-1.5 py-0.5 rounded">
                    RULES & TOKENS
                </span>
            </div>

            <div className="flex flex-col gap-2 my-1">
                {/* Brand Color / Typography Grid */}
                <div className="bg-white/80 rounded-xl p-2.5 border border-rose-200/60 shadow-sm flex flex-col gap-2">
                    <div className="flex items-center justify-between text-[8px] font-bold">
                        <span className="text-gray-900">Aa Display 48px</span>
                        <span className="text-rose-700">AAA Contrast</span>
                    </div>

                    <div className="grid grid-cols-4 gap-1.5">
                        {["#1E1B4B", "#4338CA", "#E11D48", "#F43F5E"].map((col, idx) => (
                            <div key={idx} className="flex flex-col items-center gap-0.5">
                                <div className="w-full h-5 rounded shadow-xs" style={{ backgroundColor: col }} />
                                <span className="text-[6.5px] font-mono text-gray-500">{col}</span>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="w-full py-2 rounded-lg font-bold tracking-widest uppercase text-[10px] bg-black text-white text-center shadow-sm">
                    {buttonText || "EXPLORE GUIDELINES"}
                </div>
            </div>

            <div className="w-full bg-rose-200/60 h-1 rounded-full overflow-hidden">
                <motion.div initial={{ width: "0%" }} animate={{ width: "100%" }} transition={{ duration: 4.0, repeat: Infinity, ease: "linear" }} className="h-full bg-rose-600 rounded-full" />
            </div>
        </div>
    );
}

/* =========================================================================
   10. BLOGS & EDITORIAL CONTENT MOCKUP
   ========================================================================= */
function BlogsMockup({ title, buttonText }) {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        let isMounted = true;
        let timer;
        const loop = () => {
            setProgress(0);
            timer = setTimeout(() => {
                if (!isMounted) return;
                setProgress(100);
                timer = setTimeout(() => {
                    if (!isMounted) return;
                    loop();
                }, 4000);
            }, 500);
        };
        loop();
        return () => { isMounted = false; clearTimeout(timer); };
    }, []);

    return (
        <div className="w-full max-w-[270px] bg-white/40 backdrop-blur-md rounded-2xl p-3.5 border border-white/60 shadow-lg min-h-[220px] flex flex-col justify-between overflow-hidden text-gray-800">
            <div>
                <div className="flex items-center justify-between pb-1.5 border-b border-emerald-200/50 mb-1">
                    <span className="text-[8.5px] font-bold text-emerald-800 tracking-wider uppercase flex items-center gap-1">
                        <Sparkles className="w-2.5 h-2.5 text-emerald-600" />
                        TECH INSIGHTS
                    </span>
                    <span className="text-[8px] font-semibold text-gray-600">4 MIN READ</span>
                </div>
                <div className="w-full bg-emerald-100 h-1 rounded-full overflow-hidden">
                    <motion.div initial={{ width: "0%" }} animate={{ width: `${progress}%` }} transition={{ duration: 3.5, ease: "easeInOut" }} className="h-full bg-emerald-600 rounded-full" />
                </div>
            </div>

            <div className="flex flex-col gap-2 my-1">
                <div className="bg-white/70 border border-emerald-200/50 rounded-xl p-2.5 shadow-sm">
                    <span className="text-[7.5px] font-bold text-emerald-700 bg-emerald-100 px-1.5 py-0.5 rounded">
                        ARCHITECTURE
                    </span>
                    <div className="text-[11px] font-bold text-gray-900 mt-1 leading-tight">
                        Scalable Systems in 2026
                    </div>
                    <div className="flex flex-col gap-1 mt-1.5">
                        <div className="h-1.5 bg-gray-300/70 rounded-full w-full" />
                        <div className="h-1.5 bg-gray-300/70 rounded-full w-3/4" />
                    </div>
                </div>

                <div className="w-full py-2.5 rounded-sm bg-white shadow-sm flex items-center justify-center border border-emerald-100 font-bold text-[10px] tracking-widest uppercase text-black">
                    {buttonText || "READ NOW"}
                </div>
            </div>

            <div className="w-full bg-emerald-200/50 h-1 rounded-full overflow-hidden">
                <motion.div initial={{ width: "0%" }} animate={{ width: "100%" }} transition={{ duration: 4.5, repeat: Infinity, ease: "linear" }} className="h-full bg-emerald-600 rounded-full" />
            </div>
        </div>
    );
}

/* =========================================================================
   11. LEAD INQUIRY & CONTACT FORM MOCKUP
   ========================================================================= */
function LeadFormMockup({ title, buttonText }) {
    const [sent, setSent] = useState(false);

    useEffect(() => {
        let isMounted = true;
        let timer;
        const loop = () => {
            setSent(false);
            timer = setTimeout(() => {
                if (!isMounted) return;
                setSent(true);
                timer = setTimeout(() => {
                    if (!isMounted) return;
                    loop();
                }, 3800);
            }, 1800);
        };
        loop();
        return () => { isMounted = false; clearTimeout(timer); };
    }, []);

    return (
        <div className="w-full max-w-[270px] bg-white/30 backdrop-blur-md rounded-2xl p-3.5 border border-white/50 shadow-lg min-h-[220px] flex flex-col justify-between overflow-hidden text-gray-800">
            <div className="flex items-center justify-between pb-2 border-b border-purple-200/60">
                <span className="text-[9px] font-bold text-gray-800 tracking-wider uppercase flex items-center gap-1">
                    <Send className="w-3.5 h-3.5 text-purple-700" />
                    START A PROJECT
                </span>
                <span className={`w-1.5 h-1.5 rounded-full ${sent ? "bg-emerald-500" : "bg-purple-600 animate-pulse"}`} />
            </div>

            <div className="min-h-[145px] flex flex-col justify-center my-1">
                {!sent ? (
                    <div className="flex flex-col gap-2">
                        <div className="h-7 rounded-lg bg-white/70 border border-purple-200 px-2.5 flex items-center text-[10px] font-medium text-gray-900">
                            Sarah Miller
                        </div>
                        <div className="grid grid-cols-2 gap-1.5 text-[8.5px]">
                            <div className="py-1 px-2 rounded-lg text-center font-bold bg-purple-600 text-white shadow-xs">
                                Custom Web Dev ✓
                            </div>
                            <div className="py-1 px-2 rounded-lg text-center bg-white/60 text-gray-500">
                                UI/UX Design
                            </div>
                        </div>
                        <div className="w-full py-2 rounded-lg font-bold tracking-widest uppercase text-[10px] bg-white text-black text-center shadow-sm">
                            {buttonText || "GET IN TOUCH"}
                        </div>
                    </div>
                ) : (
                    <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="bg-emerald-50 border border-emerald-200 rounded-xl p-3 text-center">
                        <div className="w-7 h-7 mx-auto rounded-full bg-emerald-500 text-white flex items-center justify-center mb-1">
                            <Check className="w-4 h-4 stroke-[3]" />
                        </div>
                        <div className="text-[11px] font-bold text-emerald-950">Inquiry Sent!</div>
                        <div className="text-[8px] text-emerald-700 mt-0.5">We will reply within 2 hours.</div>
                    </motion.div>
                )}
            </div>

            <div className="w-full bg-purple-200/60 h-1 rounded-full overflow-hidden">
                <motion.div key={sent ? "s1" : "s2"} initial={{ width: "0%" }} animate={{ width: "100%" }} transition={{ duration: sent ? 3.8 : 1.8, ease: "linear" }} className="h-full bg-purple-600 rounded-full" />
            </div>
        </div>
    );
}

/* =========================================================================
   12. PAYMENT GATEWAY & SECURE CHECKOUT MOCKUP
   ========================================================================= */
function PaymentGatewayMockup({ buttonText }: { buttonText?: string }) {
    const [step, setStep] = useState(0); // 0: filling, 1: processing, 2: success
    const [cardNumber, setCardNumber] = useState("");
    const targetCard = "4242 •••• •••• 4242";

    useEffect(() => {
        let isMounted = true;
        let timer: NodeJS.Timeout;

        const loop = () => {
            setStep(0);
            setCardNumber("");

            timer = setTimeout(() => {
                if (!isMounted) return;
                
                // Typing card animation
                let idx = 0;
                let cur = "";
                const interval = setInterval(() => {
                    if (!isMounted) { clearInterval(interval); return; }
                    if (idx < targetCard.length) {
                        cur += targetCard[idx];
                        setCardNumber(cur);
                        idx++;
                    } else {
                        clearInterval(interval);
                        timer = setTimeout(() => {
                            if (!isMounted) return;
                            setStep(1); // Processing
                            timer = setTimeout(() => {
                                if (!isMounted) return;
                                setStep(2); // Success
                                timer = setTimeout(() => {
                                    if (!isMounted) return;
                                    loop();
                                }, 3600);
                            }, 1000);
                        }, 500);
                    }
                }, 40);
            }, 600);
        };

        loop();
        return () => { isMounted = false; clearTimeout(timer); };
    }, []);

    return (
        <div className="w-full max-w-[270px] bg-white/40 backdrop-blur-md rounded-2xl p-3.5 border border-white/60 shadow-lg min-h-[220px] flex flex-col justify-between overflow-hidden text-gray-800">
            {/* Top Bar */}
            <div className="flex items-center justify-between pb-2 border-b border-sky-200/60">
                <span className="text-[9px] font-bold text-gray-800 tracking-wider uppercase flex items-center gap-1.5">
                    <CreditCard className="w-3 h-3 text-sky-600" />
                    STRIPE CHECKOUT
                </span>
                <span className="text-[7.5px] bg-emerald-100/90 text-emerald-800 border border-emerald-300/60 px-1.5 py-0.5 rounded font-bold flex items-center gap-0.5">
                    <ShieldCheck className="w-2.5 h-2.5 text-emerald-600" />
                    256-BIT SSL
                </span>
            </div>

            {/* Content Body */}
            <div className="min-h-[145px] flex flex-col justify-center my-1">
                <AnimatePresence mode="wait">
                    {step < 2 ? (
                        <motion.div
                            key="input"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0, scale: 0.95 }}
                            className="flex flex-col gap-2"
                        >
                            {/* Amount Summary */}
                            <div className="flex items-center justify-between px-1">
                                <span className="text-[8px] font-semibold text-gray-500 uppercase tracking-wide">Total Amount</span>
                                <span className="text-[12px] font-black text-gray-900 tracking-tight">$349.00 USD</span>
                            </div>

                            {/* Card Input Simulation */}
                            <div className="h-8 rounded-lg bg-white/80 border border-sky-200/80 px-2.5 flex items-center justify-between text-gray-800 text-[10px]">
                                <div className="flex items-center gap-1.5 truncate">
                                    <div className="w-4 h-2.5 bg-gradient-to-r from-amber-400 to-amber-600 rounded-sm shrink-0" />
                                    <span className="font-mono tracking-wider text-[9.5px]">
                                        {cardNumber || <span className="text-gray-400 font-sans">Card number</span>}
                                    </span>
                                </div>
                                {cardNumber === targetCard && <Check className="w-3 h-3 text-emerald-600" />}
                            </div>

                            {/* Expiry & CVC Grid */}
                            <div className="grid grid-cols-2 gap-2 text-[9px]">
                                <div className="h-7 rounded-lg bg-white/80 border border-sky-200/80 px-2 flex items-center text-gray-700 font-mono">
                                    {cardNumber ? "12 / 28" : <span className="text-gray-400 font-sans">MM/YY</span>}
                                </div>
                                <div className="h-7 rounded-lg bg-white/80 border border-sky-200/80 px-2 flex items-center text-gray-700 font-mono">
                                    {cardNumber ? "•••" : <span className="text-gray-400 font-sans">CVC</span>}
                                </div>
                            </div>

                            {/* Action Button */}
                            <div
                                className={`w-full py-2 rounded-lg font-bold tracking-widest uppercase text-[10px] flex items-center justify-center gap-1.5 shadow-sm transition-all duration-300 ${
                                    step === 1
                                        ? "bg-black text-white"
                                        : "bg-sky-600 hover:bg-sky-700 text-white"
                                }`}
                            >
                                {step === 1 ? (
                                    <>
                                        <Loader2 className="w-3 h-3 animate-spin text-white" />
                                        <span>PROCESSING...</span>
                                    </>
                                ) : (
                                    <span>{buttonText || "PAY NOW"}</span>
                                )}
                            </div>
                        </motion.div>
                    ) : (
                        <motion.div
                            key="success"
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0 }}
                            className="bg-white/80 border border-emerald-200 rounded-xl p-3 flex flex-col items-center justify-center text-center shadow-sm"
                        >
                            <div className="w-8 h-8 rounded-full bg-emerald-500 text-white flex items-center justify-center mb-1.5 shadow-md shadow-emerald-500/20">
                                <CheckCircle2 className="w-5 h-5 text-white stroke-[2.5]" />
                            </div>
                            <span className="text-[11px] font-bold text-gray-900 leading-tight">Payment Successful</span>
                            <span className="text-[8.5px] font-semibold text-emerald-700 mt-0.5">$349.00 USD settled</span>

                            <div className="mt-2 w-full pt-1.5 border-t border-gray-100 flex items-center justify-between text-[7.5px] text-gray-500 font-mono">
                                <span>TXN: #98421-STRIPE</span>
                                <span className="text-emerald-600 font-bold uppercase">APPROVED</span>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>

            {/* Bottom Progress Looper */}
            <div className="w-full bg-sky-200/50 h-1 rounded-full overflow-hidden">
                <motion.div
                    key={step === 2 ? "s2" : "s1"}
                    initial={{ width: "0%" }}
                    animate={{ width: "100%" }}
                    transition={{ duration: step === 2 ? 3.6 : 2.5, ease: "linear" }}
                    className="h-full bg-sky-600 rounded-full"
                />
            </div>
        </div>
    );
}

/* =========================================================================
   13. MEMBERSHIP & SUBSCRIPTION PLANS MOCKUP
   ========================================================================= */
function MembershipMockup({ buttonText }: { buttonText?: string }) {
    const [step, setStep] = useState(0); // 0: select, 1: upgrading, 2: active member VIP card
    const [selectedTier, setSelectedTier] = useState<"PRO" | "VIP">("PRO");

    useEffect(() => {
        let isMounted = true;
        let timer: NodeJS.Timeout;

        const loop = () => {
            setStep(0);
            setSelectedTier("PRO");

            timer = setTimeout(() => {
                if (!isMounted) return;
                setSelectedTier("VIP");

                timer = setTimeout(() => {
                    if (!isMounted) return;
                    setStep(1); // Enrolling
                    timer = setTimeout(() => {
                        if (!isMounted) return;
                        setStep(2); // VIP card active
                        timer = setTimeout(() => {
                            if (!isMounted) return;
                            loop();
                        }, 3800);
                    }, 900);
                }, 1100);
            }, 1200);
        };

        loop();
        return () => { isMounted = false; clearTimeout(timer); };
    }, []);

    return (
        <div className="w-full max-w-[270px] bg-white/20 backdrop-blur-md rounded-2xl p-3.5 border border-white/40 shadow-lg min-h-[220px] flex flex-col justify-between overflow-hidden text-white">
            {/* Top Bar */}
            <div className="flex items-center justify-between pb-2 border-b border-white/20">
                <span className="text-[9px] font-bold text-white tracking-wider uppercase flex items-center gap-1.5">
                    <Crown className="w-3 h-3 text-amber-300" />
                    MEMBER ACCESS
                </span>
                <span className="text-[7.5px] bg-white/20 text-white border border-white/30 px-1.5 py-0.5 rounded font-bold flex items-center gap-1">
                    <span className={`w-1.5 h-1.5 rounded-full ${step === 2 ? 'bg-amber-300 animate-pulse' : 'bg-white/60'}`} />
                    {step === 2 ? "VIP MEMBER" : "SELECT PLAN"}
                </span>
            </div>

            {/* Content Body */}
            <div className="min-h-[145px] flex flex-col justify-center my-1">
                <AnimatePresence mode="wait">
                    {step < 2 ? (
                        <motion.div
                            key="plans"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0, scale: 0.95 }}
                            className="flex flex-col gap-2"
                        >
                            {/* Tier Selection Pills */}
                            <div className="grid grid-cols-2 gap-1.5 p-1 bg-white/10 rounded-lg border border-white/20">
                                <div
                                    className={`py-1 text-center rounded-md transition-all text-[8.5px] font-bold uppercase ${
                                        selectedTier === "PRO"
                                            ? "bg-white text-sky-900 shadow-sm"
                                            : "text-white/70"
                                    }`}
                                >
                                    PRO $29/mo
                                </div>
                                <div
                                    className={`py-1 text-center rounded-md transition-all text-[8.5px] font-bold uppercase ${
                                        selectedTier === "VIP"
                                            ? "bg-gradient-to-r from-amber-300 to-amber-400 text-amber-950 shadow-sm"
                                            : "text-white/70"
                                    }`}
                                >
                                    VIP $79/mo
                                </div>
                            </div>

                            {/* Plan Features Preview */}
                            <div className="bg-white/15 border border-white/25 rounded-lg p-2 flex flex-col gap-1 text-[8.5px]">
                                <div className="flex items-center gap-1.5 text-white/95">
                                    <Check className="w-2.5 h-2.5 text-emerald-300 shrink-0" />
                                    <span>Unlimited premium downloads</span>
                                </div>
                                <div className="flex items-center gap-1.5 text-white/95">
                                    <Check className="w-2.5 h-2.5 text-emerald-300 shrink-0" />
                                    <span>24/7 Priority support & API access</span>
                                </div>
                                <div className="flex items-center gap-1.5 text-white/95">
                                    <Check className="w-2.5 h-2.5 text-emerald-300 shrink-0" />
                                    <span>Personalized account executive</span>
                                </div>
                            </div>

                            {/* Action Button */}
                            <div
                                className={`w-full py-2 rounded-lg font-bold tracking-widest uppercase text-[10px] flex items-center justify-center gap-1.5 shadow-sm transition-all duration-300 ${
                                    step === 1
                                        ? "bg-black text-white"
                                        : "bg-white text-black hover:bg-neutral-100"
                                }`}
                            >
                                {step === 1 ? (
                                    <>
                                        <Loader2 className="w-3 h-3 animate-spin text-white" />
                                        <span>ENROLLING...</span>
                                    </>
                                ) : (
                                    <span>{buttonText || "VIEW PLANS"}</span>
                                )}
                            </div>
                        </motion.div>
                    ) : (
                        <motion.div
                            key="active"
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0 }}
                            className="bg-gradient-to-br from-white/30 via-white/20 to-white/10 border border-white/40 rounded-xl p-3 flex flex-col justify-between shadow-md"
                        >
                            <div className="flex items-start justify-between">
                                <div>
                                    <div className="flex items-center gap-1">
                                        <Sparkles className="w-3 h-3 text-amber-300" />
                                        <span className="text-[10px] font-black tracking-wider uppercase text-white">VIP FOUNDER ACCESS</span>
                                    </div>
                                    <span className="text-[7.5px] text-white/70 block mt-0.5">MEMBER #SM-88421</span>
                                </div>
                                <Award className="w-5 h-5 text-amber-300 shrink-0" />
                            </div>

                            <div className="my-2 py-1 px-2 rounded-md bg-white/10 border border-white/20 flex items-center justify-between text-[8px]">
                                <span className="text-white/80">Status: <b className="text-emerald-300">ACTIVE</b></span>
                                <span className="text-white/80">Valid: <b className="text-white">2026-2027</b></span>
                            </div>

                            <div className="flex items-center justify-between text-[7.5px] text-white/70">
                                <span>ALL FEATURES UNLOCKED</span>
                                <span className="font-bold text-amber-300">TIER 1</span>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>

            {/* Bottom Progress Looper */}
            <div className="w-full bg-white/20 h-1 rounded-full overflow-hidden">
                <motion.div
                    key={step === 2 ? "s2" : "s1"}
                    initial={{ width: "0%" }}
                    animate={{ width: "100%" }}
                    transition={{ duration: step === 2 ? 3.8 : 2.3, ease: "linear" }}
                    className="h-full bg-white/80 rounded-full"
                />
            </div>
        </div>
    );
}

/* =========================================================================
   14. FALLBACK DEFAULT GRAPHIC
   ========================================================================= */
function DefaultFallbackGraphic({ feature }) {
    return (
        <div className="w-full mt-8 flex flex-col items-center gap-4">
            <div className="w-full flex flex-col gap-3">
                {(feature.lines || [4, 4, 3, 2]).map((lineWidth, i) => (
                    <div 
                        key={i} 
                        className={`h-3 rounded-full ${feature.gradient?.includes('0ea5e9') ? 'bg-white/40' : 'bg-gray-200/60'} ${
                            lineWidth === 4 ? 'w-full' : 
                            lineWidth === 3 ? 'w-3/4' : 'w-1/2'
                        }`}
                    />
                ))}
            </div>
            <div className="mt-4 bg-white shadow-sm w-full py-3 rounded-sm flex items-center justify-center">
                <span className="text-[10px] font-bold text-black tracking-widest uppercase">
                    {feature.buttonText || "EXPLORE"}
                </span>
            </div>
        </div>
    );
}

/* =========================================================================
   MAIN UNIVERSAL FEATURE CARD MOCKUP DISPATCHER
   ========================================================================= */
export default function FeatureCardMockup({ feature }) {
    if (!feature || !feature.title) return null;

    const title = feature.title.toLowerCase();

    // 1. Admin Dashboard
    if (title.includes("admin") || title.includes("dashboard")) {
        return <AdminDashboardMockup />;
    }

    // 2. Customer / User Login
    if (title.includes("login") || title.includes("customer login") || title.includes("client portal")) {
        return <CustomerLoginMockup />;
    }

    // 3. Appointment / Booking
    if (title.includes("appointment") || title.includes("booking") || title.includes("schedule")) {
        return <AppointmentBookingMockup />;
    }

    // 4. Payment Gateway & Checkout
    if (
        title.includes("payment") || 
        title.includes("gateway") || 
        title.includes("checkout") || 
        title.includes("stripe") || 
        title.includes("billing")
    ) {
        return <PaymentGatewayMockup buttonText={feature.buttonText} />;
    }

    // 5. Membership & Subscription Plans
    if (
        title.includes("membership") || 
        title.includes("subscription") || 
        title.includes("vip") || 
        title.includes("tier") || 
        title.includes("pricing plan")
    ) {
        return <MembershipMockup buttonText={feature.buttonText} />;
    }

    // 6. Blogs & Content
    if (title.includes("blog") || title.includes("article") || title.includes("content management") || title.includes("quality content")) {
        return <BlogsMockup title={feature.title} buttonText={feature.buttonText} />;
    }

    // 5. Lead Forms / Inquiries
    if (title.includes("lead form") || title.includes("inquiry") || title.includes("get in touch") || title.includes("contact")) {
        return <LeadFormMockup title={feature.title} buttonText={feature.buttonText} />;
    }

    // 6. E-Commerce & Inventory
    if (
        title.includes("inventory") || 
        title.includes("warehouse") || 
        title.includes("stock") || 
        title.includes("order fulfilment") || 
        title.includes("barcode") ||
        title.includes("catalog")
    ) {
        return <EcommerceInventoryMockup title={feature.title} buttonText={feature.buttonText} />;
    }

    // 7. UI / UX Design & Figma
    if (
        title.includes("figma") || 
        title.includes("component") || 
        title.includes("auto layout") || 
        title.includes("responsive") || 
        title.includes("token") || 
        title.includes("naming") || 
        title.includes("developer notes") || 
        title.includes("qa") ||
        title.includes("ui improvements")
    ) {
        return <UiUxDesignMockup title={feature.title} buttonText={feature.buttonText} />;
    }

    // 8. Mobile App Dev & Platform Updates (Exact Header Matching)
    if (title.includes("feature enhancement")) {
        return <FeatureEnhancementsMockup buttonText={feature.buttonText} />;
    }

    if (title.includes("bug fix")) {
        return <BugFixesMockup buttonText={feature.buttonText} />;
    }

    if (title.includes("performance improvement")) {
        return <PerformanceImprovementsMockup buttonText={feature.buttonText} />;
    }

    if (title.includes("os compatibility")) {
        return <OsCompatibilityMockup buttonText={feature.buttonText} />;
    }

    if (title.includes("security")) {
        return <SecurityUpdatesMockup buttonText={feature.buttonText} />;
    }

    if (
        title.includes("analytics monitoring") || 
        (title.includes("analytics") && feature.buttonText?.toLowerCase().includes("monitor"))
    ) {
        return <MobileAnalyticsMockup buttonText={feature.buttonText} />;
    }

    if (
        title.includes("user feedback") || 
        title.includes("feedback improvement")
    ) {
        return <UserFeedbackImprovementsMockup buttonText={feature.buttonText} />;
    }

    if (
        title.includes("new module") || 
        title.includes("module development")
    ) {
        return <NewModuleDevelopmentMockup buttonText={feature.buttonText} />;
    }

    if (
        title.includes("store update") || 
        title.includes("store publish")
    ) {
        return <StoreUpdatesMockup buttonText={feature.buttonText} />;
    }

    if (
        title.includes("maintenance") || 
        title.includes("long-term maintenance")
    ) {
        return <LongTermMaintenanceMockup buttonText={feature.buttonText} />;
    }

    if (title.includes("technical support") || title.includes("mobile dev")) {
        return <MobileAppDevMockup title={feature.title} buttonText={feature.buttonText} />;
    }

    // 9. Digital Marketing, SEO & Performance
    if (
        title.includes("seo") || 
        title.includes("conversion") || 
        title.includes("fast website") || 
        title.includes("campaign") || 
        title.includes("analytics") ||
        title.includes("optimisation") ||
        title.includes("optimization") ||
        title.includes("landing page")
    ) {
        return <DigitalMarketingMockup title={feature.title} buttonText={feature.buttonText} />;
    }

    // 10. Creative Studio, 3D & Motion Graphics
    if (
        title.includes("3d") || 
        title.includes("exploded") || 
        title.includes("render") || 
        title.includes("packaging") || 
        title.includes("visualisation") || 
        title.includes("visualization") ||
        title.includes("motion") || 
        title.includes("explainer") || 
        title.includes("animation") || 
        title.includes("scroll")
    ) {
        return <CreativeMotionMockup title={feature.title} buttonText={feature.buttonText} />;
    }

    // 11. Branding & Identity
    if (
        title.includes("logo") || 
        title.includes("colour") || 
        title.includes("color") || 
        title.includes("typography") || 
        title.includes("icon") || 
        title.includes("brand") || 
        title.includes("photography") || 
        title.includes("illustration") || 
        title.includes("social")
    ) {
        return <BrandingIdentityMockup title={feature.title} buttonText={feature.buttonText} />;
    }

    // Fallback
    return <DefaultFallbackGraphic feature={feature} />;
}
