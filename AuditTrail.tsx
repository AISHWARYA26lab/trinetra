import React from 'react';
import { Card } from '../ui/Card';
import { BLOCKCHAIN_DATA } from '../../lib/mockData';
import { Link, CheckCircle } from 'lucide-react';

export const AuditTrail: React.FC = () => {
    return (
        <Card title="Audit Trail & Blockchain" className="col-span-1 md:col-span-2 h-80 flex flex-col">
            <div className="flex-1 flex flex-col justify-center relative">
                <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-primary/20"></div>

                <div className="space-y-6 relative z-10">
                    {BLOCKCHAIN_DATA.map((block, index) => (
                        <div key={block.id} className="flex items-center gap-4 ml-2">
                            <div className="w-8 h-8 rounded-full bg-background border border-primary flex items-center justify-center shrink-0 z-10 relative shadow-[0_0_10px_rgba(0,0,0,0.2)]">
                                <Link className="w-4 h-4 text-primary" />
                                {index === 0 && <span className="absolute -top-1 -right-1 w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>}
                            </div>

                            <div className="flex-1 bg-card/50 p-3 rounded border border-border hover:border-primary/30 transition-all group backdrop-blur-sm shadow-sm">
                                <div className="flex justify-between items-start">
                                    <div>
                                        <span className="text-[10px] text-muted-foreground uppercase">Block ID: #{block.id}</span>
                                        <div className="text-xs font-mono text-primary font-medium">{block.hash}</div>
                                        <div className="text-[10px] font-mono text-muted-foreground mt-1">Prev: {block.prevHash}</div>
                                    </div>
                                    <div className="flex flex-col items-end gap-1">
                                        <span className="text-[10px] text-muted-foreground">{block.timestamp}</span>
                                        <span className="flex items-center gap-1 text-[9px] text-green-500 bg-green-500/5 px-1.5 py-0.5 rounded border border-green-500/10">
                                            <CheckCircle className="w-2.5 h-2.5" /> {block.status}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </Card>
    );
};
