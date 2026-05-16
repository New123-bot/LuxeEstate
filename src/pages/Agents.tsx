import React from 'react';
import { motion } from 'motion/react';
import { Search, MapPin, Star, Phone, Mail, Globe, ArrowRight, Award, UserCheck } from 'lucide-react';
import { AGENTS } from '../data/mockData';
import { cn } from '../utils';

export default function Agents() {
  return (
    <div className="pt-24 min-h-screen bg-slate-50 dark:bg-zinc-950">
      
      {/* Header */}
      <section className="bg-white dark:bg-zinc-900 border-b border-zinc-100 dark:border-zinc-800 py-16 px-6">
         <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="text-center md:text-left">
               <h1 className="text-4xl md:text-5xl font-black text-zinc-900 dark:text-white mb-4 tracking-tight">Our Elite Agents</h1>
               <p className="text-zinc-500 dark:text-zinc-400 font-medium max-w-xl">
                  Work with the industry's most dedicated professionals. Our agents are local experts with global connections.
               </p>
            </div>
            
            <div className="flex items-center gap-4 w-full md:w-auto">
               <div className="relative flex-1 md:w-80">
                  <input 
                    type="text" 
                    placeholder="Search agent by name or specialty..."
                    className="w-full bg-zinc-50 dark:bg-zinc-800 border-zinc-200 dark:border-zinc-700 rounded-2xl px-6 py-4 pr-12 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-indigo-500/20"
                  />
                  <Search className="absolute right-4 top-1/2 -translate-y-1/2 text-zinc-400" size={20} />
               </div>
            </div>
         </div>
      </section>

      {/* Agents Grid */}
      <section className="max-w-7xl mx-auto px-6 py-16">
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {AGENTS.map((agent, idx) => (
               <motion.div
                 key={agent.id}
                 initial={{ opacity: 0, y: 20 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 viewport={{ once: true }}
                 transition={{ delay: idx * 0.1 }}
                 className="group bg-white dark:bg-zinc-900 rounded-[40px] overflow-hidden border border-zinc-100 dark:border-zinc-800 shadow-sm hover:shadow-2xl transition-all duration-500"
               >
                  <div className="p-8">
                     <div className="flex items-start gap-6 mb-8">
                        <div className="relative shrink-0">
                           <img 
                             src={agent.image} 
                             alt={agent.name} 
                             className="w-24 h-24 rounded-3xl object-cover border-4 border-zinc-50 dark:border-zinc-800 shadow-lg group-hover:scale-105 transition-transform duration-500"
                             referrerPolicy="no-referrer"
                           />
                           <div className="absolute -bottom-2 -right-2 bg-indigo-600 p-1.5 rounded-xl border-4 border-white dark:border-zinc-900 shadow-md">
                              <UserCheck size={14} className="text-white" />
                           </div>
                        </div>
                        <div className="flex-1 overflow-hidden">
                           <div className="flex items-center gap-1 text-amber-500 mb-1">
                              <Star size={14} fill="currentColor" />
                              <span className="text-sm font-black">{agent.rating}</span>
                              <span className="text-xs text-zinc-400 font-medium ml-1">({agent.reviewsCount} reviews)</span>
                           </div>
                           <h3 className="text-2xl font-black text-zinc-900 dark:text-white truncate mb-1">{agent.name}</h3>
                           <p className="text-indigo-600 text-xs font-black uppercase tracking-widest">{agent.specialization[0]}</p>
                        </div>
                     </div>

                     <div className="space-y-4 mb-8">
                        <p className="text-sm text-zinc-500 dark:text-zinc-400 line-clamp-3 font-medium leading-relaxed italic">
                           "{agent.bio}"
                        </p>
                        <div className="flex flex-wrap gap-2">
                           {agent.specialization.slice(0, 3).map((spec, i) => (
                              <span key={i} className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest px-2 py-1 bg-zinc-50 dark:bg-zinc-800 rounded-lg">
                                 {spec}
                              </span>
                           ))}
                        </div>
                     </div>

                     <div className="grid grid-cols-2 gap-4 pt-8 border-t border-zinc-100 dark:border-zinc-800">
                        <div className="text-center border-r border-zinc-100 dark:border-zinc-800">
                           <p className="text-xl font-black text-zinc-900 dark:text-white">{agent.listingsCount}</p>
                           <p className="text-[10px] font-black text-zinc-400 uppercase tracking-widest">Listings</p>
                        </div>
                        <div className="text-center">
                           <p className="text-xl font-black text-zinc-900 dark:text-white">15yr+</p>
                           <p className="text-[10px] font-black text-zinc-400 uppercase tracking-widest">Experience</p>
                        </div>
                     </div>
                  </div>

                  <div className="flex border-t border-zinc-100 dark:border-zinc-800">
                     <button className="flex-1 flex items-center justify-center gap-2 py-5 text-sm font-bold text-zinc-600 dark:text-zinc-300 hover:bg-zinc-50 dark:hover:bg-zinc-800 transition-colors">
                        <Mail size={16} /> Email
                     </button>
                     <div className="w-px bg-zinc-100 dark:border-zinc-800" />
                     <button className="flex-1 flex items-center justify-center gap-2 py-5 text-sm font-bold text-indigo-600 hover:bg-indigo-50 dark:hover:bg-indigo-900/10 transition-colors">
                        <Phone size={16} /> Call
                     </button>
                  </div>
               </motion.div>
            ))}
            
            {/* CTA Card for Agents */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="bg-indigo-600 rounded-[40px] p-10 text-white flex flex-col justify-between shadow-xl relative overflow-hidden"
            >
               <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full -translate-y-20 translate-x-20 blur-3xl rotate-12" />
               <div className="relative z-10">
                  <Award className="mb-6 opacity-60" size={40} />
                  <h3 className="text-3xl font-black mb-4 leading-tight">Become a LuxeEstate Agent.</h3>
                  <p className="text-indigo-100 font-medium mb-8 leading-relaxed">
                     Join the world's most exclusive real estate network. We provide premium tools and global reach for top producers.
                  </p>
               </div>
               <button className="bg-white text-indigo-600 px-8 py-4 rounded-2xl font-bold flex items-center justify-center gap-2 group transition-all hover:scale-105 active:scale-95 shadow-xl relative z-10">
                  Join The Network <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
               </button>
            </motion.div>
         </div>
         
         {/* Featured Achievement */}
         <div className="mt-32 p-12 bg-zinc-950 rounded-[48px] text-white overflow-hidden relative">
            <div className="absolute top-0 left-0 w-full h-full bg-[url('https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=1973&auto=format&fit=crop')] bg-cover bg-center opacity-10" />
            <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center">
               <div>
                  <span className="text-indigo-400 font-bold uppercase tracking-[0.2em] text-xs mb-3 block">Global Influence</span>
                  <h2 className="text-4xl md:text-5xl font-black mb-8 leading-tight tracking-tight">Our Agents Move The World.</h2>
                  <p className="text-zinc-400 text-lg font-medium leading-relaxed mb-10 max-w-xl">
                     With agents in over 120 countries, we speak the language of luxury. Our hyper-local expertise ensures you're always one step ahead.
                  </p>
                  <div className="grid grid-cols-2 gap-8">
                     <div>
                        <h4 className="text-4xl font-black text-indigo-400">$120B+</h4>
                        <p className="text-xs font-bold text-zinc-500 uppercase tracking-widest mt-1">Transaction Volume</p>
                     </div>
                     <div>
                        <h4 className="text-4xl font-black text-indigo-400">98%</h4>
                        <p className="text-xs font-bold text-zinc-500 uppercase tracking-widest mt-1">Client Satisfaction</p>
                     </div>
                  </div>
               </div>
               <div className="flex justify-end">
                  <div className="bg-white/5 backdrop-blur-xl border border-white/10 p-1 rounded-[40px] overflow-hidden group">
                     <img 
                       src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80&w=2069" 
                       alt="Global Agents" 
                       className="rounded-[36px] grayscale hover:grayscale-0 transition-all duration-1000 w-full h-80 object-cover"
                       referrerPolicy="no-referrer"
                     />
                  </div>
               </div>
            </div>
         </div>
      </section>
    </div>
  );
}
