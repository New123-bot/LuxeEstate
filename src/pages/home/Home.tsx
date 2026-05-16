import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Play, Users, Home as HomeIcon, TrendingUp, Award } from 'lucide-react';
import { SearchFilter } from '../../components/ui/SearchFilter';
import { PropertyCard } from '../../components/ui/PropertyCard';
import { PROPERTIES } from '../../data/mockData';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="w-full overflow-hidden">
      {/* Hero Section */}
      <section className="relative h-[95vh] min-h-[700px] flex items-center justify-center pt-24">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1600585154340-be6199f7e009?q=80&w=2070&auto=format&fit=crop" 
            alt="Hero Background"
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-zinc-950/40 backdrop-blur-[2px]" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full text-center lg:text-left">
          <div className="grid lg:grid-cols-2 items-center gap-12">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center gap-2 bg-indigo-600/20 backdrop-blur-md border border-indigo-400/30 text-indigo-100 px-4 py-2 rounded-full mb-6 font-semibold text-sm">
                <span className="w-2 h-2 bg-indigo-400 rounded-full animate-pulse" />
                Trusted by 50,000+ happy families
              </div>
              <h1 className="text-5xl md:text-7xl font-black text-white leading-tight lg:leading-[1.1] mb-6 tracking-tight">
                Unlock Your <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-indigo-200">Dream Sanctuary.</span>
              </h1>
              <p className="text-lg md:text-xl text-zinc-200 mb-10 max-w-xl lg:mx-0 mx-auto leading-relaxed font-medium">
                Experience luxury living with our curated collection of premium properties in the world's most desirable locations.
              </p>
              <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
                <button className="bg-indigo-600 text-white px-8 py-4 rounded-2xl font-bold hover:bg-indigo-700 transition-all flex items-center gap-2 shadow-xl shadow-indigo-600/30 active:scale-95">
                  Browse Properties <ArrowRight size={20} />
                </button>
                <button className="bg-white/10 backdrop-blur-md border border-white/20 text-white px-8 py-4 rounded-2xl font-bold hover:bg-white/20 transition-all flex items-center gap-2 active:scale-95">
                  <div className="w-8 h-8 bg-indigo-600 rounded-full flex items-center justify-center">
                    <Play size={14} fill="white" className="ml-0.5" />
                  </div>
                  Watch Tour
                </button>
              </div>
            </motion.div>
            
            {/* Stats/Badge - Optional for right side on desktop */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="hidden lg:flex justify-end"
            >
              <div className="bg-white/10 backdrop-blur-xl border border-white/20 p-8 rounded-[40px] max-w-sm">
                <div className="space-y-8">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-amber-400 rounded-2xl flex items-center justify-center text-amber-950 font-bold text-xl">
                      #1
                    </div>
                    <div>
                      <p className="text-white font-bold">Market Leader</p>
                      <p className="text-zinc-400 text-sm italic">In luxury real estate sales</p>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-8">
                    <div>
                      <h4 className="text-3xl font-black text-white">12k+</h4>
                      <p className="text-zinc-400 text-sm uppercase tracking-wider font-bold">Premium Houses</p>
                    </div>
                    <div>
                      <h4 className="text-3xl font-black text-white">4.9/5</h4>
                      <p className="text-zinc-400 text-sm uppercase tracking-wider font-bold">Customer Rating</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Filter Overlay */}
        <div className="absolute -bottom-16 left-0 right-0 z-20 px-6">
          <SearchFilter />
        </div>
      </section>

      {/* Featured Properties Section */}
      <section className="pt-40 pb-20 px-6 bg-slate-50 dark:bg-zinc-950">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end gap-6 mb-12">
            <div>
              <span className="text-indigo-600 font-bold uppercase tracking-[0.2em] text-xs mb-3 block">Premium Selection</span>
              <h2 className="text-4xl font-black text-zinc-900 dark:text-white">Featured Properties</h2>
            </div>
            <Link to="/properties" className="group text-indigo-600 font-bold flex items-center gap-2 hover:gap-3 transition-all">
              View All Properties <ArrowRight size={20} />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {PROPERTIES.map((property) => (
              <PropertyCard key={property.id} property={property} />
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 px-6 bg-white dark:bg-zinc-900">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="relative">
              <div className="absolute -top-10 -left-10 w-40 h-40 bg-indigo-600/10 rounded-full blur-3xl" />
              <img 
                src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=1973&auto=format&fit=crop" 
                alt="Expertise"
                className="rounded-[40px] shadow-2xl relative z-10"
                referrerPolicy="no-referrer"
              />
              <div className="absolute -bottom-10 -right-10 bg-indigo-600 p-8 rounded-3xl text-white shadow-2xl z-20 max-w-[200px]">
                <h4 className="text-4xl font-black mb-2">25+</h4>
                <p className="font-bold text-indigo-100">Years of Luxury Expertise</p>
              </div>
            </div>

            <div className="space-y-8">
              <div>
                <span className="text-indigo-600 font-bold uppercase tracking-[0.2em] text-xs mb-3 block">Expertise You Can Trust</span>
                <h2 className="text-4xl font-black text-zinc-900 dark:text-white leading-tight">We Redefine The Luxury Living Experience.</h2>
              </div>
              
              <div className="grid sm:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <div className="w-14 h-14 bg-indigo-50 dark:bg-zinc-800 rounded-2xl flex items-center justify-center text-indigo-600">
                    <TrendingUp size={28} />
                  </div>
                  <h4 className="text-xl font-bold dark:text-white">Smart Investment</h4>
                  <p className="text-zinc-500 dark:text-zinc-400 leading-relaxed">We provide deep market insights to ensure your luxury purchase is a solid asset.</p>
                </div>
                <div className="space-y-4">
                  <div className="w-14 h-14 bg-indigo-50 dark:bg-zinc-800 rounded-2xl flex items-center justify-center text-indigo-600">
                    <HomeIcon size={28} />
                  </div>
                  <h4 className="text-xl font-bold dark:text-white">Dream Selection</h4>
                  <p className="text-zinc-500 dark:text-zinc-400 leading-relaxed">Our portfolio consists of only the most exclusive estates and penthouses.</p>
                </div>
                <div className="space-y-4">
                  <div className="w-14 h-14 bg-indigo-50 dark:bg-zinc-800 rounded-2xl flex items-center justify-center text-indigo-600">
                    <Users size={28} />
                  </div>
                  <h4 className="text-xl font-bold dark:text-white">VIP Support</h4>
                  <p className="text-zinc-500 dark:text-zinc-400 leading-relaxed">Dedicated concierge service throughout your entire buying or renting journey.</p>
                </div>
                <div className="space-y-4">
                  <div className="w-14 h-14 bg-indigo-50 dark:bg-zinc-800 rounded-2xl flex items-center justify-center text-indigo-600">
                    <Award size={28} />
                  </div>
                  <h4 className="text-xl font-bold dark:text-white">Award Winning</h4>
                  <p className="text-zinc-500 dark:text-zinc-400 leading-relaxed">Validated as the top luxury brokerage for five consecutive years.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Locations */}
      <section className="py-24 px-6 bg-zinc-950 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-indigo-400 font-bold uppercase tracking-[0.2em] text-xs mb-3 block">Global Presence</span>
            <h2 className="text-4xl md:text-5xl font-black">Explore Popular Locations</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: 'Miami, FL', count: 420, img: 'https://images.unsplash.com/photo-1514214246283-d427a95c5d2f?q=80&w=2000' },
              { name: 'Manhattan, NY', count: 850, img: 'https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?q=80&w=2000' },
              { name: 'Malibu, CA', count: 180, img: 'https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?q=80&w=2000' },
              { name: 'Aspen, CO', count: 95, img: 'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?q=80&w=2000' },
            ].map((loc, idx) => (
              <motion.div
                key={idx}
                whileHover={{ scale: 1.02 }}
                className="relative h-96 rounded-[32px] overflow-hidden group cursor-pointer"
              >
                <img 
                  src={loc.img} 
                  alt={loc.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
                <div className="absolute bottom-8 left-8">
                  <h4 className="text-2xl font-bold mb-1">{loc.name}</h4>
                  <p className="text-zinc-400 text-sm font-medium">{loc.count} Properties</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="bg-indigo-600 rounded-[48px] overflow-hidden relative p-12 md:p-20 text-center md:text-left">
            <div className="absolute top-0 right-0 w-1/3 h-full bg-indigo-500/20 skew-x-[-20deg] transform translate-x-1/2" />
            <div className="relative z-10 grid md:grid-cols-2 items-center gap-10">
              <div>
                <h2 className="text-4xl md:text-5xl font-black text-white mb-6 leading-tight">Ready to Find Your <br />Extraordinary?</h2>
                <p className="text-indigo-100 text-lg mb-10 max-w-md mx-auto md:mx-0">Join our exclusive network and get early access to off-market listings and premium property launches.</p>
                <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                  <Link to="/register" className="bg-white text-indigo-600 px-8 py-4 rounded-2xl font-bold hover:bg-zinc-100 transition-all shadow-xl active:scale-95">
                    Register Client Account
                  </Link>
                  <Link to="/contact" className="border-2 border-indigo-400 text-white px-8 py-4 rounded-2xl font-bold hover:bg-white/10 transition-all active:scale-95">
                    Speak with an Agent
                  </Link>
                </div>
              </div>
              <div className="hidden md:flex justify-end">
                <div className="bg-indigo-500/30 backdrop-blur-2xl p-4 rounded-full border border-indigo-400/30">
                   <div className="w-56 h-56 bg-white rounded-full flex flex-col items-center justify-center p-6 text-indigo-600 text-center">
                      <p className="text-sm font-bold uppercase tracking-wider mb-1">Join Over</p>
                      <h4 className="text-5xl font-black mb-1">50k+</h4>
                      <p className="text-xs font-semibold">Luxury Homeowners</p>
                   </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
