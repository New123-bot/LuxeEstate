import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { 
  Bed, Bath, Move, MapPin, Calendar, Heart, Share2, 
  Printer, CheckCircle2, Phone, Mail, MessageSquare,
  ChevronLeft, Star, ArrowRight, ShieldCheck, Info
} from 'lucide-react';
import { motion } from 'motion/react';
import { PROPERTIES } from '../../data/mockData';
import { formatCurrency, cn } from '../../utils';
import { PropertyCard } from '../../components/ui/PropertyCard';

export default function Details() {
  const { id } = useParams();
  const property = PROPERTIES.find(p => p.id === id) || PROPERTIES[0];

  return (
    <div className="pt-24 pb-20 bg-slate-50 dark:bg-zinc-950">
      {/* Top Banner / Breadcrumbs */}
      <div className="bg-white dark:bg-zinc-900 border-b border-zinc-100 dark:border-zinc-800 py-6 px-6">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <Link to="/properties" className="p-2 hover:bg-zinc-100 dark:hover:bg-zinc-800 rounded-full transition-all">
              <ChevronLeft size={20} />
            </Link>
            <nav className="flex items-center gap-2 text-sm font-medium">
              <Link to="/" className="text-zinc-400 hover:text-indigo-600">Home</Link>
              <span className="text-zinc-300">/</span>
              <Link to="/properties" className="text-zinc-400 hover:text-indigo-600">Properties</Link>
              <span className="text-zinc-300">/</span>
              <span className="text-zinc-900 dark:text-white capitalize">{property.title}</span>
            </nav>
          </div>
          <div className="flex items-center gap-3">
            <button className="flex items-center gap-2 px-4 py-2 rounded-xl border border-zinc-200 dark:border-zinc-800 text-sm font-bold hover:bg-zinc-50 dark:hover:bg-zinc-800 transition-all">
              <Heart size={16} /> Save
            </button>
            <button className="flex items-center gap-2 px-4 py-2 rounded-xl border border-zinc-200 dark:border-zinc-800 text-sm font-bold hover:bg-zinc-50 dark:hover:bg-zinc-800 transition-all">
              <Share2 size={16} /> Share
            </button>
            <button className="flex items-center gap-2 px-4 py-2 rounded-xl border border-zinc-200 dark:border-zinc-800 text-sm font-bold hover:bg-zinc-50 dark:hover:bg-zinc-800 transition-all">
              <Printer size={16} /> Print
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-12">
            
            {/* Title & Price Header */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 pb-8 border-b border-zinc-200 dark:border-zinc-800">
               <div>
                  <div className="flex items-center gap-2 mb-4">
                    <span className="bg-indigo-600 text-white text-[10px] uppercase font-black px-2.5 py-1 rounded-md tracking-wider">For {property.status}</span>
                    <span className="bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400 text-[10px] uppercase font-black px-2.5 py-1 rounded-md tracking-wider">{property.type}</span>
                  </div>
                  <h1 className="text-4xl font-black text-zinc-900 dark:text-white mb-3 tracking-tight">{property.title}</h1>
                  <div className="flex items-center gap-2 text-zinc-500 dark:text-zinc-400 font-medium">
                    <MapPin size={18} className="text-indigo-600" />
                    {property.location.address}, {property.location.city}, {property.location.state} {property.location.zipCode}
                  </div>
               </div>
               <div className="text-left md:text-right">
                  <p className="text-zinc-400 text-sm font-bold uppercase tracking-[0.2em] mb-1">Price</p>
                  <div className="text-4xl font-black text-indigo-600">{formatCurrency(property.price)}</div>
                  {property.status === 'rent' && <span className="text-zinc-400 font-medium text-sm">per month</span>}
               </div>
            </div>

            {/* Image Gallery */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
               <motion.div 
                 whileHover={{ scale: 1.01 }}
                 className="relative h-[480px] rounded-[40px] overflow-hidden shadow-2xl"
               >
                 <img src={property.images[0]} alt="Property Main" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                 <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
               </motion.div>
               <div className="grid grid-rows-2 gap-4 h-[480px]">
                  <motion.div 
                    whileHover={{ scale: 1.02 }}
                    className="rounded-[32px] overflow-hidden h-full shadow-lg"
                  >
                    <img src={property.images[1] || 'https://picsum.photos/seed/p2/800/600'} alt="Property 1" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                  </motion.div>
                  <div className="grid grid-cols-2 gap-4">
                    <motion.div 
                        whileHover={{ scale: 1.02 }}
                        className="rounded-[32px] overflow-hidden h-full shadow-lg"
                      >
                       <img src={property.images[2] || 'https://picsum.photos/seed/p3/800/600'} alt="Property 2" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                    </motion.div>
                    <motion.div 
                        whileHover={{ scale: 1.02 }}
                        className="rounded-[32px] overflow-hidden h-full relative group cursor-pointer shadow-lg"
                      >
                       <img src={property.images[0]} alt="Property More" className="w-full h-full object-cover blur-sm opacity-60" referrerPolicy="no-referrer" />
                       <div className="absolute inset-0 flex items-center justify-center">
                          <span className="text-white font-black text-2xl group-hover:scale-110 transition-transform">+12 Photo</span>
                       </div>
                    </motion.div>
                  </div>
               </div>
            </div>

            {/* Quick Specs */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 p-8 bg-white dark:bg-zinc-900 rounded-[32px] shadow-sm border border-zinc-100 dark:border-zinc-800">
               <div className="space-y-1">
                  <p className="text-xs font-bold text-zinc-400 uppercase tracking-widest">Bedrooms</p>
                  <div className="flex items-center gap-2">
                    <Bed className="text-indigo-600" size={20} />
                    <span className="text-xl font-bold dark:text-white">{property.features.bedrooms}</span>
                  </div>
               </div>
               <div className="space-y-1 border-l border-zinc-100 dark:border-zinc-800 pl-6">
                  <p className="text-xs font-bold text-zinc-400 uppercase tracking-widest">Bathrooms</p>
                  <div className="flex items-center gap-2">
                    <Bath className="text-indigo-600" size={20} />
                    <span className="text-xl font-bold dark:text-white">{property.features.bathrooms}</span>
                  </div>
               </div>
               <div className="space-y-1 border-l border-zinc-100 dark:border-zinc-800 pl-6">
                  <p className="text-xs font-bold text-zinc-400 uppercase tracking-widest">Area</p>
                  <div className="flex items-center gap-2">
                    <Move className="text-indigo-600" size={20} />
                    <span className="text-xl font-bold dark:text-white">{property.features.area} <span className="text-xs font-normal text-zinc-400">sqft</span></span>
                  </div>
               </div>
               <div className="space-y-1 border-l border-zinc-100 dark:border-zinc-800 pl-6">
                  <p className="text-xs font-bold text-zinc-400 uppercase tracking-widest">Year Built</p>
                  <div className="flex items-center gap-2">
                    <Calendar className="text-indigo-600" size={20} />
                    <span className="text-xl font-bold dark:text-white">{property.features.yearBuilt || 2021}</span>
                  </div>
               </div>
            </div>

            {/* Description */}
            <div className="space-y-6">
               <h3 className="text-2xl font-black text-zinc-900 dark:text-white font-serif">Property Description</h3>
               <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed text-lg font-medium">
                  {property.description} Experience luxury living at its finest in this immaculate {property.type}. 
                  Every detail has been carefully curated for the most discerning buyer. 
                  From the chef's kitchen to the master sanctuary, this home offers an unparalleled living experience.
                  <br /><br />
                  Located in the prestigious {property.location.city} area, this property stands as a testament 
                  to architectural brilliance and modern sophistication.
               </p>
            </div>

            {/* Amenities */}
            <div className="space-y-8">
               <h3 className="text-2xl font-black text-zinc-900 dark:text-white">World-Class Amenities</h3>
               <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                 {property.amenities.map((amenity, idx) => (
                    <div key={idx} className="flex items-center gap-3">
                       <div className="w-8 h-8 bg-indigo-50 dark:bg-zinc-800 rounded-lg flex items-center justify-center text-indigo-600">
                          <CheckCircle2 size={16} />
                       </div>
                       <span className="font-semibold text-zinc-700 dark:text-zinc-300">{amenity}</span>
                    </div>
                 ))}
                 {['Fiber Internet', 'Security System', 'Smart Climate Control', 'Walk-in Closets'].map((a, idx) => (
                    <div key={idx} className="flex items-center gap-3">
                       <div className="w-8 h-8 bg-indigo-50 dark:bg-zinc-800 rounded-lg flex items-center justify-center text-indigo-600">
                          <CheckCircle2 size={16} />
                       </div>
                       <span className="font-semibold text-zinc-700 dark:text-zinc-300">{a}</span>
                    </div>
                 ))}
               </div>
            </div>

            {/* Location / Video */}
            <div className="space-y-8">
                <div className="flex justify-between items-center">
                   <h3 className="text-2xl font-black text-zinc-900 dark:text-white">Property Tour</h3>
                   <button className="text-indigo-600 font-bold text-sm flex items-center gap-2 hover:gap-3 transition-all">
                      Open in Maps <ArrowRight size={16} />
                   </button>
                </div>
                <div className="relative h-80 rounded-[40px] overflow-hidden shadow-xl bg-zinc-200 group">
                   <img src="https://images.unsplash.com/photo-1524813686514-a57563d77965?q=80&w=1932&auto=format&fit=crop" className="w-full h-full object-cover grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700" referrerPolicy="no-referrer" />
                   <div className="absolute inset-0 flex items-center justify-center">
                      <button className="w-20 h-20 bg-indigo-600 rounded-full flex items-center justify-center text-white shadow-2xl hover:scale-110 active:scale-95 transition-all">
                        <Play size={32} fill="white" className="ml-1" />
                      </button>
                   </div>
                </div>
            </div>

          </div>

          {/* Sidebar */}
          <div className="space-y-8">
             
             {/* Contact Agent Card */}
             <div className="bg-white dark:bg-zinc-900 rounded-[40px] p-8 shadow-xl border border-zinc-100 dark:border-zinc-800 sticky top-32">
                <div className="text-center mb-8">
                   <div className="relative inline-block mb-4">
                      <img 
                        src={property.agent.image} 
                        alt={property.agent.name}
                        className="w-24 h-24 rounded-full object-cover border-4 border-indigo-50 shadow-lg"
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute -bottom-1 -right-1 bg-amber-400 p-1.5 rounded-full border-4 border-white shadow-md">
                         <Star size={12} fill="currentColor" />
                      </div>
                   </div>
                   <h4 className="text-xl font-black dark:text-white">{property.agent.name}</h4>
                   <p className="text-indigo-600 font-bold text-sm uppercase tracking-wider mb-2">Luxury Specialist</p>
                   <div className="flex items-center justify-center gap-1 text-amber-500 font-bold text-sm">
                      <Star size={14} fill="currentColor" />
                      <span>{property.agent.rating}</span>
                      <span className="text-zinc-400 font-medium ml-1">(120+ Reviews)</span>
                   </div>
                </div>

                <div className="space-y-4 mb-8">
                   <button className="w-full bg-indigo-600 text-white font-bold py-4 rounded-2xl flex items-center justify-center gap-3 hover:bg-indigo-700 transition-all shadow-lg shadow-indigo-600/20 active:scale-95">
                      <Phone size={18} /> Make a Call
                   </button>
                   <button className="w-full border-2 border-zinc-100 dark:border-zinc-800 text-zinc-900 dark:text-white font-bold py-4 rounded-2xl flex items-center justify-center gap-3 hover:bg-zinc-50 dark:hover:bg-zinc-800 transition-all active:scale-95">
                      <Mail size={18} /> Send Email
                   </button>
                </div>

                <div className="pt-8 border-t border-zinc-100 dark:border-zinc-800">
                   <h5 className="text-sm font-black dark:text-white uppercase tracking-widest mb-6">Schedule a Tour</h5>
                   <form className="space-y-4">
                      <input type="text" placeholder="Full Name" className="w-full bg-zinc-50 dark:bg-zinc-800 border-zinc-200 dark:border-zinc-700 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/20" />
                      <input type="email" placeholder="Email Address" className="w-full bg-zinc-50 dark:bg-zinc-800 border-zinc-200 dark:border-zinc-700 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/20" />
                      <textarea placeholder="Your Message" rows={4} className="w-full bg-zinc-50 dark:bg-zinc-800 border-zinc-200 dark:border-zinc-700 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/20 resize-none"></textarea>
                      <button className="w-full bg-zinc-950 dark:bg-indigo-600 text-white font-bold py-4 rounded-2xl shadow-xl hover:shadow-indigo-600/20 transition-all active:scale-95 text-xs uppercase tracking-widest">
                         Book Viewing
                      </button>
                   </form>
                </div>

                <div className="mt-8 flex items-center gap-3 p-4 bg-zinc-50 dark:bg-zinc-800 rounded-2xl">
                   <ShieldCheck className="text-green-500" size={20} />
                   <div className="text-[10px] text-zinc-500 dark:text-zinc-400 leading-tight">
                      Your shared information is protected by our global privacy standards.
                   </div>
                </div>
             </div>

          </div>
        </div>

        {/* Similar Properties */}
        <div className="mt-24">
           <div className="flex justify-between items-end mb-12">
              <div>
                 <span className="text-indigo-600 font-bold uppercase tracking-[0.2em] text-xs mb-3 block">Discover More</span>
                 <h2 className="text-4xl font-black text-zinc-900 dark:text-white">Similar Properties</h2>
              </div>
              <button className="text-zinc-500 font-bold flex items-center gap-2 hover:text-indigo-600 transition-colors">
                 View All <ArrowRight size={20} />
              </button>
           </div>
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {PROPERTIES.slice(0, 3).map((prop) => (
                 <PropertyCard key={prop.id} property={prop} />
              ))}
           </div>
        </div>
      </div>
    </div>
  );
}

const Play = ({ size, fill, className }: { size?: number, fill?: string, className?: string }) => (
  <svg 
    width={size || 24} 
    height={size || 24} 
    viewBox="0 0 24 24" 
    fill={fill || "none"} 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <polygon points="5 3 19 12 5 21 5 3" />
  </svg>
);
