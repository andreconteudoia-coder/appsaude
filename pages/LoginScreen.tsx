
import React from 'react';

interface Props {
  onLogin: () => void;
  onGoToRegister: () => void;
}

const LoginScreen: React.FC<Props> = ({ onLogin, onGoToRegister }) => {
  return (
    <div className="p-8 flex flex-col min-h-screen justify-center animate-fade-in">
      <div className="mb-12 text-center">
        <div className="w-16 h-16 bg-sky-500 rounded-2xl flex items-center justify-center text-white text-3xl font-bold mx-auto mb-4 shadow-xl shadow-sky-100">S+</div>
        <h1 className="text-3xl font-bold text-slate-800">Bem-vindo</h1>
        <p className="text-slate-500 mt-2">Sua orientação de saúde em um toque.</p>
      </div>

      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1">E-mail</label>
          <input 
            type="email" 
            placeholder="seu@email.com"
            className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-sky-500 focus:border-transparent outline-none transition-all"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1">Senha</label>
          <input 
            type="password" 
            placeholder="••••••••"
            className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-sky-500 focus:border-transparent outline-none transition-all"
          />
        </div>
        <button className="text-sm text-sky-500 font-medium text-right w-full">Esqueceu a senha?</button>
        
        <button 
          onClick={onLogin}
          className="w-full bg-sky-500 text-white py-4 rounded-xl font-bold shadow-lg shadow-sky-200 hover:bg-sky-600 transition-colors active:scale-95"
        >
          Entrar
        </button>
      </div>

      <div className="mt-auto pt-8 text-center">
        <p className="text-slate-500 text-sm">
          Não tem uma conta? 
          <button onClick={onGoToRegister} className="text-sky-500 font-bold ml-1">Cadastre-se</button>
        </p>
      </div>
    </div>
  );
};

export default LoginScreen;
