import React, { useState } from 'react';
import { 
  Plus, Camera, MapPin, DollarSign, Info, 
  CheckCircle2, AlertCircle, ArrowRight, Save
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function AddProperty() {
  const [step, setStep] = useState(1);

  return (
    <div className="max-w-4xl mx-auto space-y-10 pb-20">
       <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-4">
          <div>
             <h1 className="text-4xl font-black text-zinc-900 dark:text-white mb-2 tracking-tight">Add New Property</h1>
             <p className="text-zinc-500 dark:text-zinc-400 font-medium">List your property on the world's most exclusive marketplace.</p>
          </div>
          <div className="flex items-center gap-2">
             <button className="px-6 py-2.5 bg-white dark:bg-zinc-900 border border-zinc-100 dark:border-zinc-800 rounded-xl text-sm font-bold shadow-sm hover:bg-zinc-50 transition-colors">Save Draft</button>
             <button className="px-6 py-2.5 bg-indigo-600 text-white rounded-xl text-sm font-bold shadow-lg shadow-indigo-600/20 active:scale-95 transition-all">Publish Listing</button>
          </div>
       </div>

       {/* Stepper */}
       <div className="flex items-center gap-4 bg-white dark:bg-zinc-900 p-4 rounded-3xl border border-zinc-100 dark:border-zinc-800 shadow-sm">
          {[
            { id: 1, name: 'Basic Info' },
            { id: 2, name: 'Media' },
            { id: 3, name: 'Location' },
            { id: 4, name: 'Amenities' },
          ].map((s) => (
             <div key={s.id} className="flex-1 flex items-center gap-3 group px-4">
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center font-black transition-all ${step >= s.id ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-600/20 scale-110' : 'bg-zinc-100 dark:bg-zinc-800 text-zinc-400'}`}>
                   {step > s.id ? <CheckCircle2 size={18} /> : s.id}
                </div>
                <div className="hidden md:block">
                   <p className={`text-[10px] uppercase tracking-widest font-black ${step >= s.id ? 'text-indigo-600' : 'text-zinc-400'}`}>Step 0{s.id}</p>
                   <p className={`text-sm font-bold ${step >= s.id ? 'text-zinc-900 dark:text-zinc-200' : 'text-zinc-400'}`}>{s.name}</p>
                </div>
                {s.id < 4 && <div className="hidden lg:block flex-1 h-px bg-zinc-100 dark:bg-zinc-800 ml-4" />}
             </div>
          ))}
       </div>

       {/* Form Content */}
       <div className="bg-white dark:bg-zinc-900 rounded-[40px] p-8 md:p-12 shadow-sm border border-zinc-100 dark:border-zinc-800 transition-all">
          <AnimatePresence mode="wait">
             {step === 1 && (
                <motion.div
                  key="step1"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="space-y-10"
                >
                   <div className="grid md:grid-cols-2 gap-8">
                      <div className="space-y-2">
                         <label className="text-xs font-black text-zinc-400 uppercase tracking-[0.2em] ml-1">Property Title</label>
                         <input 
                           type="text" 
                           placeholder="e.g. Modern Sunset Penthouse"
                           className="w-full bg-zinc-50 dark:bg-zinc-800 border-zinc-200 dark:border-zinc-700 rounded-2xl px-6 py-4 text-sm font-medium focus:ring-2 focus:ring-indigo-500/20 outline-none"
                         />
                      </div>
                      <div className="space-y-2">
                         <label className="text-xs font-black text-zinc-400 uppercase tracking-[0.2em] ml-1">Property Type</label>
                         <select className="w-full bg-zinc-50 dark:bg-zinc-800 border-zinc-200 dark:border-zinc-700 rounded-2xl px-6 py-4 text-sm font-medium focus:ring-2 focus:ring-indigo-500/20 outline-none">
                            <option>House</option>
                            <option>Apartment</option>
                            <option>Villa</option>
                            <option>Condo</option>
                         </select>
                      </div>
                   </div>

                   <div className="space-y-2">
                      <label className="text-xs font-black text-zinc-400 uppercase tracking-[0.2em] ml-1">Description</label>
                      <textarea 
                        rows={6}
                        placeholder="Describe the unique features of this property..."
                        className="w-full bg-zinc-50 dark:bg-zinc-800 border-zinc-200 dark:border-zinc-700 rounded-2xl px-6 py-4 text-sm font-medium focus:ring-2 focus:ring-indigo-500/20 outline-none resize-none"
                      />
                   </div>

                   <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
                      <div className="space-y-2">
                         <label className="text-xs font-black text-zinc-400 uppercase tracking-[0.2em] ml-1">Bedrooms</label>
                         <input type="number" className="w-full bg-zinc-50 dark:bg-zinc-800 border-zinc-200 dark:border-zinc-700 rounded-2xl px-6 py-4 text-sm font-medium focus:ring-2 focus:ring-indigo-500/20 outline-none" />
                      </div>
                      <div className="space-y-2">
                         <label className="text-xs font-black text-zinc-400 uppercase tracking-[0.2em] ml-1">Bathrooms</label>
                         <input type="number" className="w-full bg-zinc-50 dark:bg-zinc-800 border-zinc-200 dark:border-zinc-700 rounded-2xl px-6 py-4 text-sm font-medium focus:ring-2 focus:ring-indigo-500/20 outline-none" />
                      </div>
                      <div className="space-y-2">
                         <label className="text-xs font-black text-zinc-400 uppercase tracking-[0.2em] ml-1">Area (sqft)</label>
                         <input type="number" className="w-full bg-zinc-50 dark:bg-zinc-800 border-zinc-200 dark:border-zinc-700 rounded-2xl px-6 py-4 text-sm font-medium focus:ring-2 focus:ring-indigo-500/20 outline-none" />
                      </div>
                   </div>

                   <div className="p-6 bg-amber-50 dark:bg-amber-900/10 border border-amber-100 dark:border-amber-900/30 rounded-3xl flex gap-4">
                      <Info className="text-amber-500 shrink-0" size={24} />
                      <p className="text-xs font-medium text-amber-700 dark:text-amber-400 leading-relaxed">
                         Make sure your property title is unique and descriptive. Properties with professional titles have a 40% higher engagement rate.
                      </p>
                   </div>
                </motion.div>
             )}

             {step === 2 && (
                <motion.div
                  key="step2"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="space-y-10"
                >
                   <div className="space-y-6">
                      <div className="flex justify-between items-center">
                         <h3 className="text-xl font-black dark:text-white">Upload Media</h3>
                         <span className="text-xs font-bold text-zinc-400 uppercase tracking-widest">Max 15 Images</span>
                      </div>
                      
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                         <div className="aspect-square border-2 border-dashed border-zinc-200 dark:border-zinc-800 rounded-3xl flex flex-col items-center justify-center gap-3 cursor-pointer hover:bg-zinc-50 dark:hover:bg-zinc-800 transition-all hover:border-indigo-500 group">
                            <div className="p-3 bg-indigo-50 dark:bg-zinc-800 rounded-2xl text-indigo-600 group-hover:scale-110 transition-transform">
                               <Camera size={24} />
                            </div>
                            <span className="text-[10px] font-black uppercase text-zinc-500">Main Photo</span>
                         </div>
                         {[1, 2, 3].map((n) => (
                            <div key={n} className="aspect-square bg-zinc-100 dark:bg-zinc-800 rounded-3xl flex items-center justify-center text-zinc-400">
                               <Plus size={20} />
                            </div>
                         ))}
                      </div>
                   </div>

                   <div className="space-y-6">
                      <h3 className="text-xl font-black dark:text-white">Video Tour URL</h3>
                      <input 
                        type="url" 
                        placeholder="YouTube or Vimeo Link"
                        className="w-full bg-zinc-50 dark:bg-zinc-800 border-zinc-200 dark:border-zinc-700 rounded-2xl px-6 py-4 text-sm font-medium focus:ring-2 focus:ring-indigo-500/20 outline-none"
                      />
                   </div>

                   <div className="p-6 bg-indigo-50 dark:bg-indigo-900/10 border border-indigo-100 dark:border-indigo-900/30 rounded-3xl flex gap-4">
                      <AlertCircle className="text-indigo-500 shrink-0" size={24} />
                      <p className="text-xs font-medium text-indigo-700 dark:text-indigo-400 leading-relaxed">
                         High-quality images are the most important factor in luxury listings. We recommend using a professional architectural photographer.
                      </p>
                   </div>
                </motion.div>
             )}
          </AnimatePresence>

          {/* Navigation Buttons */}
          <div className="mt-16 flex justify-between items-center">
             <button 
               onClick={() => setStep(Math.max(1, step - 1))}
               disabled={step === 1}
               className="px-8 py-4 bg-zinc-100 dark:bg-zinc-800 rounded-2xl font-bold dark:text-white disabled:opacity-30 transition-all"
             >
                Back
             </button>
             <button 
               onClick={() => setStep(Math.min(4, step + 1))}
               className="px-8 py-4 bg-indigo-600 text-white rounded-2xl font-bold flex items-center gap-2 hover:bg-indigo-700 transition-all shadow-xl shadow-indigo-600/20 active:scale-95"
             >
                {step === 4 ? 'Finish' : 'Continue'} <ArrowRight size={20} />
             </button>
          </div>
       </div>

    </div>
  );
}
