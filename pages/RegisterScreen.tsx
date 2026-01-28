
import React from 'react';

interface Props {
  onRegister: () => void;
  onGoToLogin: () => void;
}

const RegisterScreen: React.FC<Props> = ({ onRegister, onGoToLogin }) => {
  return (
    <div className="p-8 flex flex-col min-h-screen justify-center animate-fade-in">
      <div className="mb-8">
        <button onClick={onGoToLogin} className="text-slate-400 mb-6">← Voltar</button>
        <h1 className="text-3xl font-bold text-slate-800">Crie sua conta</h1>
        <p className="text-slate-500 mt-2">Comece a cuidar melhor da sua saúde hoje.</p>
      </div>

      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1">Nome Completo</label>
          <input type="text" className="w-full px-4 py-3 rounded-xl border border-slate-200 outline-none focus:ring-2 focus:ring-sky-500 transition-all" />
        </div>
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1">E-mail</label>
          <input type="email" className="w-full px-4 py-3 rounded-xl border border-slate-200 outline-none focus:ring-2 focus:ring-sky-500 transition-all" />
        </div>
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1">Senha</label>
          <input type="password" placeholder="Mínimo 8 caracteres" className="w-full px-4 py-3 rounded-xl border border-slate-200 outline-none focus:ring-2 focus:ring-sky-500 transition-all" />
        </div>
        
        <div className="flex items-start gap-3 py-2">
          <input type="checkbox" id="terms" className="mt-1 h-4 w-4 rounded border-slate-300 text-sky-500 focus:ring-sky-500" />
          <label htmlFor="terms" className="text-xs text-slate-500 leading-tight">
            Li e aceito os Termos de Uso e entendo que o app fornece orientação, não diagnóstico médico.
          </label>
        </div>

        <button 
          onClick={onRegister}
          className="w-full bg-sky-500 text-white py-4 rounded-xl font-bold shadow-lg shadow-sky-200 hover:bg-sky-600 transition-colors active:scale-95"
        >
          Criar conta
        </button>
      </div>
    </div>
  );
};

export default RegisterScreen;
