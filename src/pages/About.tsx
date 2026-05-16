import React from 'react';
import { motion } from 'motion/react';
import { Award, Target, Users, ShieldCheck, ArrowRight, Play } from 'lucide-react';
import { Link } from 'react-router-dom';
import { cn } from '../utils';

export default function About() {
  return (
    <div className="pt-24 min-h-screen bg-white dark:bg-zinc-950">
      
      {/* Hero */}
      <section className="relative py-24 px-6 overflow-hidden">
         <div className="absolute top-0 right-0 w-1/3 h-full bg-indigo-50 dark:bg-indigo-900/10 skew-x-[-15deg] transform translate-x-1/2" />
         <div className="max-w-7xl mx-auto relative z-10">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
               <motion.div
                 initial={{ opacity: 0, x: -30 }}
                 animate={{ opacity: 1, x: 0 }}
               >
                  <span className="text-indigo-600 font-bold uppercase tracking-[0.2em] text-xs mb-3 block">Our Heritage</span>
                  <h1 className="text-5xl md:text-6xl font-black text-zinc-900 dark:text-white mb-8 leading-tight tracking-tight">Redefining Real Estate <br />Since 1995.</h1>
                  <p className="text-zinc-500 dark:text-zinc-400 text-lg font-medium leading-relaxed mb-10 max-w-xl">
                     LuxeEstate was founded on a simple premise: luxury is not a price point, it's an experience. 
                     We provide the most sophisticated platform for the world's most extraordinary homes.
                  </p>
                  <div className="flex flex-wrap gap-4">
                     <Link to="/contact" className="bg-indigo-600 text-white px-8 py-4 rounded-2xl font-bold hover:bg-indigo-700 transition-all shadow-xl shadow-indigo-600/20 active:scale-95">Our Philosophy</Link>
                     <button className="flex items-center gap-3 font-bold text-zinc-900 dark:text-white group">
                        <div className="w-12 h-12 bg-zinc-100 dark:bg-zinc-800 rounded-full flex items-center justify-center group-hover:bg-indigo-600 group-hover:text-white transition-all shadow-sm">
                           <Play size={16} fill="currentColor" className="ml-1" />
                        </div>
                        Watch Our Story
                     </button>
                  </div>
               </motion.div>
               <div className="relative">
                  <div className="absolute -top-10 -right-10 w-40 h-40 bg-amber-400/10 rounded-full blur-3xl" />
                  <img src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80&w=2069&auto=format&fit=crop" className="rounded-[48px] shadow-2xl relative z-10" referrerPolicy="no-referrer" />
                  <div className="absolute -bottom-10 -left-10 bg-white dark:bg-zinc-900 p-8 rounded-[32px] shadow-2xl z-20 border border-zinc-100 dark:border-zinc-800">
                     <p className="text-4xl font-black text-indigo-600 mb-1">$250B+</p>
                     <p className="text-xs font-black text-zinc-400 uppercase tracking-widest">In Premium Sales</p>
                  </div>
               </div>
            </div>
         </div>
      </section>

      {/* Values */}
      <section className="py-24 px-6 bg-slate-50 dark:bg-zinc-900/50">
         <div className="max-w-7xl mx-auto">
            <div className="text-center mb-20">
               <span className="text-indigo-600 font-bold uppercase tracking-[0.2em] text-xs mb-3 block">Our Core Pillars</span>
               <h2 className="text-4xl font-black text-zinc-900 dark:text-white">Why We Stand Alone</h2>
            </div>

            <div className="grid md:grid-cols-3 gap-10">
               {[
                 { title: 'Exclusivity', desc: 'We curate only the finest properties that meet our stringent 120-point quality check.', icon: Award, color: 'text-amber-500', bg: 'bg-amber-50' },
                 { title: 'Integrity', desc: 'Transparent transactions and iron-clad data security are the foundation of our trust.', icon: ShieldCheck, color: 'text-indigo-500', bg: 'bg-indigo-50' },
                 { title: 'Global reach', desc: 'Connecting the most successful individuals across 6 continents and 120 countries.', icon: Target, color: 'text-emerald-500', bg: 'bg-emerald-50' },
               ].map((v, i) => (
                  <div key={i} className="bg-white dark:bg-zinc-900 p-10 rounded-[40px] shadow-sm border border-zinc-100 dark:border-zinc-800 hover:shadow-xl transition-all group">
                     <div className={cn("w-16 h-16 rounded-[24px] mb-8 flex items-center justify-center group-hover:scale-110 transition-transform", v.bg, v.color)}>
                        <v.icon size={32} />
                     </div>
                     <h4 className="text-2xl font-black text-zinc-900 dark:text-white mb-4">{v.title}</h4>
                     <p className="text-zinc-500 dark:text-zinc-400 leading-relaxed font-medium">{v.desc}</p>
                  </div>
               ))}
            </div>
         </div>
      </section>

      {/* Team */}
      <section className="py-24 px-6">
         <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-end gap-6 mb-16">
               <div>
                  <span className="text-indigo-600 font-bold uppercase tracking-[0.2em] text-xs mb-3 block">Meet The Visionaries</span>
                  <h2 className="text-4xl font-black text-zinc-900 dark:text-white">The Minds Behind LuxeEstate</h2>
               </div>
               <Link to="/agents" className="text-indigo-600 font-bold flex items-center gap-2 hover:gap-4 transition-all">
                  Join Our Global Team <ArrowRight size={20} />
               </Link>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
               {[
                 { name: 'Sarah Montgomery', role: 'CEO & Founder', img: 'https://i.pravatar.cc/300?u=sarah' },
                 { name: 'Robert Chen', role: 'Chief Architect', img: 'https://i.pravatar.cc/300?u=robert' },
                 { name: 'Elena Rodriguez', role: 'Global Sales Dir', img: 'https://i.pravatar.cc/300?u=elena' },
                 { name: 'James Wilson', role: 'Tech Innovation', img: 'https://i.pravatar.cc/300?u=james' },
               ].map((member, i) => (
                  <div key={i} className="space-y-4 group">
                     <div className="aspect-[4/5] rounded-[32px] overflow-hidden shadow-lg border-4 border-white dark:border-zinc-900 transition-all group-hover:border-indigo-600">
                        <img src={member.img} alt={member.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" referrerPolicy="no-referrer" />
                     </div>
                     <div className="px-2">
                        <h4 className="text-lg font-black dark:text-white">{member.name}</h4>
                        <p className="text-xs font-bold text-indigo-600 uppercase tracking-widest">{member.role}</p>
                     </div>
                  </div>
               ))}
            </div>
         </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 bg-zinc-950 text-white text-center">
         <div className="max-w-4xl mx-auto">
            <Users className="mx-auto mb-8 text-indigo-500" size={48} />
            <h2 className="text-4xl md:text-6xl font-black mb-8 leading-tight">Better Experiences for <br />Better Living.</h2>
            <p className="text-zinc-400 text-lg mb-12 max-w-2xl mx-auto">Join our exclusive network today and discover the true meaning of luxury real estate service.</p>
            <div className="flex flex-wrap gap-4 justify-center">
               <Link to="/register" className="bg-indigo-600 text-white px-10 py-5 rounded-2xl font-black uppercase text-xs tracking-widest shadow-xl shadow-indigo-600/30 hover:bg-indigo-700 transition-all active:scale-95">Create Account</Link>
               <Link to="/contact" className="bg-white/10 text-white px-10 py-5 rounded-2xl font-black uppercase text-xs tracking-widest hover:bg-white/20 transition-all active:scale-95">Contact Concierge</Link>
            </div>
         </div>
      </section>
    </div>
  );
}
