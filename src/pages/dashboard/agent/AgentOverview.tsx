import React from 'react';
import { 
  TrendingUp, Home, MessageSquare, 
  ArrowUpRight, Users, DollarSign, 
  Eye, CheckCircle2, Clock, AlertCircle
} from 'lucide-react';
import { motion } from 'motion/react';
import { PROPERTIES } from '../../../data/mockData';
import { formatCurrency, cn } from '../../../utils';

export default function AgentOverview() {
  return (
    <div className="space-y-10">
       <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-4">
          <div>
             <h1 className="text-4xl font-black text-zinc-900 dark:text-white mb-2 tracking-tight">Agent Portal</h1>
             <p className="text-zinc-500 dark:text-zinc-400 font-medium">Manage your portfolio and track your sales performance.</p>
          </div>
          <div className="flex items-center gap-3">
             <button className="px-6 py-3 bg-indigo-600 text-white rounded-2xl text-sm font-bold shadow-xl shadow-indigo-600/20 hover:scale-105 active:scale-95 transition-all">
                Download Sales Report
             </button>
          </div>
       </div>

       {/* Stats Grid */}
       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { label: 'Active Listings', value: '18', icon: Home, color: 'text-indigo-600', bg: 'bg-indigo-50', trend: '+3 this month' },
            { label: 'Total Sales', value: '$420M', icon: DollarSign, color: 'text-emerald-600', bg: 'bg-emerald-50', trend: '+12% YOY' },
            { label: 'New Leads', value: '24', icon: Users, color: 'text-amber-600', bg: 'bg-amber-50', trend: '8 needs reply' },
            { label: 'Property Views', value: '12.5k', icon: Eye, color: 'text-rose-600', bg: 'bg-rose-50', trend: '+20% this week' },
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
                   <div className="px-2 py-1 bg-zinc-50 dark:bg-zinc-800 rounded-lg text-[10px] font-black text-zinc-400 uppercase tracking-widest">
                      Live
                   </div>
                </div>
                <h3 className="text-3xl font-black dark:text-white mb-1">{stat.value}</h3>
                <p className="text-sm font-bold text-zinc-500 dark:text-zinc-400 mb-4">{stat.label}</p>
                <div className="flex items-center gap-1.5 text-xs font-bold text-emerald-500">
                   <ArrowUpRight size={14} /> {stat.trend}
                </div>
             </motion.div>
          ))}
       </div>

       <div className="grid lg:grid-cols-3 gap-10">
          {/* Recent Listings Management */}
          <div className="lg:col-span-2 space-y-6">
             <div className="flex items-center justify-between">
                <h3 className="text-xl font-black dark:text-white tracking-tight">Your High Performance Properties</h3>
                <button className="text-indigo-600 font-bold text-sm">Manage All</button>
             </div>
             
             <div className="grid gap-4">
                {PROPERTIES.slice(0, 3).map((prop, idx) => (
                   <div key={prop.id} className="bg-white dark:bg-zinc-900 p-5 rounded-[32px] border border-zinc-100 dark:border-zinc-800 flex items-center gap-6 group hover:shadow-lg transition-all">
                      <div className="w-24 h-24 rounded-2xl overflow-hidden shrink-0">
                         <img src={prop.images[0]} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" referrerPolicy="no-referrer" />
                      </div>
                      <div className="flex-1 min-w-0">
                         <div className="flex items-center gap-2 mb-1">
                            <span className="text-[10px] font-black text-emerald-600 uppercase tracking-widest px-2 py-0.5 bg-emerald-50 dark:bg-emerald-900/10 rounded-md">Trending</span>
                            <span className="text-xs font-bold text-zinc-400">{prop.location.city}</span>
                         </div>
                         <h4 className="text-lg font-black dark:text-white truncate mb-2">{prop.title}</h4>
                         <div className="flex items-center gap-6 text-xs font-bold text-zinc-500">
                            <div className="flex items-center gap-1.5"><Eye size={14} /> 1.2k views</div>
                            <div className="flex items-center gap-1.5"><MessageSquare size={14} /> 8 inquiries</div>
                         </div>
                      </div>
                      <div className="text-right shrink-0">
                         <p className="text-lg font-black text-indigo-600">{formatCurrency(prop.price)}</p>
                         <p className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest italic">Listed 12 days ago</p>
                      </div>
                   </div>
                ))}
             </div>
          </div>

          {/* New Leads Sidebar */}
          <div className="space-y-6">
             <h3 className="text-xl font-black dark:text-white tracking-tight">Priority Leads</h3>
             <div className="bg-white dark:bg-zinc-900 rounded-[40px] border border-zinc-100 dark:border-zinc-800 overflow-hidden shadow-sm">
                <div className="p-8 space-y-8">
                   {[
                     { name: 'Marcus Aurelius', interest: 'Modern Minimalist Villa', time: '10m ago', img: 'https://i.pravatar.cc/100?u=marcus', status: 'hot' },
                     { name: 'Sonia Gupta', interest: 'Coastal Serenity Estate', time: '2h ago', img: 'https://i.pravatar.cc/100?u=sonia', status: 'new' },
                     { name: 'Elena Frost', interest: 'Skyline Penthouse', time: '5h ago', img: 'https://i.pravatar.cc/100?u=elena', status: 'waiting' }
                   ].map((lead, i) => (
                      <div key={i} className="flex gap-4 group cursor-pointer">
                         <div className="relative">
                            <img src={lead.img} className="w-12 h-12 rounded-2xl object-cover grayscale group-hover:grayscale-0 transition-all" referrerPolicy="no-referrer" />
                            {lead.status === 'hot' && <div className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full border-2 border-white dark:border-zinc-900" />}
                         </div>
                         <div className="flex-1 min-w-0">
                            <div className="flex justify-between items-start mb-0.5">
                               <p className="text-sm font-black dark:text-white truncate">{lead.name}</p>
                               <span className="text-[9px] font-black text-zinc-400 uppercase">{lead.time}</span>
                            </div>
                            <p className="text-xs font-medium text-zinc-500 dark:text-zinc-400 truncate mb-2">Interested in {lead.interest}</p>
                            <div className="flex gap-2">
                               <button className="px-3 py-1 bg-indigo-600 text-white text-[10px] font-black uppercase tracking-widest rounded-lg">Reply</button>
                               <button className="px-3 py-1 bg-zinc-50 dark:bg-zinc-800 text-zinc-400 text-[10px] font-black uppercase tracking-widest rounded-lg">Dismiss</button>
                            </div>
                         </div>
                      </div>
                   ))}
                </div>
                <button className="w-full py-5 bg-zinc-50 dark:bg-zinc-800 border-t border-zinc-100 dark:border-zinc-800 text-xs font-black uppercase tracking-[0.2em] text-indigo-600 hover:bg-indigo-600 hover:text-white transition-all">
                   View All CRM Leads
                </button>
             </div>
          </div>
       </div>
    </div>
  );
}
