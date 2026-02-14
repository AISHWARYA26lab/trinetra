import React, { ReactNode } from 'react';

interface LayoutProps {
    children: ReactNode;
    sidebar: ReactNode;
}

export const DashboardLayout: React.FC<LayoutProps> = ({ children, sidebar }) => {
    return (
        <div className="min-h-screen bg-background text-foreground font-sans flex flex-col md:flex-row bg-grid-pattern overflow-hidden transition-colors duration-300">
            {sidebar}
            <div className="flex-1 flex flex-col h-screen overflow-hidden relative">
                <main className="flex-1 overflow-auto p-4 md:p-8 pb-24 md:pb-8">
                    {children}
                </main>
            </div>
        </div>
    );
}
