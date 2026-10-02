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
    Flame
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
   7. MOBILE DEV, BUG FIXES & APP UPDATES MOCKUP
   ========================================================================= */
function MobileAppDevMockup({ title, buttonText }) {
    const [resolved, setResolved] = useState(false);

    useEffect(() => {
        let isMounted = true;
        let timer;
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
                    {resolved ? "BUILD PASSED ✓" : buttonText}
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
   12. FALLBACK DEFAULT GRAPHIC
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

    // 4. Blogs & Content
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

    // 8. Digital Marketing, SEO & Performance
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

    // 9. Mobile App Dev & Platform Updates
    if (
        title.includes("bug fix") || 
        title.includes("performance improvement") || 
        title.includes("os compatibility") || 
        title.includes("security") || 
        title.includes("store update") || 
        title.includes("feature enhancement") ||
        title.includes("technical support") ||
        title.includes("module development")
    ) {
        return <MobileAppDevMockup title={feature.title} buttonText={feature.buttonText} />;
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
