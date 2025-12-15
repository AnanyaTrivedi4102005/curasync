import { useState, useEffect } from 'react';
import { LoginPage } from './components/LoginPage';
import { AdminDashboard } from './components/AdminDashboard';
import { DoctorDashboard } from './components/DoctorDashboard';
import { NurseDashboard } from './components/NurseDashboard';
import { PatientDashboard } from './components/PatientDashboard';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { User } from './types';
import { initializeStorage, getCurrentUser, setCurrentUser } from './lib/storage';
import { Toaster } from './components/ui/sonner';

export default function App() {
  const [currentUser, setUser] = useState<User | null>(null);

  useEffect(() => {
    // Initialize storage (no demo data)
    initializeStorage();

    // Check if user is already logged in
    const user = getCurrentUser();
    if (user) {
      setUser(user);
    }
  }, []);

  const handleLogin = (user: User) => {
    setCurrentUser(user);
    setUser(user);
  };

  const handleLogout = () => {
    setCurrentUser(null);
    setUser(null);
  };

  const renderDashboard = () => {
    if (!currentUser) return null;

    switch (currentUser.role) {
      case 'admin':
        return <AdminDashboard />;
      case 'doctor':
        return <DoctorDashboard currentUser={currentUser} />;
      case 'nurse':
        return <NurseDashboard currentUser={currentUser} />;
      case 'patient':
        return <PatientDashboard currentUser={currentUser} />;
      default:
        return <div>Invalid role</div>;
    }
  };

  // Test if app is rendering at all
  console.log('App is rendering, currentUser:', currentUser);

  if (!currentUser) {
    return (
      <div className="min-h-screen bg-blue-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-teal-600 mb-4">CuraSync EHR</h1>
          <p className="text-gray-600 mb-8">Electronic Health Record System</p>
          <LoginPage onLogin={handleLogin} />
          <Toaster />
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 flex flex-col">
      <Header currentUser={currentUser} onLogout={handleLogout} />
      <main className="container mx-auto px-4 py-8 flex-grow">
        {renderDashboard()}
      </main>
      <Footer />
      <Toaster />
    </div>
  );
}
