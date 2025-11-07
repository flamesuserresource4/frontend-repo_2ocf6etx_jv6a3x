import React from 'react';
import HeroSection from './components/HeroSection';
import RolesSwitcher from './components/RolesSwitcher';
import DemoFlow from './components/DemoFlow';
import HowItWorks from './components/HowItWorks';

function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <HeroSection />
      <RolesSwitcher />
      <DemoFlow />
      <HowItWorks />

      <footer className="w-full border-t border-slate-200 bg-white">
        <div className="max-w-6xl mx-auto px-6 md:px-8 py-8 text-sm text-slate-500 flex flex-col md:flex-row items-center justify-between gap-4">
          <p>Smart Family Safety & Digital Wellbeing System — MVP Prototype</p>
          <div className="flex items-center gap-3">
            <a href="#demo" className="text-sky-700 font-semibold hover:underline">Demo Flow</a>
            <span className="text-slate-300">•</span>
            <a href="#roles" className="text-sky-700 font-semibold hover:underline">Roles</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
