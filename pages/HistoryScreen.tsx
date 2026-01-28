
import React from 'react';
import { Icons } from '../constants';

const HistoryScreen: React.FC = () => {
  const historyItems = [
    { id: '1', date: '22 Out 2023', type: 'triage', label: 'Orientação: Dor Abdominal', risk: 'low' },
    { id: '2', date: '15 Out 2023', type: 'exam', label: 'Exame: Hemograma Completo', risk: 'normal' },
    { id: '3', date: '02 Set 2023', type: 'triage', label: 'Orientação: Febre e Tosse', risk: 'medium' },
  ];

  return (
    <div className="p-6 space-y-6 animate-fade-in">
      <div>
        <h2 className="text-2xl font-bold text-slate-800">Seu Histórico</h2>
        <p className="text-slate-500">Acompanhe suas consultas e orientações anteriores.</p>
      </div>

      <div className="space-y-4">
        {historyItems.map(item => (
          <div key={item.id} className="bg-white p-4 rounded-2xl border border-slate-100 shadow-sm flex items-center gap-4 active:bg-slate-50 transition-colors cursor-pointer">
            <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${
              item.type === 'triage' ? 'bg-sky-50 text-sky-500' : 'bg-emerald-50 text-emerald-500'
            }`}>
              {item.type === 'triage' ? <Icons.Activity /> : <Icons.FileText />}
            </div>
            <div className="flex-1">
              <span className="block text-[10px] text-slate-400 font-bold uppercase tracking-widest">{item.date}</span>
              <span className="block font-bold text-slate-800">{item.label}</span>
            </div>
            <div className="text-slate-300">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg>
            </div>
          </div>
        ))}
      </div>

      <div className="p-8 text-center text-slate-300">
        <div className="w-16 h-16 bg-slate-50 rounded-full flex items-center justify-center mx-auto mb-2">
          <Icons.History />
        </div>
        <p className="text-sm">Fim do seu histórico de 2023</p>
      </div>
    </div>
  );
};

export default HistoryScreen;
