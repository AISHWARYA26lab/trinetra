import React from 'react';
import { Card } from '../ui/Card';
import { Shield, Lock, Key, RefreshCw } from 'lucide-react';

export const EncryptionMonitor: React.FC = () => {
    return (
        <Card title="Encryption Status Monitor" className="col-span-1 h-80">
            <div className="grid grid-cols-2 gap-4 h-full content-start">
                <div className="bg-secondary/30 p-4 rounded-lg border border-green-500/20 flex flex-col items-center justify-center relative overflow-hidden group">
                    <div className="absolute inset-0 bg-green-500/5 group-hover:bg-green-500/10 transition-colors"></div>
                    <Shield className="w-8 h-8 text-green-500 mb-2" />
                    <span className="text-xs text-muted-foreground uppercase tracking-wider">Protocol</span>
                    <span className="text-lg font-mono font-bold text-foreground">TLS 1.3</span>
                    <div className="absolute top-2 right-2 w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                </div>

                <div className="bg-secondary/30 p-4 rounded-lg border border-primary/20 flex flex-col items-center justify-center relative overflow-hidden group">
                    <div className="absolute inset-0 bg-primary/5 group-hover:bg-primary/10 transition-colors"></div>
                    <Key className="w-8 h-8 text-primary mb-2" />
                    <span className="text-xs text-muted-foreground uppercase tracking-wider">Key Exch</span>
                    <span className="text-lg font-mono font-bold text-foreground">ECDHE</span>
                    <div className="absolute top-2 right-2 w-2 h-2 rounded-full bg-primary animate-pulse"></div>
                </div>

                <div className="col-span-2 bg-secondary/30 p-4 rounded-lg border border-border flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <Lock className="w-5 h-5 text-primary" />
                        <div>
                            <span className="text-xs text-muted-foreground block uppercase">Current Cipher Suite</span>
                            <span className="text-sm font-mono text-foreground">TLS_AES_256_GCM_SHA384</span>
                        </div>
                    </div>
                    <div className="flex items-center gap-1.5 text-[10px] text-green-500 bg-green-500/10 px-2 py-1 rounded border border-green-500/20">
                        <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></div>
                        Full Encryption Active
                    </div>
                </div>

                <div className="col-span-2 flex items-center justify-between mt-2 px-1">
                    <div className="flex items-center gap-2">
                        <span className="text-[10px] text-muted-foreground uppercase">Handshake Verification</span>
                        <div className="h-1 w-24 bg-secondary rounded-full overflow-hidden">
                            <div className="h-full bg-primary w-full animate-pulse"></div>
                        </div>
                    </div>
                    <RefreshCw className="w-3 h-3 text-muted-foreground animate-spin-slow" />
                </div>
            </div>
        </Card>
    );
};
