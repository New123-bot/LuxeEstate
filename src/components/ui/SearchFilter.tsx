import React, { useState } from 'react';
import { Search, MapPin, Home, DollarSign, SlidersHorizontal, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export function SearchFilter() {
  const [activeTab, setActiveTab] = useState<'buy' | 'rent'>('buy');
  const [showAdvanced, setShowAdvanced] = useState(false);

  return (
    <div className="w-full max-w-5xl mx-auto">
      {/* Tabs */}
      <div className="flex gap-2 mb-0 ml-4">
        {['buy', 'rent'].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab as any)}
            className={`
              px-8 py-3 rounded-t-2xl font-bold text-sm uppercase tracking-wider transition-all
              ${activeTab === tab 
                ? 'bg-white dark:bg-zinc-900 text-indigo-600 shadow-[-10px_0_15px_-10px_rgba(0,0,0,0.1)]' 
                : 'bg-white/20 backdrop-blur-md text-white hover:bg-white/30'}
            `}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Filter Box */}
      <div className="bg-white dark:bg-zinc-900 p-4 lg:p-6 rounded-3xl lg:rounded-tl-none shadow-2xl border border-white/20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {/* Location */}
          <div className="space-y-2">
            <label className="text-xs font-bold text-zinc-400 uppercase tracking-widest flex items-center gap-1 ml-2">
              <MapPin size={12} /> Location
            </label>
            <div className="relative group">
              <input 
                type="text" 
                placeholder="Where are you looking?"
                className="w-full bg-zinc-50 dark:bg-zinc-800/50 border border-zinc-200 dark:border-zinc-700/50 rounded-2xl px-5 py-3.5 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 transition-all text-sm font-medium"
              />
            </div>
          </div>

          {/* Property Type */}
          <div className="space-y-2">
            <label className="text-xs font-bold text-zinc-400 uppercase tracking-widest flex items-center gap-1 ml-2">
              <Home size={12} /> Property Type
            </label>
            <div className="relative">
              <select className="appearance-none w-full bg-zinc-50 dark:bg-zinc-800/50 border border-zinc-200 dark:border-zinc-700/50 rounded-2xl px-5 py-3.5 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 transition-all text-sm font-medium outline-none">
                <option>All Types</option>
                <option>House</option>
                <option>Apartment</option>
                <option>Villa</option>
                <option>Penthouse</option>
              </select>
              <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-zinc-400">
                <ChevronDown size={16} />
              </div>
            </div>
          </div>

          {/* Price Range */}
          <div className="space-y-2">
            <label className="text-xs font-bold text-zinc-400 uppercase tracking-widest flex items-center gap-1 ml-2">
              <DollarSign size={12} /> Budget
            </label>
            <div className="relative">
              <select className="appearance-none w-full bg-zinc-50 dark:bg-zinc-800/50 border border-zinc-200 dark:border-zinc-700/50 rounded-2xl px-5 py-3.5 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 transition-all text-sm font-medium outline-none">
                <option>Any Price</option>
                <option>$100k - $500k</option>
                <option>$500k - $1M</option>
                <option>$1M - $5M</option>
                <option>$5M+</option>
              </select>
              <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-zinc-400">
                <ChevronDown size={16} />
              </div>
            </div>
          </div>

          {/* Search Button */}
          <div className="flex items-end">
            <button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold h-14 rounded-2xl shadow-lg shadow-indigo-600/20 transition-all flex items-center justify-center gap-2 group active:scale-95">
              <Search size={20} className="group-hover:scale-110 transition-transform" />
              <span>Search Now</span>
            </button>
          </div>
        </div>

        {/* Advanced Toggle */}
        <div className="mt-4 flex justify-center">
          <button 
            onClick={() => setShowAdvanced(!showAdvanced)}
            className="text-xs font-bold text-zinc-500 hover:text-indigo-600 transition-colors flex items-center gap-1 uppercase tracking-widest"
          >
            <SlidersHorizontal size={12} />
            {showAdvanced ? 'Hide Advanced Filters' : 'Show Advanced Filters'}
          </button>
        </div>

        <AnimatePresence>
          {showAdvanced && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="mt-6 pt-6 border-t border-zinc-100 dark:border-zinc-800 grid grid-cols-1 md:grid-cols-3 gap-6"
            >
              <div className="space-y-4">
                <h5 className="text-sm font-bold dark:text-white">Bedrooms</h5>
                <div className="flex gap-2">
                  {[1, 2, 3, '4+'].map((num) => (
                    <button key={num} className="w-10 h-10 rounded-xl border border-zinc-200 dark:border-zinc-700 flex items-center justify-center text-sm font-medium hover:border-indigo-500 hover:text-indigo-500 transition-all">
                      {num}
                    </button>
                  ))}
                </div>
              </div>
              <div className="space-y-4">
                <h5 className="text-sm font-bold dark:text-white">Amenities</h5>
                <div className="flex flex-wrap gap-2">
                  {['Pool', 'Gym', 'Parking', 'Garden'].map((amenity) => (
                    <label key={amenity} className="flex items-center gap-2 cursor-pointer group">
                      <input type="checkbox" className="w-4 h-4 rounded-md border-zinc-300 text-indigo-600 focus:ring-indigo-500" />
                      <span className="text-sm text-zinc-600 dark:text-zinc-400 group-hover:text-zinc-900 dark:group-hover:text-white transition-colors">{amenity}</span>
                    </label>
                  ))}
                </div>
              </div>
              <div className="space-y-4">
                <h5 className="text-sm font-bold dark:text-white">Sort By</h5>
                <select className="w-full bg-zinc-50 dark:bg-zinc-800/50 border border-zinc-200 dark:border-zinc-700/50 rounded-2xl px-4 py-2.5 text-sm font-medium outline-none">
                  <option>Newest Listing</option>
                  <option>Price: Low to High</option>
                  <option>Price: High to Low</option>
                </select>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
