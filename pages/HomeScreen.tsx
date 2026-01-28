
import React from 'react';
import { Icons, COLORS } from '../constants';

interface Props {
  user: any;
  onStartTriage: () => void;
  onGoToExams: () => void;
}

const HomeScreen: React.FC<Props> = ({ onStartTriage, onGoToExams }) => {
  return (
    <div className="p-6 space-y-8 animate-fade-in">
      {/* Welcome Section */}
      <section>
        <h2 className="text-2xl font-bold text-slate-800">Olá, João</h2>
        <p className="text-slate-500">Como você está se sentindo hoje?</p>
      </section>

      {/* Main Action Card */}
      <section 
        onClick={onStartTriage}
        className="bg-sky-500 rounded-3xl p-6 text-white shadow-xl shadow-sky-100 flex items-center justify-between cursor-pointer active:scale-[0.98] transition-all"
      >
        <div className="flex-1">
          <h3 className="text-xl font-bold mb-1">Nova Orientação</h3>
          <p className="text-sky-100 text-sm mb-4">Relate seus sintomas para receber orientação imediata.</p>
          <div className="bg-white/20 w-fit px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider">Iniciar agora</div>
        </div>
        <div className="w-20 h-20 bg-white/10 rounded-full flex items-center justify-center">
          <Icons.Activity />
        </div>
      </section>

      {/* Quick Stats/Links */}
      <section className="grid grid-cols-2 gap-4">
        <div onClick={onGoToExams} className="bg-white p-5 rounded-2xl border border-slate-100 shadow-sm flex flex-col gap-3 cursor-pointer">
          <div className="w-10 h-10 bg-emerald-50 text-emerald-500 rounded-lg flex items-center justify-center">
            <Icons.FileText />
          </div>
          <div>
            <span className="block font-bold text-slate-800">Exames</span>
            <span className="text-[10px] text-slate-400">Interpretar resultados</span>
          </div>
        </div>
        <div className="bg-white p-5 rounded-2xl border border-slate-100 shadow-sm flex flex-col gap-3">
          <div className="w-10 h-10 bg-amber-50 text-amber-500 rounded-lg flex items-center justify-center">
            <Icons.History />
          </div>
          <div>
            <span className="block font-bold text-slate-800">Histórico</span>
            <span className="text-[10px] text-slate-400">Suas consultas</span>
          </div>
        </div>
      </section>

      {/* Health Profile Preview */}
      <section className="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm">
        <div className="flex justify-between items-center mb-4">
          <h4 className="font-bold text-slate-800">Perfil de Saúde</h4>
          <button className="text-xs text-sky-500 font-bold">Ver tudo</button>
        </div>
        <div className="space-y-3">
          <HealthTag label="Hipertensão" color="bg-rose-50 text-rose-600" />
          <HealthTag label="Losartana 50mg" color="bg-sky-50 text-sky-600" />
          <HealthTag label="Alergia a Dipirona" color="bg-slate-50 text-slate-600" />
        </div>
      </section>

      {/* Educational Tip */}
      <section className="bg-emerald-50 p-4 rounded-2xl flex gap-4">
        <div className="text-emerald-500"><Icons.Info /></div>
        <div>
          <p className="text-xs font-medium text-emerald-800">Dica do dia: Mantenha-se hidratado. Beba pelo menos 2L de água hoje.</p>
        </div>
      </section>
    </div>
  );
};

const HealthTag: React.FC<{ label: string; color: string }> = ({ label, color }) => (
  <div className={`px-4 py-2 rounded-xl ${color} text-sm font-medium inline-block mr-2`}>
    {label}
  </div>
);

export default HomeScreen;
