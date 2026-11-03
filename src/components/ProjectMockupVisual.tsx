import React, { useState } from 'react';
import {
  MapPin,
  QrCode,
  Radio,
  Sparkles,
  Bot,
  User,
  CloudSun,
  Wind,
  Droplets,
  Heart,
  MessageCircle,
  Bookmark,
  Share2,
  PieChart,
  DollarSign,
  TrendingUp,
  CheckCircle2,
  Database,
  Smartphone,
  Send,
  Layers,
  ArrowRight,
} from 'lucide-react';

interface ProjectMockupVisualProps {
  type: 'pilonmagic' | 'ai-assistant' | 'weather' | 'mini-social' | 'expense' | 'attendance';
  interactive?: boolean;
}

export default function ProjectMockupVisual({ type, interactive = true }: ProjectMockupVisualProps) {
  // PilonMagic state
  const [activeLang, setActiveLang] = useState<'EN' | 'GU' | 'HI'>('EN');
  const [scanStatus, setScanStatus] = useState<'IDLE' | 'SCANNED'>('SCANNED');

  // AI Assistant state
  const [messages, setMessages] = useState([
    { sender: 'user', text: 'How does local SQLite caching improve mobile UX?' },
    { sender: 'bot', text: 'Local SQLite caching ensures zero-latency reads, works seamlessly without internet, and synchronizes asynchronously when connection resumes.' },
  ]);
  const [inputPrompt, setInputPrompt] = useState('');

  // Weather state
  const [selectedDay, setSelectedDay] = useState(0);

  // Social state
  const [likes, setLikes] = useState(48);
  const [isLiked, setIsLiked] = useState(false);

  // Expense state
  const [activeCategory, setActiveCategory] = useState<'All' | 'Tech' | 'Food' | 'Travel'>('All');

  // Attendance state
  const [roster, setRoster] = useState([
    { id: 1, name: 'Aarav Patel', roll: 'BCA-01', status: 'Present' },
    { id: 2, name: 'Diya Sharma', roll: 'BCA-02', status: 'Present' },
    { id: 3, name: 'Rohan Mehta', roll: 'BCA-03', status: 'Present' },
  ]);

  const handleSendPrompt = (textToSend?: string) => {
    const text = textToSend || inputPrompt;
    if (!text.trim()) return;
    setMessages((prev) => [
      ...prev,
      { sender: 'user', text },
      { sender: 'bot', text: `Analyzing "${text}" using Gemini integration with instant local SQLite cache sync.` },
    ]);
    setInputPrompt('');
  };

  const toggleAttendanceStatus = (id: number) => {
    setRoster((prev) =>
      prev.map((student) => {
        if (student.id !== id) return student;
        const nextStatus =
          student.status === 'Present'
            ? 'Late'
            : student.status === 'Late'
            ? 'Absent'
            : 'Present';
        return { ...student, status: nextStatus };
      })
    );
  };

  /* ---------------- 1. PILONMAGIC ---------------- */
  if (type === 'pilonmagic') {
    return (
      <div className="relative flex h-full min-h-[290px] flex-col justify-between overflow-hidden rounded-xl border border-slate-800 bg-[#0c0e14] p-4 text-xs font-mono text-slate-300">
        {/* Top telemetry bar */}
        <div className="flex items-center justify-between border-b border-slate-800/80 pb-2.5">
          <div className="flex items-center gap-2">
            <Radio className="h-3.5 w-3.5 text-[#C6FF5E]" />
            <span className="font-semibold text-slate-200">GPS RADAR LIVE</span>
          </div>
          <div className="flex items-center gap-1 rounded bg-slate-900 px-1.5 py-0.5 text-[10px] text-slate-400">
            <button
              onClick={() => setActiveLang('EN')}
              className={`px-1 rounded ${activeLang === 'EN' ? 'bg-[#C6FF5E]/20 text-[#C6FF5E]' : ''}`}
            >
              EN
            </button>
            <span>/</span>
            <button
              onClick={() => setActiveLang('GU')}
              className={`px-1 rounded ${activeLang === 'GU' ? 'bg-[#C6FF5E]/20 text-[#C6FF5E]' : ''}`}
            >
              GU
            </button>
            <span>/</span>
            <button
              onClick={() => setActiveLang('HI')}
              className={`px-1 rounded ${activeLang === 'HI' ? 'bg-[#C6FF5E]/20 text-[#C6FF5E]' : ''}`}
            >
              HI
            </button>
          </div>
        </div>

        {/* Radar & QR Scanner representation */}
        <div className="relative my-3 flex flex-1 items-center justify-center rounded-lg border border-dashed border-slate-800 bg-slate-950/60 p-3">
          {/* Subtle radar circle grid */}
          <div className="absolute h-36 w-36 rounded-full border border-[#C6FF5E]/20" />
          <div className="absolute h-24 w-24 rounded-full border border-[#C6FF5E]/15" />
          <div className="absolute h-12 w-12 rounded-full border border-[#C6FF5E]/25" />

          {/* Scanner view box */}
          <div className="relative z-10 flex h-28 w-44 flex-col items-center justify-center rounded-md border border-[#C6FF5E]/60 bg-black/70 p-2 shadow-inner">
            <div className="absolute -top-1 -left-1 h-3 w-3 border-t-2 border-l-2 border-[#C6FF5E]" />
            <div className="absolute -top-1 -right-1 h-3 w-3 border-t-2 border-r-2 border-[#C6FF5E]" />
            <div className="absolute -bottom-1 -left-1 h-3 w-3 border-b-2 border-l-2 border-[#C6FF5E]" />
            <div className="absolute -bottom-1 -right-1 h-3 w-3 border-b-2 border-r-2 border-[#C6FF5E]" />

            <QrCode className="h-7 w-7 text-[#C6FF5E] opacity-90" />
            <span className="mt-1.5 text-[10px] tracking-wider text-slate-300">
              {scanStatus === 'SCANNED' ? 'QR #PLN-8842 MATCH' : 'SCANNING ASSET...'}
            </span>
            <span className="text-[9px] text-[#C6FF5E]">OWNERSHIP VERIFIED</span>
          </div>
        </div>

        {/* Bottom Asset info strip */}
        <div className="grid grid-cols-2 gap-2 border-t border-slate-800/80 pt-2 text-[10px]">
          <div className="flex items-center gap-1.5 text-slate-400">
            <MapPin className="h-3 w-3 text-[#C6FF5E]" />
            <span>21.5222° N, 70.4579° E</span>
          </div>
          <div className="flex items-center justify-end gap-1.5 text-slate-300">
            <CheckCircle2 className="h-3 w-3 text-emerald-400" />
            <span>API Synchronized</span>
          </div>
        </div>
      </div>
    );
  }

  /* ---------------- 2. AI PERSONAL ASSISTANT ---------------- */
  if (type === 'ai-assistant') {
    return (
      <div className="flex h-full min-h-[290px] flex-col justify-between overflow-hidden rounded-xl border border-slate-800 bg-[#090b10] p-4 text-xs">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-slate-800 pb-2">
          <div className="flex items-center gap-2">
            <div className="flex h-6 w-6 items-center justify-center rounded-full bg-[#9B8CFF]/20 text-[#9B8CFF]">
              <Bot className="h-3.5 w-3.5" />
            </div>
            <div>
              <p className="font-semibold text-slate-200">Gemini Assistant</p>
              <p className="text-[10px] text-slate-400">SQLite Offline Cache</p>
            </div>
          </div>
          <span className="flex items-center gap-1 text-[10px] text-[#9B8CFF]">
            <Sparkles className="h-3 w-3" />
            <span>Active</span>
          </span>
        </div>

        {/* Chat message stream */}
        <div className="my-2.5 flex flex-1 flex-col gap-2 overflow-y-auto pr-1">
          {messages.slice(-2).map((msg, i) => (
            <div
              key={i}
              className={`flex items-start gap-2 ${
                msg.sender === 'user' ? 'justify-end' : 'justify-start'
              }`}
            >
              {msg.sender === 'bot' && (
                <div className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#9B8CFF]/20 text-[#9B8CFF]">
                  <Bot className="h-3 w-3" />
                </div>
              )}
              <div
                className={`max-w-[85%] rounded-lg px-2.5 py-1.5 text-[11px] leading-relaxed ${
                  msg.sender === 'user'
                    ? 'bg-slate-800 text-slate-200'
                    : 'border border-slate-800 bg-slate-900/90 text-slate-300'
                }`}
              >
                {msg.text}
              </div>
            </div>
          ))}
        </div>

        {/* Interactive suggestions */}
        <div className="mb-2 flex flex-wrap gap-1">
          <button
            type="button"
            onClick={() => handleSendPrompt('What is Flutter state management?')}
            className="rounded bg-slate-800/80 px-2 py-0.5 text-[10px] text-slate-300 hover:bg-slate-700 hover:text-white"
          >
            State Management?
          </button>
          <button
            type="button"
            onClick={() => handleSendPrompt('How does SQLite schema sync?')}
            className="rounded bg-slate-800/80 px-2 py-0.5 text-[10px] text-slate-300 hover:bg-slate-700 hover:text-white"
          >
            SQLite Sync?
          </button>
        </div>

        {/* Input box */}
        <div className="flex items-center gap-2 rounded-lg border border-slate-800 bg-slate-950 px-2.5 py-1.5">
          <input
            type="text"
            value={inputPrompt}
            onChange={(e) => setInputPrompt(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleSendPrompt()}
            placeholder="Ask AI assistant..."
            className="w-full bg-transparent text-[11px] text-slate-200 placeholder-slate-500 focus:outline-none"
          />
          <button
            type="button"
            onClick={() => handleSendPrompt()}
            aria-label="Send prompt"
            className="text-[#9B8CFF] hover:text-white"
          >
            <Send className="h-3.5 w-3.5" />
          </button>
        </div>
      </div>
    );
  }

  /* ---------------- 3. WEATHER APPLICATION ---------------- */
  if (type === 'weather') {
    const days = [
      { name: 'Today', temp: '29°C', condition: 'Sunny' },
      { name: 'Tue', temp: '27°C', condition: 'Breeze' },
      { name: 'Wed', temp: '28°C', condition: 'Clear' },
      { name: 'Thu', temp: '26°C', condition: 'Clouds' },
    ];

    return (
      <div className="flex h-full min-h-[290px] flex-col justify-between overflow-hidden rounded-xl border border-slate-800 bg-[#080d14] p-4 text-xs">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-slate-800/80 pb-2">
          <div className="flex items-center gap-1.5 text-slate-300">
            <MapPin className="h-3.5 w-3.5 text-sky-400" />
            <span className="font-semibold">Gujarat, IN</span>
          </div>
          <span className="text-[10px] text-sky-400 font-mono">Open-Meteo API</span>
        </div>

        {/* Main temperature visual */}
        <div className="my-3 flex items-center justify-between px-2">
          <div>
            <div className="flex items-baseline gap-1">
              <span className="text-4xl font-extrabold text-white tracking-tight">29°</span>
              <span className="text-xs text-sky-400 font-semibold">C</span>
            </div>
            <p className="mt-1 text-slate-400 text-xs">Mostly Clear Skies</p>
          </div>
          <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-sky-500/10 text-sky-400 border border-sky-500/20">
            <CloudSun className="h-8 w-8" />
          </div>
        </div>

        {/* Meteorological metrics strip */}
        <div className="grid grid-cols-3 gap-2 rounded-lg bg-slate-900/60 p-2 text-center text-[10px]">
          <div>
            <p className="text-slate-500">Humidity</p>
            <p className="font-semibold text-slate-200 mt-0.5">58%</p>
          </div>
          <div>
            <p className="text-slate-500">Wind</p>
            <p className="font-semibold text-slate-200 mt-0.5">14 km/h</p>
          </div>
          <div>
            <p className="text-slate-500">UV Index</p>
            <p className="font-semibold text-sky-400 mt-0.5">3 (Mod)</p>
          </div>
        </div>

        {/* Forecast days */}
        <div className="grid grid-cols-4 gap-1 pt-2 border-t border-slate-800/80">
          {days.map((d, index) => (
            <button
              key={d.name}
              onClick={() => setSelectedDay(index)}
              className={`flex flex-col items-center rounded py-1 transition-colors ${
                selectedDay === index
                  ? 'bg-sky-500/20 text-sky-300 border border-sky-500/30'
                  : 'text-slate-400 hover:bg-slate-900'
              }`}
            >
              <span className="text-[9px]">{d.name}</span>
              <span className="text-[11px] font-bold text-slate-200 mt-0.5">{d.temp}</span>
            </button>
          ))}
        </div>
      </div>
    );
  }

  /* ---------------- 4. MINI SOCIAL MEDIA APPLICATION ---------------- */
  if (type === 'mini-social') {
    return (
      <div className="flex h-full min-h-[290px] flex-col justify-between overflow-hidden rounded-xl border border-slate-800 bg-[#0d0910] p-4 text-xs">
        {/* Post author */}
        <div className="flex items-center justify-between border-b border-slate-800 pb-2">
          <div className="flex items-center gap-2">
            <div className="flex h-7 w-7 items-center justify-center rounded-full bg-pink-500/20 font-bold text-pink-400">
              G
            </div>
            <div>
              <p className="font-semibold text-slate-200 text-xs">Gautam Vaja</p>
              <p className="text-[10px] text-slate-400">React Native · Firebase</p>
            </div>
          </div>
          <span className="text-[10px] text-slate-500">2h ago</span>
        </div>

        {/* Media card presentation */}
        <div className="my-2.5 flex flex-1 flex-col justify-between rounded-lg border border-pink-500/20 bg-gradient-to-br from-pink-950/20 via-slate-950 to-slate-900 p-3">
          <p className="text-slate-300 text-[11px] leading-relaxed">
            Building cross-platform mobile apps with React Native, Cloud Firestore, and real-time social feeds! 🚀
          </p>
          <div className="mt-2 flex items-center justify-between rounded bg-slate-900/80 px-2 py-1 text-[10px] text-slate-400 font-mono">
            <span>Cloud Firestore Sync</span>
            <span className="text-pink-400">Storage Ready</span>
          </div>
        </div>

        {/* Interaction bar */}
        <div className="flex items-center justify-between border-t border-slate-800 pt-2 text-slate-400">
          <div className="flex items-center gap-4">
            <button
              onClick={() => {
                setIsLiked(!isLiked);
                setLikes((prev) => (isLiked ? prev - 1 : prev + 1));
              }}
              className="flex items-center gap-1.5 transition-colors hover:text-pink-400"
            >
              <Heart
                className={`h-4 w-4 ${isLiked ? 'fill-pink-500 text-pink-500' : ''}`}
              />
              <span className="text-xs font-mono">{likes}</span>
            </button>
            <div className="flex items-center gap-1.5 hover:text-slate-200">
              <MessageCircle className="h-4 w-4" />
              <span className="text-xs font-mono">12</span>
            </div>
          </div>
          <button className="hover:text-slate-200">
            <Bookmark className="h-4 w-4" />
          </button>
        </div>
      </div>
    );
  }

  /* ---------------- 5. EXPENSE TRACKER ---------------- */
  if (type === 'expense') {
    const categories = [
      { name: 'Food & Dining', percent: 35, color: '#C6FF5E', amount: '$315' },
      { name: 'Tech & Gadgets', percent: 30, color: '#9B8CFF', amount: '$270' },
      { name: 'Transit & Fuel', percent: 20, color: '#38BDF8', amount: '$180' },
      { name: 'Bills & Sub', percent: 15, color: '#F472B6', amount: '$135' },
    ];

    return (
      <div className="flex h-full min-h-[290px] flex-col justify-between overflow-hidden rounded-xl border border-slate-800 bg-[#090d0b] p-4 text-xs">
        {/* Top metrics */}
        <div className="flex items-center justify-between border-b border-slate-800 pb-2">
          <div>
            <p className="text-[10px] text-slate-400 uppercase tracking-wider">Monthly Outflow</p>
            <p className="text-xl font-bold text-white">$900.00</p>
          </div>
          <div className="text-right">
            <p className="text-[10px] text-slate-400 uppercase tracking-wider">Remaining</p>
            <p className="text-sm font-semibold text-[#C6FF5E] font-mono">$1,100.00</p>
          </div>
        </div>

        {/* Categorized Visual Bar & Breakdown */}
        <div className="my-2.5 flex-1 flex flex-col justify-center">
          {/* Multi-segment progress bar */}
          <div className="flex h-3 w-full overflow-hidden rounded-full bg-slate-900 border border-slate-800">
            <div style={{ width: '35%' }} className="bg-[#C6FF5E]" />
            <div style={{ width: '30%' }} className="bg-[#9B8CFF]" />
            <div style={{ width: '20%' }} className="bg-sky-400" />
            <div style={{ width: '15%' }} className="bg-pink-400" />
          </div>

          {/* Breakdown cards */}
          <div className="mt-3 grid grid-cols-2 gap-2 text-[10px]">
            {categories.map((cat) => (
              <div
                key={cat.name}
                className="flex items-center justify-between rounded bg-slate-900/60 p-1.5 border border-slate-800/80"
              >
                <div className="flex items-center gap-1.5 truncate">
                  <span
                    className="h-2 w-2 rounded-full shrink-0"
                    style={{ backgroundColor: cat.color }}
                  />
                  <span className="truncate text-slate-300">{cat.name}</span>
                </div>
                <span className="font-mono text-slate-200">{cat.amount}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom indicator */}
        <div className="flex items-center justify-between border-t border-slate-800 pt-2 text-[10px] text-slate-400">
          <span>Transactions: 38 logged</span>
          <span className="text-[#C6FF5E] font-mono">Flutter Local DB</span>
        </div>
      </div>
    );
  }

  /* ---------------- 6. SMART ATTENDANCE SYSTEM ---------------- */
  if (type === 'attendance') {
    return (
      <div className="flex h-full min-h-[290px] flex-col justify-between overflow-hidden rounded-xl border border-slate-800 bg-[#0d0c08] p-4 text-xs font-sans">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-slate-800 pb-2">
          <div className="flex items-center gap-2">
            <Database className="h-3.5 w-3.5 text-amber-400" />
            <span className="font-semibold text-slate-200">SQLite Offline Sync</span>
          </div>
          <span className="rounded bg-amber-400/10 px-1.5 py-0.5 text-[9px] font-mono text-amber-400 border border-amber-400/20">
            Offline-First
          </span>
        </div>

        {/* Student Roster status cards */}
        <div className="my-2 flex-1 flex flex-col gap-1.5">
          {roster.map((student) => (
            <div
              key={student.id}
              onClick={() => toggleAttendanceStatus(student.id)}
              className="flex cursor-pointer items-center justify-between rounded-lg border border-slate-800 bg-slate-950/70 p-2 transition-colors hover:border-slate-700"
            >
              <div>
                <p className="font-medium text-slate-200 text-xs">{student.name}</p>
                <p className="text-[10px] font-mono text-slate-500">{student.roll}</p>
              </div>
              <span
                className={`rounded px-2 py-0.5 text-[10px] font-semibold transition-colors ${
                  student.status === 'Present'
                    ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30'
                    : student.status === 'Late'
                    ? 'bg-amber-500/20 text-amber-400 border border-amber-500/30'
                    : 'bg-rose-500/20 text-rose-400 border border-rose-500/30'
                }`}
              >
                {student.status} (Tap)
              </span>
            </div>
          ))}
        </div>

        {/* Footer info */}
        <div className="flex items-center justify-between border-t border-slate-800 pt-2 text-[10px] text-slate-400">
          <span>Tap row to toggle state</span>
          <span className="text-amber-400 font-mono">100% Offline Ready</span>
        </div>
      </div>
    );
  }

  return null;
}
