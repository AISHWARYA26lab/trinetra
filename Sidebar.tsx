import React from 'react';
import { LayoutDashboard, ShieldCheck, Database, FileText, Activity } from 'lucide-react';
import { ThemeToggle } from '../ui/ThemeToggle';
import { cn } from '../../lib/utils';

export type TabId = 'overview' | 'access' | 'privacy' | 'audit' | 'lineage';

interface SidebarProps {
    activeTab: TabId;
    onTabChange: (tab: TabId) => void;
}

const NAV_ITEMS = [
    { id: 'overview', label: 'Overview', icon: LayoutDashboard },
    { id: 'access', label: 'Access Control', icon: ShieldCheck },
    { id: 'privacy', label: 'Privacy & Hash', icon: Database }, // Using Database for privacy to denote data
    { id: 'audit', label: 'Audit Trail', icon: FileText },
    { id: 'lineage', label: 'Live Lineage', icon: Activity },
];

export const Sidebar: React.FC<SidebarProps> = ({ activeTab, onTabChange }) => {
    return (
        <aside className="fixed bottom-0 left-0 w-full h-16 md:relative md:w-64 md:h-screen bg-background border-t md:border-t-0 md:border-r border-border backdrop-blur-xl z-50 flex md:flex-col justify-around md:justify-start pt-2 md:pt-8 md:pl-6 md:pr-6 gap-2 md:gap-6 transition-colors duration-300">
            <div className="hidden md:flex items-center gap-2 mb-8 px-2">
                <div className="w-8 h-8 rounded bg-gradient-to-br from-primary to-green-400 flex items-center justify-center text-background font-bold text-xl shadow-[0_0_15px_rgba(0,243,255,0.3)]">D</div>
                <span className="text-lg font-bold tracking-wider text-foreground">DASHBOARD</span>
            </div>

            <nav className="flex md:flex-col w-full justify-around md:justify-start gap-1 md:gap-2">
                {NAV_ITEMS.map((item) => {
                    const isActive = activeTab === item.id;
                    const Icon = item.icon;

                    return (
                        <button
                            key={item.id}
                            onClick={() => onTabChange(item.id as TabId)}
                            className={cn(
                                "flex flex-col md:flex-row items-center md:gap-3 p-2 md:px-4 md:py-3 rounded-lg transition-all duration-300 relative overflow-hidden group w-full",
                                isActive
                                    ? "text-primary bg-primary/10 border border-primary/20 shadow-[0_0_10px_rgba(0,243,255,0.1)]"
                                    : "text-muted-foreground hover:text-foreground hover:bg-secondary/50"
                            )}
                        >
                            {isActive && <div className="absolute left-0 top-0 bottom-0 w-1 bg-cyber-blue shadow-[0_0_10px_#00f3ff] hidden md:block" />}
                            <Icon className={cn("w-5 h-5 md:w-4 md:h-4", isActive && "animate-pulse")} />
                            <span className="text-[10px] md:text-sm font-medium tracking-wide">{item.label}</span>
                        </button>
                    );
                })}
            </nav>

            <div className="hidden md:block mt-auto mb-8 px-4 space-y-4">
                <div className="p-4 rounded-lg bg-secondary/30 border border-border">
                    <div className="text-xs text-muted-foreground mb-2">System Status</div>
                    <div className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                        <span className="text-green-500 text-sm font-mono">ONLINE</span>
                    </div>
                </div>

                <div className="flex flex-col gap-2 pt-2 border-t border-border/50">
                    <span className="text-[10px] uppercase text-muted-foreground font-semibold px-1">Theme</span>
                    <div className="flex items-center gap-2">
                        <ThemeToggle />
                        <span className="text-xs text-muted-foreground">Switch Mode</span>
                    </div>
                </div>
            </div>
        </aside>
    );
};
