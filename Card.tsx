import React, { ReactNode } from 'react';
import { cn } from '../../lib/utils';

interface CardProps {
    children: ReactNode;
    className?: string;
    title?: string;
    glow?: boolean;
}

export const Card: React.FC<CardProps> = ({ children, className, title, glow = false }) => {
    return (
        <div className={cn(
            "glass-panel p-5 transition-all duration-300 hover:bg-card/80 group",
            glow && "shadow-[0_0_20px_rgba(0,243,255,0.15)] dark:shadow-[0_0_20px_rgba(0,243,255,0.15)] border-primary/30",
            className
        )}>
            {title && (
                <h3 className="text-primary text-sm font-semibold uppercase tracking-wider mb-4 border-b border-border pb-2 group-hover:border-primary/20 transition-colors">
                    {title}
                </h3>
            )}
            {children}
        </div>
    );
};
