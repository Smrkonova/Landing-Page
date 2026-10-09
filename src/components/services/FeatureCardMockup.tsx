"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, Loader2, 
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
    ShieldAlert,
    FolderTree,
    Folder,
    Layout,
    Tablet,
    Tag,
    FileCode,
    Camera,
    Image,
    Printer,
    Globe,
    Crop,
    PenTool,
    Share2,
    MousePointerClick,
    Trophy,
    Rocket,
    Target,
    BarChart,
    Video,
    Film,
    Clapperboard,
    Building2,
    Package,
    Server,
    Headphones,
    Wand2,
    Database,
    LifeBuoy,
    Maximize2,
    PlayCircle
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
   5. UI / UX DESIGN DEDICATED HEADER MOCKUPS
   ========================================================================= */

// 5.1 ORGANISED FIGMA FILES MOCKUP
function OrganisedFigmaFilesMockup({ buttonText }: { buttonText?: string }) {
    const [activePage, setActivePage] = useState(0);

    const pages = [
        { name: "01_Cover & Specs", badge: "DOCS", color: "text-blue-600 bg-blue-50" },
        { name: "02_Design_System", badge: "CORE", color: "text-purple-600 bg-purple-50" },
        { name: "03_Screens_Final", badge: "READY", color: "text-emerald-600 bg-emerald-50" },
        { name: "04_Dev_Handoff", badge: "SPECS", color: "text-amber-600 bg-amber-50" },
    ];

    useEffect(() => {
        let isMounted = true;
        const interval = setInterval(() => {
            if (!isMounted) return;
            setActivePage(prev => (prev + 1) % pages.length);
        }, 1800);
        return () => { isMounted = false; clearInterval(interval); };
    }, [pages.length]);

    return (
        <div className="w-full max-w-[270px] bg-white/30 backdrop-blur-md rounded-2xl p-3.5 border border-white/60 shadow-lg min-h-[220px] flex flex-col justify-between overflow-hidden text-gray-800">
            <div className="flex items-center justify-between pb-1.5 border-b border-blue-200/50">
                <span className="text-[9px] font-bold text-gray-800 tracking-wider uppercase flex items-center gap-1.5">
                    <FolderTree className="w-3.5 h-3.5 text-blue-600" />
                    FIGMA FILE TREE
                </span>
                <span className="text-[7.5px] font-bold text-blue-700 bg-blue-100/90 px-1.5 py-0.5 rounded flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-600 animate-pulse" />
                    4 CLEAN PAGES
                </span>
            </div>

            <div className="min-h-[145px] flex flex-col justify-center my-1 gap-1.5">
                <div className="flex flex-col gap-1.5">
                    {pages.map((p, idx) => {
                        const isActive = idx === activePage;
                        return (
                            <motion.div
                                key={idx}
                                animate={{
                                    scale: isActive ? 1.02 : 1,
                                    backgroundColor: isActive ? "rgba(255, 255, 255, 0.95)" : "rgba(255, 255, 255, 0.65)",
                                }}
                                transition={{ duration: 0.25 }}
                                className={`rounded-xl px-2.5 py-1.5 border flex items-center justify-between shadow-xs ${
                                    isActive ? "border-blue-300 ring-1 ring-blue-400/30" : "border-white/60"
                                }`}
                            >
                                <div className="flex items-center gap-2">
                                    <Folder className={`w-3 h-3 ${isActive ? "text-blue-600 fill-blue-100" : "text-gray-400"}`} />
                                    <span className={`text-[9px] truncate ${isActive ? "text-gray-900 font-bold" : "text-gray-600 font-medium"}`}>
                                        {p.name}
                                    </span>
                                </div>
                                <span className={`text-[7px] font-bold px-1.5 py-0.2 rounded ${p.color}`}>
                                    {p.badge}
                                </span>
                            </motion.div>
                        );
                    })}
                </div>

                <div className="w-full py-2 rounded-lg font-bold tracking-widest uppercase text-[10px] bg-blue-700 text-white text-center shadow-sm">
                    {buttonText || "ORGANISED"}
                </div>
            </div>

            <div className="w-full bg-blue-200/60 h-1 rounded-full overflow-hidden">
                <motion.div
                    key={activePage}
                    initial={{ width: "0%" }}
                    animate={{ width: "100%" }}
                    transition={{ duration: 1.8, ease: "linear" }}
                    className="h-full bg-blue-600 rounded-full"
                />
            </div>
        </div>
    );
}

// 5.2 REUSABLE COMPONENTS MOCKUP
function ReusableComponentsMockup({ buttonText }: { buttonText?: string }) {
    const [variant, setVariant] = useState(0);
    const [size, setSize] = useState(1);

    const variants = ["Primary", "Outline", "Ghost"];
    const sizes = ["SM", "MD", "LG"];

    useEffect(() => {
        let isMounted = true;
        const interval = setInterval(() => {
            if (!isMounted) return;
            setVariant(v => (v + 1) % 3);
            setSize(s => (s + 1) % 3);
        }, 1900);
        return () => { isMounted = false; clearInterval(interval); };
    }, []);

    return (
        <div className="w-full max-w-[270px] bg-white/30 backdrop-blur-md rounded-2xl p-3.5 border border-white/60 shadow-lg min-h-[220px] flex flex-col justify-between overflow-hidden text-gray-800">
            <div className="flex items-center justify-between pb-1.5 border-b border-purple-200/50">
                <span className="text-[9px] font-bold text-gray-800 tracking-wider uppercase flex items-center gap-1.5">
                    <Layers className="w-3.5 h-3.5 text-purple-600" />
                    MASTER COMPONENT
                </span>
                <span className="text-[7.5px] font-bold text-purple-700 bg-purple-100/90 px-1.5 py-0.5 rounded flex items-center gap-1 font-mono">
                    ❖ Button.tsx
                </span>
            </div>

            <div className="min-h-[145px] flex flex-col justify-center my-1 gap-2">
                <div className="grid grid-cols-2 gap-1.5 text-[8px] font-bold">
                    <div className="bg-white/80 p-1 rounded-lg border border-purple-100 flex items-center justify-between">
                        <span className="text-gray-500 font-mono text-[7px]">VAR:</span>
                        <span className="text-purple-700 bg-purple-50 px-1 py-0.2 rounded font-mono">{variants[variant]}</span>
                    </div>
                    <div className="bg-white/80 p-1 rounded-lg border border-purple-100 flex items-center justify-between">
                        <span className="text-gray-500 font-mono text-[7px]">SIZE:</span>
                        <span className="text-purple-700 bg-purple-50 px-1 py-0.2 rounded font-mono">{sizes[size]}</span>
                    </div>
                </div>

                <div className="bg-white/85 rounded-xl p-3 border border-purple-200/70 shadow-sm flex flex-col items-center justify-center min-h-[58px]">
                    <motion.div
                        layout
                        animate={{
                            scale: size === 0 ? 0.9 : size === 1 ? 1 : 1.08,
                            padding: size === 0 ? "4px 10px" : size === 1 ? "6px 14px" : "8px 18px",
                            backgroundColor: variant === 0 ? "#7C3AED" : variant === 1 ? "transparent" : "#F3E8FF",
                            color: variant === 0 ? "#FFFFFF" : variant === 1 ? "#7C3AED" : "#6B21A8",
                            borderWidth: variant === 1 ? "1.5px" : "0px",
                            borderColor: "#7C3AED",
                        }}
                        transition={{ duration: 0.3 }}
                        className="rounded-lg text-[9px] font-bold flex items-center gap-1.5 shadow-xs select-none"
                    >
                        <Sparkles className="w-2.5 h-2.5" />
                        <span>Action CTA</span>
                    </motion.div>
                    <div className="mt-1.5 flex items-center gap-1 text-[7px] font-mono text-gray-500">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                        <span>◇ 148 instances synced</span>
                    </div>
                </div>

                <div className="w-full py-2 rounded-lg font-bold tracking-widest uppercase text-[10px] bg-purple-700 text-white text-center shadow-sm">
                    {buttonText || "COMPONENTS"}
                </div>
            </div>

            <div className="w-full bg-purple-200/60 h-1 rounded-full overflow-hidden">
                <motion.div
                    key={variant}
                    initial={{ width: "0%" }}
                    animate={{ width: "100%" }}
                    transition={{ duration: 1.9, ease: "linear" }}
                    className="h-full bg-purple-600 rounded-full"
                />
            </div>
        </div>
    );
}

// 5.3 AUTO LAYOUT MOCKUP
function AutoLayoutMockup({ buttonText }: { buttonText?: string }) {
    const [gap, setGap] = useState(16);
    const [isRow, setIsRow] = useState(true);

    useEffect(() => {
        let isMounted = true;
        const interval = setInterval(() => {
            if (!isMounted) return;
            setGap(g => (g === 16 ? 24 : g === 24 ? 8 : 16));
            setIsRow(r => !r);
        }, 2000);
        return () => { isMounted = false; clearInterval(interval); };
    }, []);

    return (
        <div className="w-full max-w-[270px] bg-white/30 backdrop-blur-md rounded-2xl p-3.5 border border-white/60 shadow-lg min-h-[220px] flex flex-col justify-between overflow-hidden text-gray-800">
            <div className="flex items-center justify-between pb-1.5 border-b border-sky-200/50">
                <span className="text-[9px] font-bold text-gray-800 tracking-wider uppercase flex items-center gap-1.5">
                    <Layout className="w-3.5 h-3.5 text-sky-600" />
                    AUTO LAYOUT V4
                </span>
                <span className="text-[7.5px] font-bold text-sky-700 bg-sky-100/90 px-1.5 py-0.5 rounded font-mono">
                    gap: {gap}px
                </span>
            </div>

            <div className="min-h-[145px] flex flex-col justify-center my-1 gap-2">
                <div className="bg-white/80 rounded-xl p-2.5 border border-sky-200/70 shadow-sm flex flex-col gap-1.5">
                    <div className="flex items-center justify-between text-[7.5px] font-mono text-gray-500">
                        <span className="flex items-center gap-1">
                            <span className="w-1.5 h-1.5 rounded-full bg-sky-500" />
                            {isRow ? "direction: horizontal ↔" : "direction: wrap flex ↕"}
                        </span>
                        <span className="text-sky-700 font-bold bg-sky-50 px-1 py-0.2 rounded">padding: 12px</span>
                    </div>

                    <motion.div
                        layout
                        className="bg-sky-50/80 rounded-lg p-2 border border-dashed border-sky-300 min-h-[64px] flex items-center justify-center"
                    >
                        <motion.div
                            layout
                            className={`flex ${isRow ? "flex-row" : "flex-row flex-wrap"} items-center justify-center`}
                            style={{ gap: `${gap}px` }}
                        >
                            <motion.div layout className="bg-sky-600 text-white rounded-md px-2 py-1 text-[8px] font-bold shadow-xs">
                                Tag 01
                            </motion.div>
                            <motion.div layout className="bg-blue-600 text-white rounded-md px-2 py-1 text-[8px] font-bold shadow-xs">
                                Button 02
                            </motion.div>
                            <motion.div layout className="bg-indigo-600 text-white rounded-md px-2 py-1 text-[8px] font-bold shadow-xs">
                                Card 03
                            </motion.div>
                        </motion.div>
                    </motion.div>
                </div>

                <div className="w-full py-2 rounded-lg font-bold tracking-widest uppercase text-[10px] bg-sky-700 text-white text-center shadow-sm">
                    {buttonText || "ADAPTIVE"}
                </div>
            </div>

            <div className="w-full bg-sky-200/60 h-1 rounded-full overflow-hidden">
                <motion.div
                    key={`${gap}-${isRow}`}
                    initial={{ width: "0%" }}
                    animate={{ width: "100%" }}
                    transition={{ duration: 2.0, ease: "linear" }}
                    className="h-full bg-sky-600 rounded-full"
                />
            </div>
        </div>
    );
}

// 5.4 RESPONSIVE DESIGN MOCKUP
function ResponsiveDesignMockup({ buttonText }: { buttonText?: string }) {
    const [device, setDevice] = useState(0);

    const devices = [
        { label: "1440px", icon: Monitor, name: "Desktop", cols: 3, width: "100%" },
        { label: "768px", icon: Tablet, name: "Tablet", cols: 2, width: "75%" },
        { label: "375px", icon: Smartphone, name: "Mobile", cols: 1, width: "50%" },
    ];

    useEffect(() => {
        let isMounted = true;
        const interval = setInterval(() => {
            if (!isMounted) return;
            setDevice(d => (d + 1) % 3);
        }, 2200);
        return () => { isMounted = false; clearInterval(interval); };
    }, []);

    const cur = devices[device];
    const Icon = cur.icon;

    return (
        <div className="w-full max-w-[270px] bg-white/30 backdrop-blur-md rounded-2xl p-3.5 border border-white/60 shadow-lg min-h-[220px] flex flex-col justify-between overflow-hidden text-gray-800">
            <div className="flex items-center justify-between pb-1.5 border-b border-indigo-200/50">
                <span className="text-[9px] font-bold text-gray-800 tracking-wider uppercase flex items-center gap-1.5">
                    <Icon className="w-3.5 h-3.5 text-indigo-700" />
                    {cur.name} VIEWPORT
                </span>
                <span className="text-[7.5px] font-bold text-indigo-700 bg-indigo-100/90 px-1.5 py-0.5 rounded font-mono">
                    {cur.label}
                </span>
            </div>

            <div className="min-h-[145px] flex flex-col justify-center my-1 gap-2">
                <div className="flex items-center justify-between bg-white/80 p-1 rounded-lg border border-indigo-100 text-[8px] font-bold">
                    {devices.map((d, i) => {
                        const DevIcon = d.icon;
                        const isSel = i === device;
                        return (
                            <div
                                key={i}
                                className={`flex-1 py-1 rounded flex items-center justify-center gap-1 transition-all ${
                                    isSel ? "bg-indigo-600 text-white shadow-xs" : "text-gray-500"
                                }`}
                            >
                                <DevIcon className="w-2.5 h-2.5" />
                                <span>{d.name}</span>
                            </div>
                        );
                    })}
                </div>

                <div className="bg-white/85 rounded-xl p-2.5 border border-indigo-200/70 shadow-sm flex flex-col items-center justify-center min-h-[64px]">
                    <motion.div
                        layout
                        style={{ width: cur.width }}
                        className="bg-indigo-50/70 rounded-lg p-1.5 border border-indigo-200 flex flex-col gap-1 transition-all duration-300"
                    >
                        <div className="h-2 bg-indigo-300 rounded-sm w-full" />
                        <div className={`grid ${cur.cols === 3 ? "grid-cols-3" : cur.cols === 2 ? "grid-cols-2" : "grid-cols-1"} gap-1 mt-0.5`}>
                            <div className="h-3.5 bg-indigo-600 rounded-sm" />
                            <div className="h-3.5 bg-blue-500 rounded-sm" />
                            {cur.cols >= 2 && <div className="h-3.5 bg-purple-500 rounded-sm" />}
                        </div>
                    </motion.div>
                </div>

                <div className="w-full py-2 rounded-lg font-bold tracking-widest uppercase text-[10px] bg-indigo-800 text-white text-center shadow-sm">
                    {buttonText || "RESPONSIVE"}
                </div>
            </div>

            <div className="w-full bg-indigo-200/60 h-1 rounded-full overflow-hidden">
                <motion.div
                    key={device}
                    initial={{ width: "0%" }}
                    animate={{ width: "100%" }}
                    transition={{ duration: 2.2, ease: "linear" }}
                    className="h-full bg-indigo-600 rounded-full"
                />
            </div>
        </div>
    );
}

// 5.5 DESIGN TOKENS MOCKUP
function DesignTokensMockup({ buttonText }: { buttonText?: string }) {
    const [activeIdx, setActiveIdx] = useState(0);

    const tokens = [
        { label: "color.brand.primary", val: "#4464DD", preview: "color", hex: "#4464DD" },
        { label: "typography.h1.size", val: "32px / 1.25", preview: "font", hex: "#222" },
        { label: "spacing.container.pad", val: "24px (1.5rem)", preview: "space", hex: "#008EDF" },
        { label: "radius.card.corner", val: "16px rounded", preview: "radius", hex: "#BC44DD" },
    ];

    useEffect(() => {
        let isMounted = true;
        const interval = setInterval(() => {
            if (!isMounted) return;
            setActiveIdx(idx => (idx + 1) % tokens.length);
        }, 1800);
        return () => { isMounted = false; clearInterval(interval); };
    }, [tokens.length]);

    const cur = tokens[activeIdx];

    return (
        <div className="w-full max-w-[270px] bg-white/30 backdrop-blur-md rounded-2xl p-3.5 border border-white/60 shadow-lg min-h-[220px] flex flex-col justify-between overflow-hidden text-gray-800">
            <div className="flex items-center justify-between pb-1.5 border-b border-rose-200/50">
                <span className="text-[9px] font-bold text-gray-800 tracking-wider uppercase flex items-center gap-1.5">
                    <Tag className="w-3.5 h-3.5 text-rose-600" />
                    W3C DESIGN TOKENS
                </span>
                <span className="text-[7.5px] font-bold text-rose-700 bg-rose-100/90 px-1.5 py-0.5 rounded font-mono">
                    JSON SPEC
                </span>
            </div>

            <div className="min-h-[145px] flex flex-col justify-center my-1 gap-2">
                <div className="flex gap-1 overflow-x-hidden text-[7.5px] font-bold">
                    {tokens.map((t, i) => (
                        <div
                            key={i}
                            className={`flex-1 py-1 px-1 rounded text-center truncate font-mono ${
                                i === activeIdx ? "bg-rose-600 text-white shadow-xs" : "bg-white/70 text-gray-600"
                            }`}
                        >
                            {t.preview}
                        </div>
                    ))}
                </div>

                <div className="bg-white/85 rounded-xl p-2.5 border border-rose-200/70 shadow-sm flex flex-col gap-1.5">
                    <div className="flex items-center justify-between">
                        <span className="text-[8px] font-mono text-gray-500 truncate">{cur.label}</span>
                        <span className="w-2 h-2 rounded-full" style={{ backgroundColor: cur.hex }} />
                    </div>

                    <div className="flex items-center justify-between bg-rose-50/70 p-2 rounded-lg border border-rose-100">
                        <div className="font-mono text-[10px] font-bold text-gray-900">{cur.val}</div>
                        <span className="text-[7px] font-bold text-emerald-700 bg-emerald-100 px-1.5 py-0.5 rounded">
                            COPIED ✓
                        </span>
                    </div>
                </div>

                <div className="w-full py-2 rounded-lg font-bold tracking-widest uppercase text-[10px] bg-rose-700 text-white text-center shadow-sm">
                    {buttonText || "TOKENS"}
                </div>
            </div>

            <div className="w-full bg-rose-200/60 h-1 rounded-full overflow-hidden">
                <motion.div
                    key={activeIdx}
                    initial={{ width: "0%" }}
                    animate={{ width: "100%" }}
                    transition={{ duration: 1.8, ease: "linear" }}
                    className="h-full bg-rose-600 rounded-full"
                />
            </div>
        </div>
    );
}

// 5.6 CLEAR NAMING MOCKUP
function ClearNamingMockup({ buttonText }: { buttonText?: string }) {
    const [isClean, setIsClean] = useState(false);

    useEffect(() => {
        let isMounted = true;
        let timer: NodeJS.Timeout;
        const loop = () => {
            setIsClean(false);
            timer = setTimeout(() => {
                if (!isMounted) return;
                setIsClean(true);
                timer = setTimeout(() => {
                    if (!isMounted) return;
                    loop();
                }, 3000);
            }, 1600);
        };
        loop();
        return () => { isMounted = false; clearTimeout(timer); };
    }, []);

    const dirtyLayers = ["Frame 384", "Group 29", "Rectangle 12", "Vector 4"];
    const cleanLayers = ["header-nav", "btn-primary-cta", "hero-card-cover", "icon-logo"];

    return (
        <div className="w-full max-w-[270px] bg-white/30 backdrop-blur-md rounded-2xl p-3.5 border border-white/60 shadow-lg min-h-[220px] flex flex-col justify-between overflow-hidden text-gray-800">
            <div className="flex items-center justify-between pb-1.5 border-b border-blue-200/50">
                <span className="text-[9px] font-bold text-gray-800 tracking-wider uppercase flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-blue-600" />
                    LAYER LINTER
                </span>
                <span className={`text-[7.5px] font-bold px-1.5 py-0.5 rounded flex items-center gap-1 ${
                    isClean ? "bg-emerald-100 text-emerald-800" : "bg-amber-100 text-amber-800"
                }`}>
                    <span className={`w-1.5 h-1.5 rounded-full ${isClean ? "bg-emerald-500" : "bg-amber-500 animate-pulse"}`} />
                    {isClean ? "100% CLEAN" : "LINTING..."}
                </span>
            </div>

            <div className="min-h-[145px] flex flex-col justify-center my-1 gap-2">
                <div className="bg-white/85 rounded-xl p-2.5 border border-blue-200/70 shadow-sm flex flex-col gap-1.5">
                    <div className="flex items-center justify-between text-[7px] font-mono text-gray-500 pb-1 border-b border-gray-100">
                        <span>{isClean ? "SEMANTIC BEM NAMING" : "UNNAMED LAYERS FOUND"}</span>
                        <span>{isClean ? "PASSED ✓" : "WARNING ⚠️"}</span>
                    </div>

                    <div className="grid grid-cols-2 gap-1 text-[8px] font-mono">
                        {(isClean ? cleanLayers : dirtyLayers).map((l, i) => (
                            <motion.div
                                key={`${isClean}-${i}`}
                                initial={{ opacity: 0, y: 3 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.2, delay: i * 0.05 }}
                                className={`px-2 py-1 rounded truncate border flex items-center gap-1 ${
                                    isClean 
                                        ? "bg-emerald-50/90 border-emerald-200 text-emerald-800 font-bold" 
                                        : "bg-amber-50/80 border-amber-200 text-amber-900"
                                }`}
                            >
                                <span>{isClean ? "✓" : "•"}</span>
                                <span className="truncate">{l}</span>
                            </motion.div>
                        ))}
                    </div>
                </div>

                <div className={`w-full py-2 rounded-lg font-bold tracking-widest uppercase text-[10px] text-center shadow-sm transition-colors ${
                    isClean ? "bg-emerald-700 text-white" : "bg-blue-600 text-white"
                }`}>
                    {isClean ? "STRUCTURE CLEANED ✓" : buttonText || "STRUCTURE"}
                </div>
            </div>

            <div className="w-full bg-blue-200/60 h-1 rounded-full overflow-hidden">
                <motion.div
                    key={isClean ? "c1" : "c2"}
                    initial={{ width: "0%" }}
                    animate={{ width: "100%" }}
                    transition={{ duration: isClean ? 3.0 : 1.6, ease: "linear" }}
                    className="h-full bg-blue-600 rounded-full"
                />
            </div>
        </div>
    );
}

// 5.7 DEVELOPER NOTES MOCKUP
function DeveloperNotesMockup({ buttonText }: { buttonText?: string }) {
    const [tab, setTab] = useState(0);

    const snippets = [
        `display: flex;\ngap: 16px;\nborder-radius: 12px;`,
        `<Button variant="primary"\n  size="md"\n  onClick={...} />`,
        `📦 4 SVG icons\n🎨 2x Retina PNG\n🚀 Export ready`,
    ];

    useEffect(() => {
        let isMounted = true;
        const interval = setInterval(() => {
            if (!isMounted) return;
            setTab(t => (t + 1) % 3);
        }, 2100);
        return () => { isMounted = false; clearInterval(interval); };
    }, []);

    const tabs = ["CSS", "REACT", "ASSETS"];

    return (
        <div className="w-full max-w-[270px] bg-white/30 backdrop-blur-md rounded-2xl p-3.5 border border-white/60 shadow-lg min-h-[220px] flex flex-col justify-between overflow-hidden text-gray-800">
            <div className="flex items-center justify-between pb-1.5 border-b border-purple-200/50">
                <span className="text-[9px] font-bold text-gray-800 tracking-wider uppercase flex items-center gap-1.5">
                    <FileCode className="w-3.5 h-3.5 text-purple-600" />
                    FIGMA DEV MODE
                </span>
                <span className="text-[7.5px] font-bold text-purple-700 bg-purple-100/90 px-1.5 py-0.5 rounded font-mono">
                    HANDOFF READY
                </span>
            </div>

            <div className="min-h-[145px] flex flex-col justify-center my-1 gap-2">
                <div className="flex items-center justify-between bg-white/80 p-1 rounded-lg border border-purple-100 text-[8px] font-bold">
                    {tabs.map((t, i) => (
                        <div
                            key={i}
                            className={`flex-1 py-1 text-center rounded transition-all font-mono ${
                                i === tab ? "bg-purple-600 text-white shadow-xs" : "text-gray-500"
                            }`}
                        >
                            {t}
                        </div>
                    ))}
                </div>

                <div className="bg-gray-900 text-purple-200 rounded-xl p-2.5 shadow-sm font-mono text-[8px] flex flex-col justify-between min-h-[64px]">
                    <pre className="overflow-x-hidden leading-tight font-mono text-[7.5px]">
                        <code>{snippets[tab]}</code>
                    </pre>
                    <div className="flex items-center justify-between pt-1 border-t border-gray-800 text-[7px] text-gray-400">
                        <span>Redlines: 16px · 24px</span>
                        <span className="text-emerald-400">100% Ready</span>
                    </div>
                </div>

                <div className="w-full py-2 rounded-lg font-bold tracking-widest uppercase text-[10px] bg-purple-700 text-white text-center shadow-sm">
                    {buttonText || "SPECS"}
                </div>
            </div>

            <div className="w-full bg-purple-200/60 h-1 rounded-full overflow-hidden">
                <motion.div
                    key={tab}
                    initial={{ width: "0%" }}
                    animate={{ width: "100%" }}
                    transition={{ duration: 2.1, ease: "linear" }}
                    className="h-full bg-purple-600 rounded-full"
                />
            </div>
        </div>
    );
}

// 5.8 DESIGN QA SUPPORT MOCKUP
function DesignQaSupportMockup({ buttonText }: { buttonText?: string }) {
    const [score, setScore] = useState(88);

    useEffect(() => {
        let isMounted = true;
        let timer: NodeJS.Timeout;
        const loop = () => {
            setScore(88);
            timer = setTimeout(() => {
                if (!isMounted) return;
                setScore(100);
                timer = setTimeout(() => {
                    if (!isMounted) return;
                    loop();
                }, 3200);
            }, 1500);
        };
        loop();
        return () => { isMounted = false; clearTimeout(timer); };
    }, []);

    const checks = [
        { label: "Typography Hierarchy", pass: true },
        { label: "WCAG AAA Contrast", pass: true },
        { label: "Pixel Perfect Alignment", pass: score === 100 },
    ];

    return (
        <div className="w-full max-w-[270px] bg-white/30 backdrop-blur-md rounded-2xl p-3.5 border border-white/60 shadow-lg min-h-[220px] flex flex-col justify-between overflow-hidden text-gray-800">
            <div className="flex items-center justify-between pb-1.5 border-b border-blue-200/50">
                <span className="text-[9px] font-bold text-gray-800 tracking-wider uppercase flex items-center gap-1.5">
                    <ShieldCheck className="w-3.5 h-3.5 text-blue-700" />
                    DESIGN QA AUDIT
                </span>
                <span className={`text-[7.5px] font-bold px-1.5 py-0.5 rounded flex items-center gap-1 ${
                    score === 100 ? "bg-emerald-100 text-emerald-800" : "bg-blue-100 text-blue-800"
                }`}>
                    {score === 100 ? "ALL PASSED ✓" : "AUDITING..."}
                </span>
            </div>

            <div className="min-h-[145px] flex flex-col justify-center my-1 gap-2">
                <div className="bg-white/85 rounded-xl p-2.5 border border-blue-200/70 shadow-sm flex flex-col gap-1.5">
                    <div className="flex items-center justify-between">
                        <span className="text-[8px] font-bold text-gray-700 uppercase">Audit Match Score</span>
                        <span className="text-[11px] font-mono font-bold text-blue-700">{score}%</span>
                    </div>

                    <div className="w-full bg-gray-100 h-1.5 rounded-full overflow-hidden">
                        <motion.div
                            animate={{ width: `${score}%` }}
                            transition={{ duration: 0.6 }}
                            className={`h-full rounded-full ${score === 100 ? "bg-emerald-500" : "bg-blue-600"}`}
                        />
                    </div>

                    <div className="space-y-1 mt-1 text-[7.5px] font-medium text-gray-600">
                        {checks.map((c, i) => (
                            <div key={i} className="flex items-center justify-between">
                                <span className="flex items-center gap-1">
                                    <span className={`w-1.5 h-1.5 rounded-full ${c.pass ? "bg-emerald-500" : "bg-amber-400"}`} />
                                    {c.label}
                                </span>
                                <span className={`font-bold ${c.pass ? "text-emerald-700" : "text-amber-600"}`}>
                                    {c.pass ? "PASS ✓" : "CHECK"}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>

                <div className={`w-full py-2 rounded-lg font-bold tracking-widest uppercase text-[10px] text-center shadow-sm transition-colors ${
                    score === 100 ? "bg-emerald-700 text-white" : "bg-blue-800 text-white"
                }`}>
                    {score === 100 ? "QA SIGNED OFF ✓" : buttonText || "QA SUPPORT"}
                </div>
            </div>

            <div className="w-full bg-blue-200/60 h-1 rounded-full overflow-hidden">
                <motion.div
                    key={score}
                    initial={{ width: "0%" }}
                    animate={{ width: "100%" }}
                    transition={{ duration: score === 100 ? 3.2 : 1.5, ease: "linear" }}
                    className="h-full bg-blue-600 rounded-full"
                />
            </div>
        </div>
    );
}

// 5.9 UI/UX FALLBACK MOCKUP
function UiUxDesignMockup({ title, buttonText }: { title?: string; buttonText?: string }) {
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
                <div className="flex items-center justify-between bg-white/80 p-1 rounded-lg border border-indigo-100 text-[8px] font-bold text-center">
                    {["Primary", "Ghost", "Outline"].map((tab, i) => (
                        <div key={i} className={`flex-1 py-1 rounded transition-all ${
                            activeTab === i ? "bg-indigo-600 text-white shadow-xs" : "text-gray-600"
                        }`}>{tab}</div>
                    ))}
                </div>

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
   6. DIGITAL MARKETING & SEO DEDICATED HEADER MOCKUPS
   ========================================================================= */

// 6.1 FAST WEBSITE MOCKUP
function FastWebsiteMockup({ buttonText }: { buttonText?: string }) {
    const [score, setScore] = useState(65);

    useEffect(() => {
        let isMounted = true;
        let timer: NodeJS.Timeout;
        const loop = () => {
            setScore(65);
            timer = setTimeout(() => {
                if (!isMounted) return;
                setScore(100);
                timer = setTimeout(() => {
                    if (!isMounted) return;
                    loop();
                }, 3200);
            }, 1400);
        };
        loop();
        return () => { isMounted = false; clearTimeout(timer); };
    }, []);

    return (
        <div className="w-full max-w-[270px] bg-white/30 backdrop-blur-md rounded-2xl p-3.5 border border-white/60 shadow-lg min-h-[220px] flex flex-col justify-between overflow-hidden text-gray-800">
            <div className="flex items-center justify-between pb-1.5 border-b border-blue-200/50">
                <span className="text-[9px] font-bold text-gray-800 tracking-wider uppercase flex items-center gap-1.5">
                    <Gauge className="w-3.5 h-3.5 text-blue-700" />
                    PAGESPEED INSIGHTS
                </span>
                <span className={`text-[7.5px] font-bold px-1.5 py-0.5 rounded font-mono ${
                    score === 100 ? "bg-emerald-100 text-emerald-800" : "bg-blue-100 text-blue-800"
                }`}>
                    {score === 100 ? "100/100 PERFECT" : "BENCHMARKING"}
                </span>
            </div>

            <div className="min-h-[145px] flex flex-col justify-center my-1 gap-2">
                <div className="bg-white/85 rounded-xl p-2.5 border border-blue-200/70 shadow-sm flex items-center justify-between">
                    <div>
                        <div className="text-[8px] font-semibold text-gray-500 uppercase">Load Time</div>
                        <div className="text-[13px] font-mono font-bold text-gray-900 mt-0.5">
                            {score === 100 ? "0.4s Lightning" : "1.8s Testing..."}
                        </div>
                    </div>
                    <div className={`w-10 h-10 rounded-full border-2 flex items-center justify-center font-bold text-[12px] font-mono shadow-xs transition-colors ${
                        score === 100 ? "border-emerald-500 text-emerald-700 bg-emerald-50" : "border-blue-400 text-blue-700 bg-blue-50"
                    }`}>
                        {score}
                    </div>
                </div>

                <div className="grid grid-cols-3 gap-1 text-[7px] font-mono text-center">
                    <div className="bg-white/80 p-1 rounded border border-blue-100">
                        <span className="text-gray-500">LCP:</span> <span className="font-bold text-emerald-700">0.6s</span>
                    </div>
                    <div className="bg-white/80 p-1 rounded border border-blue-100">
                        <span className="text-gray-500">FID:</span> <span className="font-bold text-emerald-700">8ms</span>
                    </div>
                    <div className="bg-white/80 p-1 rounded border border-blue-100">
                        <span className="text-gray-500">CLS:</span> <span className="font-bold text-emerald-700">0.00</span>
                    </div>
                </div>

                <div className={`w-full py-2 rounded-lg font-bold tracking-widest uppercase text-[10px] text-center shadow-sm transition-colors ${
                    score === 100 ? "bg-emerald-700 text-white" : "bg-blue-700 text-white"
                }`}>
                    {buttonText || "PERFORMANCE"}
                </div>
            </div>

            <div className="w-full bg-blue-200/60 h-1 rounded-full overflow-hidden">
                <motion.div
                    key={score}
                    initial={{ width: "0%" }}
                    animate={{ width: "100%" }}
                    transition={{ duration: score === 100 ? 3.2 : 1.4, ease: "linear" }}
                    className="h-full bg-blue-600 rounded-full"
                />
            </div>
        </div>
    );
}

// 6.2 STRONG BRANDING MARKETING MOCKUP
function StrongBrandingMarketingMockup({ buttonText }: { buttonText?: string }) {
    const [cycle, setCycle] = useState(0);

    const metrics = [
        { label: "BRAND RECALL", val: "94% (+42%)", tag: "Market Leader" },
        { label: "TRUST SCORE", val: "4.9 / 5.0 ★", tag: "Customer Love" },
        { label: "PRICING POWER", val: "+35% Lift", tag: "Premium Margin" },
    ];

    useEffect(() => {
        let isMounted = true;
        const interval = setInterval(() => {
            if (!isMounted) return;
            setCycle(c => (c + 1) % metrics.length);
        }, 1900);
        return () => { isMounted = false; clearInterval(interval); };
    }, [metrics.length]);

    const cur = metrics[cycle];

    return (
        <div className="w-full max-w-[270px] bg-white/30 backdrop-blur-md rounded-2xl p-3.5 border border-white/60 shadow-lg min-h-[220px] flex flex-col justify-between overflow-hidden text-gray-800">
            <div className="flex items-center justify-between pb-1.5 border-b border-purple-200/50">
                <span className="text-[9px] font-bold text-gray-800 tracking-wider uppercase flex items-center gap-1.5">
                    <Award className="w-3.5 h-3.5 text-purple-600" />
                    BRAND AUTHORITY
                </span>
                <span className="text-[7.5px] font-bold text-purple-700 bg-purple-100/90 px-1.5 py-0.5 rounded font-mono">
                    IDENTITY
                </span>
            </div>

            <div className="min-h-[145px] flex flex-col justify-center my-1 gap-2">
                <div className="bg-white/85 rounded-xl p-3 border border-purple-200/70 shadow-sm flex flex-col justify-between min-h-[72px]">
                    <div className="flex items-center justify-between text-[7.5px] font-mono text-gray-500">
                        <span>{cur.label}</span>
                        <span className="text-purple-700 font-bold bg-purple-50 px-1.5 py-0.2 rounded">{cur.tag}</span>
                    </div>

                    <motion.div
                        key={cycle}
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="text-base font-extrabold text-gray-900 my-1 font-mono tracking-tight"
                    >
                        {cur.val}
                    </motion.div>

                    <div className="flex items-center gap-1.5 text-[7px] font-mono text-gray-500">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                        <span>Consistent visual language across all touchpoints</span>
                    </div>
                </div>

                <div className="w-full py-2 rounded-lg font-bold tracking-widest uppercase text-[10px] bg-purple-700 text-white text-center shadow-sm">
                    {buttonText || "IDENTITY"}
                </div>
            </div>

            <div className="w-full bg-purple-200/60 h-1 rounded-full overflow-hidden">
                <motion.div
                    key={cycle}
                    initial={{ width: "0%" }}
                    animate={{ width: "100%" }}
                    transition={{ duration: 1.9, ease: "linear" }}
                    className="h-full bg-purple-600 rounded-full"
                />
            </div>
        </div>
    );
}

// 6.3 SEO FOUNDATIONS MOCKUP
function SeoFoundationsMockup({ buttonText }: { buttonText?: string }) {
    const [rank, setRank] = useState(1);

    useEffect(() => {
        let isMounted = true;
        let timer: NodeJS.Timeout;
        const loop = () => {
            setRank(14);
            timer = setTimeout(() => {
                if (!isMounted) return;
                setRank(4);
                timer = setTimeout(() => {
                    if (!isMounted) return;
                    setRank(1);
                    timer = setTimeout(() => {
                        if (!isMounted) return;
                        loop();
                    }, 3200);
                }, 1000);
            }, 1000);
        };
        loop();
        return () => { isMounted = false; clearTimeout(timer); };
    }, []);

    return (
        <div className="w-full max-w-[270px] bg-white/30 backdrop-blur-md rounded-2xl p-3.5 border border-white/60 shadow-lg min-h-[220px] flex flex-col justify-between overflow-hidden text-gray-800">
            <div className="flex items-center justify-between pb-1.5 border-b border-sky-200/50">
                <span className="text-[9px] font-bold text-gray-800 tracking-wider uppercase flex items-center gap-1.5">
                    <Trophy className="w-3.5 h-3.5 text-sky-700" />
                    ORGANIC SEARCH
                </span>
                <span className={`text-[7.5px] font-bold px-1.5 py-0.5 rounded font-mono ${
                    rank === 1 ? "bg-amber-100 text-amber-800" : "bg-sky-100 text-sky-800"
                }`}>
                    {rank === 1 ? "🏆 #1 RANK GOOGLE" : `CLIMBING #${rank}`}
                </span>
            </div>

            <div className="min-h-[145px] flex flex-col justify-center my-1 gap-2">
                <div className="bg-white/85 rounded-xl p-2.5 border border-sky-200/70 shadow-sm flex flex-col gap-1.5">
                    <div className="flex items-center justify-between text-[7px] font-mono text-gray-500">
                        <span className="truncate">Keyword: "best web agency"</span>
                        <span className="text-emerald-700 font-bold">+340% Traffic</span>
                    </div>

                    <div className="bg-sky-50/70 p-2 rounded-lg border border-sky-100 flex items-center justify-between">
                        <div>
                            <div className="text-[9px] font-bold text-blue-900 truncate">Smrkonova Softech Solutions</div>
                            <div className="text-[7px] text-gray-500 truncate">smrkonova.com · ★★★★★ (4.9)</div>
                        </div>
                        <div className="w-6 h-6 rounded-full bg-amber-400 text-gray-900 flex items-center justify-center font-bold text-[10px] font-mono shadow-xs shrink-0">
                            #{rank}
                        </div>
                    </div>
                </div>

                <div className={`w-full py-2 rounded-lg font-bold tracking-widest uppercase text-[10px] text-center shadow-sm transition-colors ${
                    rank === 1 ? "bg-amber-600 text-white" : "bg-sky-700 text-white"
                }`}>
                    {buttonText || "VISIBILITY"}
                </div>
            </div>

            <div className="w-full bg-sky-200/60 h-1 rounded-full overflow-hidden">
                <motion.div
                    key={rank}
                    initial={{ width: "0%" }}
                    animate={{ width: "100%" }}
                    transition={{ duration: rank === 1 ? 3.2 : 1.0, ease: "linear" }}
                    className="h-full bg-sky-600 rounded-full"
                />
            </div>
        </div>
    );
}

// 6.4 OPTIMISED LANDING PAGES MOCKUP
function OptimisedLandingPagesMockup({ buttonText }: { buttonText?: string }) {
    const [cvr, setCvr] = useState(2.3);

    useEffect(() => {
        let isMounted = true;
        let timer: NodeJS.Timeout;
        const loop = () => {
            setCvr(2.3);
            timer = setTimeout(() => {
                if (!isMounted) return;
                setCvr(8.9);
                timer = setTimeout(() => {
                    if (!isMounted) return;
                    loop();
                }, 3200);
            }, 1400);
        };
        loop();
        return () => { isMounted = false; clearTimeout(timer); };
    }, []);

    const isWinner = cvr > 5;

    return (
        <div className="w-full max-w-[270px] bg-white/30 backdrop-blur-md rounded-2xl p-3.5 border border-white/60 shadow-lg min-h-[220px] flex flex-col justify-between overflow-hidden text-gray-800">
            <div className="flex items-center justify-between pb-1.5 border-b border-indigo-200/50">
                <span className="text-[9px] font-bold text-gray-800 tracking-wider uppercase flex items-center gap-1.5">
                    <MousePointerClick className="w-3.5 h-3.5 text-indigo-700" />
                    CRO A/B SPLIT TEST
                </span>
                <span className={`text-[7.5px] font-bold px-1.5 py-0.5 rounded font-mono ${
                    isWinner ? "bg-emerald-100 text-emerald-800" : "bg-indigo-100 text-indigo-800"
                }`}>
                    {isWinner ? "VARIANT B WON ✓" : "SPLIT TESTING"}
                </span>
            </div>

            <div className="min-h-[145px] flex flex-col justify-center my-1 gap-2">
                <div className="bg-white/85 rounded-xl p-2.5 border border-indigo-200/70 shadow-sm flex flex-col gap-1.5">
                    <div className="grid grid-cols-2 gap-1.5 text-[8px] font-mono">
                        <div className="bg-gray-50 p-1.5 rounded border border-gray-200 text-center">
                            <span className="text-gray-500">Variant A:</span>
                            <div className="text-gray-700 font-bold mt-0.5">2.3% CVR</div>
                        </div>
                        <div className={`p-1.5 rounded border text-center transition-all ${
                            isWinner ? "bg-emerald-50 border-emerald-300 ring-1 ring-emerald-400" : "bg-indigo-50 border-indigo-200"
                        }`}>
                            <span className="text-indigo-600 font-bold">Variant B (CRO):</span>
                            <div className="text-emerald-700 font-extrabold mt-0.5">{cvr}% CVR 🚀</div>
                        </div>
                    </div>

                    <div className="flex items-center justify-between text-[7px] font-mono text-gray-600 pt-1 border-t border-gray-100">
                        <span>Lift: +286% Conversions</span>
                        <span className="text-emerald-700 font-bold">99.8% Confident</span>
                    </div>
                </div>

                <div className={`w-full py-2 rounded-lg font-bold tracking-widest uppercase text-[10px] text-center shadow-sm transition-colors ${
                    isWinner ? "bg-emerald-700 text-white" : "bg-indigo-700 text-white"
                }`}>
                    {buttonText || "CONVERSION"}
                </div>
            </div>

            <div className="w-full bg-indigo-200/60 h-1 rounded-full overflow-hidden">
                <motion.div
                    key={cvr}
                    initial={{ width: "0%" }}
                    animate={{ width: "100%" }}
                    transition={{ duration: isWinner ? 3.2 : 1.4, ease: "linear" }}
                    className="h-full bg-indigo-600 rounded-full"
                />
            </div>
        </div>
    );
}

// 6.5 CONVERSION TRACKING MOCKUP
function ConversionTrackingMockup({ buttonText }: { buttonText?: string }) {
    const [eventIdx, setEventIdx] = useState(0);

    const events = [
        { name: "lead_form_submit", val: "+$4,200", method: "Server-Side CAPI", match: "9.9/10 Match" },
        { name: "phone_call_booked", val: "High Intent", method: "GA4 Measurement", match: "100% Attributed" },
        { name: "whatsapp_click", val: "Instant Chat", method: "Meta Offline API", match: "Zero Drop-off" },
    ];

    useEffect(() => {
        let isMounted = true;
        const interval = setInterval(() => {
            if (!isMounted) return;
            setEventIdx(e => (e + 1) % events.length);
        }, 1900);
        return () => { isMounted = false; clearInterval(interval); };
    }, [events.length]);

    const cur = events[eventIdx];

    return (
        <div className="w-full max-w-[270px] bg-white/30 backdrop-blur-md rounded-2xl p-3.5 border border-white/60 shadow-lg min-h-[220px] flex flex-col justify-between overflow-hidden text-gray-800">
            <div className="flex items-center justify-between pb-1.5 border-b border-rose-200/50">
                <span className="text-[9px] font-bold text-gray-800 tracking-wider uppercase flex items-center gap-1.5">
                    <Target className="w-3.5 h-3.5 text-rose-600" />
                    ATTRIBUTION ENGINE
                </span>
                <span className="text-[7.5px] font-bold text-rose-700 bg-rose-100/90 px-1.5 py-0.5 rounded font-mono">
                    100% ACCURATE
                </span>
            </div>

            <div className="min-h-[145px] flex flex-col justify-center my-1 gap-2">
                <div className="bg-white/85 rounded-xl p-2.5 border border-rose-200/70 shadow-sm flex flex-col gap-1.5">
                    <div className="flex items-center justify-between text-[7.5px] font-mono text-gray-500">
                        <span className="flex items-center gap-1">
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                            Live Event Stream
                        </span>
                        <span className="text-emerald-700 font-bold">{cur.match}</span>
                    </div>

                    <div className="bg-rose-50/70 p-2 rounded-lg border border-rose-100 flex items-center justify-between">
                        <div>
                            <div className="text-[9px] font-bold font-mono text-gray-900">{cur.name}</div>
                            <div className="text-[7px] text-gray-500 font-mono">{cur.method}</div>
                        </div>
                        <span className="text-[8px] font-bold font-mono text-rose-700 bg-white px-1.5 py-0.5 rounded border border-rose-200">
                            {cur.val}
                        </span>
                    </div>
                </div>

                <div className="w-full py-2 rounded-lg font-bold tracking-widest uppercase text-[10px] bg-rose-700 text-white text-center shadow-sm">
                    {buttonText || "ACCURACY"}
                </div>
            </div>

            <div className="w-full bg-rose-200/60 h-1 rounded-full overflow-hidden">
                <motion.div
                    key={eventIdx}
                    initial={{ width: "0%" }}
                    animate={{ width: "100%" }}
                    transition={{ duration: 1.9, ease: "linear" }}
                    className="h-full bg-rose-600 rounded-full"
                />
            </div>
        </div>
    );
}

// 6.6 QUALITY CONTENT MOCKUP
function QualityContentMockup({ buttonText }: { buttonText?: string }) {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        let isMounted = true;
        let timer: NodeJS.Timeout;
        const loop = () => {
            setProgress(0);
            timer = setTimeout(() => {
                if (!isMounted) return;
                setProgress(100);
                timer = setTimeout(() => {
                    if (!isMounted) return;
                    loop();
                }, 3400);
            }, 800);
        };
        loop();
        return () => { isMounted = false; clearTimeout(timer); };
    }, []);

    return (
        <div className="w-full max-w-[270px] bg-white/30 backdrop-blur-md rounded-2xl p-3.5 border border-white/60 shadow-lg min-h-[220px] flex flex-col justify-between overflow-hidden text-gray-800">
            <div className="flex items-center justify-between pb-1.5 border-b border-blue-200/50">
                <span className="text-[9px] font-bold text-gray-800 tracking-wider uppercase flex items-center gap-1.5">
                    <FileText className="w-3.5 h-3.5 text-blue-700" />
                    EDITORIAL AUTHORITY
                </span>
                <span className="text-[7.5px] font-bold text-blue-700 bg-blue-100/90 px-1.5 py-0.5 rounded font-mono">
                    E-E-A-T CERTIFIED
                </span>
            </div>

            <div className="min-h-[145px] flex flex-col justify-center my-1 gap-2">
                <div className="bg-white/85 rounded-xl p-2.5 border border-blue-200/70 shadow-sm flex flex-col gap-1.5">
                    <div className="flex items-center justify-between text-[8px] font-bold text-gray-900">
                        <span className="truncate">Top-Ranked Industry Guide</span>
                        <span className="text-emerald-700 font-mono">Top 2%</span>
                    </div>

                    <div className="space-y-1 text-[7.5px] font-mono text-gray-600">
                        <div className="flex items-center justify-between bg-blue-50/60 p-1 rounded">
                            <span>Avg. Read Dwell Time:</span>
                            <span className="font-bold text-blue-900">4m 45s</span>
                        </div>
                        <div className="flex items-center justify-between bg-blue-50/60 p-1 rounded">
                            <span>High-DR Backlinks:</span>
                            <span className="font-bold text-emerald-700">+28 Earned</span>
                        </div>
                    </div>
                </div>

                <div className="w-full py-2 rounded-lg font-bold tracking-widest uppercase text-[10px] bg-blue-700 text-white text-center shadow-sm">
                    {buttonText || "AUTHORITY"}
                </div>
            </div>

            <div className="w-full bg-blue-200/60 h-1 rounded-full overflow-hidden">
                <motion.div
                    key={progress}
                    initial={{ width: "0%" }}
                    animate={{ width: `${progress}%` }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="h-full bg-blue-600 rounded-full"
                />
            </div>
        </div>
    );
}

// 6.7 PERFORMANCE CAMPAIGNS MOCKUP
function PerformanceCampaignsMockup({ buttonText }: { buttonText?: string }) {
    const [roas, setRoas] = useState(3.2);

    useEffect(() => {
        let isMounted = true;
        let timer: NodeJS.Timeout;
        const loop = () => {
            setRoas(3.2);
            timer = setTimeout(() => {
                if (!isMounted) return;
                setRoas(5.7);
                timer = setTimeout(() => {
                    if (!isMounted) return;
                    loop();
                }, 3400);
            }, 1400);
        };
        loop();
        return () => { isMounted = false; clearTimeout(timer); };
    }, []);

    const isScaled = roas > 4;

    return (
        <div className="w-full max-w-[270px] bg-white/30 backdrop-blur-md rounded-2xl p-3.5 border border-white/60 shadow-lg min-h-[220px] flex flex-col justify-between overflow-hidden text-gray-800">
            <div className="flex items-center justify-between pb-1.5 border-b border-purple-200/50">
                <span className="text-[9px] font-bold text-gray-800 tracking-wider uppercase flex items-center gap-1.5">
                    <Rocket className="w-3.5 h-3.5 text-purple-600" />
                    PAID ACQUISITION
                </span>
                <span className={`text-[7.5px] font-bold px-1.5 py-0.5 rounded font-mono ${
                    isScaled ? "bg-emerald-100 text-emerald-800" : "bg-purple-100 text-purple-800"
                }`}>
                    {isScaled ? "5.7X ROAS SCALING" : "OPTIMIZING"}
                </span>
            </div>

            <div className="min-h-[145px] flex flex-col justify-center my-1 gap-2">
                <div className="bg-white/85 rounded-xl p-2.5 border border-purple-200/70 shadow-sm flex flex-col gap-1.5">
                    <div className="flex items-center justify-between">
                        <div>
                            <div className="text-[7.5px] font-mono text-gray-500 uppercase">Blended ROAS</div>
                            <div className="text-[14px] font-bold font-mono text-purple-900 mt-0.5">{roas}x Return</div>
                        </div>
                        <div className="text-right text-[7.5px] font-mono">
                            <div className="text-gray-500">Ad Spend: $1,250</div>
                            <div className="text-emerald-700 font-bold font-mono">Revenue: $7,125</div>
                        </div>
                    </div>

                    <div className="h-6 flex items-end gap-1 px-1 pt-1 border-t border-gray-100">
                        {[40, 55, 60, 75, 85, 100].map((h, i) => (
                            <motion.div
                                key={i}
                                initial={{ height: 0 }}
                                animate={{ height: `${(h * roas) / 5.7}%` }}
                                transition={{ duration: 0.4, delay: i * 0.05 }}
                                className={`flex-1 rounded-t-sm ${i === 5 ? "bg-purple-700" : "bg-purple-300"}`}
                            />
                        ))}
                    </div>
                </div>

                <div className={`w-full py-2 rounded-lg font-bold tracking-widest uppercase text-[10px] text-center shadow-sm transition-colors ${
                    isScaled ? "bg-emerald-700 text-white" : "bg-purple-700 text-white"
                }`}>
                    {buttonText || "PAID ACQUISITION"}
                </div>
            </div>

            <div className="w-full bg-purple-200/60 h-1 rounded-full overflow-hidden">
                <motion.div
                    key={roas}
                    initial={{ width: "0%" }}
                    animate={{ width: "100%" }}
                    transition={{ duration: isScaled ? 3.4 : 1.4, ease: "linear" }}
                    className="h-full bg-purple-600 rounded-full"
                />
            </div>
        </div>
    );
}

// 6.8 CONTINUOUS OPTIMISATION MOCKUP
function ContinuousOptimisationMockup({ buttonText }: { buttonText?: string }) {
    const [step, setStep] = useState(0);

    const stages = [
        { name: "1. Audit Data", metric: "+12% Baseline" },
        { name: "2. Hypothesis", metric: "3 Tests Queued" },
        { name: "3. A/B Testing", metric: "Active Sprint" },
        { name: "4. Scale Winner", metric: "+164% YoY Lift" },
    ];

    useEffect(() => {
        let isMounted = true;
        const interval = setInterval(() => {
            if (!isMounted) return;
            setStep(s => (s + 1) % stages.length);
        }, 1800);
        return () => { isMounted = false; clearInterval(interval); };
    }, [stages.length]);

    const cur = stages[step];

    return (
        <div className="w-full max-w-[270px] bg-white/30 backdrop-blur-md rounded-2xl p-3.5 border border-white/60 shadow-lg min-h-[220px] flex flex-col justify-between overflow-hidden text-gray-800">
            <div className="flex items-center justify-between pb-1.5 border-b border-sky-200/50">
                <span className="text-[9px] font-bold text-gray-800 tracking-wider uppercase flex items-center gap-1.5">
                    <RefreshCw className="w-3.5 h-3.5 text-sky-700" />
                    GROWTH FLYWHEEL
                </span>
                <span className="text-[7.5px] font-bold text-sky-700 bg-sky-100/90 px-1.5 py-0.5 rounded font-mono">
                    SPRINT #16
                </span>
            </div>

            <div className="min-h-[145px] flex flex-col justify-center my-1 gap-2">
                <div className="bg-white/85 rounded-xl p-2.5 border border-sky-200/70 shadow-sm flex flex-col gap-1.5">
                    <div className="grid grid-cols-2 gap-1 text-[7px] font-mono">
                        {stages.map((st, i) => (
                            <div
                                key={i}
                                className={`p-1 rounded border text-center transition-all ${
                                    i === step ? "bg-sky-600 text-white font-bold shadow-xs border-sky-600" : "bg-sky-50 text-gray-600 border-sky-100"
                                }`}
                            >
                                {st.name}
                            </div>
                        ))}
                    </div>

                    <div className="flex items-center justify-between text-[7.5px] font-mono pt-1 border-t border-gray-100">
                        <span>Current Focus:</span>
                        <span className="text-emerald-700 font-bold">{cur.metric}</span>
                    </div>
                </div>

                <div className="w-full py-2 rounded-lg font-bold tracking-widest uppercase text-[10px] bg-sky-700 text-white text-center shadow-sm">
                    {buttonText || "GROWTH"}
                </div>
            </div>

            <div className="w-full bg-sky-200/60 h-1 rounded-full overflow-hidden">
                <motion.div
                    key={step}
                    initial={{ width: "0%" }}
                    animate={{ width: "100%" }}
                    transition={{ duration: 1.8, ease: "linear" }}
                    className="h-full bg-sky-600 rounded-full"
                />
            </div>
        </div>
    );
}

// 6.9 DIGITAL MARKETING FALLBACK MOCKUP
function DigitalMarketingMockup({ title, buttonText }: { title?: string; buttonText?: string }) {
    const [score, setScore] = useState(70);

    useEffect(() => {
        let isMounted = true;
        let timer: NodeJS.Timeout;
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
   8. CREATIVE STUDIO & 3D MOTION DEDICATED MOCKUPS (16 FEATURES)
   ========================================================================= */

// 8.1 PRODUCT EXPLODED VIEWS MOCKUP
function ExplodedViewsMockup({ buttonText }: { buttonText?: string }) {
    const [exploded, setExploded] = useState(false);

    useEffect(() => {
        let isMounted = true;
        let timer: NodeJS.Timeout;
        const loop = () => {
            setExploded(false);
            timer = setTimeout(() => {
                if (!isMounted) return;
                setExploded(true);
                timer = setTimeout(() => {
                    if (!isMounted) return;
                    loop();
                }, 3200);
            }, 1200);
        };
        loop();
        return () => { isMounted = false; clearTimeout(timer); };
    }, []);

    return (
        <div className="w-full max-w-[270px] bg-white/30 backdrop-blur-md rounded-2xl p-3.5 border border-white/60 shadow-lg min-h-[220px] flex flex-col justify-between overflow-hidden text-gray-800">
            <div className="flex items-center justify-between pb-1.5 border-b border-blue-200/50">
                <span className="text-[9px] font-bold text-gray-800 tracking-wider uppercase flex items-center gap-1.5">
                    <Box className="w-3.5 h-3.5 text-blue-700" />
                    3D CAD EXPLODED
                </span>
                <span className={`text-[7.5px] font-bold px-1.5 py-0.5 rounded font-mono ${
                    exploded ? "bg-emerald-100 text-emerald-800" : "bg-blue-100 text-blue-800"
                }`}>
                    {exploded ? "DISASSEMBLED · 0.02MM" : "ALIGNED"}
                </span>
            </div>

            <div className="min-h-[145px] flex flex-col justify-center my-1 gap-2">
                <div className="bg-slate-900 rounded-xl p-3 border border-slate-700/80 shadow-inner flex flex-col items-center justify-center relative h-26 overflow-hidden">
                    {/* Top Layer */}
                    <motion.div
                        animate={{ y: exploded ? -18 : 0, scale: exploded ? 1.05 : 1 }}
                        transition={{ type: "spring", stiffness: 300, damping: 20 }}
                        className="w-24 h-4 rounded bg-blue-500/80 border border-blue-300 flex items-center justify-between px-2 text-[6.5px] font-mono text-white shadow-md z-30"
                    >
                        <span>TOP CHASSIS</span>
                        <span className="text-blue-200 font-bold">L1</span>
                    </motion.div>

                    {/* Middle Core Layer */}
                    <motion.div
                        animate={{ scale: exploded ? 1.08 : 1 }}
                        transition={{ type: "spring", stiffness: 300, damping: 20 }}
                        className="w-20 h-4 my-1 rounded bg-indigo-600/90 border border-indigo-400 flex items-center justify-between px-2 text-[6.5px] font-mono text-white shadow-md z-20"
                    >
                        <span>CORE OPTICS</span>
                        <span className="text-indigo-200 font-bold">L2</span>
                    </motion.div>

                    {/* Bottom Base Layer */}
                    <motion.div
                        animate={{ y: exploded ? 18 : 0, scale: exploded ? 1.05 : 1 }}
                        transition={{ type: "spring", stiffness: 300, damping: 20 }}
                        className="w-24 h-4 rounded bg-cyan-600/80 border border-cyan-300 flex items-center justify-between px-2 text-[6.5px] font-mono text-white shadow-md z-10"
                    >
                        <span>BASE SUBSTRATE</span>
                        <span className="text-cyan-200 font-bold">L3</span>
                    </motion.div>

                    <div className="absolute bottom-1 right-2 text-[6.5px] font-mono text-slate-400">
                        {exploded ? "EXPANDED VIEW" : "CAD ASSEMBLY"}
                    </div>
                </div>

                <div className="w-full py-2 rounded-lg font-bold tracking-widest uppercase text-[10px] bg-blue-700 text-white text-center shadow-sm">
                    {buttonText || "3D TECHNICAL"}
                </div>
            </div>

            <div className="w-full bg-blue-200/60 h-1 rounded-full overflow-hidden">
                <motion.div
                    key={exploded ? "exp" : "col"}
                    initial={{ width: "0%" }}
                    animate={{ width: "100%" }}
                    transition={{ duration: exploded ? 3.2 : 1.2, ease: "linear" }}
                    className="h-full bg-blue-600 rounded-full"
                />
            </div>
        </div>
    );
}

// 8.2 PRODUCT ANIMATION MOCKUP
function ProductAnimationMockup({ buttonText }: { buttonText?: string }) {
    const [renderFrame, setRenderFrame] = useState(1);

    useEffect(() => {
        let isMounted = true;
        const interval = setInterval(() => {
            if (!isMounted) return;
            setRenderFrame(prev => (prev % 60) + 1);
        }, 65);
        return () => { isMounted = false; clearInterval(interval); };
    }, []);

    return (
        <div className="w-full max-w-[270px] bg-white/30 backdrop-blur-md rounded-2xl p-3.5 border border-white/60 shadow-lg min-h-[220px] flex flex-col justify-between overflow-hidden text-gray-800">
            <div className="flex items-center justify-between pb-1.5 border-b border-purple-200/50">
                <span className="text-[9px] font-bold text-gray-800 tracking-wider uppercase flex items-center gap-1.5">
                    <Film className="w-3.5 h-3.5 text-purple-700" />
                    OCTANE RENDER
                </span>
                <span className="text-[7.5px] font-bold text-purple-800 bg-purple-100 px-1.5 py-0.5 rounded font-mono">
                    4K 60FPS · RAYTRACED
                </span>
            </div>

            <div className="min-h-[145px] flex flex-col justify-center my-1 gap-2">
                <div className="relative h-24 bg-gradient-to-br from-neutral-950 via-slate-900 to-purple-950 rounded-xl overflow-hidden p-2 flex items-center justify-center border border-purple-500/30">
                    <motion.div 
                        animate={{ rotateY: 360, rotateX: [0, 15, 0] }}
                        transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
                        className="w-12 h-12 border-2 border-purple-400/80 rounded-xl flex items-center justify-center shadow-lg shadow-purple-500/30 relative"
                    >
                        <div className="w-6 h-6 bg-gradient-to-tr from-pink-500 via-purple-400 to-amber-300 rounded-lg shadow-sm" />
                        <motion.div
                            animate={{ opacity: [0.2, 0.9, 0.2], x: [-15, 15, -15] }}
                            transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
                            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent rounded-xl"
                        />
                    </motion.div>

                    <div className="absolute top-1.5 left-2 flex items-center gap-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" />
                        <span className="text-[6.5px] font-mono text-purple-200 font-bold">OPTIX DENOISE</span>
                    </div>

                    <div className="absolute bottom-1.5 right-2 text-[7px] font-mono text-purple-300">
                        Frame {renderFrame}/60
                    </div>
                </div>

                <div className="w-full py-2 rounded-lg font-bold tracking-widest uppercase text-[10px] bg-purple-700 text-white text-center shadow-sm">
                    {buttonText || "3D RENDER"}
                </div>
            </div>

            <div className="w-full bg-purple-200/60 h-1 rounded-full overflow-hidden">
                <motion.div initial={{ width: "0%" }} animate={{ width: "100%" }} transition={{ duration: 4.0, repeat: Infinity, ease: "linear" }} className="h-full bg-purple-600 rounded-full" />
            </div>
        </div>
    );
}

// 8.3 PACKAGING VISUALISATION MOCKUP
function PackagingVisualisationMockup({ buttonText }: { buttonText?: string }) {
    const [view, setView] = useState<"box" | "dieline">("box");

    useEffect(() => {
        let isMounted = true;
        const interval = setInterval(() => {
            if (!isMounted) return;
            setView(v => v === "box" ? "dieline" : "box");
        }, 2200);
        return () => { isMounted = false; clearInterval(interval); };
    }, []);

    return (
        <div className="w-full max-w-[270px] bg-white/30 backdrop-blur-md rounded-2xl p-3.5 border border-white/60 shadow-lg min-h-[220px] flex flex-col justify-between overflow-hidden text-gray-800">
            <div className="flex items-center justify-between pb-1.5 border-b border-rose-200/50">
                <span className="text-[9px] font-bold text-gray-800 tracking-wider uppercase flex items-center gap-1.5">
                    <Package className="w-3.5 h-3.5 text-rose-700" />
                    LUXURY PACKAGING
                </span>
                <span className="text-[7.5px] font-bold text-rose-800 bg-rose-100 px-1.5 py-0.5 rounded font-mono">
                    FOIL EMBOSS 3D
                </span>
            </div>

            <div className="min-h-[145px] flex flex-col justify-center my-1 gap-2">
                <div className="bg-white/85 rounded-xl p-2.5 border border-rose-200/70 shadow-sm flex flex-col gap-1.5">
                    <div className="flex items-center justify-between text-[7px] font-mono">
                        <span className="text-gray-500">GSM: 350 Matte Velvet</span>
                        <span className="text-rose-700 font-bold bg-rose-50 px-1 rounded">PANTONE 871 C GOLD</span>
                    </div>

                    <div className="h-16 rounded-lg bg-gradient-to-br from-rose-900 to-amber-950 p-2 flex items-center justify-around relative overflow-hidden border border-rose-300/40">
                        <motion.div
                            animate={{ rotate: view === "box" ? 0 : 45, scale: view === "box" ? 1 : 0.9 }}
                            transition={{ type: "spring", stiffness: 260, damping: 20 }}
                            className="w-11 h-11 border-2 border-amber-300 rounded-lg flex flex-col items-center justify-center bg-black/40 shadow-lg"
                        >
                            <Sparkles className="w-4 h-4 text-amber-300" />
                            <span className="text-[5.5px] font-bold text-amber-200 mt-0.5 tracking-widest">SMRKONOVA</span>
                        </motion.div>

                        <div className="text-[7px] font-mono text-rose-100 space-y-0.5">
                            <div>✓ Die-line Cut Verified</div>
                            <div>✓ Spot UV Foil Coating</div>
                            <div>✓ 360° Shelf Mockup</div>
                        </div>
                    </div>
                </div>

                <div className="w-full py-2 rounded-lg font-bold tracking-widest uppercase text-[10px] bg-rose-700 text-white text-center shadow-sm">
                    {buttonText || "3D PACKAGING"}
                </div>
            </div>

            <div className="w-full bg-rose-200/60 h-1 rounded-full overflow-hidden">
                <motion.div key={view} initial={{ width: "0%" }} animate={{ width: "100%" }} transition={{ duration: 2.2, ease: "linear" }} className="h-full bg-rose-600 rounded-full" />
            </div>
        </div>
    );
}

// 8.4 ARCHITECTURAL VISUALISATION MOCKUP
function ArchitecturalVisualisationMockup({ buttonText }: { buttonText?: string }) {
    const [lighting, setLighting] = useState<"day" | "sunset" | "night">("day");

    useEffect(() => {
        let isMounted = true;
        const lights: ("day" | "sunset" | "night")[] = ["day", "sunset", "night"];
        let idx = 0;
        const interval = setInterval(() => {
            if (!isMounted) return;
            idx = (idx + 1) % lights.length;
            setLighting(lights[idx]);
        }, 1900);
        return () => { isMounted = false; clearInterval(interval); };
    }, []);

    const lightConfig = {
        day: { bg: "from-sky-400 to-blue-600", text: "SUN: 5500K DAYLIGHT", tag: "DAY" },
        sunset: { bg: "from-amber-500 to-rose-700", text: "GOLDEN HOUR 3200K", tag: "SUNSET" },
        night: { bg: "from-slate-900 to-indigo-950", text: "INTERIOR ARCH LED", tag: "NIGHT" },
    }[lighting];

    return (
        <div className="w-full max-w-[270px] bg-white/30 backdrop-blur-md rounded-2xl p-3.5 border border-white/60 shadow-lg min-h-[220px] flex flex-col justify-between overflow-hidden text-gray-800">
            <div className="flex items-center justify-between pb-1.5 border-b border-sky-200/50">
                <span className="text-[9px] font-bold text-gray-800 tracking-wider uppercase flex items-center gap-1.5">
                    <Building2 className="w-3.5 h-3.5 text-sky-700" />
                    SPATIAL ARCHITECTURE
                </span>
                <span className="text-[7.5px] font-bold text-sky-800 bg-sky-100 px-1.5 py-0.5 rounded font-mono">
                    BIM 1:1 SCALE
                </span>
            </div>

            <div className="min-h-[145px] flex flex-col justify-center my-1 gap-2">
                <div className={`h-22 rounded-xl bg-gradient-to-br ${lightConfig.bg} p-2.5 flex flex-col justify-between text-white shadow-sm transition-all duration-700 border border-white/30`}>
                    <div className="flex items-center justify-between text-[7px] font-mono">
                        <span className="font-bold">{lightConfig.text}</span>
                        <span className="bg-black/30 px-1.5 py-0.5 rounded backdrop-blur-xs font-bold">{lightConfig.tag}</span>
                    </div>

                    {/* Isometric Building Wireframe Simulation */}
                    <div className="flex items-end justify-center gap-1.5 h-10">
                        <div className="w-5 h-8 bg-white/30 border border-white/60 rounded-xs flex flex-col justify-between p-0.5">
                            <div className="h-1 bg-white/70 rounded-xs" />
                            <div className="h-1 bg-white/70 rounded-xs" />
                            <div className="h-1 bg-white/70 rounded-xs" />
                        </div>
                        <div className="w-7 h-10 bg-white/40 border border-white/80 rounded-xs flex flex-col justify-between p-0.5 shadow-md">
                            <div className="h-1 bg-amber-300/90 rounded-xs" />
                            <div className="h-1 bg-amber-300/90 rounded-xs" />
                            <div className="h-1 bg-amber-300/90 rounded-xs" />
                        </div>
                        <div className="w-5 h-6 bg-white/30 border border-white/60 rounded-xs flex flex-col justify-between p-0.5">
                            <div className="h-1 bg-white/70 rounded-xs" />
                            <div className="h-1 bg-white/70 rounded-xs" />
                        </div>
                    </div>

                    <div className="text-[6.5px] font-mono text-white/80 text-right">
                        GLOBAL ILLUMINATION (GI) ACTIVE
                    </div>
                </div>

                <div className="w-full py-2 rounded-lg font-bold tracking-widest uppercase text-[10px] bg-sky-700 text-white text-center shadow-sm">
                    {buttonText || "SPATIAL 3D"}
                </div>
            </div>

            <div className="w-full bg-sky-200/60 h-1 rounded-full overflow-hidden">
                <motion.div key={lighting} initial={{ width: "0%" }} animate={{ width: "100%" }} transition={{ duration: 1.9, ease: "linear" }} className="h-full bg-sky-600 rounded-full" />
            </div>
        </div>
    );
}

// 8.5 LOGO ANIMATION MOCKUP
function LogoAnimationMockup({ buttonText }: { buttonText?: string }) {
    const [tick, setTick] = useState(0);

    useEffect(() => {
        let isMounted = true;
        const interval = setInterval(() => {
            if (!isMounted) return;
            setTick(t => t + 1);
        }, 2200);
        return () => { isMounted = false; clearInterval(interval); };
    }, []);

    return (
        <div className="w-full max-w-[270px] bg-white/30 backdrop-blur-md rounded-2xl p-3.5 border border-white/60 shadow-lg min-h-[220px] flex flex-col justify-between overflow-hidden text-gray-800">
            <div className="flex items-center justify-between pb-1.5 border-b border-indigo-200/50">
                <span className="text-[9px] font-bold text-gray-800 tracking-wider uppercase flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-indigo-700" />
                    KINETIC LOGO IDENT
                </span>
                <span className="text-[7.5px] font-bold text-indigo-800 bg-indigo-100 px-1.5 py-0.5 rounded font-mono">
                    BEZIER MOTION
                </span>
            </div>

            <div className="min-h-[145px] flex flex-col justify-center my-1 gap-2">
                <div className="h-22 bg-neutral-950 rounded-xl p-2.5 flex flex-col items-center justify-center relative overflow-hidden border border-indigo-500/30">
                    <motion.div
                        key={tick}
                        initial={{ scale: 0.2, rotate: -180, opacity: 0 }}
                        animate={{ scale: [0.2, 1.2, 1], rotate: 0, opacity: 1 }}
                        transition={{ duration: 0.9, ease: [0.34, 1.56, 0.64, 1] }}
                        className="flex items-center gap-1.5"
                    >
                        <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-indigo-500 to-purple-400 flex items-center justify-center text-white font-black text-sm shadow-lg shadow-indigo-500/50">
                            S
                        </div>
                        <span className="font-extrabold text-sm tracking-wider text-white">SMRKONOVA</span>
                    </motion.div>

                    <motion.div
                        key={`spk-${tick}`}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: [0, 1, 0] }}
                        transition={{ delay: 0.7, duration: 0.8 }}
                        className="absolute inset-0 bg-gradient-to-r from-transparent via-indigo-400/20 to-transparent pointer-events-none"
                    />

                    <div className="absolute bottom-1 right-2 text-[6.5px] font-mono text-indigo-300">
                        Ease: cubic-bezier(0.34, 1.56, 0.64, 1)
                    </div>
                </div>

                <div className="w-full py-2 rounded-lg font-bold tracking-widest uppercase text-[10px] bg-indigo-700 text-white text-center shadow-sm">
                    {buttonText || "BRAND MOTION"}
                </div>
            </div>

            <div className="w-full bg-indigo-200/60 h-1 rounded-full overflow-hidden">
                <motion.div key={tick} initial={{ width: "0%" }} animate={{ width: "100%" }} transition={{ duration: 2.2, ease: "linear" }} className="h-full bg-indigo-600 rounded-full" />
            </div>
        </div>
    );
}

// 8.6 EXPLAINER MOTION GRAPHICS MOCKUP
function ExplainerMotionMockup({ buttonText }: { buttonText?: string }) {
    const [scene, setScene] = useState(1);

    useEffect(() => {
        let isMounted = true;
        const interval = setInterval(() => {
            if (!isMounted) return;
            setScene(s => s === 1 ? 2 : 1);
        }, 2200);
        return () => { isMounted = false; clearInterval(interval); };
    }, []);

    return (
        <div className="w-full max-w-[270px] bg-white/30 backdrop-blur-md rounded-2xl p-3.5 border border-white/60 shadow-lg min-h-[220px] flex flex-col justify-between overflow-hidden text-gray-800">
            <div className="flex items-center justify-between pb-1.5 border-b border-blue-200/50">
                <span className="text-[9px] font-bold text-gray-800 tracking-wider uppercase flex items-center gap-1.5">
                    <PlayCircle className="w-3.5 h-3.5 text-blue-700" />
                    EXPLAINER GRAPHICS
                </span>
                <span className="text-[7.5px] font-bold text-blue-800 bg-blue-100 px-1.5 py-0.5 rounded font-mono">
                    SCENE 0{scene}/04
                </span>
            </div>

            <div className="min-h-[145px] flex flex-col justify-center my-1 gap-2">
                <div className="bg-white/85 rounded-xl p-2.5 border border-blue-200/70 shadow-sm flex flex-col gap-1.5">
                    <div className="flex items-center justify-between text-[7px] font-mono text-gray-500">
                        <span>Audio Track: VO_English_v2.wav</span>
                        <span className="text-emerald-700 font-bold">LIP-SYNC 100%</span>
                    </div>

                    <div className="h-16 rounded-lg bg-slate-900 p-2 flex flex-col justify-between text-white relative overflow-hidden">
                        <div className="flex items-center justify-between">
                            <span className="text-[7.5px] font-mono text-blue-300 font-bold">
                                {scene === 1 ? "Scene 1: Complex Problem" : "Scene 2: Automated Solution"}
                            </span>
                            <div className="flex items-center gap-0.5">
                                {[40, 70, 90, 50, 80].map((h, i) => (
                                    <motion.div
                                        key={i}
                                        animate={{ height: [6, h / 5, 6] }}
                                        transition={{ duration: 0.6, repeat: Infinity, delay: i * 0.1 }}
                                        className="w-1 bg-emerald-400 rounded-full"
                                    />
                                ))}
                            </div>
                        </div>

                        <motion.div
                            key={scene}
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            className="bg-blue-600/60 border border-blue-400/60 rounded px-2 py-1 text-[8px] font-medium"
                        >
                            {scene === 1 ? "⚠️ 72% users drop off before checkout" : "✨ Instant 1-click frictionless conversion"}
                        </motion.div>
                    </div>
                </div>

                <div className="w-full py-2 rounded-lg font-bold tracking-widest uppercase text-[10px] bg-blue-700 text-white text-center shadow-sm">
                    {buttonText || "EXPLAINER"}
                </div>
            </div>

            <div className="w-full bg-blue-200/60 h-1 rounded-full overflow-hidden">
                <motion.div key={scene} initial={{ width: "0%" }} animate={{ width: "100%" }} transition={{ duration: 2.2, ease: "linear" }} className="h-full bg-blue-600 rounded-full" />
            </div>
        </div>
    );
}

// 8.7 UI MOTION GRAPHICS MOCKUP
function UiMotionGraphicsMockup({ buttonText }: { buttonText?: string }) {
    const [activeTab, setActiveTab] = useState(0);

    useEffect(() => {
        let isMounted = true;
        const interval = setInterval(() => {
            if (!isMounted) return;
            setActiveTab(t => (t + 1) % 3);
        }, 1600);
        return () => { isMounted = false; clearInterval(interval); };
    }, []);

    return (
        <div className="w-full max-w-[270px] bg-white/30 backdrop-blur-md rounded-2xl p-3.5 border border-white/60 shadow-lg min-h-[220px] flex flex-col justify-between overflow-hidden text-gray-800">
            <div className="flex items-center justify-between pb-1.5 border-b border-purple-200/50">
                <span className="text-[9px] font-bold text-gray-800 tracking-wider uppercase flex items-center gap-1.5">
                    <Smartphone className="w-3.5 h-3.5 text-purple-700" />
                    MICRO-INTERACTIONS
                </span>
                <span className="text-[7.5px] font-bold text-purple-800 bg-purple-100 px-1.5 py-0.5 rounded font-mono">
                    120HZ PRO-MOTION
                </span>
            </div>

            <div className="min-h-[145px] flex flex-col justify-center my-1 gap-2">
                <div className="bg-white/85 rounded-xl p-2.5 border border-purple-200/70 shadow-sm flex flex-col gap-2">
                    <div className="grid grid-cols-3 gap-1 bg-purple-50 p-1 rounded-lg border border-purple-100 text-[8px] font-bold">
                        {["Feed", "Explore", "Profile"].map((name, i) => (
                            <div
                                key={i}
                                className={`py-1 text-center rounded transition-all duration-300 ${
                                    activeTab === i ? "bg-purple-700 text-white shadow-xs" : "text-gray-500"
                                }`}
                            >
                                {name}
                            </div>
                        ))}
                    </div>

                    <div className="h-10 rounded-lg bg-gradient-to-r from-purple-100 via-indigo-50 to-pink-50 p-2 flex items-center justify-between border border-purple-200/50">
                        <span className="text-[8px] font-mono text-purple-900 font-bold">Haptic Spring Physics</span>
                        <motion.div
                            key={activeTab}
                            initial={{ scale: 0.6, rotate: -20 }}
                            animate={{ scale: 1, rotate: 0 }}
                            transition={{ type: "spring", stiffness: 400, damping: 15 }}
                            className="w-6 h-6 rounded-full bg-purple-600 text-white flex items-center justify-center shadow-sm"
                        >
                            <Check className="w-3.5 h-3.5 stroke-[3]" />
                        </motion.div>
                    </div>
                </div>

                <div className="w-full py-2 rounded-lg font-bold tracking-widest uppercase text-[10px] bg-purple-700 text-white text-center shadow-sm">
                    {buttonText || "APP & WEB"}
                </div>
            </div>

            <div className="w-full bg-purple-200/60 h-1 rounded-full overflow-hidden">
                <motion.div key={activeTab} initial={{ width: "0%" }} animate={{ width: "100%" }} transition={{ duration: 1.6, ease: "linear" }} className="h-full bg-purple-600 rounded-full" />
            </div>
        </div>
    );
}

// 8.8 SOCIAL MEDIA MOTION MOCKUP
function SocialMediaMotionMockup({ buttonText }: { buttonText?: string }) {
    const [likes, setLikes] = useState(14.2);

    useEffect(() => {
        let isMounted = true;
        let timer: NodeJS.Timeout;
        const loop = () => {
            setLikes(14.2);
            timer = setTimeout(() => {
                if (!isMounted) return;
                setLikes(84.9);
                timer = setTimeout(() => {
                    if (!isMounted) return;
                    loop();
                }, 3000);
            }, 1200);
        };
        loop();
        return () => { isMounted = false; clearTimeout(timer); };
    }, []);

    return (
        <div className="w-full max-w-[270px] bg-white/30 backdrop-blur-md rounded-2xl p-3.5 border border-white/60 shadow-lg min-h-[220px] flex flex-col justify-between overflow-hidden text-gray-800">
            <div className="flex items-center justify-between pb-1.5 border-b border-sky-200/50">
                <span className="text-[9px] font-bold text-gray-800 tracking-wider uppercase flex items-center gap-1.5">
                    <Share2 className="w-3.5 h-3.5 text-sky-700" />
                    REELS & TIKTOK 9:16
                </span>
                <span className="text-[7.5px] font-bold text-rose-800 bg-rose-100 px-1.5 py-0.5 rounded font-mono">
                    VIRAL HOOK
                </span>
            </div>

            <div className="min-h-[145px] flex flex-col justify-center my-1 gap-2">
                <div className="h-24 bg-gradient-to-tr from-slate-900 via-neutral-900 to-sky-950 rounded-xl p-2.5 flex flex-col justify-between text-white relative overflow-hidden border border-sky-400/30">
                    <div className="flex items-center justify-between text-[7px] font-mono">
                        <span className="bg-rose-600 px-1.5 py-0.5 rounded-full font-bold">LIVE #TREND</span>
                        <span className="text-sky-300">98% Retention</span>
                    </div>

                    <motion.div
                        animate={{ scale: [1, 1.08, 1] }}
                        transition={{ duration: 1.2, repeat: Infinity }}
                        className="self-center bg-white/20 backdrop-blur-md px-3 py-1 rounded-full border border-white/40 text-[9px] font-black text-amber-300 tracking-wider"
                    >
                        NEW DROP IN 3... ⚡
                    </motion.div>

                    <div className="flex items-center justify-between text-[7.5px] font-mono">
                        <span>@smrkonova</span>
                        <span className="text-rose-400 font-bold font-mono">❤️ {likes}K Views</span>
                    </div>
                </div>

                <div className="w-full py-2 rounded-lg font-bold tracking-widest uppercase text-[10px] bg-sky-700 text-white text-center shadow-sm">
                    {buttonText || "SOCIAL DESIGN"}
                </div>
            </div>

            <div className="w-full bg-sky-200/60 h-1 rounded-full overflow-hidden">
                <motion.div key={likes} initial={{ width: "0%" }} animate={{ width: "100%" }} transition={{ duration: likes > 50 ? 3.0 : 1.2, ease: "linear" }} className="h-full bg-sky-600 rounded-full" />
            </div>
        </div>
    );
}

// 8.9 SCROLL ANIMATIONS MOCKUP
function ScrollAnimationsMockup({ buttonText }: { buttonText?: string }) {
    const [scrollPct, setScrollPct] = useState(20);

    useEffect(() => {
        let isMounted = true;
        let timer: NodeJS.Timeout;
        const loop = () => {
            setScrollPct(20);
            timer = setTimeout(() => {
                if (!isMounted) return;
                setScrollPct(95);
                timer = setTimeout(() => {
                    if (!isMounted) return;
                    loop();
                }, 3200);
            }, 1200);
        };
        loop();
        return () => { isMounted = false; clearTimeout(timer); };
    }, []);

    return (
        <div className="w-full max-w-[270px] bg-white/30 backdrop-blur-md rounded-2xl p-3.5 border border-white/60 shadow-lg min-h-[220px] flex flex-col justify-between overflow-hidden text-gray-800">
            <div className="flex items-center justify-between pb-1.5 border-b border-indigo-200/50">
                <span className="text-[9px] font-bold text-gray-800 tracking-wider uppercase flex items-center gap-1.5">
                    <Sliders className="w-3.5 h-3.5 text-indigo-700" />
                    SCROLLTRIGGER 3D
                </span>
                <span className="text-[7.5px] font-bold text-indigo-800 bg-indigo-100 px-1.5 py-0.5 rounded font-mono">
                    PARALLAX GPU
                </span>
            </div>

            <div className="min-h-[145px] flex flex-col justify-center my-1 gap-2">
                <div className="bg-white/85 rounded-xl p-2.5 border border-indigo-200/70 shadow-sm flex flex-col gap-1.5">
                    <div className="flex items-center justify-between text-[7px] font-mono text-gray-500">
                        <span>Scroll Progress:</span>
                        <span className="font-bold text-indigo-700">{scrollPct}% Scrubbed</span>
                    </div>

                    <div className="h-16 rounded-lg bg-gradient-to-r from-indigo-900 to-purple-900 p-2 flex items-center justify-center relative overflow-hidden">
                        <motion.div
                            animate={{ rotateX: scrollPct > 50 ? 25 : 0, scale: scrollPct > 50 ? 1.15 : 0.95 }}
                            transition={{ duration: 0.6 }}
                            className="w-20 h-9 rounded bg-white/20 border border-white/50 backdrop-blur-xs flex items-center justify-center shadow-lg text-[8px] font-bold text-white tracking-wider font-mono"
                        >
                            3D DEPTH
                        </motion.div>
                        <div className="absolute bottom-1 right-2 text-[6.5px] font-mono text-indigo-200">
                            GSAP ScrollSmoother
                        </div>
                    </div>
                </div>

                <div className="w-full py-2 rounded-lg font-bold tracking-widest uppercase text-[10px] bg-indigo-700 text-white text-center shadow-sm">
                    {buttonText || "WEB EXPERIENCE"}
                </div>
            </div>

            <div className="w-full bg-indigo-200/60 h-1 rounded-full overflow-hidden">
                <motion.div key={scrollPct} initial={{ width: "0%" }} animate={{ width: "100%" }} transition={{ duration: scrollPct > 50 ? 3.2 : 1.2, ease: "linear" }} className="h-full bg-indigo-600 rounded-full" />
            </div>
        </div>
    );
}

// 8.10 INTERACTIVE SECTIONS MOCKUP
function InteractiveSectionsMockup({ buttonText }: { buttonText?: string }) {
    const [hovered, setHovered] = useState(false);

    useEffect(() => {
        let isMounted = true;
        const interval = setInterval(() => {
            if (!isMounted) return;
            setHovered(h => !h);
        }, 1800);
        return () => { isMounted = false; clearInterval(interval); };
    }, []);

    return (
        <div className="w-full max-w-[270px] bg-white/30 backdrop-blur-md rounded-2xl p-3.5 border border-white/60 shadow-lg min-h-[220px] flex flex-col justify-between overflow-hidden text-gray-800">
            <div className="flex items-center justify-between pb-1.5 border-b border-purple-200/50">
                <span className="text-[9px] font-bold text-gray-800 tracking-wider uppercase flex items-center gap-1.5">
                    <MousePointerClick className="w-3.5 h-3.5 text-purple-700" />
                    MAGNETIC INTERACTION
                </span>
                <span className="text-[7.5px] font-bold text-purple-800 bg-purple-100 px-1.5 py-0.5 rounded font-mono">
                    {hovered ? "HOVER ATTRACTION" : "IDLE"}
                </span>
            </div>

            <div className="min-h-[145px] flex flex-col justify-center my-1 gap-2">
                <div className="h-24 bg-gradient-to-br from-purple-950 via-slate-900 to-indigo-950 rounded-xl p-2.5 flex flex-col items-center justify-center relative overflow-hidden border border-purple-400/30">
                    <motion.div
                        animate={{ x: hovered ? 12 : -12, y: hovered ? -8 : 8 }}
                        transition={{ type: "spring", stiffness: 350, damping: 18 }}
                        className="px-3.5 py-1.5 rounded-full bg-gradient-to-r from-purple-500 to-indigo-500 text-white font-bold text-[9px] tracking-wider shadow-lg shadow-purple-500/40 border border-white/30 flex items-center gap-1.5"
                    >
                        <Sparkles className="w-3 h-3 text-amber-300" />
                        MAGNETIC BUTTON
                    </motion.div>

                    <div className="absolute bottom-1.5 left-2 text-[7px] font-mono text-purple-300">
                        Cursor: {hovered ? "X: 184 · Y: 92" : "X: 42 · Y: 120"}
                    </div>
                </div>

                <div className="w-full py-2 rounded-lg font-bold tracking-widest uppercase text-[10px] bg-purple-700 text-white text-center shadow-sm">
                    {buttonText || "INTERACTION"}
                </div>
            </div>

            <div className="w-full bg-purple-200/60 h-1 rounded-full overflow-hidden">
                <motion.div key={hovered ? "h" : "i"} initial={{ width: "0%" }} animate={{ width: "100%" }} transition={{ duration: 1.8, ease: "linear" }} className="h-full bg-purple-600 rounded-full" />
            </div>
        </div>
    );
}

// 8.11 LOTTIE ANIMATIONS MOCKUP
function LottieAnimationsMockup({ buttonText }: { buttonText?: string }) {
    const [shape, setShape] = useState(0);

    useEffect(() => {
        let isMounted = true;
        const interval = setInterval(() => {
            if (!isMounted) return;
            setShape(s => (s + 1) % 3);
        }, 1600);
        return () => { isMounted = false; clearInterval(interval); };
    }, []);

    return (
        <div className="w-full max-w-[270px] bg-white/30 backdrop-blur-md rounded-2xl p-3.5 border border-white/60 shadow-lg min-h-[220px] flex flex-col justify-between overflow-hidden text-gray-800">
            <div className="flex items-center justify-between pb-1.5 border-b border-rose-200/50">
                <span className="text-[9px] font-bold text-gray-800 tracking-wider uppercase flex items-center gap-1.5">
                    <Code className="w-3.5 h-3.5 text-rose-700" />
                    LOTTIE VECTOR JSON
                </span>
                <span className="text-[7.5px] font-bold text-emerald-800 bg-emerald-100 px-1.5 py-0.5 rounded font-mono">
                    18.4 KB · 60 FPS
                </span>
            </div>

            <div className="min-h-[145px] flex flex-col justify-center my-1 gap-2">
                <div className="bg-white/85 rounded-xl p-2.5 border border-rose-200/70 shadow-sm flex flex-col gap-1.5">
                    <div className="flex items-center justify-between text-[7px] font-mono text-gray-500">
                        <span>Renderer: SVG / Canvas</span>
                        <span className="text-rose-700 font-bold">0 DROP FRAMES</span>
                    </div>

                    <div className="h-16 rounded-lg bg-neutral-900 p-2 flex items-center justify-around">
                        <motion.div
                            key={shape}
                            initial={{ scale: 0.3, rotate: -90, opacity: 0 }}
                            animate={{ scale: 1, rotate: 0, opacity: 1 }}
                            transition={{ type: "spring", stiffness: 350, damping: 20 }}
                            className="w-10 h-10 rounded-full bg-gradient-to-tr from-rose-500 to-amber-400 flex items-center justify-center text-white shadow-md"
                        >
                            {shape === 0 ? <Sparkles className="w-5 h-5" /> : shape === 1 ? <Check className="w-5 h-5 stroke-[3]" /> : <Flame className="w-5 h-5" />}
                        </motion.div>

                        <div className="text-[7px] font-mono text-gray-300 space-y-0.5">
                            <div>• Bodymovin Export</div>
                            <div>• Zero raster assets</div>
                            <div>• Ultra-fast web render</div>
                        </div>
                    </div>
                </div>

                <div className="w-full py-2 rounded-lg font-bold tracking-widest uppercase text-[10px] bg-rose-700 text-white text-center shadow-sm">
                    {buttonText || "VECTOR MOTION"}
                </div>
            </div>

            <div className="w-full bg-rose-200/60 h-1 rounded-full overflow-hidden">
                <motion.div key={shape} initial={{ width: "0%" }} animate={{ width: "100%" }} transition={{ duration: 1.6, ease: "linear" }} className="h-full bg-rose-600 rounded-full" />
            </div>
        </div>
    );
}

// 8.12 STORYTELLING EXPERIENCES MOCKUP
function StorytellingExperiencesMockup({ buttonText }: { buttonText?: string }) {
    const [act, setAct] = useState(1);

    useEffect(() => {
        let isMounted = true;
        const interval = setInterval(() => {
            if (!isMounted) return;
            setAct(a => (a % 3) + 1);
        }, 2200);
        return () => { isMounted = false; clearInterval(interval); };
    }, []);

    const chapters = {
        1: { title: "Act I: The Vision", desc: "Setting the foundation of the brand ethos" },
        2: { title: "Act II: Disruption", desc: "Redefining category rules with courage" },
        3: { title: "Act III: Impact", desc: "Scaling across global digital audiences" },
    }[act];

    return (
        <div className="w-full max-w-[270px] bg-white/30 backdrop-blur-md rounded-2xl p-3.5 border border-white/60 shadow-lg min-h-[220px] flex flex-col justify-between overflow-hidden text-gray-800">
            <div className="flex items-center justify-between pb-1.5 border-b border-indigo-200/50">
                <span className="text-[9px] font-bold text-gray-800 tracking-wider uppercase flex items-center gap-1.5">
                    <Compass className="w-3.5 h-3.5 text-indigo-700" />
                    IMMERSIVE NARRATIVE
                </span>
                <span className="text-[7.5px] font-bold text-indigo-800 bg-indigo-100 px-1.5 py-0.5 rounded font-mono">
                    CHAPTER 0{act}/03
                </span>
            </div>

            <div className="min-h-[145px] flex flex-col justify-center my-1 gap-2">
                <div className="h-24 bg-gradient-to-br from-indigo-950 via-slate-900 to-purple-950 rounded-xl p-2.5 flex flex-col justify-between text-white border border-indigo-400/30">
                    <div className="flex items-center justify-between text-[7px] font-mono text-indigo-200">
                        <span>Spatial Audio: Binaural 3D</span>
                        <span className="text-amber-300 font-bold">CINEMATIC SCENE</span>
                    </div>

                    <motion.div
                        key={act}
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="space-y-0.5"
                    >
                        <div className="text-[10px] font-bold text-white tracking-wide">{chapters?.title}</div>
                        <div className="text-[7px] text-gray-300 font-sans">{chapters?.desc}</div>
                    </motion.div>

                    <div className="flex items-center gap-1">
                        {[1, 2, 3].map(step => (
                            <div key={step} className={`h-1 flex-1 rounded-full ${step <= act ? "bg-amber-400" : "bg-white/20"}`} />
                        ))}
                    </div>
                </div>

                <div className="w-full py-2 rounded-lg font-bold tracking-widest uppercase text-[10px] bg-indigo-700 text-white text-center shadow-sm">
                    {buttonText || "IMMERSIVE"}
                </div>
            </div>

            <div className="w-full bg-indigo-200/60 h-1 rounded-full overflow-hidden">
                <motion.div key={act} initial={{ width: "0%" }} animate={{ width: "100%" }} transition={{ duration: 2.2, ease: "linear" }} className="h-full bg-indigo-600 rounded-full" />
            </div>
        </div>
    );
}

// 8.13 BRAND FILMS MOCKUP
function BrandFilmsMockup({ buttonText }: { buttonText?: string }) {
    const [seconds, setSeconds] = useState(14);

    useEffect(() => {
        let isMounted = true;
        const interval = setInterval(() => {
            if (!isMounted) return;
            setSeconds(s => (s % 59) + 1);
        }, 1000);
        return () => { isMounted = false; clearInterval(interval); };
    }, []);

    return (
        <div className="w-full max-w-[270px] bg-white/30 backdrop-blur-md rounded-2xl p-3.5 border border-white/60 shadow-lg min-h-[220px] flex flex-col justify-between overflow-hidden text-gray-800">
            <div className="flex items-center justify-between pb-1.5 border-b border-sky-200/50">
                <span className="text-[9px] font-bold text-gray-800 tracking-wider uppercase flex items-center gap-1.5">
                    <Clapperboard className="w-3.5 h-3.5 text-sky-700" />
                    CINEMATIC PRODUCTION
                </span>
                <span className="text-[7.5px] font-bold text-sky-800 bg-sky-100 px-1.5 py-0.5 rounded font-mono">
                    ARRI 2.39:1
                </span>
            </div>

            <div className="min-h-[145px] flex flex-col justify-center my-1 gap-2">
                <div className="h-24 bg-black rounded-xl p-2 flex flex-col justify-between text-white relative overflow-hidden border border-white/20">
                    <div className="flex items-center justify-between text-[6.5px] font-mono">
                        <span className="flex items-center gap-1 text-red-500 font-bold">
                            <span className="w-1.5 h-1.5 rounded-full bg-red-600 animate-pulse" />
                            REC [4K PRORES]
                        </span>
                        <span className="text-gray-400">KODAK 2383 LUT</span>
                    </div>

                    <div className="self-center flex items-center gap-2">
                        <div className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-sm border border-white/40 flex items-center justify-center text-white">
                            <Play className="w-3.5 h-3.5 ml-0.5 fill-white" />
                        </div>
                    </div>

                    <div className="flex items-center justify-between text-[7px] font-mono text-gray-400">
                        <span>FPS: 23.976</span>
                        <span className="text-emerald-400 font-bold">TC 00:01:{seconds < 10 ? `0${seconds}` : seconds}:18</span>
                    </div>
                </div>

                <div className="w-full py-2 rounded-lg font-bold tracking-widest uppercase text-[10px] bg-sky-700 text-white text-center shadow-sm">
                    {buttonText || "CINEMATIC"}
                </div>
            </div>

            <div className="w-full bg-sky-200/60 h-1 rounded-full overflow-hidden">
                <motion.div initial={{ width: "0%" }} animate={{ width: "100%" }} transition={{ duration: 4.5, repeat: Infinity, ease: "linear" }} className="h-full bg-sky-600 rounded-full" />
            </div>
        </div>
    );
}

// 8.14 PRODUCT LAUNCH VIDEOS MOCKUP
function ProductLaunchVideosMockup({ buttonText }: { buttonText?: string }) {
    const [stage, setStage] = useState(0);

    useEffect(() => {
        let isMounted = true;
        const interval = setInterval(() => {
            if (!isMounted) return;
            setStage(s => (s + 1) % 3);
        }, 1900);
        return () => { isMounted = false; clearInterval(interval); };
    }, []);

    return (
        <div className="w-full max-w-[270px] bg-white/30 backdrop-blur-md rounded-2xl p-3.5 border border-white/60 shadow-lg min-h-[220px] flex flex-col justify-between overflow-hidden text-gray-800">
            <div className="flex items-center justify-between pb-1.5 border-b border-blue-200/50">
                <span className="text-[9px] font-bold text-gray-800 tracking-wider uppercase flex items-center gap-1.5">
                    <Rocket className="w-3.5 h-3.5 text-blue-700" />
                    KEYNOTE COMMERCIAL
                </span>
                <span className="text-[7.5px] font-bold text-blue-800 bg-blue-100 px-1.5 py-0.5 rounded font-mono">
                    GLOBAL REVEAL
                </span>
            </div>

            <div className="min-h-[145px] flex flex-col justify-center my-1 gap-2">
                <div className="h-24 bg-gradient-to-br from-slate-950 via-blue-950 to-neutral-900 rounded-xl p-2.5 flex flex-col justify-between text-white border border-blue-400/30">
                    <div className="flex items-center justify-between text-[7px] font-mono text-blue-200">
                        <span>Spotlight Lighting: Active</span>
                        <span className="text-amber-300 font-bold">REVEAL PEAK</span>
                    </div>

                    <motion.div
                        key={stage}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="text-center space-y-0.5"
                    >
                        <div className="text-[11px] font-black tracking-tight text-white uppercase">
                            {stage === 0 ? "COUNTDOWN: 00:03" : stage === 1 ? "INTRODUCING THE FUTURE" : "AVAILABLE WORLDWIDE"}
                        </div>
                        <div className="text-[7px] text-blue-300 font-mono">Dolby Atmos Surround Mastered</div>
                    </motion.div>

                    <div className="w-full bg-white/20 h-1 rounded-full overflow-hidden">
                        <motion.div animate={{ width: stage === 2 ? "100%" : stage === 1 ? "66%" : "33%" }} className="h-full bg-blue-400" />
                    </div>
                </div>

                <div className="w-full py-2 rounded-lg font-bold tracking-widest uppercase text-[10px] bg-blue-700 text-white text-center shadow-sm">
                    {buttonText || "COMMERCIAL"}
                </div>
            </div>

            <div className="w-full bg-blue-200/60 h-1 rounded-full overflow-hidden">
                <motion.div key={stage} initial={{ width: "0%" }} animate={{ width: "100%" }} transition={{ duration: 1.9, ease: "linear" }} className="h-full bg-blue-600 rounded-full" />
            </div>
        </div>
    );
}

// 8.15 COMPANY INTRODUCTIONS MOCKUP
function CompanyIntroductionsMockup({ buttonText }: { buttonText?: string }) {
    return (
        <div className="w-full max-w-[270px] bg-white/30 backdrop-blur-md rounded-2xl p-3.5 border border-white/60 shadow-lg min-h-[220px] flex flex-col justify-between overflow-hidden text-gray-800">
            <div className="flex items-center justify-between pb-1.5 border-b border-purple-200/50">
                <span className="text-[9px] font-bold text-gray-800 tracking-wider uppercase flex items-center gap-1.5">
                    <Building2 className="w-3.5 h-3.5 text-purple-700" />
                    EXECUTIVE OVERVIEW
                </span>
                <span className="text-[7.5px] font-bold text-purple-800 bg-purple-100 px-1.5 py-0.5 rounded font-mono">
                    FORTUNE 500
                </span>
            </div>

            <div className="min-h-[145px] flex flex-col justify-center my-1 gap-2">
                <div className="bg-white/85 rounded-xl p-2.5 border border-purple-200/70 shadow-sm flex flex-col gap-2">
                    <div className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded-full bg-purple-600 text-white flex items-center justify-center font-bold text-[10px]">
                            CEO
                        </div>
                        <div>
                            <div className="text-[9px] font-bold text-gray-900 leading-tight">Leadership Keynote</div>
                            <div className="text-[7px] text-gray-500 font-mono">Global Offices: NY · London · Dubai</div>
                        </div>
                    </div>

                    <div className="bg-purple-50/80 p-1.5 rounded-lg border border-purple-100 text-[7.5px] font-medium text-purple-950 flex items-center justify-between">
                        <span>Enterprise Trust Index:</span>
                        <span className="font-bold text-emerald-700">99.4% Verified</span>
                    </div>
                </div>

                <div className="w-full py-2 rounded-lg font-bold tracking-widest uppercase text-[10px] bg-purple-700 text-white text-center shadow-sm">
                    {buttonText || "CORPORATE"}
                </div>
            </div>

            <div className="w-full bg-purple-200/60 h-1 rounded-full overflow-hidden">
                <motion.div initial={{ width: "0%" }} animate={{ width: "100%" }} transition={{ duration: 3.8, repeat: Infinity, ease: "linear" }} className="h-full bg-purple-600 rounded-full" />
            </div>
        </div>
    );
}

// 8.16 CUSTOMER STORIES MOCKUP
function CustomerStoriesMockup({ buttonText }: { buttonText?: string }) {
    const [roi, setRoi] = useState(2.4);

    useEffect(() => {
        let isMounted = true;
        let timer: NodeJS.Timeout;
        const loop = () => {
            setRoi(2.4);
            timer = setTimeout(() => {
                if (!isMounted) return;
                setRoi(4.8);
                timer = setTimeout(() => {
                    if (!isMounted) return;
                    loop();
                }, 3000);
            }, 1200);
        };
        loop();
        return () => { isMounted = false; clearTimeout(timer); };
    }, []);

    return (
        <div className="w-full max-w-[270px] bg-white/30 backdrop-blur-md rounded-2xl p-3.5 border border-white/60 shadow-lg min-h-[220px] flex flex-col justify-between overflow-hidden text-gray-800">
            <div className="flex items-center justify-between pb-1.5 border-b border-sky-200/50">
                <span className="text-[9px] font-bold text-gray-800 tracking-wider uppercase flex items-center gap-1.5">
                    <ThumbsUp className="w-3.5 h-3.5 text-sky-700" />
                    CLIENT SUCCESS STORY
                </span>
                <span className="text-[7.5px] font-bold text-emerald-800 bg-emerald-100 px-1.5 py-0.5 rounded font-mono">
                    VERIFIED CASE
                </span>
            </div>

            <div className="min-h-[145px] flex flex-col justify-center my-1 gap-2">
                <div className="bg-white/85 rounded-xl p-2.5 border border-sky-200/70 shadow-sm flex flex-col gap-1.5">
                    <div className="flex items-center justify-between">
                        <div className="flex text-amber-400 gap-0.5">
                            {[1, 2, 3, 4, 5].map(s => <Star key={s} className="w-2.5 h-2.5 fill-amber-400" />)}
                        </div>
                        <span className="text-[7.5px] font-mono text-sky-800 font-bold bg-sky-50 px-1.5 py-0.2 rounded">
                            +{roi}X ROI
                        </span>
                    </div>

                    <div className="text-[8px] text-gray-800 italic leading-snug">
                        "Smrkonova transformed our visual identity into a 4K motion masterpiece. Conversion surged in week 1."
                    </div>

                    <div className="text-[7px] font-mono text-gray-500 pt-1 border-t border-gray-100">
                        — Head of Growth, TechFin Global
                    </div>
                </div>

                <div className="w-full py-2 rounded-lg font-bold tracking-widest uppercase text-[10px] bg-sky-700 text-white text-center shadow-sm">
                    {buttonText || "TESTIMONIALS"}
                </div>
            </div>

            <div className="w-full bg-sky-200/60 h-1 rounded-full overflow-hidden">
                <motion.div key={roi} initial={{ width: "0%" }} animate={{ width: "100%" }} transition={{ duration: roi > 3 ? 3.0 : 1.2, ease: "linear" }} className="h-full bg-sky-600 rounded-full" />
            </div>
        </div>
    );
}

// 8.17 CREATIVE MOTION FALLBACK MOCKUP
function CreativeMotionMockup({ title, buttonText }: { title?: string; buttonText?: string }) {
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
   8B. WEBSITE MAINTENANCE & GROWTH DEDICATED MOCKUPS (6 FEATURES)
   ========================================================================= */

// 8B.1 WEB FEATURE ENHANCEMENTS MOCKUP (SCALE)
function WebFeatureEnhancementsMockup({ buttonText }: { buttonText?: string }) {
    const [stage, setStage] = useState(0);

    useEffect(() => {
        let isMounted = true;
        let timer: NodeJS.Timeout;
        const loop = () => {
            setStage(0);
            timer = setTimeout(() => {
                if (!isMounted) return;
                setStage(1);
                timer = setTimeout(() => {
                    if (!isMounted) return;
                    setStage(2);
                    timer = setTimeout(() => {
                        if (!isMounted) return;
                        loop();
                    }, 3200);
                }, 1000);
            }, 1000);
        };
        loop();
        return () => { isMounted = false; clearTimeout(timer); };
    }, []);

    return (
        <div className="w-full max-w-[270px] bg-white/30 backdrop-blur-md rounded-2xl p-3.5 border border-white/60 shadow-lg min-h-[220px] flex flex-col justify-between overflow-hidden text-gray-800">
            <div className="flex items-center justify-between pb-1.5 border-b border-emerald-200/50">
                <span className="text-[9px] font-bold text-gray-800 tracking-wider uppercase flex items-center gap-1.5">
                    <Rocket className="w-3.5 h-3.5 text-emerald-700" />
                    CI/CD SCALE PIPELINE
                </span>
                <span className={`text-[7.5px] font-bold px-1.5 py-0.5 rounded font-mono ${
                    stage === 2 ? "bg-emerald-100 text-emerald-800" : "bg-emerald-50 text-emerald-700"
                }`}>
                    {stage === 2 ? "ZERO DOWNTIME DEPLOYED" : "CANARY ROLLOUT"}
                </span>
            </div>

            <div className="min-h-[145px] flex flex-col justify-center my-1 gap-2">
                <div className="bg-white/85 rounded-xl p-2.5 border border-emerald-200/70 shadow-sm flex flex-col gap-1.5">
                    <div className="space-y-1 text-[7.5px] font-mono">
                        <div className="flex items-center justify-between p-1 rounded bg-emerald-50/70">
                            <span>1. Automated Unit & E2E Tests:</span>
                            <span className="text-emerald-700 font-bold">100% PASS ✓</span>
                        </div>
                        <div className="flex items-center justify-between p-1 rounded bg-emerald-50/70">
                            <span>2. Edge Staging Validation:</span>
                            <span className="text-emerald-700 font-bold">{stage >= 1 ? "VERIFIED ✓" : "Running..."}</span>
                        </div>
                        <div className="flex items-center justify-between p-1 rounded bg-emerald-50/70">
                            <span>3. Production Traffic:</span>
                            <span className="text-emerald-700 font-bold">{stage === 2 ? "100% LIVE 🚀" : "Staged"}</span>
                        </div>
                    </div>
                </div>

                <div className={`w-full py-2 rounded-lg font-bold tracking-widest uppercase text-[10px] text-center shadow-sm transition-colors ${
                    stage === 2 ? "bg-emerald-700 text-white" : "bg-emerald-600 text-white"
                }`}>
                    {buttonText || "SCALE"}
                </div>
            </div>

            <div className="w-full bg-emerald-200/60 h-1 rounded-full overflow-hidden">
                <motion.div key={stage} initial={{ width: "0%" }} animate={{ width: "100%" }} transition={{ duration: stage === 2 ? 3.2 : 1.0, ease: "linear" }} className="h-full bg-emerald-600 rounded-full" />
            </div>
        </div>
    );
}

// 8B.2 WEB UI IMPROVEMENTS MOCKUP (REFRESH)
function WebUiImprovementsMockup({ buttonText }: { buttonText?: string }) {
    const [modern, setModern] = useState(false);

    useEffect(() => {
        let isMounted = true;
        const interval = setInterval(() => {
            if (!isMounted) return;
            setModern(m => !m);
        }, 2200);
        return () => { isMounted = false; clearInterval(interval); };
    }, []);

    return (
        <div className="w-full max-w-[270px] bg-white/30 backdrop-blur-md rounded-2xl p-3.5 border border-white/60 shadow-lg min-h-[220px] flex flex-col justify-between overflow-hidden text-gray-800">
            <div className="flex items-center justify-between pb-1.5 border-b border-blue-200/50">
                <span className="text-[9px] font-bold text-gray-800 tracking-wider uppercase flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-blue-700" />
                    DESIGN SYSTEM UPGRADE
                </span>
                <span className="text-[7.5px] font-bold text-blue-800 bg-blue-100 px-1.5 py-0.5 rounded font-mono">
                    {modern ? "UI 2.0 REFRESHED" : "LEGACY V1"}
                </span>
            </div>

            <div className="min-h-[145px] flex flex-col justify-center my-1 gap-2">
                <div className="bg-white/85 rounded-xl p-2.5 border border-blue-200/70 shadow-sm flex flex-col gap-1.5">
                    <div className="flex items-center justify-between text-[7px] font-mono">
                        <span className="text-gray-500">Contrast Ratio:</span>
                        <span className="text-emerald-700 font-bold">14.2:1 AAA</span>
                    </div>

                    <div className={`p-2.5 rounded-lg border transition-all duration-500 ${
                        modern ? "bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-md border-blue-400" : "bg-gray-100 text-gray-700 border-gray-200"
                    }`}>
                        <div className="text-[9px] font-bold">{modern ? "Modern Glassmorphism Card" : "Flat Default Container"}</div>
                        <div className="text-[7px] opacity-80 mt-0.5">{modern ? "Fluid typography + micro-elevation" : "Standard static borders"}</div>
                    </div>
                </div>

                <div className="w-full py-2 rounded-lg font-bold tracking-widest uppercase text-[10px] bg-blue-700 text-white text-center shadow-sm">
                    {buttonText || "REFRESH"}
                </div>
            </div>

            <div className="w-full bg-blue-200/60 h-1 rounded-full overflow-hidden">
                <motion.div key={modern ? "m" : "l"} initial={{ width: "0%" }} animate={{ width: "100%" }} transition={{ duration: 2.2, ease: "linear" }} className="h-full bg-blue-600 rounded-full" />
            </div>
        </div>
    );
}

// 8B.3 WEB PERFORMANCE OPTIMISATION MOCKUP (SPEED)
function WebPerformanceOptimisationMockup({ buttonText }: { buttonText?: string }) {
    const [score, setScore] = useState(62);

    useEffect(() => {
        let isMounted = true;
        let timer: NodeJS.Timeout;
        const loop = () => {
            setScore(62);
            timer = setTimeout(() => {
                if (!isMounted) return;
                setScore(100);
                timer = setTimeout(() => {
                    if (!isMounted) return;
                    loop();
                }, 3200);
            }, 1200);
        };
        loop();
        return () => { isMounted = false; clearTimeout(timer); };
    }, []);

    return (
        <div className="w-full max-w-[270px] bg-white/30 backdrop-blur-md rounded-2xl p-3.5 border border-white/60 shadow-lg min-h-[220px] flex flex-col justify-between overflow-hidden text-gray-800">
            <div className="flex items-center justify-between pb-1.5 border-b border-purple-200/50">
                <span className="text-[9px] font-bold text-gray-800 tracking-wider uppercase flex items-center gap-1.5">
                    <Zap className="w-3.5 h-3.5 text-purple-700" />
                    PERFORMANCE SPEED
                </span>
                <span className={`text-[7.5px] font-bold px-1.5 py-0.5 rounded font-mono ${
                    score === 100 ? "bg-emerald-100 text-emerald-800" : "bg-purple-100 text-purple-800"
                }`}>
                    {score === 100 ? "100/100 LIGHTHOUSE" : "OPTIMIZING"}
                </span>
            </div>

            <div className="min-h-[145px] flex flex-col justify-center my-1 gap-2">
                <div className="bg-white/85 rounded-xl p-2.5 border border-purple-200/70 shadow-sm flex items-center justify-between">
                    <div>
                        <div className="text-[8px] font-mono text-gray-500 uppercase">Edge TTFB:</div>
                        <div className="text-[13px] font-bold font-mono text-purple-900 mt-0.5">
                            {score === 100 ? "38ms Global" : "780ms Caching..."}
                        </div>
                    </div>
                    <div className={`w-9 h-9 rounded-full border-2 flex items-center justify-center font-bold text-[11px] font-mono shadow-xs ${
                        score === 100 ? "border-emerald-500 text-emerald-700 bg-emerald-50" : "border-purple-400 text-purple-700 bg-purple-50"
                    }`}>
                        {score}
                    </div>
                </div>

                <div className="grid grid-cols-2 gap-1 text-[7px] font-mono text-center">
                    <div className="bg-purple-50/80 p-1 rounded border border-purple-100">
                        <span className="text-gray-500">WebP Compression:</span> <b className="text-emerald-700">-74% Size</b>
                    </div>
                    <div className="bg-purple-50/80 p-1 rounded border border-purple-100">
                        <span className="text-gray-500">CDN Cache Hit:</span> <b className="text-emerald-700">99.8%</b>
                    </div>
                </div>

                <div className="w-full py-2 rounded-lg font-bold tracking-widest uppercase text-[10px] bg-purple-700 text-white text-center shadow-sm">
                    {buttonText || "SPEED"}
                </div>
            </div>

            <div className="w-full bg-purple-200/60 h-1 rounded-full overflow-hidden">
                <motion.div key={score} initial={{ width: "0%" }} animate={{ width: "100%" }} transition={{ duration: score === 100 ? 3.2 : 1.2, ease: "linear" }} className="h-full bg-purple-600 rounded-full" />
            </div>
        </div>
    );
}

// 8B.4 WEB PLATFORM SECURITY MOCKUP (PROTECT)
function WebPlatformSecurityMockup({ buttonText }: { buttonText?: string }) {
    const [step, setStep] = useState(0);

    useEffect(() => {
        let isMounted = true;
        let timer: NodeJS.Timeout;
        const loop = () => {
            setStep(0);
            timer = setTimeout(() => {
                if (!isMounted) return;
                setStep(1);
                timer = setTimeout(() => {
                    if (!isMounted) return;
                    setStep(2);
                    timer = setTimeout(() => {
                        if (!isMounted) return;
                        loop();
                    }, 3400);
                }, 1000);
            }, 1000);
        };
        loop();
        return () => { isMounted = false; clearTimeout(timer); };
    }, []);

    return (
        <div className="w-full max-w-[270px] bg-white/30 backdrop-blur-md rounded-2xl p-3.5 border border-white/60 shadow-lg min-h-[220px] flex flex-col justify-between overflow-hidden text-gray-800">
            <div className="flex items-center justify-between pb-1.5 border-b border-teal-200/50">
                <span className="text-[9px] font-bold text-gray-800 tracking-wider uppercase flex items-center gap-1.5">
                    <ShieldCheck className="w-3.5 h-3.5 text-teal-700" />
                    ENTERPRISE WAF SHIELD
                </span>
                <span className="text-[7.5px] font-bold text-teal-800 bg-teal-100 px-1.5 py-0.5 rounded font-mono">
                    {step === 2 ? "0 CVEs DETECTED" : "AUDITING FIREWALL"}
                </span>
            </div>

            <div className="min-h-[145px] flex flex-col justify-center my-1 gap-2">
                <div className="bg-white/85 rounded-xl p-2.5 border border-teal-200/70 shadow-sm flex flex-col gap-1.5">
                    <div className="space-y-1 text-[7.5px] font-mono">
                        <div className="flex items-center justify-between p-1 rounded bg-teal-50/70">
                            <span>Cloudflare Edge Firewall:</span>
                            <span className="text-teal-800 font-bold">ACTIVE · 256-BIT</span>
                        </div>
                        <div className="flex items-center justify-between p-1 rounded bg-teal-50/70">
                            <span>OWASP Top 10 Mitigation:</span>
                            <span className="text-emerald-700 font-bold">100% BLOCKED</span>
                        </div>
                        <div className="flex items-center justify-between p-1 rounded bg-teal-50/70">
                            <span>Daily Automated Backup:</span>
                            <span className="text-emerald-700 font-bold">SNAPSHOT VERIFIED ✓</span>
                        </div>
                    </div>
                </div>

                <div className="w-full py-2 rounded-lg font-bold tracking-widest uppercase text-[10px] bg-teal-700 text-white text-center shadow-sm">
                    {buttonText || "PROTECT"}
                </div>
            </div>

            <div className="w-full bg-teal-200/60 h-1 rounded-full overflow-hidden">
                <motion.div key={step} initial={{ width: "0%" }} animate={{ width: "100%" }} transition={{ duration: step === 2 ? 3.4 : 1.0, ease: "linear" }} className="h-full bg-teal-600 rounded-full" />
            </div>
        </div>
    );
}

// 8B.5 WEB CONTENT MANAGEMENT MOCKUP (UPDATE)
function WebContentManagementMockup({ buttonText }: { buttonText?: string }) {
    const [published, setPublished] = useState(false);

    useEffect(() => {
        let isMounted = true;
        const interval = setInterval(() => {
            if (!isMounted) return;
            setPublished(p => !p);
        }, 2200);
        return () => { isMounted = false; clearInterval(interval); };
    }, []);

    return (
        <div className="w-full max-w-[270px] bg-white/30 backdrop-blur-md rounded-2xl p-3.5 border border-white/60 shadow-lg min-h-[220px] flex flex-col justify-between overflow-hidden text-gray-800">
            <div className="flex items-center justify-between pb-1.5 border-b border-blue-200/50">
                <span className="text-[9px] font-bold text-gray-800 tracking-wider uppercase flex items-center gap-1.5">
                    <FileText className="w-3.5 h-3.5 text-blue-700" />
                    HEADLESS CMS SYNC
                </span>
                <span className="text-[7.5px] font-bold text-blue-800 bg-blue-100 px-1.5 py-0.5 rounded font-mono">
                    {published ? "EDGE SYNCED" : "DRAFT AUTOSAVED"}
                </span>
            </div>

            <div className="min-h-[145px] flex flex-col justify-center my-1 gap-2">
                <div className="bg-white/85 rounded-xl p-2.5 border border-blue-200/70 shadow-sm flex flex-col gap-1.5">
                    <div className="flex items-center justify-between text-[7px] font-mono text-gray-500">
                        <span>Sanity / Strapi GraphQL</span>
                        <span className="text-emerald-700 font-bold">0.18s Invalidate</span>
                    </div>

                    <div className="bg-blue-50/70 p-2 rounded-lg border border-blue-100 space-y-1">
                        <div className="text-[8.5px] font-bold text-blue-900">Hero Announcement Title</div>
                        <div className="flex items-center justify-between text-[7.5px] font-mono">
                            <span className="text-gray-500">Status:</span>
                            <span className={`font-bold ${published ? "text-emerald-700" : "text-amber-700"}`}>
                                {published ? "Live on Production ✓" : "Pending Deploy..."}
                            </span>
                        </div>
                    </div>
                </div>

                <div className="w-full py-2 rounded-lg font-bold tracking-widest uppercase text-[10px] bg-blue-700 text-white text-center shadow-sm">
                    {buttonText || "UPDATE"}
                </div>
            </div>

            <div className="w-full bg-blue-200/60 h-1 rounded-full overflow-hidden">
                <motion.div key={published ? "p" : "d"} initial={{ width: "0%" }} animate={{ width: "100%" }} transition={{ duration: 2.2, ease: "linear" }} className="h-full bg-blue-600 rounded-full" />
            </div>
        </div>
    );
}

// 8B.6 WEB TECHNICAL SUPPORT MOCKUP (RESOLVE)
function WebTechnicalSupportMockup({ buttonText }: { buttonText?: string }) {
    const [resolved, setResolved] = useState(false);

    useEffect(() => {
        let isMounted = true;
        const interval = setInterval(() => {
            if (!isMounted) return;
            setResolved(r => !r);
        }, 2200);
        return () => { isMounted = false; clearInterval(interval); };
    }, []);

    return (
        <div className="w-full max-w-[270px] bg-white/30 backdrop-blur-md rounded-2xl p-3.5 border border-white/60 shadow-lg min-h-[220px] flex flex-col justify-between overflow-hidden text-gray-800">
            <div className="flex items-center justify-between pb-1.5 border-b border-sky-200/50">
                <span className="text-[9px] font-bold text-gray-800 tracking-wider uppercase flex items-center gap-1.5">
                    <LifeBuoy className="w-3.5 h-3.5 text-sky-700" />
                    DEVOPS 24/7 SLA
                </span>
                <span className="text-[7.5px] font-bold text-emerald-800 bg-emerald-100 px-1.5 py-0.5 rounded font-mono">
                    99.99% UPTIME
                </span>
            </div>

            <div className="min-h-[145px] flex flex-col justify-center my-1 gap-2">
                <div className="bg-white/85 rounded-xl p-2.5 border border-sky-200/70 shadow-sm flex flex-col gap-1.5">
                    <div className="flex items-center justify-between text-[7px] font-mono text-gray-500">
                        <span>Incident Response:</span>
                        <span className="text-emerald-700 font-bold">&lt; 8 Mins Average</span>
                    </div>

                    <div className="p-2 rounded-lg bg-sky-50/80 border border-sky-100">
                        <div className="text-[8.5px] font-bold text-gray-900">Ticket #8492: Cache Optimization</div>
                        <div className="flex items-center justify-between text-[7px] font-mono mt-1">
                            <span className="text-gray-500">Status:</span>
                            <span className={`font-bold ${resolved ? "text-emerald-700" : "text-sky-700"}`}>
                                {resolved ? "Resolved & Closed ✓" : "Investigating..."}
                            </span>
                        </div>
                    </div>
                </div>

                <div className="w-full py-2 rounded-lg font-bold tracking-widest uppercase text-[10px] bg-sky-700 text-white text-center shadow-sm">
                    {buttonText || "RESOLVE"}
                </div>
            </div>

            <div className="w-full bg-sky-200/60 h-1 rounded-full overflow-hidden">
                <motion.div key={resolved ? "r" : "i"} initial={{ width: "0%" }} animate={{ width: "100%" }} transition={{ duration: 2.2, ease: "linear" }} className="h-full bg-sky-600 rounded-full" />
            </div>
        </div>
    );
}

/* =========================================================================
   9. BRANDING & IDENTITY DEDICATED HEADER MOCKUPS
   ========================================================================= */

// 9.1 LOGO USAGE MOCKUP
function LogoUsageMockup({ buttonText }: { buttonText?: string }) {
    const [mode, setMode] = useState(0);

    useEffect(() => {
        let isMounted = true;
        const interval = setInterval(() => {
            if (!isMounted) return;
            setMode(m => (m + 1) % 3);
        }, 2000);
        return () => { isMounted = false; clearInterval(interval); };
    }, []);

    const modes = [
        { label: "PRIMARY COLOR", badge: "APPROVED ✓", color: "text-emerald-700 bg-emerald-50", isError: false },
        { label: "MONO INVERTED", badge: "APPROVED ✓", color: "text-blue-700 bg-blue-50", isError: false },
        { label: "DO NOT SKEW", badge: "MISUSE ✗", color: "text-rose-700 bg-rose-50", isError: true },
    ];
    const cur = modes[mode];

    return (
        <div className="w-full max-w-[270px] bg-white/30 backdrop-blur-md rounded-2xl p-3.5 border border-white/60 shadow-lg min-h-[220px] flex flex-col justify-between overflow-hidden text-gray-800">
            <div className="flex items-center justify-between pb-1.5 border-b border-blue-200/50">
                <span className="text-[9px] font-bold text-gray-800 tracking-wider uppercase flex items-center gap-1.5">
                    <ShieldCheck className="w-3.5 h-3.5 text-blue-700" />
                    LOGO USAGE RULES
                </span>
                <span className={`text-[7.5px] font-bold px-1.5 py-0.5 rounded font-mono ${cur.color}`}>
                    {cur.badge}
                </span>
            </div>

            <div className="min-h-[145px] flex flex-col justify-center my-1 gap-2">
                <div className={`rounded-xl p-3 border shadow-sm flex flex-col items-center justify-center min-h-[72px] transition-colors duration-300 ${
                    mode === 1 ? "bg-gray-900 border-gray-700 text-white" : "bg-white/85 border-blue-100 text-gray-900"
                }`}>
                    <motion.div
                        animate={{
                            skewX: mode === 2 ? -22 : 0,
                            scaleY: mode === 2 ? 0.75 : 1,
                            rotate: mode === 2 ? 12 : 0,
                        }}
                        transition={{ duration: 0.35 }}
                        className="flex items-center gap-2"
                    >
                        <div className={`w-8 h-8 rounded-lg flex items-center justify-center font-bold text-sm shadow-xs ${
                            mode === 1 
                                ? "bg-white text-gray-900" 
                                : mode === 2 
                                    ? "bg-rose-500 text-white" 
                                    : "bg-gradient-to-tr from-blue-700 to-indigo-600 text-white"
                        }`}>
                            SN
                        </div>
                        <span className={`font-mono text-[11px] font-extrabold tracking-wider ${
                            mode === 1 ? "text-white" : mode === 2 ? "text-rose-600" : "text-gray-900"
                        }`}>
                            SMRKONOVA
                        </span>
                    </motion.div>

                    <div className="mt-2 text-[7.5px] font-mono font-semibold">
                        {mode === 2 ? (
                            <span className="text-rose-600 font-bold">✗ Never distort, rotate, or recolor</span>
                        ) : (
                            <span className="text-gray-500">✓ Official brand proportion locked</span>
                        )}
                    </div>
                </div>

                <div className={`w-full py-2 rounded-lg font-bold tracking-widest uppercase text-[10px] text-center shadow-sm transition-colors ${
                    cur.isError ? "bg-rose-600 text-white" : "bg-blue-700 text-white"
                }`}>
                    {buttonText || "RULES"}
                </div>
            </div>

            <div className="w-full bg-blue-200/60 h-1 rounded-full overflow-hidden">
                <motion.div
                    key={mode}
                    initial={{ width: "0%" }}
                    animate={{ width: "100%" }}
                    transition={{ duration: 2.0, ease: "linear" }}
                    className={`h-full ${cur.isError ? "bg-rose-600" : "bg-blue-600"} rounded-full`}
                />
            </div>
        </div>
    );
}

// 9.2 LOGO SPACING MOCKUP
function LogoSpacingMockup({ buttonText }: { buttonText?: string }) {
    const [xVal, setXVal] = useState(24);

    useEffect(() => {
        let isMounted = true;
        const interval = setInterval(() => {
            if (!isMounted) return;
            setXVal(x => (x === 24 ? 32 : x === 32 ? 16 : 24));
        }, 1900);
        return () => { isMounted = false; clearInterval(interval); };
    }, []);

    return (
        <div className="w-full max-w-[270px] bg-white/30 backdrop-blur-md rounded-2xl p-3.5 border border-white/60 shadow-lg min-h-[220px] flex flex-col justify-between overflow-hidden text-gray-800">
            <div className="flex items-center justify-between pb-1.5 border-b border-purple-200/50">
                <span className="text-[9px] font-bold text-gray-800 tracking-wider uppercase flex items-center gap-1.5">
                    <Crop className="w-3.5 h-3.5 text-purple-600" />
                    CLEARSPACE BUFFER
                </span>
                <span className="text-[7.5px] font-bold text-purple-700 bg-purple-100/90 px-1.5 py-0.5 rounded font-mono">
                    1.5X ({xVal}px)
                </span>
            </div>

            <div className="min-h-[145px] flex flex-col justify-center my-1 gap-2">
                <div className="bg-white/85 rounded-xl p-3 border border-purple-200/70 shadow-sm flex flex-col items-center justify-center relative min-h-[72px]">
                    <motion.div
                        animate={{ padding: `${xVal / 2.2}px` }}
                        transition={{ duration: 0.3 }}
                        className="border-2 border-dashed border-purple-400 bg-purple-50/50 rounded-lg flex items-center justify-center relative"
                    >
                        <span className="absolute -top-3 text-[7px] font-mono text-purple-600 font-bold bg-white px-1 rounded border border-purple-200">
                            X = {xVal}px
                        </span>
                        <span className="absolute -bottom-3 text-[7px] font-mono text-purple-600 font-bold bg-white px-1 rounded border border-purple-200">
                            X = {xVal}px
                        </span>
                        <div className="bg-gradient-to-r from-purple-700 to-indigo-600 text-white rounded-md px-3 py-1 font-mono text-[10px] font-bold shadow-xs">
                            ❖ SMRKONOVA
                        </div>
                    </motion.div>

                    <div className="mt-2 text-[7px] font-mono text-gray-500">
                        Zero intrusions allowed inside the X buffer
                    </div>
                </div>

                <div className="w-full py-2 rounded-lg font-bold tracking-widest uppercase text-[10px] bg-purple-700 text-white text-center shadow-sm">
                    {buttonText || "CLEARSPACE"}
                </div>
            </div>

            <div className="w-full bg-purple-200/60 h-1 rounded-full overflow-hidden">
                <motion.div
                    key={xVal}
                    initial={{ width: "0%" }}
                    animate={{ width: "100%" }}
                    transition={{ duration: 1.9, ease: "linear" }}
                    className="h-full bg-purple-600 rounded-full"
                />
            </div>
        </div>
    );
}

// 9.3 COLOUR PALETTE MOCKUP
function ColourPaletteMockup({ buttonText }: { buttonText?: string }) {
    const [activeCol, setActiveCol] = useState(0);

    const colors = [
        { name: "Brand Primary", hex: "#1E1B4B", role: "60% Base", contrast: "AAA 14:1" },
        { name: "Electric Indigo", hex: "#4338CA", role: "30% Accent", contrast: "AAA 8.2:1" },
        { name: "Crimson Rose", hex: "#E11D48", role: "10% Focus", contrast: "AA 4.8:1" },
        { name: "Warm Canvas", hex: "#FFF7F7", role: "Background", contrast: "Neutral" },
    ];

    useEffect(() => {
        let isMounted = true;
        const interval = setInterval(() => {
            if (!isMounted) return;
            setActiveCol(c => (c + 1) % colors.length);
        }, 1800);
        return () => { isMounted = false; clearInterval(interval); };
    }, [colors.length]);

    const cur = colors[activeCol];

    return (
        <div className="w-full max-w-[270px] bg-white/30 backdrop-blur-md rounded-2xl p-3.5 border border-white/60 shadow-lg min-h-[220px] flex flex-col justify-between overflow-hidden text-gray-800">
            <div className="flex items-center justify-between pb-1.5 border-b border-rose-200/50">
                <span className="text-[9px] font-bold text-gray-800 tracking-wider uppercase flex items-center gap-1.5">
                    <Palette className="w-3.5 h-3.5 text-rose-600" />
                    BRAND PALETTE
                </span>
                <span className="text-[7.5px] font-bold text-rose-700 bg-rose-100/90 px-1.5 py-0.5 rounded font-mono">
                    WCAG AAA
                </span>
            </div>

            <div className="min-h-[145px] flex flex-col justify-center my-1 gap-2">
                <div className="grid grid-cols-4 gap-1.5">
                    {colors.map((c, idx) => (
                        <div
                            key={idx}
                            onClick={() => setActiveCol(idx)}
                            className={`cursor-pointer rounded-lg p-1 border transition-all ${
                                idx === activeCol ? "border-rose-500 scale-105 shadow-sm bg-white" : "border-white/60 bg-white/60"
                            }`}
                        >
                            <div className="w-full h-5 rounded shadow-xs" style={{ backgroundColor: c.hex }} />
                            <div className="text-[6.5px] font-mono text-center font-bold text-gray-800 mt-1 truncate">
                                {c.hex}
                            </div>
                        </div>
                    ))}
                </div>

                <div className="bg-white/85 rounded-xl p-2 border border-rose-100 shadow-xs flex items-center justify-between">
                    <div>
                        <div className="text-[9px] font-bold text-gray-900 leading-tight">{cur.name}</div>
                        <div className="text-[7.5px] text-gray-500 font-mono">{cur.role} · {cur.contrast}</div>
                    </div>
                    <span className="text-[7px] font-bold text-rose-700 bg-rose-50 px-1.5 py-0.5 rounded font-mono">
                        COPIED ✓
                    </span>
                </div>

                <div className="w-full py-2 rounded-lg font-bold tracking-widest uppercase text-[10px] bg-rose-700 text-white text-center shadow-sm">
                    {buttonText || "PALETTE"}
                </div>
            </div>

            <div className="w-full bg-rose-200/60 h-1 rounded-full overflow-hidden">
                <motion.div
                    key={activeCol}
                    initial={{ width: "0%" }}
                    animate={{ width: "100%" }}
                    transition={{ duration: 1.8, ease: "linear" }}
                    className="h-full bg-rose-600 rounded-full"
                />
            </div>
        </div>
    );
}

// 9.4 TYPOGRAPHY HIERARCHY MOCKUP
function TypographyHierarchyMockup({ buttonText }: { buttonText?: string }) {
    const [level, setLevel] = useState(0);

    const levels = [
        { tag: "H1 DISPLAY", font: "Cabinet Grotesk Bold", size: "48px / 1.1", sample: "Culture In Motion" },
        { tag: "H2 HEADING", font: "Cabinet Grotesk Semi", size: "28px / 1.25", sample: "Strategic Vision" },
        { tag: "BODY COPY", font: "Inter Variable 400", size: "15px / 1.5", sample: "Ultra-crisp legibility across web & mobile." },
    ];

    useEffect(() => {
        let isMounted = true;
        const interval = setInterval(() => {
            if (!isMounted) return;
            setLevel(l => (l + 1) % levels.length);
        }, 1900);
        return () => { isMounted = false; clearInterval(interval); };
    }, [levels.length]);

    const cur = levels[level];

    return (
        <div className="w-full max-w-[270px] bg-white/30 backdrop-blur-md rounded-2xl p-3.5 border border-white/60 shadow-lg min-h-[220px] flex flex-col justify-between overflow-hidden text-gray-800">
            <div className="flex items-center justify-between pb-1.5 border-b border-indigo-200/50">
                <span className="text-[9px] font-bold text-gray-800 tracking-wider uppercase flex items-center gap-1.5">
                    <Type className="w-3.5 h-3.5 text-indigo-700" />
                    TYPE SCALE SYSTEM
                </span>
                <span className="text-[7.5px] font-bold text-indigo-700 bg-indigo-100/90 px-1.5 py-0.5 rounded font-mono">
                    {cur.tag}
                </span>
            </div>

            <div className="min-h-[145px] flex flex-col justify-center my-1 gap-2">
                <div className="bg-white/85 rounded-xl p-3 border border-indigo-200/70 shadow-sm flex flex-col justify-between min-h-[72px]">
                    <div className="flex items-center justify-between text-[7px] font-mono text-gray-500">
                        <span>{cur.font}</span>
                        <span className="text-indigo-600 font-bold">{cur.size}</span>
                    </div>

                    <motion.div
                        key={level}
                        initial={{ opacity: 0, y: 3 }}
                        animate={{ opacity: 1, y: 0 }}
                        className={`text-gray-900 mt-1 truncate ${
                            level === 0 ? "text-base font-extrabold tracking-tight" : level === 1 ? "text-sm font-bold" : "text-[11px] leading-relaxed font-normal"
                        }`}
                    >
                        {cur.sample}
                    </motion.div>

                    <div className="text-[7px] font-mono text-gray-400 mt-1">
                        Tracking: -0.02em · Optical Kerning
                    </div>
                </div>

                <div className="w-full py-2 rounded-lg font-bold tracking-widest uppercase text-[10px] bg-indigo-700 text-white text-center shadow-sm">
                    {buttonText || "HIERARCHY"}
                </div>
            </div>

            <div className="w-full bg-indigo-200/60 h-1 rounded-full overflow-hidden">
                <motion.div
                    key={level}
                    initial={{ width: "0%" }}
                    animate={{ width: "100%" }}
                    transition={{ duration: 1.9, ease: "linear" }}
                    className="h-full bg-indigo-600 rounded-full"
                />
            </div>
        </div>
    );
}

// 9.5 ICON USAGE MOCKUP
function IconUsageMockup({ buttonText }: { buttonText?: string }) {
    const [strokeWidth, setStrokeWidth] = useState(2);

    useEffect(() => {
        let isMounted = true;
        const interval = setInterval(() => {
            if (!isMounted) return;
            setStrokeWidth(s => (s === 2 ? 1.5 : s === 1.5 ? 2.5 : 2));
        }, 1800);
        return () => { isMounted = false; clearInterval(interval); };
    }, []);

    return (
        <div className="w-full max-w-[270px] bg-white/30 backdrop-blur-md rounded-2xl p-3.5 border border-white/60 shadow-lg min-h-[220px] flex flex-col justify-between overflow-hidden text-gray-800">
            <div className="flex items-center justify-between pb-1.5 border-b border-sky-200/50">
                <span className="text-[9px] font-bold text-gray-800 tracking-wider uppercase flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-sky-600" />
                    24PX ICON GEOMETRY
                </span>
                <span className="text-[7.5px] font-bold text-sky-700 bg-sky-100/90 px-1.5 py-0.5 rounded font-mono">
                    STROKE: {strokeWidth}PX
                </span>
            </div>

            <div className="min-h-[145px] flex flex-col justify-center my-1 gap-2">
                <div className="bg-white/85 rounded-xl p-3 border border-sky-200/70 shadow-sm flex flex-col items-center justify-center min-h-[72px]">
                    <div className="grid grid-cols-4 gap-2">
                        {[Sparkles, Palette, Zap, Globe].map((IconComponent, idx) => (
                            <div key={idx} className="w-9 h-9 rounded-lg bg-sky-50 border border-dashed border-sky-300 flex items-center justify-center relative">
                                <IconComponent className="w-4 h-4 text-sky-700" strokeWidth={strokeWidth} />
                            </div>
                        ))}
                    </div>

                    <div className="mt-2 text-[7.5px] font-mono text-gray-500 flex items-center gap-2">
                        <span>24dp Grid</span>
                        <span>•</span>
                        <span>Round Join</span>
                        <span>•</span>
                        <span>Consistent Weight</span>
                    </div>
                </div>

                <div className="w-full py-2 rounded-lg font-bold tracking-widest uppercase text-[10px] bg-sky-700 text-white text-center shadow-sm">
                    {buttonText || "ICONS"}
                </div>
            </div>

            <div className="w-full bg-sky-200/60 h-1 rounded-full overflow-hidden">
                <motion.div
                    key={strokeWidth}
                    initial={{ width: "0%" }}
                    animate={{ width: "100%" }}
                    transition={{ duration: 1.8, ease: "linear" }}
                    className="h-full bg-sky-600 rounded-full"
                />
            </div>
        </div>
    );
}

// 9.6 PHOTOGRAPHY STYLE MOCKUP
function PhotographyStyleMockup({ buttonText }: { buttonText?: string }) {
    const [styleIdx, setStyleIdx] = useState(0);

    const styles = [
        { label: "Natural Daylight", tone: "Warm 5200K", focus: "Authentic Portraits" },
        { label: "Editorial Contrast", tone: "Moody Shadows", focus: "Architectural Focus" },
        { label: "Candid Human", tone: "Cinematic Grain", focus: "Zero Posed Clichés" },
    ];

    useEffect(() => {
        let isMounted = true;
        const interval = setInterval(() => {
            if (!isMounted) return;
            setStyleIdx(s => (s + 1) % styles.length);
        }, 1900);
        return () => { isMounted = false; clearInterval(interval); };
    }, [styles.length]);

    const cur = styles[styleIdx];

    return (
        <div className="w-full max-w-[270px] bg-white/30 backdrop-blur-md rounded-2xl p-3.5 border border-white/60 shadow-lg min-h-[220px] flex flex-col justify-between overflow-hidden text-gray-800">
            <div className="flex items-center justify-between pb-1.5 border-b border-blue-200/50">
                <span className="text-[9px] font-bold text-gray-800 tracking-wider uppercase flex items-center gap-1.5">
                    <Camera className="w-3.5 h-3.5 text-blue-600" />
                    PHOTO ART DIRECTION
                </span>
                <span className="text-[7.5px] font-bold text-blue-700 bg-blue-100/90 px-1.5 py-0.5 rounded font-mono">
                    COLOR GRADE
                </span>
            </div>

            <div className="min-h-[145px] flex flex-col justify-center my-1 gap-2">
                <div className="bg-white/85 rounded-xl p-2.5 border border-blue-200/70 shadow-sm flex flex-col gap-1.5">
                    <div className="h-14 rounded-lg bg-gradient-to-r from-blue-900 via-indigo-800 to-purple-900 flex items-center justify-between px-3 text-white relative overflow-hidden">
                        <div className="relative z-10">
                            <div className="text-[10px] font-bold">{cur.label}</div>
                            <div className="text-[7px] text-blue-200 font-mono">{cur.tone}</div>
                        </div>
                        <Camera className="w-5 h-5 text-white/50" />
                    </div>

                    <div className="flex items-center justify-between text-[7.5px] font-mono text-gray-600 bg-blue-50/70 px-2 py-1 rounded">
                        <span>Rule: {cur.focus}</span>
                        <span className="text-emerald-700 font-bold">100% On-Brand</span>
                    </div>
                </div>

                <div className="w-full py-2 rounded-lg font-bold tracking-widest uppercase text-[10px] bg-blue-700 text-white text-center shadow-sm">
                    {buttonText || "ART DIRECTION"}
                </div>
            </div>

            <div className="w-full bg-blue-200/60 h-1 rounded-full overflow-hidden">
                <motion.div
                    key={styleIdx}
                    initial={{ width: "0%" }}
                    animate={{ width: "100%" }}
                    transition={{ duration: 1.9, ease: "linear" }}
                    className="h-full bg-blue-600 rounded-full"
                />
            </div>
        </div>
    );
}

// 9.7 ILLUSTRATION STYLE MOCKUP
function IllustrationStyleMockup({ buttonText }: { buttonText?: string }) {
    const [shape, setShape] = useState(0);

    useEffect(() => {
        let isMounted = true;
        const interval = setInterval(() => {
            if (!isMounted) return;
            setShape(s => (s + 1) % 3);
        }, 1900);
        return () => { isMounted = false; clearInterval(interval); };
    }, []);

    return (
        <div className="w-full max-w-[270px] bg-white/30 backdrop-blur-md rounded-2xl p-3.5 border border-white/60 shadow-lg min-h-[220px] flex flex-col justify-between overflow-hidden text-gray-800">
            <div className="flex items-center justify-between pb-1.5 border-b border-purple-200/50">
                <span className="text-[9px] font-bold text-gray-800 tracking-wider uppercase flex items-center gap-1.5">
                    <PenTool className="w-3.5 h-3.5 text-purple-600" />
                    CUSTOM VECTOR ART
                </span>
                <span className="text-[7.5px] font-bold text-purple-700 bg-purple-100/90 px-1.5 py-0.5 rounded font-mono">
                    BESPOKE SVGS
                </span>
            </div>

            <div className="min-h-[145px] flex flex-col justify-center my-1 gap-2">
                <div className="bg-white/85 rounded-xl p-3 border border-purple-200/70 shadow-sm flex flex-col items-center justify-center min-h-[72px]">
                    <div className="flex items-center gap-3">
                        <motion.div
                            animate={{ rotate: shape * 90, scale: [1, 1.1, 1] }}
                            transition={{ duration: 0.5 }}
                            className="w-10 h-10 rounded-xl bg-gradient-to-tr from-purple-600 to-indigo-500 shadow-md flex items-center justify-center text-white"
                        >
                            <Sparkles className="w-5 h-5" />
                        </motion.div>
                        <div className="text-[8px] font-mono">
                            <div className="font-bold text-gray-900">Geometric Duotone</div>
                            <div className="text-purple-600">Pure Vector Paths</div>
                            <div className="text-gray-400">Zero Stock Clip-art</div>
                        </div>
                    </div>
                </div>

                <div className="w-full py-2 rounded-lg font-bold tracking-widest uppercase text-[10px] bg-purple-700 text-white text-center shadow-sm">
                    {buttonText || "ARTWORK"}
                </div>
            </div>

            <div className="w-full bg-purple-200/60 h-1 rounded-full overflow-hidden">
                <motion.div
                    key={shape}
                    initial={{ width: "0%" }}
                    animate={{ width: "100%" }}
                    transition={{ duration: 1.9, ease: "linear" }}
                    className="h-full bg-purple-600 rounded-full"
                />
            </div>
        </div>
    );
}

// 9.8 BRAND VOICE MOCKUP
function BrandVoiceMockup({ buttonText }: { buttonText?: string }) {
    const [slider, setSlider] = useState(0);

    const tones = [
        { trait: "CONFIDENT & BOLD", score: "90%", desc: "Authoritative without being arrogant" },
        { trait: "WARM & HUMAN", score: "80%", desc: "Conversational, approachable language" },
        { trait: "PRECISE & RAZOR-SHARP", score: "95%", desc: "Direct, concise, zero fluff" },
    ];

    useEffect(() => {
        let isMounted = true;
        const interval = setInterval(() => {
            if (!isMounted) return;
            setSlider(s => (s + 1) % tones.length);
        }, 1900);
        return () => { isMounted = false; clearInterval(interval); };
    }, [tones.length]);

    const cur = tones[slider];

    return (
        <div className="w-full max-w-[270px] bg-white/30 backdrop-blur-md rounded-2xl p-3.5 border border-white/60 shadow-lg min-h-[220px] flex flex-col justify-between overflow-hidden text-gray-800">
            <div className="flex items-center justify-between pb-1.5 border-b border-indigo-200/50">
                <span className="text-[9px] font-bold text-gray-800 tracking-wider uppercase flex items-center gap-1.5">
                    <Sliders className="w-3.5 h-3.5 text-indigo-700" />
                    BRAND VOICE MATRIX
                </span>
                <span className="text-[7.5px] font-bold text-indigo-700 bg-indigo-100/90 px-1.5 py-0.5 rounded font-mono">
                    TONE OF VOICE
                </span>
            </div>

            <div className="min-h-[145px] flex flex-col justify-center my-1 gap-2">
                <div className="bg-white/85 rounded-xl p-3 border border-indigo-200/70 shadow-sm flex flex-col justify-between min-h-[72px]">
                    <div className="flex items-center justify-between text-[8px] font-bold text-gray-900">
                        <span>{cur.trait}</span>
                        <span className="text-indigo-600 font-mono">{cur.score}</span>
                    </div>

                    <div className="w-full bg-gray-100 h-1.5 rounded-full overflow-hidden my-1">
                        <motion.div
                            animate={{ width: cur.score }}
                            transition={{ duration: 0.5 }}
                            className="h-full bg-indigo-600 rounded-full"
                        />
                    </div>

                    <div className="text-[7.5px] text-gray-500 font-mono truncate">
                        "{cur.desc}"
                    </div>
                </div>

                <div className="w-full py-2 rounded-lg font-bold tracking-widest uppercase text-[10px] bg-indigo-700 text-white text-center shadow-sm">
                    {buttonText || "TONE"}
                </div>
            </div>

            <div className="w-full bg-indigo-200/60 h-1 rounded-full overflow-hidden">
                <motion.div
                    key={slider}
                    initial={{ width: "0%" }}
                    animate={{ width: "100%" }}
                    transition={{ duration: 1.9, ease: "linear" }}
                    className="h-full bg-indigo-600 rounded-full"
                />
            </div>
        </div>
    );
}

// 9.9 SOCIAL MEDIA STYLE MOCKUP
function SocialMediaStyleMockup({ buttonText }: { buttonText?: string }) {
    const [format, setFormat] = useState(0);

    const formats = [
        { label: "1:1 FEED", ratio: "aspect-square", w: "w-16 h-16" },
        { label: "9:16 STORY", ratio: "aspect-[9/16]", w: "w-12 h-20" },
        { label: "16:9 BANNER", ratio: "aspect-[16/9]", w: "w-24 h-14" },
    ];

    useEffect(() => {
        let isMounted = true;
        const interval = setInterval(() => {
            if (!isMounted) return;
            setFormat(f => (f + 1) % formats.length);
        }, 1900);
        return () => { isMounted = false; clearInterval(interval); };
    }, [formats.length]);

    const cur = formats[format];

    return (
        <div className="w-full max-w-[270px] bg-white/30 backdrop-blur-md rounded-2xl p-3.5 border border-white/60 shadow-lg min-h-[220px] flex flex-col justify-between overflow-hidden text-gray-800">
            <div className="flex items-center justify-between pb-1.5 border-b border-rose-200/50">
                <span className="text-[9px] font-bold text-gray-800 tracking-wider uppercase flex items-center gap-1.5">
                    <Share2 className="w-3.5 h-3.5 text-rose-600" />
                    SOCIAL TEMPLATES
                </span>
                <span className="text-[7.5px] font-bold text-rose-700 bg-rose-100/90 px-1.5 py-0.5 rounded font-mono">
                    {cur.label}
                </span>
            </div>

            <div className="min-h-[145px] flex flex-col justify-center my-1 gap-2">
                <div className="bg-white/85 rounded-xl p-2.5 border border-rose-200/70 shadow-sm flex items-center justify-between min-h-[72px]">
                    <motion.div
                        layout
                        className={`${cur.w} rounded-lg bg-gradient-to-tr from-rose-500 via-purple-600 to-indigo-600 flex items-center justify-center text-white shadow-xs`}
                    >
                        <Sparkles className="w-4 h-4" />
                    </motion.div>

                    <div className="text-[8px] font-mono space-y-1">
                        <div className="font-bold text-gray-900">@smrkonova</div>
                        <div className="text-gray-500">12 Kit Layouts</div>
                        <div className="text-emerald-600 font-bold">Retina Ready (1080px)</div>
                    </div>
                </div>

                <div className="w-full py-2 rounded-lg font-bold tracking-widest uppercase text-[10px] bg-rose-700 text-white text-center shadow-sm">
                    {buttonText || "SOCIAL"}
                </div>
            </div>

            <div className="w-full bg-rose-200/60 h-1 rounded-full overflow-hidden">
                <motion.div
                    key={format}
                    initial={{ width: "0%" }}
                    animate={{ width: "100%" }}
                    transition={{ duration: 1.9, ease: "linear" }}
                    className="h-full bg-rose-600 rounded-full"
                />
            </div>
        </div>
    );
}

// 9.10 PRINT GUIDELINES MOCKUP
function PrintGuidelinesMockup({ buttonText }: { buttonText?: string }) {
    const [step, setStep] = useState(0);

    useEffect(() => {
        let isMounted = true;
        const interval = setInterval(() => {
            if (!isMounted) return;
            setStep(s => (s + 1) % 2);
        }, 2000);
        return () => { isMounted = false; clearInterval(interval); };
    }, []);

    return (
        <div className="w-full max-w-[270px] bg-white/30 backdrop-blur-md rounded-2xl p-3.5 border border-white/60 shadow-lg min-h-[220px] flex flex-col justify-between overflow-hidden text-gray-800">
            <div className="flex items-center justify-between pb-1.5 border-b border-sky-200/50">
                <span className="text-[9px] font-bold text-gray-800 tracking-wider uppercase flex items-center gap-1.5">
                    <Printer className="w-3.5 h-3.5 text-sky-700" />
                    PRINT SPECIFICATIONS
                </span>
                <span className="text-[7.5px] font-bold text-sky-700 bg-sky-100/90 px-1.5 py-0.5 rounded font-mono">
                    300 DPI CMYK
                </span>
            </div>

            <div className="min-h-[145px] flex flex-col justify-center my-1 gap-2">
                <div className="bg-white/85 rounded-xl p-2.5 border border-sky-200/70 shadow-sm flex flex-col justify-between min-h-[72px]">
                    <div className="grid grid-cols-2 gap-1 text-[7.5px] font-mono">
                        <div className="bg-sky-50 p-1 rounded border border-sky-100">
                            <span className="text-gray-500">COLOR:</span> <span className="font-bold text-sky-900">CMYK FOGRA39</span>
                        </div>
                        <div className="bg-sky-50 p-1 rounded border border-sky-100">
                            <span className="text-gray-500">BLEED:</span> <span className="font-bold text-sky-900">+3mm Box</span>
                        </div>
                    </div>

                    <div className="flex items-center justify-between text-[7.5px] font-mono pt-1 border-t border-gray-100">
                        <span className="text-gray-600">Crop Marks: Safe</span>
                        <span className="text-emerald-700 font-bold">Spot UV Ready ✓</span>
                    </div>
                </div>

                <div className="w-full py-2 rounded-lg font-bold tracking-widest uppercase text-[10px] bg-sky-700 text-white text-center shadow-sm">
                    {buttonText || "PRINT SPECS"}
                </div>
            </div>

            <div className="w-full bg-sky-200/60 h-1 rounded-full overflow-hidden">
                <motion.div
                    key={step}
                    initial={{ width: "0%" }}
                    animate={{ width: "100%" }}
                    transition={{ duration: 2.0, ease: "linear" }}
                    className="h-full bg-sky-600 rounded-full"
                />
            </div>
        </div>
    );
}

// 9.11 DIGITAL GUIDELINES MOCKUP
function DigitalGuidelinesMockup({ buttonText }: { buttonText?: string }) {
    const [assetIdx, setAssetIdx] = useState(0);

    const assets = [
        { name: "Favicon.ico", spec: "32x32 / 16x16 .svg" },
        { name: "Apple Touch Icon", spec: "180x180 Retina" },
        { name: "OpenGraph Banner", spec: "1200x630 Social OG" },
    ];

    useEffect(() => {
        let isMounted = true;
        const interval = setInterval(() => {
            if (!isMounted) return;
            setAssetIdx(a => (a + 1) % assets.length);
        }, 1800);
        return () => { isMounted = false; clearInterval(interval); };
    }, [assets.length]);

    const cur = assets[assetIdx];

    return (
        <div className="w-full max-w-[270px] bg-white/30 backdrop-blur-md rounded-2xl p-3.5 border border-white/60 shadow-lg min-h-[220px] flex flex-col justify-between overflow-hidden text-gray-800">
            <div className="flex items-center justify-between pb-1.5 border-b border-blue-200/50">
                <span className="text-[9px] font-bold text-gray-800 tracking-wider uppercase flex items-center gap-1.5">
                    <Globe className="w-3.5 h-3.5 text-blue-600" />
                    DIGITAL ASSET SYSTEM
                </span>
                <span className="text-[7.5px] font-bold text-blue-700 bg-blue-100/90 px-1.5 py-0.5 rounded font-mono">
                    WEB & APP
                </span>
            </div>

            <div className="min-h-[145px] flex flex-col justify-center my-1 gap-2">
                <div className="bg-white/85 rounded-xl p-2.5 border border-blue-200/70 shadow-sm flex flex-col justify-between min-h-[72px]">
                    <div className="flex items-center justify-between text-[8px] font-bold">
                        <span className="font-mono text-gray-900">{cur.name}</span>
                        <span className="text-emerald-700 bg-emerald-50 px-1.5 py-0.2 rounded font-mono">READY ✓</span>
                    </div>

                    <div className="text-[7.5px] font-mono text-gray-500 bg-blue-50/70 p-1.5 rounded mt-1">
                        Format: {cur.spec}
                    </div>

                    <div className="text-[7px] text-gray-400 font-mono mt-1">
                        SVG · WEBP · 2X PNG Assets Included
                    </div>
                </div>

                <div className="w-full py-2 rounded-lg font-bold tracking-widest uppercase text-[10px] bg-blue-700 text-white text-center shadow-sm">
                    {buttonText || "DIGITAL"}
                </div>
            </div>

            <div className="w-full bg-blue-200/60 h-1 rounded-full overflow-hidden">
                <motion.div
                    key={assetIdx}
                    initial={{ width: "0%" }}
                    animate={{ width: "100%" }}
                    transition={{ duration: 1.8, ease: "linear" }}
                    className="h-full bg-blue-600 rounded-full"
                />
            </div>
        </div>
    );
}

// 9.12 BRANDING FALLBACK MOCKUP
function BrandingIdentityMockup({ title, buttonText }: { title?: string; buttonText?: string }) {
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
    const btn = (feature.buttonText || "").toLowerCase();

    // 0. Website Maintenance & Growth (Dedicated Header & Button Matching)
    if (
        (title.includes("feature enhancement") && btn.includes("scale")) || 
        (title === "feature enhancements" && btn === "scale")
    ) {
        return <WebFeatureEnhancementsMockup buttonText={feature.buttonText} />;
    }

    if (title.includes("ui improvement") || (title.includes("ui") && btn.includes("refresh"))) {
        return <WebUiImprovementsMockup buttonText={feature.buttonText} />;
    }

    if (
        (title.includes("performance") && btn.includes("speed")) || 
        title.includes("performance optimisation") || 
        title.includes("performance optimization")
    ) {
        return <WebPerformanceOptimisationMockup buttonText={feature.buttonText} />;
    }

    if (title.includes("platform security") || (title.includes("security") && btn.includes("protect"))) {
        return <WebPlatformSecurityMockup buttonText={feature.buttonText} />;
    }

    if (title.includes("content management") || (title.includes("content") && btn.includes("update"))) {
        return <WebContentManagementMockup buttonText={feature.buttonText} />;
    }

    if (title.includes("technical support") && (btn.includes("resolve") || !title.includes("mobile"))) {
        return <WebTechnicalSupportMockup buttonText={feature.buttonText} />;
    }

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
    if (title.includes("blog") || title.includes("article")) {
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

    // 7. UI / UX Design & Figma (Dedicated Header Matching)
    if (title.includes("organised figma") || title.includes("organized figma") || title.includes("figma file")) {
        return <OrganisedFigmaFilesMockup buttonText={feature.buttonText} />;
    }

    if (title.includes("reusable component") || title.includes("component")) {
        return <ReusableComponentsMockup buttonText={feature.buttonText} />;
    }

    if (title.includes("auto layout")) {
        return <AutoLayoutMockup buttonText={feature.buttonText} />;
    }

    if (title.includes("responsive design") || title.includes("responsive")) {
        return <ResponsiveDesignMockup buttonText={feature.buttonText} />;
    }

    if (title.includes("design token") || title.includes("token")) {
        return <DesignTokensMockup buttonText={feature.buttonText} />;
    }

    if (title.includes("clear naming") || title.includes("naming")) {
        return <ClearNamingMockup buttonText={feature.buttonText} />;
    }

    if (title.includes("developer note") || title.includes("specs")) {
        return <DeveloperNotesMockup buttonText={feature.buttonText} />;
    }

    if (title.includes("design qa") || title.includes("qa support") || title.includes("qa")) {
        return <DesignQaSupportMockup buttonText={feature.buttonText} />;
    }

    if (title.includes("figma")) {
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

    // 9. Digital Marketing, SEO & Performance (Dedicated Header Matching)
    if (title.includes("fast website")) {
        return <FastWebsiteMockup buttonText={feature.buttonText} />;
    }

    if (title.includes("strong branding")) {
        return <StrongBrandingMarketingMockup buttonText={feature.buttonText} />;
    }

    if (title.includes("seo foundation") || (title.includes("seo") && !title.includes("fast"))) {
        return <SeoFoundationsMockup buttonText={feature.buttonText} />;
    }

    if (title.includes("landing page") || title.includes("optimised landing") || title.includes("optimized landing")) {
        return <OptimisedLandingPagesMockup buttonText={feature.buttonText} />;
    }

    if (title.includes("conversion tracking") || title.includes("conversion")) {
        return <ConversionTrackingMockup buttonText={feature.buttonText} />;
    }

    if (title.includes("quality content")) {
        return <QualityContentMockup buttonText={feature.buttonText} />;
    }

    if (title.includes("performance campaign") || title.includes("campaign")) {
        return <PerformanceCampaignsMockup buttonText={feature.buttonText} />;
    }

    if (
        title.includes("continuous optimisation") || 
        title.includes("continuous optimization") ||
        title.includes("optimisation") ||
        title.includes("optimization")
    ) {
        return <ContinuousOptimisationMockup buttonText={feature.buttonText} />;
    }

    if (title.includes("marketing") || title.includes("growth")) {
        return <DigitalMarketingMockup title={feature.title} buttonText={feature.buttonText} />;
    }

    // 10. Creative Studio, 3D & Motion Graphics (Dedicated 16 Features Matching)
    if (title.includes("product exploded") || title.includes("exploded")) {
        return <ExplodedViewsMockup buttonText={feature.buttonText} />;
    }

    if (title.includes("product animation")) {
        return <ProductAnimationMockup buttonText={feature.buttonText} />;
    }

    if (title.includes("packaging visual") || (title.includes("packaging") && btn.includes("3d"))) {
        return <PackagingVisualisationMockup buttonText={feature.buttonText} />;
    }

    if (title.includes("architectural visual") || title.includes("architectural") || btn.includes("spatial")) {
        return <ArchitecturalVisualisationMockup buttonText={feature.buttonText} />;
    }

    if (title.includes("logo animation") || (title.includes("logo") && btn.includes("motion"))) {
        return <LogoAnimationMockup buttonText={feature.buttonText} />;
    }

    if (title.includes("explainer motion") || title.includes("explainer")) {
        return <ExplainerMotionMockup buttonText={feature.buttonText} />;
    }

    if (title.includes("ui motion")) {
        return <UiMotionGraphicsMockup buttonText={feature.buttonText} />;
    }

    if (title.includes("social media motion") || (title.includes("social") && btn.includes("design"))) {
        return <SocialMediaMotionMockup buttonText={feature.buttonText} />;
    }

    if (title.includes("scroll animation") || title.includes("scroll")) {
        return <ScrollAnimationsMockup buttonText={feature.buttonText} />;
    }

    if (title.includes("interactive section") || (title.includes("interactive") && btn.includes("interaction"))) {
        return <InteractiveSectionsMockup buttonText={feature.buttonText} />;
    }

    if (title.includes("lottie animation") || title.includes("lottie") || btn.includes("vector motion")) {
        return <LottieAnimationsMockup buttonText={feature.buttonText} />;
    }

    if (title.includes("storytelling") || btn.includes("immersive")) {
        return <StorytellingExperiencesMockup buttonText={feature.buttonText} />;
    }

    if (title.includes("brand film") || (title.includes("film") && btn.includes("cinematic"))) {
        return <BrandFilmsMockup buttonText={feature.buttonText} />;
    }

    if (title.includes("product launch") || title.includes("launch video") || (title.includes("product") && btn.includes("commercial"))) {
        return <ProductLaunchVideosMockup buttonText={feature.buttonText} />;
    }

    if (title.includes("company introduction") || (title.includes("company") && btn.includes("corporate"))) {
        return <CompanyIntroductionsMockup buttonText={feature.buttonText} />;
    }

    if (title.includes("customer stor") || btn.includes("testimonial")) {
        return <CustomerStoriesMockup buttonText={feature.buttonText} />;
    }

    if (
        title.includes("3d") || 
        title.includes("render") || 
        title.includes("motion") || 
        title.includes("animation")
    ) {
        return <CreativeMotionMockup title={feature.title} buttonText={feature.buttonText} />;
    }

    // 11. Branding & Identity (Dedicated Header Matching)
    if (title.includes("logo usage") || (title.includes("logo") && feature.buttonText?.toLowerCase().includes("rule"))) {
        return <LogoUsageMockup buttonText={feature.buttonText} />;
    }

    if (title.includes("logo spacing") || title.includes("clearspace") || (title.includes("logo") && title.includes("spacing"))) {
        return <LogoSpacingMockup buttonText={feature.buttonText} />;
    }

    if (title.includes("colour") || title.includes("color") || title.includes("palette")) {
        return <ColourPaletteMockup buttonText={feature.buttonText} />;
    }

    if (title.includes("typography") || title.includes("hierarchy") || title.includes("font")) {
        return <TypographyHierarchyMockup buttonText={feature.buttonText} />;
    }

    if (title.includes("icon usage") || title.includes("icon")) {
        return <IconUsageMockup buttonText={feature.buttonText} />;
    }

    if (title.includes("photography") || title.includes("photo")) {
        return <PhotographyStyleMockup buttonText={feature.buttonText} />;
    }

    if (title.includes("illustration") || title.includes("artwork")) {
        return <IllustrationStyleMockup buttonText={feature.buttonText} />;
    }

    if (title.includes("brand voice") || title.includes("voice") || title.includes("tone")) {
        return <BrandVoiceMockup buttonText={feature.buttonText} />;
    }

    if (title.includes("social media") || title.includes("social")) {
        return <SocialMediaStyleMockup buttonText={feature.buttonText} />;
    }

    if (title.includes("print guideline") || title.includes("print")) {
        return <PrintGuidelinesMockup buttonText={feature.buttonText} />;
    }

    if (title.includes("digital guideline") || title.includes("digital")) {
        return <DigitalGuidelinesMockup buttonText={feature.buttonText} />;
    }

    if (
        title.includes("logo") || 
        title.includes("brand")
    ) {
        return <BrandingIdentityMockup title={feature.title} buttonText={feature.buttonText} />;
    }

    // Fallback
    return <DefaultFallbackGraphic feature={feature} />;
}
