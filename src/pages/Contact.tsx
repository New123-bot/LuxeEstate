import React from 'react';
import { Mail, Phone, MapPin, MessageSquare, Clock, Globe, ArrowRight, Instagram, Twitter, Facebook, Linkedin } from 'lucide-react';
import { motion } from 'motion/react';

export default function Contact() {
  return (
    <div className="pt-24 min-h-screen bg-slate-50 dark:bg-zinc-950">
      
      {/* Header */}
      <section className="bg-zinc-950 text-white py-24 px-6 relative overflow-hidden">
         <div className="absolute top-0 right-0 w-1/2 h-full bg-indigo-600/10 skew-x-[-20deg] transform translate-x-1/2" />
         <div className="max-w-7xl mx-auto relative z-10 text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="max-w-2xl"
            >
               <span className="text-indigo-400 font-bold uppercase tracking-[0.2em] text-xs mb-3 block">Get In Touch</span>
               <h1 className="text-5xl md:text-6xl font-black mb-8 leading-tight tracking-tight">Let's Discuss Your <br />Extraordinary Lifestyle.</h1>
               <p className="text-zinc-400 text-lg font-medium leading-relaxed">Our world-class agents are ready to assist you with every detail of your real estate journey.</p>
            </motion.div>
         </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 -mt-16 pb-24 relative z-20">
         <div className="grid lg:grid-cols-3 gap-10">
            
            {/* Contact Info Cards */}
            <div className="lg:col-span-1 space-y-6">
               <div className="bg-white dark:bg-zinc-900 p-8 rounded-[40px] shadow-xl border border-zinc-100 dark:border-zinc-800 space-y-8">
                  <div>
                     <h3 className="text-2xl font-black dark:text-white mb-6">Contact Channels</h3>
                     <div className="space-y-6">
                        <div className="flex gap-4">
                           <div className="w-12 h-12 bg-indigo-50 dark:bg-zinc-800 rounded-2xl flex items-center justify-center text-indigo-600 shrink-0">
                              <Phone size={24} />
                           </div>
                           <div>
                              <p className="text-xs font-black text-zinc-400 uppercase tracking-widest mb-1">Phone Number</p>
                              <p className="font-black dark:text-white">+1 (555) 888-LUXE</p>
                           </div>
                        </div>
                        <div className="flex gap-4">
                           <div className="w-12 h-12 bg-emerald-50 dark:bg-zinc-800 rounded-2xl flex items-center justify-center text-emerald-600 shrink-0">
                              <Mail size={24} />
                           </div>
                           <div>
                              <p className="text-xs font-black text-zinc-400 uppercase tracking-widest mb-1">Email Address</p>
                              <p className="font-black dark:text-white">concierge@luxeestate.com</p>
                           </div>
                        </div>
                        <div className="flex gap-4">
                           <div className="w-12 h-12 bg-amber-50 dark:bg-zinc-800 rounded-2xl flex items-center justify-center text-amber-600 shrink-0">
                              <MessageSquare size={24} />
                           </div>
                           <div>
                              <p className="text-xs font-black text-zinc-400 uppercase tracking-widest mb-1">Live Chat</p>
                              <p className="font-black dark:text-white">Active 24/7 Support</p>
                           </div>
                        </div>
                     </div>
                  </div>

                  <div className="pt-8 border-t border-zinc-100 dark:border-zinc-800">
                     <h4 className="text-xs font-black text-zinc-400 uppercase tracking-[0.2em] mb-6">Follow Us</h4>
                     <div className="flex gap-3">
                        <a href="#" className="w-10 h-10 bg-zinc-50 dark:bg-zinc-800 rounded-xl flex items-center justify-center hover:bg-indigo-600 hover:text-white transition-all"><Facebook size={18} /></a>
                        <a href="#" className="w-10 h-10 bg-zinc-50 dark:bg-zinc-800 rounded-xl flex items-center justify-center hover:bg-indigo-600 hover:text-white transition-all"><Twitter size={18} /></a>
                        <a href="#" className="w-10 h-10 bg-zinc-50 dark:bg-zinc-800 rounded-xl flex items-center justify-center hover:bg-indigo-600 hover:text-white transition-all"><Instagram size={18} /></a>
                        <a href="#" className="w-10 h-10 bg-zinc-50 dark:bg-zinc-800 rounded-xl flex items-center justify-center hover:bg-indigo-600 hover:text-white transition-all"><Linkedin size={18} /></a>
                     </div>
                  </div>
               </div>

               {/* Business Hours */}
               <div className="bg-indigo-600 rounded-[40px] p-8 text-white shadow-xl relative overflow-hidden group">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16 blur-3xl group-hover:scale-150 transition-transform duration-1000" />
                  <Clock className="mb-6 opacity-60" size={32} />
                  <h3 className="text-xl font-black mb-6">Global Office Hours</h3>
                  <div className="space-y-3">
                     <div className="flex justify-between items-center text-sm">
                        <span className="font-bold opacity-60">Mon - Fri</span>
                        <span className="font-black">8:00 AM - 10:00 PM</span>
                     </div>
                     <div className="flex justify-between items-center text-sm">
                        <span className="font-bold opacity-60">Saturday</span>
                        <span className="font-black">10:00 AM - 6:00 PM</span>
                     </div>
                     <div className="flex justify-between items-center text-sm">
                        <span className="font-bold opacity-60">Sunday</span>
                        <span className="font-black">Closed</span>
                     </div>
                  </div>
               </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
               <div className="bg-white dark:bg-zinc-900 p-10 md:p-14 rounded-[48px] shadow-2xl border border-zinc-100 dark:border-zinc-800">
                  <div className="mb-12">
                     <h2 className="text-3xl font-black dark:text-white mb-3">Send Us a Message</h2>
                     <p className="text-zinc-500 dark:text-zinc-400 font-medium">Have a specific inquiry or looking for a custom property search? Fill out the form below.</p>
                  </div>

                  <form className="space-y-8">
                     <div className="grid md:grid-cols-2 gap-8">
                        <div className="space-y-3">
                           <label className="text-[10px] font-black text-zinc-400 uppercase tracking-[0.2em] ml-1">Full Name</label>
                           <input type="text" placeholder="John Doe" className="w-full bg-zinc-50 dark:bg-zinc-800 border-zinc-200 dark:border-zinc-700 rounded-2xl px-6 py-4 text-sm font-medium focus:ring-2 focus:ring-indigo-500/20 outline-none" />
                        </div>
                        <div className="space-y-3">
                           <label className="text-[10px] font-black text-zinc-400 uppercase tracking-[0.2em] ml-1">Email Address</label>
                           <input type="email" placeholder="john@example.com" className="w-full bg-zinc-50 dark:bg-zinc-800 border-zinc-200 dark:border-zinc-700 rounded-2xl px-6 py-4 text-sm font-medium focus:ring-2 focus:ring-indigo-500/20 outline-none" />
                        </div>
                     </div>

                     <div className="grid md:grid-cols-2 gap-8">
                        <div className="space-y-3">
                           <label className="text-[10px] font-black text-zinc-400 uppercase tracking-[0.2em] ml-1">Subject</label>
                           <select className="w-full bg-zinc-50 dark:bg-zinc-800 border-zinc-200 dark:border-zinc-700 rounded-2xl px-6 py-4 text-sm font-medium focus:ring-2 focus:ring-indigo-500/20 outline-none">
                              <option>Buying Property</option>
                              <option>Selling Property</option>
                              <option>General Inquiry</option>
                              <option>Partnership</option>
                           </select>
                        </div>
                        <div className="space-y-3">
                           <label className="text-[10px] font-black text-zinc-400 uppercase tracking-[0.2em] ml-1">Budget Range</label>
                           <input type="text" placeholder="$1M - $5M" className="w-full bg-zinc-50 dark:bg-zinc-800 border-zinc-200 dark:border-zinc-700 rounded-2xl px-6 py-4 text-sm font-medium focus:ring-2 focus:ring-indigo-500/20 outline-none" />
                        </div>
                     </div>

                     <div className="space-y-3">
                        <label className="text-[10px] font-black text-zinc-400 uppercase tracking-[0.2em] ml-1">Your Message</label>
                        <textarea rows={6} placeholder="How can we help you find your dream home?" className="w-full bg-zinc-50 dark:bg-zinc-800 border-zinc-200 dark:border-zinc-700 rounded-2xl px-6 py-4 text-sm font-medium focus:ring-2 focus:ring-indigo-500/20 outline-none resize-none" />
                     </div>

                     <button className="w-full bg-indigo-600 text-white font-black py-5 rounded-2xl shadow-xl shadow-indigo-600/30 hover:bg-indigo-700 transition-all flex items-center justify-center gap-2 active:scale-95 text-sm uppercase tracking-widest">
                        Submit Inquiry <ArrowRight size={20} />
                     </button>
                  </form>
               </div>
            </div>
         </div>

         {/* Office Locations */}
         <div className="mt-32">
            <div className="text-center mb-16">
               <span className="text-indigo-600 font-bold uppercase tracking-[0.2em] text-xs mb-3 block">Global Network</span>
               <h2 className="text-4xl font-black dark:text-white">Our Head Offices</h2>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
               {[
                 { city: 'Miami, FL', address: '123 Pinecrest Road, Miami, FL 33156', phone: '+1 (555) MIAMI-LX' },
                 { city: 'New York, NY', address: '789 Grand Avenue, New York, NY 10001', phone: '+1 (555) NY- LUXE' },
                 { city: 'Malibu, CA', address: '45 Ocean Drive, Malibu, CA 90265', phone: '+1 (555) MALIBU-LX' },
               ].map((office, i) => (
                  <div key={i} className="bg-white dark:bg-zinc-900 p-8 rounded-[32px] border border-zinc-100 dark:border-zinc-800 shadow-sm hover:shadow-xl transition-all group">
                     <div className="w-14 h-14 bg-zinc-50 dark:bg-zinc-800 rounded-2xl mb-6 flex items-center justify-center group-hover:bg-indigo-600 group-hover:text-white transition-all">
                        <MapPin size={28} />
                     </div>
                     <h4 className="text-xl font-black dark:text-white mb-2">{office.city}</h4>
                     <p className="text-sm text-zinc-500 dark:text-zinc-400 mb-6">{office.address}</p>
                     <p className="font-bold text-indigo-600 text-sm">{office.phone}</p>
                  </div>
               ))}
            </div>
         </div>
      </section>
    </div>
  );
}
