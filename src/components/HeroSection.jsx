import React from 'react';
import Spline from '@splinetool/react-spline';
import { Shield, Smartphone } from 'lucide-react';

export default function HeroSection() {
  return (
    <section className="relative w-full min-h-[70vh] md:min-h-[80vh] bg-white overflow-hidden" aria-label="Hero">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/AeAqaKLmGsS-FPBN/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Soft gradient overlay for readability */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/70 via-white/60 to-white/90" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-8 pt-16 md:pt-24 pb-12">
        <div className="inline-flex items-center gap-2 rounded-full bg-sky-100 text-sky-700 px-4 py-2 text-sm font-medium shadow-sm">
          <Shield className="w-4 h-4" />
          Smart Family Safety & Digital Wellbeing
        </div>

        <h1 className="mt-6 text-4xl md:text-6xl font-extrabold leading-tight tracking-tight text-slate-900">
          One place to guide, protect, and motivate your family online
        </h1>
        <p className="mt-4 md:mt-6 text-slate-600 text-lg md:text-xl max-w-3xl">
          Parental controls, screen-time coaching, SMS-based location, and an SOS safety flow — packaged into a friendly MVP.
        </p>

        <div className="mt-8 flex flex-wrap gap-4">
          <a
            href="#demo"
            className="inline-flex items-center gap-2 rounded-full bg-sky-600 text-white px-6 py-3 font-semibold hover:bg-sky-700 transition-colors shadow-lg"
          >
            Try the Demo Flow
          </a>
          <a
            href="#roles"
            className="inline-flex items-center gap-2 rounded-full bg-emerald-100 text-emerald-800 px-6 py-3 font-semibold hover:bg-emerald-200 transition-colors"
          >
            <Smartphone className="w-5 h-5" />
            Parent & Child Views
          </a>
        </div>
      </div>
    </section>
  );
}
