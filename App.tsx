import { useState } from 'react';
import { DashboardLayout } from './components/layout/DashboardLayout';
import { Sidebar, TabId } from './components/layout/Sidebar';
import { Header } from './components/dashboard/Header';
import { AccessControlPanel } from './components/dashboard/AccessControlPanel';
import { HashingPanel } from './components/dashboard/HashingPanel';
import { EncryptionMonitor } from './components/dashboard/EncryptionMonitor';
import { AuditTrail } from './components/dashboard/AuditTrail';
import { DataLineageMap } from './components/dashboard/DataLineageMap';

function App() {
    const [activeTab, setActiveTab] = useState<TabId>('overview');

    const renderContent = () => {
        switch (activeTab) {
            case 'overview':
                return (
                    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
                        <Header />
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            <AccessControlPanel />
                            <div className="col-span-1 flex flex-col gap-6">
                                <HashingPanel />
                            </div>
                            <div className="col-span-1 md:col-span-2 lg:col-span-3">
                                <DataLineageMap />
                            </div>
                        </div>
                    </div>
                );
            case 'access':
                return (
                    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
                        <div className="flex justify-between items-center">
                            <h2 className="text-2xl font-bold bg-gradient-to-r from-primary to-slate-900 dark:to-white bg-clip-text text-transparent">Access Control Logs</h2>
                        </div>
                        <AccessControlPanel />
                    </div>
                );
            case 'privacy':
                return (
                    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
                        <h2 className="text-2xl font-bold bg-gradient-to-r from-green-600 to-slate-900 dark:to-white bg-clip-text text-transparent">Data Privacy & Encryption</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <HashingPanel />
                            <EncryptionMonitor />
                        </div>
                    </div>
                );
            case 'audit':
                return (
                    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
                        <h2 className="text-2xl font-bold bg-gradient-to-r from-primary to-green-600 bg-clip-text text-transparent">Blockchain Audit Trail</h2>
                        <AuditTrail />
                    </div>
                );
            case 'lineage':
                return (
                    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
                        <h2 className="text-2xl font-bold bg-gradient-to-r from-primary to-slate-900 dark:to-white bg-clip-text text-transparent">Real-Time Data Lineage</h2>
                        <DataLineageMap />
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
                            <div className="p-4 bg-card border border-border rounded-xl shadow-sm">
                                <h3 className="text-primary font-mono text-xs mb-1 uppercase font-bold tracking-wider">LATENCY</h3>
                                <div className="text-2xl font-bold text-foreground">12ms</div>
                            </div>
                            <div className="p-4 bg-card border border-border rounded-xl shadow-sm">
                                <h3 className="text-green-600 font-mono text-xs mb-1 uppercase font-bold tracking-wider">THROUGHPUT</h3>
                                <div className="text-2xl font-bold text-foreground">4.2 GB/s</div>
                            </div>
                            <div className="p-4 bg-card border border-border rounded-xl shadow-sm">
                                <h3 className="text-destructive font-mono text-xs mb-1 uppercase font-bold tracking-wider">ANOMALIES</h3>
                                <div className="text-2xl font-bold text-foreground">0 DETECTED</div>
                            </div>
                        </div>
                    </div>
                );
            default:
                return null;
        }
    };

    return (
        <DashboardLayout sidebar={<Sidebar activeTab={activeTab} onTabChange={setActiveTab} />}>
            {renderContent()}
        </DashboardLayout>
    );
}

export default App;
