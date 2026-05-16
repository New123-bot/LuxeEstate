import React, { useState } from 'react';
import { 
  LayoutGrid, List, SlidersHorizontal, ChevronDown, 
  Search, X, Filter, Map as MapIcon
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { PropertyCard } from '../../components/ui/PropertyCard';
import { PROPERTIES } from '../../data/mockData';
import { cn } from '../../utils';

export default function Listing() {
  const [view, setView] = useState<'grid' | 'list'>('grid');
  const [isFilterSidebarOpen, setIsFilterSidebarOpen] = useState(true);

  return (
    <div className="pt-24 min-h-screen bg-slate-50 dark:bg-zinc-950">
      {/* Header */}
      <div className="bg-white dark:bg-zinc-900 border-b border-zinc-100 dark:border-zinc-800 py-8 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div>
            <h1 className="text-3xl font-black text-zinc-900 dark:text-white mb-2">Property Listings</h1>
            <p className="text-zinc-500 dark:text-zinc-400 font-medium">Found 250+ properties in your area</p>
          </div>
          
          <div className="flex items-center gap-3 w-full md:w-auto">
            <div className="relative flex-1 md:w-80">
              <input 
                type="text" 
                placeholder="Search by city, address or zip..."
                className="w-full bg-zinc-50 dark:bg-zinc-800 border-zinc-200 dark:border-zinc-700 rounded-xl px-5 py-3 pr-12 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/20"
              />
              <Search className="absolute right-4 top-1/2 -translate-y-1/2 text-zinc-400" size={18} />
            </div>
            <button className="bg-indigo-600 text-white p-3 rounded-xl hover:bg-indigo-700 transition-all shadow-lg shadow-indigo-600/20">
              <MapIcon size={20} />
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-10">
        <div className="flex flex-col lg:flex-row gap-10">
          
          {/* Sidebar Filters */}
          <aside className={cn(
            "lg:w-80 shrink-0 space-y-8",
            !isFilterSidebarOpen && "hidden lg:block lg:opacity-50"
          )}>
            <div className="bg-white dark:bg-zinc-900 rounded-[32px] p-8 shadow-sm border border-zinc-100 dark:border-zinc-800">
              <div className="flex items-center justify-between mb-8">
                <h3 className="text-xl font-black text-zinc-900 dark:text-white flex items-center gap-2">
                  <Filter size={18} className="text-indigo-600" /> Filters
                </h3>
                <button className="text-xs font-bold text-indigo-600 uppercase tracking-wider">Reset</button>
              </div>

              {/* Price Range */}
              <div className="space-y-4 mb-8">
                <h4 className="text-sm font-bold text-zinc-900 dark:text-white uppercase tracking-wider">Price Range</h4>
                <div className="grid grid-cols-2 gap-4">
                  <input type="number" placeholder="Min" className="w-full bg-zinc-50 dark:bg-zinc-800 border-zinc-200 dark:border-zinc-700 rounded-xl px-4 py-2.5 text-sm" />
                  <input type="number" placeholder="Max" className="w-full bg-zinc-50 dark:bg-zinc-800 border-zinc-200 dark:border-zinc-700 rounded-xl px-4 py-2.5 text-sm" />
                </div>
              </div>

              {/* Property Type */}
              <div className="space-y-4 mb-8">
                <h4 className="text-sm font-bold text-zinc-900 dark:text-white uppercase tracking-wider">Property Type</h4>
                <div className="space-y-3">
                  {['House', 'Apartment', 'Condo', 'Villa', 'Land'].map((type) => (
                    <label key={type} className="flex items-center gap-3 cursor-pointer group">
                      <input type="checkbox" className="w-5 h-5 rounded-md border-zinc-300 text-indigo-600 focus:ring-indigo-500" />
                      <span className="text-sm font-medium text-zinc-600 dark:text-zinc-400 group-hover:text-zinc-900 dark:group-hover:text-white transition-colors">{type}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Bedrooms */}
              <div className="space-y-4 mb-8">
                <h4 className="text-sm font-bold text-zinc-900 dark:text-white uppercase tracking-wider">Bedrooms</h4>
                <div className="flex flex-wrap gap-2">
                  {['Any', '1', '2', '3', '4', '5+'].map((n) => (
                    <button key={n} className="w-10 h-10 rounded-xl border border-zinc-200 dark:border-zinc-700 text-xs font-bold hover:border-indigo-600 hover:text-indigo-600 transition-all">
                      {n}
                    </button>
                  ))}
                </div>
              </div>

              {/* Amenities */}
              <div className="space-y-4 mb-8">
                <h4 className="text-sm font-bold text-zinc-900 dark:text-white uppercase tracking-wider">Amenities</h4>
                <div className="space-y-3">
                  {['Pool', 'Gym', 'Parking', 'Security', 'AC', 'Garden'].map((amenity) => (
                    <label key={amenity} className="flex items-center gap-3 cursor-pointer group">
                      <input type="checkbox" className="w-5 h-5 rounded-md border-zinc-300 text-indigo-600 focus:ring-indigo-500" />
                      <span className="text-sm font-medium text-zinc-600 dark:text-zinc-400 group-hover:text-zinc-900 dark:group-hover:text-white transition-colors">{amenity}</span>
                    </label>
                  ))}
                </div>
              </div>

              <button className="w-full bg-zinc-900 dark:bg-indigo-600 text-white font-bold py-4 rounded-2xl shadow-lg hover:shadow-indigo-600/20 transition-all active:scale-95 text-sm uppercase tracking-widest">
                Apply Filters
              </button>
            </div>

            {/* Promo Card */}
            <div className="bg-indigo-600 rounded-[32px] p-8 text-white relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16 blur-2xl group-hover:scale-150 transition-transform duration-700" />
              <h4 className="text-xl font-black mb-4 relative z-10">Professional Advice</h4>
              <p className="text-indigo-100 text-sm mb-6 relative z-10">Get in touch with our experts to find properties off-market.</p>
              <button className="bg-white text-indigo-600 px-6 py-3 rounded-xl font-bold text-sm hover:bg-zinc-100 transition-all relative z-10">
                Contact Agent
              </button>
            </div>
          </aside>

          {/* Main Content */}
          <div className="flex-1 space-y-8">
            {/* Toolbar */}
            <div className="flex flex-col sm:flex-row justify-between items-center bg-white dark:bg-zinc-900 p-4 rounded-2xl border border-zinc-100 dark:border-zinc-800 gap-4">
              <div className="flex items-center gap-4">
                <button 
                  onClick={() => setIsFilterSidebarOpen(!isFilterSidebarOpen)}
                  className="lg:hidden flex items-center gap-2 text-sm font-bold text-zinc-600 dark:text-zinc-400 bg-zinc-100 dark:bg-zinc-800 px-4 py-2 rounded-lg"
                >
                  <SlidersHorizontal size={16} /> Filters
                </button>
                <div className="flex items-center bg-zinc-100 dark:bg-zinc-800 p-1 rounded-xl">
                  <button 
                    onClick={() => setView('grid')}
                    className={cn(
                      "p-2 rounded-lg transition-all",
                      view === 'grid' ? "bg-white dark:bg-zinc-700 shadow-sm text-indigo-600" : "text-zinc-400"
                    )}
                  >
                    <LayoutGrid size={18} />
                  </button>
                  <button 
                    onClick={() => setView('list')}
                    className={cn(
                      "p-2 rounded-lg transition-all",
                      view === 'list' ? "bg-white dark:bg-zinc-700 shadow-sm text-indigo-600" : "text-zinc-400"
                    )}
                  >
                    <List size={18} />
                  </button>
                </div>
                <span className="text-sm font-medium text-zinc-500">Showing 1-12 of 250 properties</span>
              </div>
              
              <div className="flex items-center gap-3">
                <span className="text-sm font-semibold text-zinc-400 uppercase tracking-widest hidden sm:block">Sort:</span>
                <select className="bg-zinc-100 dark:bg-zinc-800 border-none rounded-xl px-4 py-2.5 text-sm font-bold text-zinc-700 dark:text-zinc-200 focus:ring-0 outline-none cursor-pointer">
                  <option>Latest Properties</option>
                  <option>Price: Low to High</option>
                  <option>Price: High to Low</option>
                  <option>Most Popular</option>
                </select>
              </div>
            </div>

            {/* Grid */}
            <div className={cn(
              "grid gap-8",
              view === 'grid' ? "grid-cols-1 md:grid-cols-2" : "grid-cols-1"
            )}>
              {PROPERTIES.concat(PROPERTIES).concat(PROPERTIES).map((property, idx) => (
                <PropertyCard 
                  key={`${property.id}-${idx}`} 
                  property={property} 
                  variant={view}
                />
              ))}
            </div>

            {/* Pagination */}
            <div className="flex justify-center mt-12">
              <nav className="flex items-center gap-2">
                <button className="w-12 h-12 rounded-2xl border border-zinc-200 dark:border-zinc-800 flex items-center justify-center hover:bg-indigo-600 hover:text-white transition-all text-zinc-500">
                  ←
                </button>
                {[1, 2, 3, '...', 12].map((p, i) => (
                  <button 
                    key={i} 
                    className={cn(
                      "w-12 h-12 rounded-2xl font-bold transition-all",
                      p === 1 ? "bg-indigo-600 text-white shadow-lg shadow-indigo-600/20" : "hover:bg-zinc-100 dark:hover:bg-zinc-800 text-zinc-600 dark:text-zinc-400"
                    )}
                  >
                    {p}
                  </button>
                ))}
                <button className="w-12 h-12 rounded-2xl border border-zinc-200 dark:border-zinc-800 flex items-center justify-center hover:bg-indigo-600 hover:text-white transition-all text-zinc-500">
                  →
                </button>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
