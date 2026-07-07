'use client';
import { useState } from 'react';

export default function GremiAdminPanel() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [passphrase, setPassphrase] = useState('');
  const [propertyId, setPropertyId] = useState('1'); // 1 = Vlora, 2 = Pogradec
  const [blockDate, setBlockDate] = useState('');
  const [targetDate, setTargetDate] = useState('');
  const [customPrice, setCustomPrice] = useState('');
  const [loading, setLoading] = useState(false);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (passphrase === 'GremiGroupAdmin2026!') { // Set your own private key here
      setIsAuthenticated(true);
    } else {
      alert('Invalid security credentials access denied.');
    }
  };

  const submitBlockDate = async () => {
    if (!blockDate) return alert('Please choose a date');
    setLoading(true);
    // Makes a secure call to your server API route
    await fetch('/api/admin/block-date', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ propertyId: parseInt(propertyId), date: blockDate })
    });
    setLoading(false);
    alert(`Successfully locked out date: ${blockDate}`);
  };

  const submitPriceOverride = async () => {
    if (!targetDate || !customPrice) return alert('Fill in date and price fields.');
    setLoading(true);
    await fetch('/api/admin/set-price', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ propertyId: parseInt(propertyId), date: targetDate, price: parseFloat(customPrice) })
    });
    setLoading(false);
    alert(`Price updated to €${customPrice} for date ${targetDate}`);
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-950 px-4">
        <form onSubmit={handleLogin} className="bg-slate-900 border border-slate-800 p-8 rounded-2xl w-full max-w-sm space-y-4">
          <h2 className="text-xl font-bold text-white text-center tracking-wider">GREMI PANEL</h2>
          <input 
            type="password" 
            placeholder="Enter Management Security Password" 
            value={passphrase} 
            onChange={(e) => setPassphrase(e.target.value)}
            className="w-full bg-slate-800 text-white px-4 py-3 rounded-lg text-sm border border-slate-700 focus:outline-none focus:border-amber-500"
          />
          <button type="submit" className="w-full bg-amber-600 hover:bg-amber-500 text-white font-medium py-3 rounded-lg text-sm">
            Unlock Admin Console
          </button>
        </form>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 p-6 md:p-12">
      <header className="max-w-4xl mx-auto flex justify-between items-center border-b border-slate-800 pb-6 mb-10">
        <div>
          <h1 className="text-2xl font-bold">Gremi Core Controls</h1>
          <p className="text-xs text-slate-500">Cloud Synchronizer Live</p>
        </div>
        <button onClick={() => setIsAuthenticated(false)} className="text-xs bg-slate-800 px-4 py-2 rounded-md hover:bg-slate-700">Logout</button>
      </header>

      <main className="max-w-4xl mx-auto space-y-8">
        {/* Universal Selector */}
        <div className="bg-slate-900 border border-slate-800 p-6 rounded-xl">
          <label className="block text-xs font-semibold uppercase text-slate-400 mb-2">1. Choose Target Location</label>
          <select value={propertyId} onChange={(e) => setPropertyId(e.target.value)} className="w-full bg-slate-800 border border-slate-700 text-white p-3 rounded-lg focus:outline-none">
            <option value="1">Vlorë Apartments</option>
            <option value="2">Pogradec Retreat</option>
          </select>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Calendar Blocker */}
          <div className="bg-slate-900 border border-slate-800 p-6 rounded-xl space-y-4">
            <h3 className="text-lg font-medium text-white">Exclusion Calendar Blocker</h3>
            <p className="text-xs text-slate-400">Instantly make a date unavailable for booking.</p>
            <input type="date" value={blockDate} onChange={(e) => setBlockDate(e.target.value)} className="w-full bg-slate-800 text-white border border-slate-700 rounded-lg p-2.5 text-sm" />
            <button disabled={loading} onClick={submitBlockDate} className="w-full bg-rose-600 hover:bg-rose-500 text-white font-medium py-2 rounded-lg text-sm transition-all">
              {loading ? 'Processing...' : 'Block Selection Date'}
            </button>
          </div>

          {/* Pricing Adjuster */}
          <div className="bg-slate-900 border border-slate-800 p-6 rounded-xl space-y-4">
            <h3 className="text-lg font-medium text-white">Dynamic Pricing Matrix Override</h3>
            <p className="text-xs text-slate-400">Inject custom night rates for holidays or high seasons.</p>
            <input type="date" value={targetDate} onChange={(e) => setTargetDate(e.target.value)} className="w-full bg-slate-800 text-white border border-slate-700 rounded-lg p-2.5 text-sm" />
            <input type="number" placeholder="Enter custom price in € EUR" value={customPrice} onChange={(e) => setCustomPrice(e.target.value)} className="w-full bg-slate-800 text-white border border-slate-700 rounded-lg p-2.5 text-sm" />
            <button disabled={loading} onClick={submitPriceOverride} className="w-full bg-sky-600 hover:bg-sky-500 text-white font-medium py-2 rounded-lg text-sm transition-all">
              {loading ? 'Processing...' : 'Update Custom Pricing'}
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}
