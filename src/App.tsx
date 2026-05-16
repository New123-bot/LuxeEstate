import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { MainLayout } from './layouts/MainLayout';
import { DashboardLayout } from './layouts/DashboardLayout';
import { Navbar } from './components/layout';
import Home from './pages/home/Home';
import Listing from './pages/listing/Listing';
import Details from './pages/details/Details';
import Login from './pages/auth/Login';
import Register from './pages/auth/Register';
import Overview from './pages/dashboard/user/Overview';
import AgentOverview from './pages/dashboard/agent/AgentOverview';
import AdminOverview from './pages/dashboard/admin/AdminOverview';
import AgentListings from './pages/dashboard/agent/AgentListings';
import AdminUsers from './pages/dashboard/admin/AdminUsers';
import AddProperty from './pages/dashboard/agent/AddProperty';
import Contact from './pages/Contact';
import About from './pages/About';
import Agents from './pages/Agents';

const Placeholder = ({ name }: { name: string }) => <div className="p-10 font-bold text-3xl">Dashboard Page: {name} Placeholder</div>;

export default function App() {
  return (
    <BrowserRouter>
      {/* Global Navigation - Fixed at top */}
      <Navbar />
      
      <Routes>
        {/* Main Public Pages */}
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="properties" element={<Listing />} />
          <Route path="property/:id" element={<Details />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="contact" element={<Contact />} />
          <Route path="about" element={<About />} />
          <Route path="agents" element={<Agents />} />
        </Route>

        {/* Dashboard Pages */}
        <Route path="/dashboard" element={<DashboardLayout />}>
           <Route index element={<Overview />} />
           <Route path="agent" element={<AgentOverview />} />
           <Route path="admin" element={<AdminOverview />} />
           
           <Route path="saved" element={<Placeholder name="Saved Properties" />} />
           <Route path="messages" element={<Placeholder name="Messages" />} />
           <Route path="history" element={<Placeholder name="View History" />} />
           <Route path="settings" element={<Placeholder name="Settings" />} />
           
           {/* Agent Routes */}
           <Route path="agent/listings" element={<AgentListings />} />
           <Route path="agent/add" element={<AddProperty />} />
           <Route path="agent/leads" element={<Placeholder name="Manage Leads" />} />
           <Route path="agent/analytics" element={<Placeholder name="Analytics" />} />
           
           {/* Admin Routes */}
           <Route path="admin/users" element={<AdminUsers />} />
           <Route path="admin/properties" element={<Placeholder name="Admin Properties" />} />
           <Route path="admin/reports" element={<Placeholder name="Admin Reports" />} />
           <Route path="admin/subs" element={<Placeholder name="Subscriptions" />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
