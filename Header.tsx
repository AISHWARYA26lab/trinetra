import React from 'react';
import { Activity, ShieldCheck, Server } from 'lucide-react';
import { SYSTEM_METRICS } from '../../lib/mockData';
import { ThemeToggle } from '../ui/ThemeToggle';

export const Header: React.FC = () => {
    return (
        <header className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8 bg-card p-6 rounded-xl border border-border">
            <div>
                <h1 className="text-2xl font-bold bg-gradient-to-r from-primary to-slate-900 dark:to-white bg-clip-text text-transparent">
                    DATA-CENTRIC DASHBOARD
                </h1>
                <p className="text-muted-foreground text-xs tracking-widest uppercase font-semibold">Privacy & Audit Layer</p>
            </div>

            <div className="flex flex-wrap items-center gap-4 md:gap-6">
                <div className="flex items-center gap-3 bg-secondary px-4 py-2 rounded-lg border border-border">
                    <Activity className="text-green-600 w-5 h-5 animate-pulse" />
                    <div className="flex flex-col">
                        <span className="text-[10px] text-muted-foreground uppercase font-bold">Uptime</span>
                        <span className="font-mono text-primary font-bold text-sm tracking-tight">{SYSTEM_METRICS.uptime}</span>
                    </div>
                </div>

                <div className="flex items-center gap-3 bg-secondary px-4 py-2 rounded-lg border border-border">
                    <ShieldCheck className="text-primary w-5 h-5" />
                    <div className="flex flex-col">
                        <span className="text-[10px] text-muted-foreground uppercase font-bold">Threat Level</span>
                        <span className="font-mono text-green-600 font-bold text-sm tracking-tight">{SYSTEM_METRICS.threatLevel}</span>
                    </div>
                </div>

                <div className="flex items-center gap-3 bg-secondary px-4 py-2 rounded-lg border border-border">
                    <Server className="text-primary w-5 h-5" />
                    <div className="flex flex-col">
                        <span className="text-[10px] text-muted-foreground uppercase font-bold">Compliance</span>
                        <span className="font-mono text-foreground font-bold text-sm tracking-tight">{SYSTEM_METRICS.governance}</span>
                    </div>
                </div>

                <div className="relative w-12 h-12 flex items-center justify-center hidden sm:flex bg-secondary rounded-full border border-border">
                    <svg className="transform -rotate-90 w-full h-full p-1">
                        <circle cx="24" cy="24" r="18" className="stroke-muted/20" strokeWidth="4" fill="transparent" />
                        <circle cx="24" cy="24" r="18" className="stroke-primary" strokeWidth="4" fill="transparent" strokeDasharray="113" strokeDashoffset={113 - (113 * SYSTEM_METRICS.integrityScore) / 100} />
                    </svg>
                    <span className="absolute text-[10px] font-bold text-foreground">{SYSTEM_METRICS.integrityScore}%</span>
                </div>

                <div className="flex items-center gap-3 pl-2">
                    <ThemeToggle />
                </div>
            </div>
        </header>
    );
};
