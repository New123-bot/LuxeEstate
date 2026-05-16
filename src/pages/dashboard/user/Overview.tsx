import React from 'react';
import { 
  TrendingUp, Home, Heart, MessageSquare, 
  ArrowUpRight, ArrowDownRight, Clock, MapPin,
  Users 
} from 'lucide-react';
import { motion } from 'motion/react';
import { PROPERTIES } from '../../../data/mockData';
import { formatCurrency, cn } from '../../../utils';

export default function UserOverview() {
  return (
    <div className="space-y-10">
       <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-4">
          <div>
             <h1 className="text-4xl font-black text-zinc-900 dark:text-white mb-2 tracking-tight">Howdy, David!</h1>
             <p className="text-zinc-500 dark:text-zinc-400 font-medium">Welcome back to your dashboard. Here's what's happening with your interests.</p>
          </div>
          <div className="flex items-center gap-2 px-4 py-2 bg-white dark:bg-zinc-900 rounded-xl shadow-sm border border-zinc-100 dark:border-zinc-800 text-xs font-bold uppercase tracking-widest cursor-pointer hover:bg-zinc-50 transition-colors">
            Today: May 24, 2024
          </div>
       </div>

       {/* Stats Grid */}
       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { label: 'Saved Properties', value: '12', icon: Heart, color: 'text-rose-500', bg: 'bg-rose-50', trend: '+2 this week' },
            { label: 'Recently Viewed', value: '45', icon: Clock, color: 'text-indigo-500', bg: 'bg-indigo-50', trend: 'Trending up' },
            { label: 'Messages', value: '3', icon: MessageSquare, color: 'text-emerald-500', bg: 'bg-emerald-50', trend: '2 unread' },
            { label: 'Active Inquiries', value: '5', icon: TrendingUp, color: 'text-amber-500', bg: 'bg-amber-50', trend: '1 new response' },
          ].map((stat, idx) => (
             <motion.div
               key={idx}
               initial={{ opacity: 0, y: 20 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ delay: idx * 0.1 }}
               className="bg-white dark:bg-zinc-900 p-6 rounded-[32px] shadow-sm border border-zinc-100 dark:border-zinc-800 group hover:shadow-xl hover:scale-[1.02] transition-all"
             >
                <div className="flex justify-between items-start mb-4">
                   <div className={cn("w-12 h-12 rounded-2xl flex items-center justify-center transition-transform group-hover:scale-110", stat.bg, stat.color)}>
                      <stat.icon size={24} />
                   </div>
                   <div className="text-[10px] font-black uppercase tracking-widest text-zinc-400 px-2 py-1 bg-zinc-50 dark:bg-zinc-800 rounded-md">
                      Live Stats
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
          {/* Saved Properties Table/List */}
          <div className="lg:col-span-2 space-y-6">
             <div className="flex items-center justify-between">
                <h3 className="text-xl font-black dark:text-white tracking-tight">Recommended for You</h3>
                <button className="text-indigo-600 font-bold text-sm hover:underline">View All</button>
             </div>
             
             <div className="space-y-4">
                {PROPERTIES.slice(0, 3).map((prop, idx) => (
                   <motion.div
                     key={prop.id}
                     initial={{ opacity: 0, x: -20 }}
                     animate={{ opacity: 1, x: 0 }}
                     transition={{ delay: 0.4 + (idx * 0.1) }}
                     className="bg-white dark:bg-zinc-900 p-4 rounded-3xl shadow-sm border border-zinc-100 dark:border-zinc-800 flex items-center gap-4 group hover:shadow-lg transition-all"
                   >
                      <div className="w-24 h-24 rounded-2xl overflow-hidden shrink-0">
                         <img src={prop.images[0]} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" referrerPolicy="no-referrer" />
                      </div>
                      <div className="flex-1 min-w-0">
                         <h4 className="font-bold dark:text-white truncate">{prop.title}</h4>
                         <p className="text-xs text-zinc-500 dark:text-zinc-400 flex items-center gap-1 mb-2">
                           <MapPin size={12} /> {prop.location.city}
                         </p>
                         <div className="flex items-center gap-3">
                            <span className="text-sm font-black text-indigo-600">{formatCurrency(prop.price)}</span>
                            <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest px-2 py-0.5 bg-zinc-50 dark:bg-zinc-800 rounded-md">For {prop.status}</span>
                         </div>
                      </div>
                      <button className="p-3 bg-zinc-50 dark:bg-zinc-800 rounded-xl text-zinc-400 hover:text-indigo-600 hover:bg-indigo-50 transition-all">
                         <ArrowUpRight size={20} />
                      </button>
                   </motion.div>
                ))}
             </div>
          </div>

          {/* Activity Timeline */}
          <div className="space-y-6">
             <h3 className="text-xl font-black dark:text-white tracking-tight">Recent Activity</h3>
             <div className="bg-white dark:bg-zinc-900 p-8 rounded-[32px] shadow-sm border border-zinc-100 dark:border-zinc-800 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-50/20 rounded-full blur-3xl" />
                <div className="space-y-8 relative z-10">
                   {[
                     { title: 'Inquiry Sent', desc: 'Modern Minimalist Villa', time: '2 hours ago', icon: MessageSquare, color: 'bg-indigo-50 text-indigo-600' },
                     { title: 'Property Saved', desc: 'Coastal Serenity Estate', time: '1 day ago', icon: Heart, color: 'bg-rose-50 text-rose-600' },
                     { title: 'Profile Updated', desc: 'Added phone number', time: '3 days ago', icon: Users, color: 'bg-emerald-50 text-emerald-600' }
                   ].map((item, idx) => (
                      <div key={idx} className="flex gap-4">
                         <div className={cn("w-10 h-10 shrink-0 rounded-xl flex items-center justify-center", item.color)}>
                            <item.icon size={18} />
                         </div>
                         <div>
                            <p className="text-sm font-black dark:text-white">{item.title}</p>
                            <p className="text-xs font-medium text-zinc-500 mb-1">{item.desc}</p>
                            <p className="text-[10px] font-bold text-zinc-400 uppercase">{item.time}</p>
                         </div>
                      </div>
                   ))}
                </div>
                <button className="w-full mt-8 py-3 bg-zinc-50 dark:bg-zinc-800 rounded-xl text-xs font-black uppercase text-zinc-500 hover:bg-indigo-600 hover:text-white transition-all tracking-widest">
                   Clear History
                </button>
             </div>
          </div>
       </div>
    </div>
  );
}
