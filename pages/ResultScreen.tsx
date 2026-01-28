
import React from 'react';
import { Icons } from '../constants';

interface Props {
  result: any;
  onDone: () => void;
}

const ResultScreen: React.FC<Props> = ({ result, onDone }) => {
  if (!result) return null;

  const colorMap: any = {
    low: { bg: 'bg-emerald-50', text: 'text-emerald-600', border: 'border-emerald-100', icon: <Icons.CheckCircle /> },
    medium: { bg: 'bg-sky-50', text: 'text-sky-600', border: 'border-sky-100', icon: <Icons.Info /> },
    high: { bg: 'bg-amber-50', text: 'text-amber-600', border: 'border-amber-100', icon: <Icons.AlertTriangle /> },
    emergency: { bg: 'bg-rose-50', text: 'text-rose-600', border: 'border-rose-100', icon: <Icons.AlertTriangle /> }
  };

  const style = colorMap[result.priority] || colorMap.medium;

  return (
    <div className="p-6 space-y-6 animate-fade-in text-center">
      <div className="pt-8">
        <div className={`w-20 h-20 ${style.bg} ${style.text} rounded-full flex items-center justify-center mx-auto mb-6`}>
          <div className="scale-[2]">{style.icon}</div>
        </div>
        <h2 className={`text-2xl font-bold ${style.text}`}>{result.title}</h2>
        <p className="text-slate-500 mt-2">{result.description}</p>
      </div>

      <div className={`p-6 rounded-3xl border ${style.border} ${style.bg} text-left`}>
        <h3 className="font-bold text-slate-800 mb-2">Recomendação:</h3>
        <p className="text-slate-700 leading-relaxed">{result.recommendation}</p>
      </div>

      <div className="bg-white border border-slate-100 p-6 rounded-3xl text-left space-y-4 shadow-sm">
        <h3 className="font-bold text-slate-800">Próximos Passos</h3>
        <ul className="space-y-3">
          <li className="flex gap-3 text-sm text-slate-600">
            <div className="w-5 h-5 bg-sky-100 text-sky-500 rounded-full flex items-center justify-center text-[10px] font-bold">1</div>
            Mantenha repouso nas próximas 2 horas.
          </li>
          <li className="flex gap-3 text-sm text-slate-600">
            <div className="w-5 h-5 bg-sky-100 text-sky-500 rounded-full flex items-center justify-center text-[10px] font-bold">2</div>
            Observe se há piora nos sintomas.
          </li>
          <li className="flex gap-3 text-sm text-slate-600">
            <div className="w-5 h-5 bg-sky-100 text-sky-500 rounded-full flex items-center justify-center text-[10px] font-bold">3</div>
            Caso os sintomas persistam por 24h, agende uma consulta.
          </li>
        </ul>
      </div>

      <button 
        onClick={onDone}
        className="w-full bg-slate-800 text-white py-4 rounded-xl font-bold shadow-lg shadow-slate-200 hover:bg-slate-900 transition-colors active:scale-95"
      >
        Entendi e Finalizar
      </button>

      <div className="text-[10px] text-slate-400 italic px-4">
        Lembre-se: Este é um sistema de orientação por IA. Não tome medicamentos sem prescrição médica e não substitua o acompanhamento profissional.
      </div>
    </div>
  );
};

export default ResultScreen;
