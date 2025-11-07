import React from 'react';
import { Workflow, Database, Lock, Map, Brain } from 'lucide-react';

const steps = [
  {
    icon: Workflow,
    title: 'Link devices',
    desc: 'Parent connects child device via a secure code and sets daily limits.'
  },
  {
    icon: Brain,
    title: 'Coach with puzzles',
    desc: 'When limits are hit, simple math/logic puzzles encourage mindful breaks.'
  },
  {
    icon: Map,
    title: 'SMS location',
    desc: 'Parent can text FIND <code> to receive GPS coordinates even offline.'
  },
  {
    icon: Database,
    title: 'Lightweight backend',
    desc: 'Usage and puzzle completions log to a backend dashboard (Firebase-ready).'
  },
  {
    icon: Lock,
    title: 'Safety first',
    desc: 'SOS sends SMS with coordinates to trusted contacts instantly.'
  }
];

export default function HowItWorks() {
  return (
    <section className="w-full bg-white py-14 md:py-20">
      <div className="max-w-6xl mx-auto px-6 md:px-8">
        <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-6">How it works</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {steps.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="rounded-2xl border border-slate-200 p-6 bg-gradient-to-b from-slate-50 to-white">
              <Icon className="w-6 h-6 text-sky-600" />
              <div className="mt-3 text-lg font-semibold text-slate-900">{title}</div>
              <p className="mt-1 text-slate-600 text-sm leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
