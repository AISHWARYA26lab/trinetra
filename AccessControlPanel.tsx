import React from 'react';
import { Card } from '../ui/Card';
import { MOCK_LOGS } from '../../lib/mockData';
import { Search, Filter, CheckCircle, XCircle, Smartphone, Monitor, Server, Cpu } from 'lucide-react';

const DeviceIcon = ({ type }: { type: string }) => {
    switch (type) {
        case 'Mobile': return <Smartphone className="w-4 h-4" />;
        case 'Desktop': return <Monitor className="w-4 h-4" />;
        case 'Server': return <Server className="w-4 h-4" />;
        default: return <Cpu className="w-4 h-4" />;
    }
};

export const AccessControlPanel: React.FC = () => {

    return (
        <Card title="Data Access Control" className="col-span-1 md:col-span-2 lg:col-span-2 h-96 flex flex-col">
            <div className="flex justify-between items-center mb-4">
                <div className="relative group w-1/3">
                    <Search className="absolute left-2 top-2.5 w-4 h-4 text-cyber-muted group-hover:text-cyber-blue transition-colors" />
                    <input
                        type="text"
                        placeholder="Search Device ID..."
                        className="w-full bg-cyber-dark/50 border border-cyber-muted/20 rounded-md py-2 pl-8 pr-4 text-xs focus:outline-none focus:border-cyber-blue/50 text-cyber-text placeholder-cyber-muted/50 transition-all"
                    />
                </div>
                <button className="flex items-center gap-2 px-3 py-1.5 rounded bg-cyber-blue/10 border border-cyber-blue/20 text-cyber-blue text-xs hover:bg-cyber-blue/20 transition-all">
                    <Filter className="w-3 h-3" /> Filter
                </button>
            </div>

            <div className="overflow-auto flex-1 custom-scrollbar">
                <table className="w-full text-left border-collapse">
                    <thead>
                        <tr className="text-cyber-muted text-[10px] uppercase border-b border-cyber-muted/10">
                            <th className="pb-2 pl-2">Device</th>
                            <th className="pb-2">IP Addr</th>
                            <th className="pb-2">Access Field</th>
                            <th className="pb-2">Timestamp</th>
                            <th className="pb-2">Status</th>
                            <th className="pb-2">Encryption</th>
                        </tr>
                    </thead>
                    <tbody className="text-xs">
                        {MOCK_LOGS.map((log) => (
                            <tr key={log.id} className="border-b border-cyber-muted/5 hover:bg-cyber-blue/5 transition-colors group">
                                <td className="py-3 pl-2 flex items-center gap-2 font-mono text-cyber-blue">
                                    <DeviceIcon type={log.deviceType} />
                                    {log.deviceId}
                                </td>
                                <td className="py-3 font-mono text-cyber-muted group-hover:text-cyber-text">{log.ipAddress}</td>
                                <td className="py-3 text-cyber-text">{log.fieldsAccessed.join(', ')}</td>
                                <td className="py-3 text-cyber-muted">{log.timestamp}</td>
                                <td className="py-3">
                                    <span className={`flex items-center gap-1.5 px-2 py-0.5 rounded-full text-[10px] w-fit ${log.status === 'Approved'
                                        ? 'bg-cyber-green/10 text-cyber-green border border-cyber-green/20'
                                        : 'bg-cyber-red/10 text-cyber-red border border-cyber-red/20'
                                        }`}>
                                        {log.status === 'Approved' ? <CheckCircle className="w-3 h-3" /> : <XCircle className="w-3 h-3" />}
                                        {log.status}
                                    </span>
                                </td>
                                <td className="py-3 font-mono text-[10px] text-cyber-blue/80">{log.encryption}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </Card>
    );
};
