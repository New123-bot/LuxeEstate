import React from 'react';
import { 
  TrendingUp, Users, Shield, 
  Activity, Database, PieChart, 
  Settings, AlertCircle, CheckCircle2,
  BarChart3, Landmark, UserPlus
} from 'lucide-react';
import { motion } from 'motion/react';
import { PROPERTIES } from '../../../data/mockData';
import { formatCurrency, cn } from '../../../utils';

export default function AdminOverview() {
  return (
    <div className="space-y-10 pb-10">
       <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-4">
          <div>
             <div className="flex items-center gap-2 mb-2">
                <span className="px-2 py-0.5 bg-red-500 text-white text-[10px] font-black uppercase tracking-widest rounded-md">Super Admin</span>
                <span className="text-zinc-400 text-xs font-bold">System Online • v2.4.0</span>
             </div>
             <h1 className="text-4xl font-black text-zinc-900 dark:text-white mb-2 tracking-tight">Platform Command</h1>
             <p className="text-zinc-500 dark:text-zinc-400 font-medium">Monitoring LuxeEstate global platform health and analytics.</p>
          </div>
          <div className="flex items-center gap-3">
             <button className="p-3 bg-white dark:bg-zinc-900 border border-zinc-100 dark:border-zinc-800 rounded-2xl text-zinc-600 hover:text-indigo-600 transition-colors shadow-sm">
                <Settings size={20} />
             </button>
             <button className="px-6 py-3 bg-zinc-900 dark:bg-white dark:text-zinc-950 text-white rounded-2xl text-sm font-bold shadow-xl active:scale-95 transition-all">
                System Restart
             </button>
          </div>
       </div>

       {/* System Status Indicators */}
       <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { label: 'API Status', status: 'Healthy', color: 'bg-emerald-500' },
            { label: 'Database', status: 'Optimized', color: 'bg-emerald-500' },
            { label: 'Auth Service', status: 'Active', color: 'bg-emerald-500' },
            { label: 'Payments', status: 'Pending Review', color: 'bg-amber-500' },
          ].map((sys, idx) => (
             <div key={idx} className="bg-white dark:bg-zinc-900 px-4 py-3 rounded-2xl border border-zinc-100 dark:border-zinc-800 flex items-center justify-between shadow-sm">
                <span className="text-[11px] font-black text-zinc-400 uppercase tracking-widest">{sys.label}</span>
                <div className="flex items-center gap-2">
                   <span className="text-[10px] font-bold text-zinc-500">{sys.status}</span>
                   <div className={cn("w-2 h-2 rounded-full animate-pulse", sys.color)} />
                </div>
             </div>
          ))}
       </div>

       {/* Global Stats Grid */}
       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { label: 'Total Volume', value: '$2.48B', icon: Landmark, color: 'text-indigo-600', bg: 'bg-indigo-50', trend: '+450M this month' },
            { label: 'Platform Users', value: '142.5k', icon: Users, color: 'text-emerald-600', bg: 'bg-emerald-50', trend: '+1,200 today' },
            { label: 'Active Agents', value: '4,820', icon: Shield, color: 'text-amber-600', bg: 'bg-amber-50', trend: '12 applications' },
            { label: 'Conversion', value: '3.4%', icon: Activity, color: 'text-rose-600', bg: 'bg-rose-50', trend: '+0.5% optimization' },
          ].map((stat, idx) => (
             <motion.div
               key={idx}
               initial={{ opacity: 0, y: 20 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ delay: idx * 0.1 }}
               className="bg-white dark:bg-zinc-900 p-6 rounded-[32px] shadow-sm border border-zinc-100 dark:border-zinc-800 group hover:shadow-xl transition-all"
             >
                <div className="flex justify-between items-start mb-4">
                   <div className={cn("w-12 h-12 rounded-2xl flex items-center justify-center transition-transform group-hover:scale-110", stat.bg, stat.color)}>
                      <stat.icon size={24} />
                   </div>
                   <div className="flex items-center gap-1">
                      <TrendingUp size={14} className="text-emerald-500" />
                   </div>
                </div>
                <h3 className="text-3xl font-black dark:text-white mb-1">{stat.value}</h3>
                <p className="text-sm font-bold text-zinc-500 dark:text-zinc-400 mb-4">{stat.label}</p>
                <p className="text-[10px] font-black text-zinc-400 uppercase tracking-widest">{stat.trend}</p>
             </motion.div>
          ))}
       </div>

       <div className="grid lg:grid-cols-3 gap-10">
          {/* Approval Queue */}
          <div className="lg:col-span-2 space-y-6">
             <div className="flex items-center justify-between">
                <h3 className="text-xl font-black dark:text-white tracking-tight">Property Approval Queue <span className="bg-amber-500 text-white text-[10px] px-2 py-0.5 rounded-full ml-2">12 Pending</span></h3>
                <button className="text-indigo-600 font-bold text-sm">Review All</button>
             </div>
             
             <div className="space-y-4">
                {PROPERTIES.slice(0, 3).map((prop, idx) => (
                   <div key={prop.id} className="bg-white dark:bg-zinc-900 p-6 rounded-[36px] border border-zinc-100 dark:border-zinc-800 flex items-center gap-6 group">
                      <div className="w-16 h-16 rounded-[20px] overflow-hidden shrink-0">
                         <img src={prop.images[0]} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                      </div>
                      <div className="flex-1 min-w-0">
                         <h4 className="font-black dark:text-white truncate mb-1">{prop.title}</h4>
                         <p className="text-xs font-bold text-zinc-400">Agent: {prop.agent.name} • Goal: {prop.status}</p>
                      </div>
                      <div className="flex gap-2">
                         <button className="w-10 h-10 bg-emerald-50 text-emerald-600 hover:bg-emerald-600 hover:text-white rounded-xl flex items-center justify-center transition-all">
                            <CheckCircle2 size={20} />
                         </button>
                         <button className="w-10 h-10 bg-rose-50 text-rose-600 hover:bg-rose-600 hover:text-white rounded-xl flex items-center justify-center transition-all">
                            <AlertCircle size={20} />
                         </button>
                      </div>
                   </div>
                ))}
             </div>
          </div>

          {/* Platform Performance Stats */}
          <div className="space-y-6">
             <h3 className="text-xl font-black dark:text-white tracking-tight">Server Metrics</h3>
             <div className="bg-white dark:bg-zinc-900 rounded-[40px] border border-zinc-100 dark:border-zinc-800 p-8 shadow-sm">
                <div className="space-y-8">
                   <div className="space-y-4">
                      <div className="flex justify-between items-end">
                         <span className="text-xs font-black text-zinc-400 uppercase tracking-widest">Server Load</span>
                         <span className="text-sm font-black dark:text-white">42%</span>
                      </div>
                      <div className="w-full h-2 bg-zinc-100 dark:bg-zinc-800 rounded-full overflow-hidden">
                         <div className="h-full bg-indigo-500 w-[42%]" />
                      </div>
                   </div>
                   
                   <div className="space-y-4">
                      <div className="flex justify-between items-end">
                         <span className="text-xs font-black text-zinc-400 uppercase tracking-widest">Active Sessions</span>
                         <span className="text-sm font-black dark:text-white">1,402</span>
                      </div>
                      <div className="w-full h-2 bg-zinc-100 dark:bg-zinc-800 rounded-full overflow-hidden">
                         <div className="h-full bg-emerald-500 w-[68%]" />
                      </div>
                   </div>

                   <div className="space-y-4">
                      <div className="flex justify-between items-end">
                         <span className="text-xs font-black text-zinc-400 uppercase tracking-widest">Storage (Global)</span>
                         <span className="text-sm font-black dark:text-white">2.4 TB</span>
                      </div>
                      <div className="w-full h-2 bg-zinc-100 dark:bg-zinc-800 rounded-full overflow-hidden">
                         <div className="h-full bg-amber-500 w-[84%]" />
                      </div>
                   </div>
                </div>

                <div className="mt-10 pt-8 border-t border-zinc-100 dark:border-zinc-800 space-y-4">
                   <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-emerald-500 rounded-full" />
                      <p className="text-xs font-bold text-zinc-500">Auto-scaling group active</p>
                   </div>
                   <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-indigo-500 rounded-full" />
                      <p className="text-xs font-bold text-zinc-500">SSL Certificate: Valid (342 days)</p>
                   </div>
                </div>
             </div>
          </div>
       </div>
    </div>
  );
}
