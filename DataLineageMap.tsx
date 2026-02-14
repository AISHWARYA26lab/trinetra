import React from 'react';
import { Card } from '../ui/Card';
import { Smartphone, Server, BrainCircuit, Database } from 'lucide-react';
import { motion } from 'framer-motion';

export const DataLineageMap: React.FC = () => {
    return (
        <Card title="Real-Time Data Access Map" className="col-span-1 md:col-span-3 h-80 relative overflow-hidden">
            {/* Background Grid Effect */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(0,243,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,243,255,0.03)_1px,transparent_1px)] bg-[size:20px_20px]"></div>

            <div className="h-full flex items-center justify-around relative z-10 px-10">
                <Node icon={Smartphone} label="Device" color="text-foreground" />
                <Connection valid />
                <Node icon={BrainCircuit} label="AI Models" color="text-green-500" pulse />
                <Connection valid />
                <Node icon={Server} label="Backend" color="text-primary" />
                <Connection valid={false} warning />
                <Node icon={Database} label="Secure Database" color="text-destructive" />
            </div>
        </Card >
    );
};

const Node = ({ icon: Icon, label, color, pulse }: { icon: any, label: string, color: string, pulse?: boolean }) => (
    <div className="flex flex-col items-center gap-3 z-10">
        <div className={`w-16 h-16 rounded-xl bg-card border border-border flex items-center justify-center shadow-[0_0_15px_rgba(0,0,0,0.1)] relative group ${pulse ? 'animate-pulse' : ''}`}>
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <Icon className={`w-8 h-8 ${color}`} />
            {pulse && <span className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 rounded-full animate-ping"></span>}
        </div>
        <span className="text-xs font-semibold text-muted-foreground tracking-wide uppercase bg-secondary/80 px-2 py-0.5 rounded border border-border">{label}</span>
    </div>
);

const Connection = ({ valid, warning }: { valid?: boolean, warning?: boolean }) => {
    return (
        <div className="flex-1 h-0.5 bg-border relative mx-4">
            {valid && (
                <motion.div
                    className="absolute top-0 left-0 h-full bg-primary shadow-[0_0_10px_rgba(0,243,255,0.5)]"
                    initial={{ width: "0%", left: "0%" }}
                    animate={{ left: ["0%", "100%"], width: ["20%", "20%"] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                />
            )}
            {warning && (
                <motion.div
                    className="absolute top-0 left-0 h-full bg-destructive shadow-[0_0_10px_rgba(255,0,85,0.5)]"
                    initial={{ width: "0%", left: "0%" }}
                    animate={{ left: ["0%", "100%"], width: ["20%", "20%"] }}
                    transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
                />
            )}
        </div>
    );
};
