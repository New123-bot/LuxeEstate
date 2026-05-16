import React from 'react';
import { Link } from 'react-router-dom';
import { Bed, Bath, Move, Heart, MapPin, Star } from 'lucide-react';
import { motion } from 'motion/react';
import { Property } from '../../types';
import { formatCurrency, cn } from '../../utils';

interface PropertyCardProps {
  key?: React.Key;
  property: Property;
  className?: string;
  variant?: 'grid' | 'list';
}

export function PropertyCard({ property, className, variant = 'grid' }: PropertyCardProps) {
  const isList = variant === 'list';

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -5 }}
      className={cn(
        "group bg-white dark:bg-zinc-900 rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-zinc-100 dark:border-zinc-800",
        isList ? "flex flex-col md:flex-row h-full" : "flex flex-col",
        className
      )}
    >
      {/* Image Container */}
      <div className={cn(
        "relative overflow-hidden",
        isList ? "md:w-2/5 h-64 md:h-full" : "h-64"
      )}>
        <img
          src={property.images[0]}
          alt={property.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          referrerPolicy="no-referrer"
        />
        
        {/* Badges */}
        <div className="absolute top-4 left-4 flex flex-col gap-2">
          {property.isFeatured && (
            <span className="bg-amber-400 text-amber-950 text-[10px] uppercase font-bold px-2 py-1 rounded-md flex items-center gap-1 shadow-lg">
              <Star size={10} fill="currentColor" /> Featured
            </span>
          )}
          <span className="bg-indigo-600 text-white text-[10px] uppercase font-bold px-2 py-1 rounded-md shadow-lg">
            For {property.status}
          </span>
        </div>

        {/* Favorite Button */}
        <button className="absolute top-4 right-4 p-2 bg-white/20 backdrop-blur-md rounded-full text-white hover:bg-white hover:text-red-500 transition-all">
          <Heart size={18} />
        </button>

        {/* Price Tag (Mobile or Grid) */}
        {!isList && (
          <div className="absolute bottom-4 left-4">
            <div className="bg-white/90 dark:bg-zinc-900/90 backdrop-blur-md px-3 py-1 rounded-lg">
              <span className="text-lg font-bold text-indigo-600">{formatCurrency(property.price)}</span>
              {property.status === 'rent' && <span className="text-xs text-zinc-500 font-medium">/mo</span>}
            </div>
          </div>
        )}
      </div>

      {/* Content */}
      <div className={cn(
        "p-6 flex flex-col justify-between flex-1",
        isList ? "md:w-3/5" : ""
      )}>
        <div>
          <div className="flex items-center gap-1 text-indigo-600 dark:text-indigo-400 mb-2">
            <span className="text-[10px] font-bold uppercase tracking-wider">{property.type}</span>
          </div>
          
          <Link to={`/property/${property.id}`}>
            <h3 className="text-xl font-bold text-zinc-900 dark:text-white mb-2 group-hover:text-indigo-600 transition-colors">
              {property.title}
            </h3>
          </Link>

          <div className="flex items-center gap-1 text-zinc-500 dark:text-zinc-400 text-sm mb-4">
            <MapPin size={14} className="shrink-0" />
            <span className="truncate">{property.location.address}, {property.location.city}</span>
          </div>

          <div className="grid grid-cols-3 gap-4 border-y border-zinc-100 dark:border-zinc-800 py-4 mb-4">
            <div className="flex items-center gap-2 text-zinc-600 dark:text-zinc-300">
              <Bed size={16} className="text-indigo-500" />
              <span className="text-sm font-semibold">{property.features.bedrooms} <span className="text-zinc-400 font-normal">Beds</span></span>
            </div>
            <div className="flex items-center gap-2 text-zinc-600 dark:text-zinc-300">
              <Bath size={16} className="text-indigo-500" />
              <span className="text-sm font-semibold">{property.features.bathrooms} <span className="text-zinc-400 font-normal">Baths</span></span>
            </div>
            <div className="flex items-center gap-2 text-zinc-600 dark:text-zinc-300">
              <Move size={16} className="text-indigo-500" />
              <span className="text-sm font-semibold">{property.features.area} <span className="text-zinc-400 font-normal">sqft</span></span>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between mt-auto">
          <div className="flex items-center gap-2">
            <img 
              src={property.agent.image} 
              alt={property.agent.name}
              className="w-8 h-8 rounded-full object-cover"
              referrerPolicy="no-referrer"
            />
            <span className="text-xs font-medium text-zinc-700 dark:text-zinc-300">{property.agent.name}</span>
          </div>
          
          {isList && (
            <div className="text-right">
              <div className="text-2xl font-bold text-indigo-600">{formatCurrency(property.price)}</div>
              {property.status === 'rent' && <span className="text-xs text-zinc-500">/monthly</span>}
            </div>
          )}

          <Link 
            to={`/property/${property.id}`}
            className="text-indigo-600 dark:text-indigo-400 font-bold text-sm flex items-center gap-1 group/link"
          >
            Details 
            <motion.span
              animate={{ x: [0, 5, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
            >
              →
            </motion.span>
          </Link>
        </div>
      </div>
    </motion.div>
  );
}
