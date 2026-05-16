import React, { useState } from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import { 
  LayoutDashboard, Heart, MessageSquare, History, 
  Settings, Bell, LogOut, Search, Menu, X, 
  Home, Users, BarChart3, PlusCircle, CreditCard
} from 'lucide-react';
import { cn } from '../utils';

interface NavItem {
  id: string;
  name: string;
  icon: any;
  path: string;
  role: ('user' | 'agent' | 'admin')[];
}

const DASHBOARD_NAV: NavItem[] = [
  { id: 'overview', name: 'Overview', icon: LayoutDashboard, path: '/dashboard', role: ['user', 'agent', 'admin'] },
  { id: 'saved', name: 'Saved Properties', icon: Heart, path: '/dashboard/saved', role: ['user'] },
  { id: 'messages', name: 'Messages', icon: MessageSquare, path: '/dashboard/messages', role: ['user', 'agent', 'admin'] },
  { id: 'history', name: 'View History', icon: History, path: '/dashboard/history', role: ['user'] },
  
  // Agent specific
  { id: 'my-listings', name: 'My Listings', icon: Home, path: '/dashboard/agent/listings', role: ['agent'] },
  { id: 'add-listing', name: 'Add Property', icon: PlusCircle, path: '/dashboard/agent/add', role: ['agent'] },
  { id: 'leads', name: 'Manage Leads', icon: Users, path: '/dashboard/agent/leads', role: ['agent'] },
  { id: 'analytics', name: 'Analytics', icon: BarChart3, path: '/dashboard/agent/analytics', role: ['agent'] },

  // Admin specific
  { id: 'admin-users', name: 'Users', icon: Users, path: '/dashboard/admin/users', role: ['admin'] },
  { id: 'admin-props', name: 'Properties', icon: Home, path: '/dashboard/admin/properties', role: ['admin'] },
  { id: 'admin-reports', name: 'Reports', icon: BarChart3, path: '/dashboard/admin/reports', role: ['admin'] },
  { id: 'subscriptions', name: 'Subscriptions', icon: CreditCard, path: '/dashboard/admin/subs', role: ['admin'] },

  { id: 'settings', name: 'Settings', icon: Settings, path: '/dashboard/settings', role: ['user', 'agent', 'admin'] },
];

export function DashboardLayout() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const location = useLocation();
  const [userRole, setUserRole] = useState<'user' | 'agent' | 'admin'>('user');

  const navWithRoleUpdates = DASHBOARD_NAV.map(item => {
    if (item.id === 'overview') {
      const path = userRole === 'user' ? '/dashboard' : `/dashboard/${userRole}`;
      return { ...item, path };
    }
    return item;
  });

  const filteredNav = navWithRoleUpdates.filter(item => item.role.includes(userRole));

  const roleInfo = {
    user: { name: 'David Miller', label: 'Premium Member', img: 'https://i.pravatar.cc/150?u=user123' },
    agent: { name: 'Sarah Montgomery', label: 'Elite Agent', img: 'https://i.pravatar.cc/150?u=sarah' },
    admin: { name: 'Admin Console', label: 'Super Admin', img: 'https://i.pravatar.cc/150?u=admin' }
  };

  const currentUser = roleInfo[userRole];

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-zinc-950 flex transition-colors duration-300 pt-20">
      
      {/* Sidebar */}
      <aside className={cn(
        "fixed lg:static inset-y-0 left-0 top-20 z-40 bg-white dark:bg-zinc-900 border-r border-zinc-100 dark:border-zinc-800 transition-all duration-300 shadow-xl lg:shadow-none",
        isSidebarOpen ? "w-72" : "w-0 lg:w-20 overflow-hidden"
      )}>
        <div className="flex flex-col h-full bg-white dark:bg-zinc-900">
           {/* Logo - Hidden in dashboard because global navbar already shows it */}
           <div className="p-6 border-b border-zinc-100 dark:border-zinc-800 lg:hidden">
              <Link to="/" className="flex items-center gap-3 group">
                 <div className="w-10 h-10 bg-indigo-600 rounded-xl flex items-center justify-center text-white font-black text-xl shadow-lg ring-4 ring-indigo-50 dark:ring-indigo-900/20">L</div>
                 {isSidebarOpen && <span className="text-xl font-black dark:text-white tracking-tight">LuxeEstate</span>}
              </Link>
           </div>

           {/* Role Switcher (For Demo Purposes) */}
           {isSidebarOpen && (
              <div className="p-4 border-b border-zinc-100 dark:border-zinc-800">
                 <label className="text-[10px] font-black text-zinc-400 uppercase tracking-widest mb-2 block px-2">Current View Mode</label>
                 <select 
                   value={userRole}
                   onChange={(e) => setUserRole(e.target.value as any)}
                   className="w-full bg-zinc-50 dark:bg-zinc-800 border-zinc-200 dark:border-zinc-700 rounded-xl px-4 py-2 text-xs font-bold focus:ring-2 focus:ring-indigo-500/20 outline-none cursor-pointer"
                 >
                    <option value="user">User View</option>
                    <option value="agent">Agent View</option>
                    <option value="admin">Admin View</option>
                 </select>
              </div>
           )}

           {/* Nav Links */}
           <div className="flex-1 overflow-y-auto p-4 space-y-2 custom-scrollbar">
              {filteredNav.map((item) => {
                 const isActive = location.pathname === item.path;
                 return (
                    <Link
                      key={item.id}
                      to={item.path}
                      className={cn(
                        "flex items-center gap-4 px-4 py-3.5 rounded-2xl font-bold text-sm transition-all group",
                        isActive 
                           ? "bg-indigo-600 text-white shadow-lg shadow-indigo-600/20" 
                           : "text-zinc-500 dark:text-zinc-400 hover:bg-zinc-50 dark:hover:bg-zinc-800 hover:text-indigo-600"
                      )}
                    >
                       <item.icon size={20} className={cn(isActive ? "text-white" : "group-hover:scale-110 transition-transform")} />
                       {isSidebarOpen && <span>{item.name}</span>}
                    </Link>
                 );
              })}
           </div>

           {/* Logout/User Info */}
           <div className="p-4 border-t border-zinc-100 dark:border-zinc-800">
              {isSidebarOpen && (
                 <div className="mb-4 p-4 bg-zinc-50 dark:bg-zinc-800/50 rounded-2xl flex items-center gap-3">
                    <img src={currentUser.img} className="w-10 h-10 rounded-full border-2 border-white shadow-sm" referrerPolicy="no-referrer" />
                    <div className="flex-1 overflow-hidden">
                       <p className="text-sm font-black dark:text-white truncate">{currentUser.name}</p>
                       <p className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest">{currentUser.label}</p>
                    </div>
                 </div>
              )}
              <button className={cn(
                "w-full flex items-center gap-4 px-4 py-3.5 rounded-2xl font-bold text-sm text-red-500 hover:bg-red-50 dark:hover:bg-red-500/10 transition-all",
                !isSidebarOpen && "justify-center"
              )}>
                 <LogOut size={20} />
                 {isSidebarOpen && <span>Logout</span>}
              </button>
           </div>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col min-w-0 h-[calc(100vh-80px)] overflow-hidden">
         {/* Top Header */}
         <header className="h-20 bg-white/80 dark:bg-zinc-900/80 backdrop-blur-md border-b border-zinc-100 dark:border-zinc-800 px-6 flex items-center justify-between shrink-0">
            <div className="flex items-center gap-4">
               <button 
                 onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                 className="p-2 hover:bg-zinc-100 dark:hover:bg-zinc-800 rounded-xl transition-all"
               >
                  {isSidebarOpen ? <X size={20} className="lg:hidden" /> : <Menu size={20} />}
                  <Menu size={20} className="hidden lg:block" />
               </button>
               <h2 className="text-xl font-black dark:text-white capitalize truncate max-w-[200px]">
                  {location.pathname.split('/').pop() || 'Dashboard'}
               </h2>
            </div>

            <div className="flex items-center gap-4">
               <div className="hidden sm:flex relative ring-1 ring-zinc-200 dark:ring-zinc-800 rounded-xl p-1 px-3 items-center gap-2 bg-zinc-50 dark:bg-zinc-800 focus-within:ring-indigo-500 transition-all">
                  <Search size={16} className="text-zinc-400" />
                  <input type="text" placeholder="Global search..." className="bg-transparent border-none focus:ring-0 text-sm font-medium py-1.5 w-40" />
               </div>
               
               <button className="relative p-2.5 hover:bg-zinc-100 dark:hover:bg-zinc-800 rounded-xl transition-all">
                  <Bell size={20} className="text-zinc-600 dark:text-zinc-400" />
                  <span className="absolute top-2 right-2 w-2 h-2 bg-indigo-600 rounded-full border-2 border-white dark:border-zinc-900 ring-2 ring-indigo-600/20" />
               </button>
               
               <div className="h-8 w-px bg-zinc-100 dark:bg-zinc-800 mx-1" />
               
               <button className="flex items-center gap-2 p-1 pr-3 hover:bg-zinc-100 dark:hover:bg-zinc-800 rounded-xl transition-all">
                  <img src={currentUser.img} className="w-8 h-8 rounded-full border border-white shadow-sm" referrerPolicy="no-referrer" />
                  <span className="hidden md:block text-sm font-bold dark:text-white">{currentUser.name}</span>
               </button>
            </div>
         </header>

         {/* Dashboard Page */}
         <main className="flex-1 overflow-y-auto p-6 md:p-10 custom-scrollbar">
            <Outlet />
         </main>
      </div>
    </div>
  );
}
