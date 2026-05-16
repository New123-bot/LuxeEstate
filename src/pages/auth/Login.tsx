import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Lock, Chrome, Github, ArrowRight, Eye, EyeOff } from 'lucide-react';
import { motion } from 'motion/react';

export default function Login() {
  const [showPassword, setShowPassword] = React.useState(false);

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50 dark:bg-zinc-950 px-6 py-20">
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="max-w-md w-full"
      >
        <div className="bg-white dark:bg-zinc-900 rounded-[40px] p-10 shadow-2xl border border-zinc-100 dark:border-zinc-800">
           {/* Header */}
           <div className="text-center mb-10">
              <Link to="/" className="inline-flex items-center gap-2 mb-6 group">
                <div className="w-10 h-10 bg-indigo-600 rounded-lg flex items-center justify-center text-white font-bold text-xl group-hover:scale-110 transition-transform">L</div>
                <span className="text-2xl font-black text-zinc-900 dark:text-white tracking-tight">LuxeEstate</span>
              </Link>
              <h2 className="text-3xl font-black text-zinc-900 dark:text-white mb-2">Welcome Back</h2>
              <p className="text-zinc-500 dark:text-zinc-400 font-medium">Please enter your details to sign in.</p>
           </div>

           {/* Social Login */}
           <div className="grid grid-cols-2 gap-4 mb-8">
              <button className="flex items-center justify-center gap-2 py-3.5 border-2 border-zinc-100 dark:border-zinc-800 rounded-2xl hover:bg-zinc-50 dark:hover:bg-zinc-800 transition-all font-bold text-sm dark:text-white">
                 <Chrome size={18} /> Google
              </button>
              <button className="flex items-center justify-center gap-2 py-3.5 border-2 border-zinc-100 dark:border-zinc-800 rounded-2xl hover:bg-zinc-50 dark:hover:bg-zinc-800 transition-all font-bold text-sm dark:text-white">
                 <Github size={18} /> Github
              </button>
           </div>

           <div className="relative mb-8">
              <div className="absolute inset-0 flex items-center"><div className="w-full border-t border-zinc-100 dark:border-zinc-800"></div></div>
              <div className="relative flex justify-center text-xs uppercase tracking-widest font-bold"><span className="bg-white dark:bg-zinc-900 px-4 text-zinc-400">Or continue with</span></div>
           </div>

           {/* Form */}
           <form className="space-y-6">
              <div className="space-y-2">
                 <label className="text-xs font-bold text-zinc-400 uppercase tracking-widest ml-1">Email Address</label>
                 <div className="relative">
                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-400" size={18} />
                    <input 
                      type="email" 
                      placeholder="name@company.com"
                      className="w-full bg-zinc-50 dark:bg-zinc-800 border-zinc-200 dark:border-zinc-700 rounded-2xl px-12 py-4 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/20 dark:text-white font-medium"
                    />
                 </div>
              </div>

              <div className="space-y-2">
                 <div className="flex justify-between items-center px-1">
                    <label className="text-xs font-bold text-zinc-400 uppercase tracking-widest">Password</label>
                    <Link to="/forgot-password" size={12} className="text-xs font-bold text-indigo-600 hover:underline">Forgot password?</Link>
                 </div>
                 <div className="relative">
                    <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-400" size={18} />
                    <input 
                      type={showPassword ? "text" : "password"} 
                      placeholder="••••••••"
                      className="w-full bg-zinc-50 dark:bg-zinc-800 border-zinc-200 dark:border-zinc-700 rounded-2xl px-12 py-4 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/20 dark:text-white font-medium"
                    />
                    <button 
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-4 top-1/2 -translate-y-1/2 text-zinc-400 hover:text-zinc-600"
                    >
                      {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                    </button>
                 </div>
              </div>

              <div className="flex items-center gap-2 px-1">
                 <input type="checkbox" className="w-4 h-4 rounded border-zinc-300 text-indigo-600 focus:ring-indigo-500" />
                 <span className="text-sm font-medium text-zinc-600 dark:text-zinc-400">Remember for 30 days</span>
              </div>

              <button className="w-full bg-indigo-600 text-white font-bold py-4 rounded-2xl shadow-xl shadow-indigo-600/20 hover:bg-indigo-700 transition-all flex items-center justify-center gap-2 group active:scale-95">
                 Sign in <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </button>
           </form>

           <p className="text-center mt-10 text-zinc-500 dark:text-zinc-400 font-medium">
              Don't have an account? {' '}
              <Link to="/register" className="text-indigo-600 font-bold hover:underline">Sign up for free</Link>
           </p>
        </div>
      </motion.div>
    </div>
  );
}
