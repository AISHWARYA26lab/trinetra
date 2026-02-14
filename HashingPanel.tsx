import React from 'react';
import { Card } from '../ui/Card';
import { Check, Copy } from 'lucide-react';

const HASH_DATA = [
    { field: 'User_SSN', original: '***-**-4421', hash: 'e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855', verified: true },
    { field: 'Credit_Card', original: '****-9921', hash: '5e884898da28047151d0e56f8dc6292773603d0d6aabbdd62a11ef721d1542d8', verified: true },
    { field: 'Medical_ID', original: 'MED-*****99', hash: 'd2d2d2d...a1a1a1', verified: false },
];

export const HashingPanel: React.FC = () => {
    return (
        <Card title="Hashing & Privacy Verification" glow className="col-span-1 h-96 flex flex-col">
            <div className="space-y-4 flex-1 overflow-auto custom-scrollbar pr-2">
                {HASH_DATA.map((item, idx) => (
                    <div key={idx} className="p-3 bg-secondary/30 rounded border border-border hover:border-primary/50 transition-all group">
                        <div className="flex justify-between items-center mb-1">
                            <span className="text-xs text-primary font-semibold">{item.field}</span>
                            {item.verified ? (
                                <span className="flex items-center gap-1 text-[10px] text-green-500 bg-green-500/10 px-1.5 py-0.5 rounded border border-green-500/20">
                                    <Check className="w-3 h-3" /> Verified
                                </span>
                            ) : (
                                <span className="text-[10px] text-destructive animate-pulse">Integrity Check Warning</span>
                            )}
                        </div>

                        <div className="flex items-center gap-2 mb-2">
                            <span className="text-xs text-muted-foreground font-mono bg-secondary/50 px-1 rounded">{item.original}</span>
                            <span className="text-[10px] text-muted-foreground">→ SHA-256</span>
                        </div>

                        <div className="relative group/hash">
                            <div className="text-[9px] font-mono text-muted-foreground break-all leading-tight p-2 bg-background/50 rounded border border-border group-hover:border-primary/30 transition-colors">
                                {item.hash}
                            </div>
                            <button className="absolute top-1 right-1 p-1 bg-primary/10 rounded text-primary opacity-0 group-hover/hash:opacity-100 transition-opacity">
                                <Copy className="w-3 h-3" />
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </Card>
    );
};
