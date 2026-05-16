import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Lock, User, Chrome, Github, ArrowRight, ShieldCheck } from 'lucide-react';
import { motion } from 'motion/react';

export default function Register() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50 dark:bg-zinc-950 px-6 py-20">
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="max-w-2xl w-full"
      >
        <div className="bg-white dark:bg-zinc-900 rounded-[40px] shadow-2xl border border-zinc-100 dark:border-zinc-800 overflow-hidden flex flex-col md:flex-row">
           {/* Left Side - Promo */}
           <div className="md:w-5/12 bg-indigo-600 p-10 text-white flex flex-col justify-between relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-32 translate-x-32 blur-3xl" />
              <div className="relative z-10">
                 <Link to="/" className="inline-flex items-center gap-2 mb-12 group">
                    <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center text-indigo-600 font-bold text-lg group-hover:scale-110 transition-transform">L</div>
                    <span className="text-xl font-black tracking-tight">LuxeEstate</span>
                 </Link>
                 <h2 className="text-3xl font-black mb-6 leading-tight">Start your journey to luxury.</h2>
                 <p className="text-indigo-100 font-medium mb-8">Join thousands of individuals finding their perfect sanctuary with us.</p>
                 
                 <div className="space-y-6">
                    {[
                      'Access to off-market listings',
                      'Expert agent support',
                      'Advanced market analysis',
                      'Personalized recommendations'
                    ].map((feat, i) => (
                      <div key={i} className="flex items-center gap-3">
                         <div className="w-5 h-5 bg-indigo-500 rounded-full flex items-center justify-center">
                            <ArrowRight size={12} />
                         </div>
                         <span className="text-sm font-bold text-indigo-50">{feat}</span>
                      </div>
                    ))}
                 </div>
              </div>
              <div className="relative z-10 mt-12 flex items-center gap-3 p-4 bg-white/10 backdrop-blur-md rounded-2xl">
                 <ShieldCheck className="text-white" size={24} />
                 <p className="text-[10px] text-indigo-100 uppercase tracking-widest font-black leading-tight">Secure Enterprise Grade Platform</p>
              </div>
           </div>

           {/* Right Side - Form */}
           <div className="md:w-7/12 p-10 md:p-12">
              <div className="mb-10">
                 <h2 className="text-3xl font-black text-zinc-900 dark:text-white mb-2 tracking-tight">Create Account</h2>
                 <p className="text-zinc-500 dark:text-zinc-400 font-medium">Join our community today.</p>
              </div>

              <div className="grid grid-cols-2 gap-4 mb-8">
                <button className="flex items-center justify-center gap-2 py-3 border-2 border-zinc-100 dark:border-zinc-800 rounded-2xl hover:bg-zinc-50 dark:hover:bg-zinc-800 transition-all font-bold text-xs">
                    <Chrome size={16} /> Google
                </button>
                <button className="flex items-center justify-center gap-2 py-3 border-2 border-zinc-100 dark:border-zinc-800 rounded-2xl hover:bg-zinc-50 dark:hover:bg-zinc-800 transition-all font-bold text-xs">
                    <Github size={16} /> Github
                </button>
              </div>

              <form className="space-y-6">
                 <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                       <label className="text-[10px] font-black text-zinc-400 uppercase tracking-[0.2em] ml-1">First Name</label>
                       <input 
                         type="text" 
                         className="w-full bg-zinc-50 dark:bg-zinc-800 border-zinc-200 dark:border-zinc-700 rounded-xl px-4 py-3.5 text-sm font-medium focus:ring-2 focus:ring-indigo-500/20 outline-none"
                         placeholder="John"
                       />
                    </div>
                    <div className="space-y-2">
                       <label className="text-[10px] font-black text-zinc-400 uppercase tracking-[0.2em] ml-1">Last Name</label>
                       <input 
                         type="text" 
                         className="w-full bg-zinc-50 dark:bg-zinc-800 border-zinc-200 dark:border-zinc-700 rounded-xl px-4 py-3.5 text-sm font-medium focus:ring-2 focus:ring-indigo-500/20 outline-none"
                         placeholder="Doe"
                       />
                    </div>
                 </div>

                 <div className="space-y-2">
                    <label className="text-[10px] font-black text-zinc-400 uppercase tracking-[0.2em] ml-1">Email Address</label>
                    <div className="relative">
                       <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-400" size={16} />
                       <input 
                         type="email" 
                         className="w-full bg-zinc-50 dark:bg-zinc-800 border-zinc-200 dark:border-zinc-700 rounded-xl px-12 py-3.5 text-sm font-medium focus:ring-2 focus:ring-indigo-500/20 outline-none"
                         placeholder="john@example.com"
                       />
                    </div>
                 </div>

                 <div className="space-y-2">
                    <label className="text-[10px] font-black text-zinc-400 uppercase tracking-[0.2em] ml-1">Password</label>
                    <div className="relative">
                       <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-400" size={16} />
                       <input 
                         type="password" 
                         className="w-full bg-zinc-50 dark:bg-zinc-800 border-zinc-200 dark:border-zinc-700 rounded-xl px-12 py-3.5 text-sm font-medium focus:ring-2 focus:ring-indigo-500/20 outline-none"
                         placeholder="••••••••"
                       />
                    </div>
                 </div>

                 <div className="flex items-start gap-3 px-1">
                    <input type="checkbox" className="mt-1 w-4 h-4 rounded border-zinc-300 text-indigo-600 focus:ring-indigo-500" />
                    <p className="text-xs font-medium text-zinc-500 leading-relaxed">
                       I agree to the <Link to="/terms" className="text-indigo-600 font-bold hover:underline">Terms of Service</Link> and <Link to="/privacy" className="text-indigo-600 font-bold hover:underline">Privacy Policy</Link>.
                    </p>
                 </div>

                 <button className="w-full bg-indigo-600 text-white font-bold py-4 rounded-2xl shadow-xl shadow-indigo-600/20 hover:bg-indigo-700 transition-all active:scale-95 text-xs uppercase tracking-widest">
                    Create My Account
                 </button>
              </form>

              <p className="text-center mt-10 text-xs font-medium text-zinc-500">
                 Already have an account? {' '}
                 <Link to="/login" className="text-indigo-600 font-bold hover:underline">Sign in</Link>
              </p>
           </div>
        </div>
      </motion.div>
    </div>
  );
}
