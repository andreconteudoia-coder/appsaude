
import React from 'react';
import { Icons } from '../constants';

interface Props {
  user: any;
}

const ProfileScreen: React.FC<Props> = () => {
  return (
    <div className="p-6 space-y-8 animate-fade-in">
      <div className="flex items-center gap-4">
        <div className="w-16 h-16 bg-sky-100 rounded-full border-4 border-white shadow-sm flex items-center justify-center text-sky-500">
          <Icons.User />
        </div>
        <div>
          <h2 className="text-xl font-bold text-slate-800">João da Silva</h2>
          <p className="text-slate-500 text-sm">45 anos • Tipo O+</p>
        </div>
      </div>

      <section className="space-y-4">
        <h3 className="font-bold text-slate-800 flex justify-between items-center px-1">
          Histórico Clínico
          <button className="text-sky-500 text-xs font-bold">+ Adicionar</button>
        </h3>
        <div className="bg-white rounded-2xl border border-slate-100 divide-y divide-slate-50 shadow-sm">
          <ProfileItem title="Condições Crônicas" value="Hipertensão Arterial" />
          <ProfileItem title="Medicamentos de Uso Contínuo" value="Losartana (50mg/dia)" />
          <ProfileItem title="Cirurgias Anteriores" value="Apêndice (2015)" />
          <ProfileItem title="Alergias" value="Dipirona, Poeira" />
        </div>
      </section>

      <section className="space-y-4">
        <h3 className="font-bold text-slate-800 px-1">Contatos de Emergência</h3>
        <div className="bg-white rounded-2xl border border-slate-100 p-4 flex justify-between items-center shadow-sm">
          <div>
            <span className="block font-medium text-slate-700">Maria da Silva (Esposa)</span>
            <span className="text-xs text-slate-400">(11) 99876-5432</span>
          </div>
          <button className="p-2 bg-emerald-50 text-emerald-500 rounded-full">
            <Icons.Plus />
          </button>
        </div>
      </section>

      <button className="w-full bg-slate-100 text-slate-600 py-4 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-slate-200 transition-colors">
        <Icons.FileText /> Exportar Ficha Médica (PDF)
      </button>
    </div>
  );
};

const ProfileItem: React.FC<{ title: string; value: string }> = ({ title, value }) => (
  <div className="p-4">
    <span className="block text-xs text-slate-400 font-medium uppercase tracking-wider mb-1">{title}</span>
    <span className="block text-sm text-slate-700 font-semibold">{value}</span>
  </div>
);

export default ProfileScreen;
