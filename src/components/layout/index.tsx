import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  Menu, X, Search, User, Heart, ShoppingBag, 
  MapPin, Phone, Mail, Facebook, Twitter, Instagram, Linkedin,
  ChevronDown, Sun, Moon, Globe
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { cn } from '../../utils';

const NAV_LINKS = [
  { name: 'Home', path: '/' },
  { name: 'Properties', path: '/properties' },
  { name: 'Agents', path: '/agents' },
  { name: 'About', path: '/about' },
  { name: 'Contact', path: '/contact' },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const location = useLocation();

  const isDashboard = location.pathname.startsWith('/dashboard');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const showSolid = isScrolled || isDashboard;

  return (
    <nav 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 py-4 bg-zinc-100/90 dark:bg-zinc-900/90 backdrop-blur-lg border-b border-zinc-200 dark:border-zinc-800 shadow-sm"
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 group">
          <div className="w-10 h-10 bg-indigo-600 rounded-lg flex items-center justify-center text-white font-bold text-xl shadow-lg group-hover:bg-indigo-700 transition-colors">
            L
          </div>
          <span className={cn(
            "text-2xl font-bold tracking-tight text-zinc-900 dark:text-white"
          )}>
            LuxeEstate
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={cn(
                "text-sm font-medium transition-colors hover:text-indigo-600",
                location.pathname === link.path 
                  ? "text-indigo-600" 
                  : "text-zinc-600 dark:text-zinc-400"
              )}
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="hidden lg:flex items-center gap-4">
          <button className={cn(
            "p-2 rounded-full hover:bg-zinc-200 dark:hover:bg-zinc-800 text-zinc-600 dark:text-zinc-400"
          )}>
            <Search size={20} />
          </button>
          <button 
            onClick={() => setIsDarkMode(!isDarkMode)}
            className="p-2 rounded-full hover:bg-zinc-200 dark:hover:bg-zinc-800 text-zinc-600 dark:text-zinc-400"
          >
            {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          <div className="h-4 w-px bg-zinc-300 dark:bg-zinc-700 mx-2" />
          <Link 
            to="/login"
            className="flex items-center gap-2 text-sm font-medium text-zinc-600 dark:text-zinc-400 hover:text-indigo-600"
          >
            <User size={18} />
            Login
          </Link>
          <Link 
            to="/register"
            className="bg-indigo-600 text-white px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-indigo-700 transition-all shadow-md active:scale-95"
          >
            Get Started
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          className={cn(
            "lg:hidden p-2 rounded-lg text-zinc-900 dark:text-white"
          )}
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white dark:bg-zinc-900 mt-4 rounded-2xl overflow-hidden shadow-xl"
          >
            <div className="flex flex-col p-6 gap-4">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className="text-lg font-medium text-zinc-900 dark:text-white py-2 border-b border-zinc-100 dark:border-zinc-800"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              <div className="flex items-center justify-between mt-4">
                <Link 
                  to="/login" 
                  className="text-zinc-600 dark:text-zinc-400 font-medium"
                  onClick={() => setIsOpen(false)}
                >
                  Login
                </Link>
                <Link 
                  to="/register" 
                  className="bg-indigo-600 text-white px-6 py-3 rounded-xl font-bold"
                  onClick={() => setIsOpen(false)}
                >
                  Get Started
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

export function Footer() {
  return (
    <footer className="bg-zinc-950 text-white pt-20 pb-10 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="space-y-6">
            <Link to="/" className="flex items-center gap-2">
              <div className="w-10 h-10 bg-indigo-600 rounded-lg flex items-center justify-center text-white font-bold text-xl">
                L
              </div>
              <span className="text-2xl font-bold tracking-tight">
                LuxeEstate
              </span>
            </Link>
            <p className="text-zinc-400 leading-relaxed">
              Experience the future of real estate with our premium marketplace. 
              Find your dream home with ease and sophistication.
            </p>
            <div className="flex gap-4">
              <a href="#" className="p-2 bg-zinc-800 rounded-full hover:bg-indigo-600 transition-colors"><Facebook size={18} /></a>
              <a href="#" className="p-2 bg-zinc-800 rounded-full hover:bg-indigo-600 transition-colors"><Twitter size={18} /></a>
              <a href="#" className="p-2 bg-zinc-800 rounded-full hover:bg-indigo-600 transition-colors"><Instagram size={18} /></a>
              <a href="#" className="p-2 bg-zinc-800 rounded-full hover:bg-indigo-600 transition-colors"><Linkedin size={18} /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-6">Quick Links</h4>
            <ul className="space-y-4 text-zinc-400">
              <li><Link to="/properties" className="hover:text-white transition-colors">Find a Property</Link></li>
              <li><Link to="/agents" className="hover:text-white transition-colors">Find an Agent</Link></li>
              <li><Link to="/about" className="hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/contact" className="hover:text-white transition-colors">Contact</Link></li>
              <li><Link to="/faq" className="hover:text-white transition-colors">FAQ</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-bold mb-6">Contact Us</h4>
            <ul className="space-y-4 text-zinc-400">
              <li className="flex items-start gap-3">
                <MapPin className="text-indigo-500 shrink-0" size={20} />
                <span>123 Luxury Way, Beverly Hills, CA 90210</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="text-indigo-500 shrink-0" size={20} />
                <span>+1 (555) Luxe-Home</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="text-indigo-500 shrink-0" size={20} />
                <span>info@luxeestate.com</span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-lg font-bold mb-6">Newsletter</h4>
            <p className="text-zinc-400 mb-6">Subscribe to receive the latest property updates and news.</p>
            <form className="relative">
              <input 
                type="email" 
                placeholder="Your email"
                className="w-full bg-zinc-900 border border-zinc-800 rounded-full px-5 py-3 pr-12 focus:outline-none focus:border-indigo-500 transition-colors"
              />
              <button className="absolute right-2 top-2 p-1.5 bg-indigo-600 rounded-full hover:bg-indigo-700 transition-colors">
                <Globe size={18} />
              </button>
            </form>
          </div>
        </div>

        <div className="pt-10 border-t border-zinc-900 flex flex-col md:flex-row justify-between items-center gap-6 text-zinc-500 text-sm">
          <p>© 2024 LuxeEstate. All rights reserved.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
