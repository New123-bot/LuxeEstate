import React from 'react';
import { 
  Search, Filter, Mail, Shield, 
  Trash2, Edit3, MoreHorizontal, CheckCircle2,
  AlertCircle, ChevronRight, UserPlus
} from 'lucide-react';
import { motion } from 'motion/react';
import { cn } from '../../../utils';

const MOCK_USERS = [
  { id: '1', name: 'David Miller', email: 'david@example.com', role: 'user', joined: 'Mar 12, 2024', status: 'active', avatar: 'https://i.pravatar.cc/100?u=david' },
  { id: '2', name: 'Sarah Montgomery', email: 'sarah.m@luxeestate.com', role: 'agent', joined: 'Jan 05, 2021', status: 'active', avatar: 'https://i.pravatar.cc/100?u=sarah' },
  { id: '3', name: 'Marcus Aurelius', email: 'marcus@rome.net', role: 'user', joined: 'May 02, 2024', status: 'pending', avatar: 'https://i.pravatar.cc/100?u=marcus' },
  { id: '4', name: 'Elena Rodriguez', email: 'elena@luxe.com', role: 'admin', joined: 'Feb 15, 2019', status: 'active', avatar: 'https://i.pravatar.cc/100?u=elena' },
  { id: '5', name: 'James Wilson', email: 'james@nyc.com', role: 'agent', joined: 'Nov 20, 2022', status: 'suspended', avatar: 'https://i.pravatar.cc/100?u=james' },
];

export default function AdminUsers() {
  return (
    <div className="space-y-8">
       <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
          <div>
             <h1 className="text-4xl font-black text-zinc-900 dark:text-white mb-2 tracking-tight">User Management</h1>
             <p className="text-zinc-500 dark:text-zinc-400 font-medium">Manage permissions and monitor activity for 142.5k platform users.</p>
          </div>
          <button className="flex items-center gap-2 px-6 py-3 bg-indigo-600 text-white rounded-2xl text-sm font-bold shadow-xl shadow-indigo-600/20 active:scale-95 transition-all">
             <UserPlus size={20} /> Create New User
          </button>
       </div>

       {/* Stats Summary */}
       <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { label: 'Total Members', value: '142,502' },
            { label: 'Active Agents', value: '4,820' },
            { label: 'Pending Verification', value: '124' },
            { label: 'Suspended Accounts', value: '12' },
          ].map((stat, i) => (
             <div key={i} className="bg-white dark:bg-zinc-900 p-5 rounded-3xl border border-zinc-100 dark:border-zinc-800 shadow-sm">
                <p className="text-[10px] font-black text-zinc-400 uppercase tracking-widest mb-1">{stat.label}</p>
                <p className="text-2xl font-black dark:text-white">{stat.value}</p>
             </div>
          ))}
       </div>

       {/* Real-time Filters */}
       <div className="flex flex-col md:flex-row gap-4">
          <div className="relative flex-1">
             <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-400" size={18} />
             <input 
               type="text" 
               placeholder="Search by name, email, or user ID..."
               className="w-full bg-white dark:bg-zinc-900 border border-zinc-100 dark:border-zinc-800 rounded-2xl px-12 py-3.5 text-sm font-medium focus:ring-2 focus:ring-indigo-500/20 outline-none"
             />
          </div>
          <div className="flex gap-2">
             <select className="bg-white dark:bg-zinc-900 border border-zinc-100 dark:border-zinc-800 rounded-2xl px-6 py-3.5 text-sm font-bold text-zinc-600 dark:text-zinc-400 outline-none">
                <option>All Roles</option>
                <option>Agents Only</option>
                <option>Standard Users</option>
                <option>Admins</option>
             </select>
             <button className="flex items-center gap-2 px-6 py-3.5 bg-white dark:bg-zinc-900 border border-zinc-100 dark:border-zinc-800 rounded-2xl text-sm font-bold text-zinc-600 dark:text-zinc-400 hover:bg-zinc-50 transition-colors">
                <Filter size={18} /> Advanced
             </button>
          </div>
       </div>

       {/* User Table */}
       <div className="bg-white dark:bg-zinc-900 rounded-[40px] border border-zinc-100 dark:border-zinc-800 shadow-sm overflow-hidden overflow-x-auto">
          <table className="w-full text-left border-collapse min-w-[900px]">
             <thead>
                <tr className="border-b border-zinc-100 dark:border-zinc-800">
                   <th className="px-8 py-6 text-[10px] font-black text-zinc-400 uppercase tracking-widest">Identify</th>
                   <th className="px-8 py-6 text-[10px] font-black text-zinc-400 uppercase tracking-widest">Role</th>
                   <th className="px-8 py-6 text-[10px] font-black text-zinc-400 uppercase tracking-widest">Verification</th>
                   <th className="px-8 py-6 text-[10px] font-black text-zinc-400 uppercase tracking-widest">Joined Date</th>
                   <th className="px-8 py-6 text-[10px] font-black text-zinc-400 uppercase tracking-widest text-right">Settings</th>
                </tr>
             </thead>
             <tbody className="divide-y divide-zinc-50 dark:divide-zinc-800">
                {MOCK_USERS.map((user) => (
                   <tr key={user.id} className="group hover:bg-zinc-50/50 dark:hover:bg-zinc-800/30 transition-colors">
                      <td className="px-8 py-6">
                         <div className="flex items-center gap-4">
                            <img src={user.avatar} className="w-10 h-10 rounded-xl" referrerPolicy="no-referrer" />
                            <div>
                               <p className="font-black dark:text-white truncate">{user.name}</p>
                               <p className="text-[11px] font-medium text-zinc-400">{user.email}</p>
                            </div>
                         </div>
                      </td>
                      <td className="px-8 py-6">
                         <span className={cn(
                           "px-3 py-1 rounded-lg text-[10px] font-black uppercase tracking-widest",
                           user.role === 'admin' ? "bg-red-50 text-red-600" : 
                           user.role === 'agent' ? "bg-indigo-50 text-indigo-600" : 
                           "bg-zinc-50 text-zinc-600"
                         )}>
                            {user.role}
                         </span>
                      </td>
                      <td className="px-8 py-6">
                         <div className="flex items-center gap-2">
                            {user.status === 'active' ? (
                               <div className="flex items-center gap-1.5 text-emerald-500 font-bold text-xs">
                                  <CheckCircle2 size={14} /> Verified
                               </div>
                            ) : user.status === 'pending' ? (
                               <div className="flex items-center gap-1.5 text-amber-500 font-bold text-xs">
                                  <AlertCircle size={14} /> Pending
                               </div>
                            ) : (
                               <div className="flex items-center gap-1.5 text-rose-500 font-bold text-xs">
                                  <XCircle size={14} /> Suspended
                               </div>
                            )}
                         </div>
                      </td>
                      <td className="px-8 py-6">
                         <p className="text-sm font-bold text-zinc-500 dark:text-zinc-400">{user.joined}</p>
                      </td>
                      <td className="px-8 py-6 text-right">
                         <button className="p-2 hover:bg-zinc-100 dark:hover:bg-zinc-800 rounded-lg text-zinc-400">
                            <MoreHorizontal size={20} />
                         </button>
                      </td>
                   </tr>
                ))}
             </tbody>
          </table>
          <div className="p-8 flex justify-between items-center text-zinc-500 text-xs font-bold border-t border-zinc-100 dark:border-zinc-800">
             <span>Showing 5 of 142,502 users</span>
             <div className="flex gap-2">
                <button className="px-4 py-2 bg-zinc-100 dark:bg-zinc-800 rounded-lg hover:bg-indigo-600 hover:text-white transition-all">Previous</button>
                <button className="px-4 py-2 bg-zinc-100 dark:bg-zinc-800 rounded-lg hover:bg-indigo-600 hover:text-white transition-all">Next</button>
             </div>
          </div>
       </div>
    </div>
  );
}

function XCircle({ size, className }: { size: number, className?: string }) {
  return (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      className={className}
    >
      <circle cx="12" cy="12" r="10" />
      <path d="m15 9-6 6" />
      <path d="m9 9 6 6" />
    </svg>
  );
}
