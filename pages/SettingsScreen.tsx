
import React from 'react';
import { Icons } from '../constants';

interface Props {
  onLogout: () => void;
}

const SettingsScreen: React.FC<Props> = ({ onLogout }) => {
  return (
    <div className="p-6 space-y-8 animate-fade-in">
      <h2 className="text-2xl font-bold text-slate-800">Configurações</h2>

      <section className="space-y-2">
        <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest px-2">Conta</h3>
        <div className="bg-white rounded-2xl border border-slate-100 overflow-hidden shadow-sm">
          <SettingsItem icon={<Icons.User />} label="Dados Pessoais" />
          <SettingsItem icon={<Icons.Info />} label="Notificações" />
          <SettingsItem icon={<Icons.History />} label="Segurança" />
        </div>
      </section>

      <section className="space-y-2">
        <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest px-2">Suporte</h3>
        <div className="bg-white rounded-2xl border border-slate-100 overflow-hidden shadow-sm">
          <SettingsItem icon={<Icons.Info />} label="Sobre o SaúdePronta" />
          <SettingsItem icon={<Icons.FileText />} label="Termos e Privacidade" />
          <SettingsItem icon={<Icons.Plus className="rotate-45" />} label="Central de Ajuda" />
        </div>
      </section>

      <button 
        onClick={onLogout}
        className="w-full text-rose-500 font-bold p-4 bg-rose-50 rounded-2xl hover:bg-rose-100 transition-colors"
      >
        Sair da conta
      </button>

      <div className="text-center text-[10px] text-slate-400">
        Versão 1.2.0 • Desenvolvido com carinho para sua saúde.
      </div>
    </div>
  );
};

const SettingsItem: React.FC<{ icon: React.ReactNode; label: string }> = ({ icon, label }) => (
  <button className="w-full p-4 flex items-center justify-between hover:bg-slate-50 transition-colors border-b last:border-0 border-slate-50">
    <div className="flex items-center gap-3">
      <div className="text-slate-400 scale-90">{icon}</div>
      <span className="text-sm font-medium text-slate-700">{label}</span>
    </div>
    <div className="text-slate-300">
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg>
    </div>
  </button>
);

export default SettingsScreen;
