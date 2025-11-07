import React from 'react';
import { User, ShieldCheck, Baby, Clock, Puzzle, MessageSquare, MapPin, Phone } from 'lucide-react';

export default function RolesSwitcher() {
  return (
    <section id="roles" className="w-full bg-white py-14 md:py-20">
      <div className="max-w-6xl mx-auto px-6 md:px-8">
        <div className="flex items-center gap-2 mb-6">
          <User className="w-5 h-5 text-sky-600" />
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900">Choose a role</h2>
        </div>
        <p className="text-slate-600 max-w-3xl mb-8">Two simple, focused views: the Parent controls settings and sees reports. The Child experiences friendly screen-time coaching with puzzles and an SOS option.</p>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="rounded-2xl border border-slate-200 p-6 bg-gradient-to-b from-sky-50 to-white">
            <div className="flex items-center gap-2 mb-2">
              <ShieldCheck className="w-5 h-5 text-sky-700" />
              <h3 className="text-xl font-semibold text-slate-900">Parent</h3>
            </div>
            <ul className="space-y-2 text-slate-700">
              <li className="flex items-start gap-2"><Clock className="w-4 h-4 mt-1 text-sky-600" /> Set daily screen-time limit</li>
              <li className="flex items-start gap-2"><MessageSquare className="w-4 h-4 mt-1 text-sky-600" /> Send SMS command: FIND {'<code>'}</li>
              <li className="flex items-start gap-2"><MapPin className="w-4 h-4 mt-1 text-sky-600" /> See location preview and usage reports</li>
              <li className="flex items-start gap-2"><Phone className="w-4 h-4 mt-1 text-sky-600" /> Receive SOS alerts</li>
            </ul>
          </div>

          <div className="rounded-2xl border border-slate-200 p-6 bg-gradient-to-b from-emerald-50 to-white">
            <div className="flex items-center gap-2 mb-2">
              <Baby className="w-5 h-5 text-emerald-700" />
              <h3 className="text-xl font-semibold text-slate-900">Child</h3>
            </div>
            <ul className="space-y-2 text-slate-700">
              <li className="flex items-start gap-2"><Clock className="w-4 h-4 mt-1 text-emerald-600" /> Tracks screen time in the background</li>
              <li className="flex items-start gap-2"><Puzzle className="w-4 h-4 mt-1 text-emerald-600" /> Puzzle pops up when limit is reached</li>
              <li className="flex items-start gap-2"><MapPin className="w-4 h-4 mt-1 text-emerald-600" /> Responds to FIND via SMS with GPS coordinates</li>
              <li className="flex items-start gap-2"><Phone className="w-4 h-4 mt-1 text-emerald-600" /> SOS button: sends SMS + location</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
