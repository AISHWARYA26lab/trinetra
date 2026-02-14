import React from 'react';
import { cn } from '@/lib/utils';

interface BadgeProps {
    status: 'success' | 'warning' | 'error' | 'neutral';
    children: React.ReactNode;
    className?: string;
}

export function Badge({ status, children, className }: BadgeProps) {
    const variants = {
        success: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20',
        warning: 'bg-amber-500/10 text-amber-400 border-amber-500/20',
        error: 'bg-red-500/10 text-red-400 border-red-500/20',
        neutral: 'bg-slate-500/10 text-slate-400 border-slate-500/20',
    };

    return (
        <span
            className={cn(
                'px-2.5 py-0.5 rounded-full text-xs font-medium border uppercase tracking-wider',
                variants[status],
                className
            )}
        >
            {children}
        </span>
    );
}
