import React from 'react';
import { 
  Plus, Search, Filter, MoreHorizontal, 
  Eye, Edit3, Trash2, CheckCircle2, 
  Clock, XCircle, MapPin
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { PROPERTIES } from '../../../data/mockData';
import { formatCurrency, cn } from '../../../utils';
import { Link } from 'react-router-dom';

export default function AgentListings() {
  return (
    <div className="space-y-8">
       <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
          <div>
             <h1 className="text-4xl font-black text-zinc-900 dark:text-white mb-2 tracking-tight">Active Portfolio</h1>
             <p className="text-zinc-500 dark:text-zinc-400 font-medium">You have 12 active listings live on the platform.</p>
          </div>
          <Link to="/dashboard/agent/add" className="flex items-center gap-2 px-6 py-3 bg-indigo-600 text-white rounded-2xl text-sm font-bold shadow-xl shadow-indigo-600/20 active:scale-95 transition-all">
             <Plus size={20} /> Add New Property
          </Link>
       </div>

       {/* Filters and Search */}
       <div className="flex flex-col md:flex-row gap-4">
          <div className="relative flex-1">
             <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-400" size={18} />
             <input 
               type="text" 
               placeholder="Search portfolio by ID, title, or address..."
               className="w-full bg-white dark:bg-zinc-900 border border-zinc-100 dark:border-zinc-800 rounded-2xl px-12 py-3.5 text-sm font-medium focus:ring-2 focus:ring-indigo-500/20 outline-none"
             />
          </div>
          <div className="flex gap-2">
             <button className="flex items-center gap-2 px-6 py-3.5 bg-white dark:bg-zinc-900 border border-zinc-100 dark:border-zinc-800 rounded-2xl text-sm font-bold text-zinc-600 dark:text-zinc-400 hover:bg-zinc-50 transition-colors">
                <Filter size={18} /> Filters
             </button>
             <button className="flex items-center gap-2 px-6 py-3.5 bg-white dark:bg-zinc-900 border border-zinc-100 dark:border-zinc-800 rounded-2xl text-sm font-bold text-zinc-600 dark:text-zinc-400 hover:bg-zinc-50 transition-colors">
                Sort: Date <Clock size={16} />
             </button>
          </div>
       </div>

       {/* Listing Table */}
       <div className="bg-white dark:bg-zinc-900 rounded-[40px] border border-zinc-100 dark:border-zinc-800 shadow-sm overflow-hidden overflow-x-auto">
          <table className="w-full text-left border-collapse min-w-[800px]">
             <thead>
                <tr className="border-b border-zinc-100 dark:border-zinc-800">
                   <th className="px-8 py-6 text-[10px] font-black text-zinc-400 uppercase tracking-widest">Property</th>
                   <th className="px-8 py-6 text-[10px] font-black text-zinc-400 uppercase tracking-widest">Price</th>
                   <th className="px-8 py-6 text-[10px] font-black text-zinc-400 uppercase tracking-widest">Stats</th>
                   <th className="px-8 py-6 text-[10px] font-black text-zinc-400 uppercase tracking-widest">Status</th>
                   <th className="px-8 py-6 text-[10px] font-black text-zinc-400 uppercase tracking-widest">Actions</th>
                </tr>
             </thead>
             <tbody className="divide-y divide-zinc-50 dark:divide-zinc-800">
                {PROPERTIES.map((prop) => (
                   <tr key={prop.id} className="group hover:bg-zinc-50/50 dark:hover:bg-zinc-800/30 transition-colors">
                      <td className="px-8 py-6">
                         <div className="flex items-center gap-4">
                            <div className="w-16 h-16 rounded-2xl overflow-hidden shrink-0 shadow-sm">
                               <img src={prop.images[0]} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" referrerPolicy="no-referrer" />
                            </div>
                            <div className="min-w-0">
                               <h4 className="font-black dark:text-white truncate">{prop.title}</h4>
                               <p className="text-xs text-zinc-400 flex items-center gap-1">
                                  <MapPin size={12} /> {prop.location.city}, {prop.location.state}
                               </p>
                            </div>
                         </div>
                      </td>
                      <td className="px-8 py-6">
                         <p className="font-black text-indigo-600">{formatCurrency(prop.price)}</p>
                         <p className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest">{prop.status === 'sale' ? 'Listing' : 'Monthly'}</p>
                      </td>
                      <td className="px-8 py-6">
                         <div className="flex items-center gap-4">
                            <div className="text-center">
                               <p className="text-sm font-black dark:text-white">1.2k</p>
                               <p className="text-[9px] font-bold text-zinc-400 uppercase">Views</p>
                            </div>
                            <div className="text-center">
                               <p className="text-sm font-black dark:text-white">8</p>
                               <p className="text-[9px] font-bold text-zinc-400 uppercase">Leads</p>
                            </div>
                         </div>
                      </td>
                      <td className="px-8 py-6">
                         <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-emerald-50 dark:bg-emerald-900/10 text-emerald-600 text-[10px] font-black uppercase tracking-widest rounded-lg">
                            <CheckCircle2 size={12} /> Active
                         </span>
                      </td>
                      <td className="px-8 py-6">
                         <div className="flex items-center gap-2">
                            <button className="w-9 h-9 flex items-center justify-center rounded-xl bg-zinc-50 dark:bg-zinc-800 text-zinc-500 hover:text-indigo-600 hover:bg-indigo-50 transition-all">
                               <Eye size={18} />
                            </button>
                            <button className="w-9 h-9 flex items-center justify-center rounded-xl bg-zinc-50 dark:bg-zinc-800 text-zinc-500 hover:text-amber-600 hover:bg-amber-50 transition-all">
                               <Edit3 size={18} />
                            </button>
                            <button className="w-9 h-9 flex items-center justify-center rounded-xl bg-zinc-50 dark:bg-zinc-800 text-zinc-500 hover:text-red-600 hover:bg-red-50 transition-all">
                               <Trash2 size={18} />
                            </button>
                         </div>
                      </td>
                   </tr>
                ))}
             </tbody>
          </table>
       </div>
    </div>
  );
}
