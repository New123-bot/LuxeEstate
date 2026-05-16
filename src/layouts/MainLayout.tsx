import React from 'react';
import { Outlet } from 'react-router-dom';
import { Navbar, Footer } from '../components/layout';

export function MainLayout() {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-zinc-950 transition-colors duration-300">
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
