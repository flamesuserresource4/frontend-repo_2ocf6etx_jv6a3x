import React, { useMemo, useState } from 'react';
import { Play, Pause, Clock, Puzzle, MapPin, MessageSquare, AlertTriangle } from 'lucide-react';

function QuizCard({ onComplete }) {
  const [a] = useState(() => Math.floor(Math.random() * 9) + 1);
  const [b] = useState(() => Math.floor(Math.random() * 9) + 1);
  const [answer, setAnswer] = useState('');
  const correct = useMemo(() => a + b, [a, b]);

  return (
    <div className="rounded-xl border border-emerald-200 bg-white p-4">
      <div className="flex items-center gap-2 mb-2 text-emerald-700 font-semibold"><Puzzle className="w-4 h-4" /> Quick Puzzle</div>
      <p className="text-slate-700">What is {a} + {b}?</p>
      <div className="mt-3 flex gap-2">
        <input
          value={answer}
          onChange={(e) => setAnswer(e.target.value)}
          placeholder="Your answer"
          className="flex-1 rounded-lg border border-slate-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-400"
        />
        <button
          onClick={() => parseInt(answer, 10) === correct && onComplete()}
          className="rounded-lg bg-emerald-600 text-white px-4 py-2 font-semibold hover:bg-emerald-700"
        >
          Submit
        </button>
      </div>
    </div>
  );
}

export default function DemoFlow() {
  const [seconds, setSeconds] = useState(0);
  const [running, setRunning] = useState(false);
  const [puzzle, setPuzzle] = useState(false);
  const [locationResp, setLocationResp] = useState(null);
  const [sosTriggered, setSosTriggered] = useState(false);

  React.useEffect(() => {
    if (!running) return;
    const id = setInterval(() => setSeconds((s) => s + 1), 1000);
    return () => clearInterval(id);
  }, [running]);

  React.useEffect(() => {
    if (seconds >= 10 && !puzzle) {
      setPuzzle(true);
      setRunning(false);
    }
  }, [seconds, puzzle]);

  const simulateFindSMS = () => {
    setTimeout(() => {
      setLocationResp({ lat: 37.4219999, lng: -122.0840575 });
    }, 800);
  };

  return (
    <section id="demo" className="w-full bg-slate-50 py-14 md:py-20">
      <div className="max-w-6xl mx-auto px-6 md:px-8">
        <div className="flex items-center gap-2 mb-6">
          <Clock className="w-5 h-5 text-sky-600" />
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900">Interactive Demo Flow</h2>
        </div>
        <p className="text-slate-600 max-w-3xl mb-8">Press Start to simulate child screen-time. At 10 seconds, a puzzle appears. Use FIND to request a mock location. Try SOS to see the alert state.</p>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="md:col-span-1 rounded-2xl border border-slate-200 bg-white p-6">
            <div className="text-slate-900 font-semibold mb-2">Child Screen-time</div>
            <div className="text-5xl font-extrabold text-slate-900 tabular-nums">{seconds}s</div>
            <div className="mt-4 flex gap-3">
              <button
                onClick={() => setRunning((r) => !r)}
                className={`inline-flex items-center gap-2 rounded-lg px-4 py-2 font-semibold text-white ${running ? 'bg-slate-600 hover:bg-slate-700' : 'bg-sky-600 hover:bg-sky-700'}`}
              >
                {running ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />} {running ? 'Pause' : 'Start'}
              </button>
              <button onClick={() => { setSeconds(0); setPuzzle(false); setRunning(false); setLocationResp(null); setSosTriggered(false); }} className="rounded-lg px-4 py-2 font-semibold bg-slate-100 text-slate-800 hover:bg-slate-200">Reset</button>
            </div>

            {puzzle && (
              <div className="mt-6">
                <QuizCard onComplete={() => { setPuzzle(false); setRunning(true); }} />
                <p className="mt-2 text-emerald-700 text-sm">Great job! Completing a quick puzzle encourages mindful breaks.</p>
              </div>
            )}
          </div>

          <div className="md:col-span-1 rounded-2xl border border-slate-200 bg-white p-6">
            <div className="text-slate-900 font-semibold mb-2">Parent Controls</div>
            <div className="space-y-3">
              <button onClick={simulateFindSMS} className="w-full inline-flex items-center justify-center gap-2 rounded-lg bg-sky-600 text-white px-4 py-2 font-semibold hover:bg-sky-700"><MessageSquare className="w-4 h-4" /> Send: FIND {'<code>'}</button>
              <button onClick={() => setSosTriggered(true)} className="w-full inline-flex items-center justify-center gap-2 rounded-lg bg-rose-600 text-white px-4 py-2 font-semibold hover:bg-rose-700"><AlertTriangle className="w-4 h-4" /> Trigger SOS</button>
            </div>
            {locationResp && (
              <div className="mt-4 rounded-lg border border-slate-200 p-3">
                <div className="flex items-center gap-2 text-slate-700"><MapPin className="w-4 h-4 text-sky-600" /> Location received</div>
                <div className="text-sm text-slate-600">Lat: {locationResp.lat}, Lng: {locationResp.lng}</div>
                <div className="mt-2 h-40 w-full rounded-lg bg-[url('https://maps.googleapis.com/maps/api/staticmap?center=37.4219999,-122.0840575&zoom=14&size=600x300&markers=color:blue%7C37.4219999,-122.0840575')] bg-cover bg-center" aria-label="Map preview" />
              </div>
            )}
          </div>

          <div className={`md:col-span-1 rounded-2xl border p-6 ${sosTriggered ? 'border-rose-300 bg-rose-50' : 'border-slate-200 bg-white'}` }>
            <div className="text-slate-900 font-semibold mb-2">Safety Center</div>
            <div className="space-y-3">
              <button onClick={() => setSosTriggered(true)} className="w-full rounded-lg bg-rose-600 text-white px-4 py-2 font-semibold hover:bg-rose-700 inline-flex items-center justify-center gap-2"><AlertTriangle className="w-4 h-4" /> SOS</button>
              <p className="text-slate-600 text-sm">Sends an SMS with GPS coordinates to the parent and alerts the dashboard.</p>
            </div>
            {sosTriggered && (
              <div className="mt-4 rounded-lg border border-rose-200 bg-white p-3 text-rose-700">
                SOS dispatched: +1 (555) 123-4567. Location attached.
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
