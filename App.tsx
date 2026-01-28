
import React, { useState } from 'react';
import { Screen, User } from './types';
import { Icons, COLORS } from './constants';
import LoginScreen from './pages/LoginScreen';
import RegisterScreen from './pages/RegisterScreen';
import HomeScreen from './pages/HomeScreen';
import TriageScreen from './pages/TriageScreen';
import ResultScreen from './pages/ResultScreen';
import ProfileScreen from './pages/ProfileScreen';
import ExamScreen from './pages/ExamScreen';
import HistoryScreen from './pages/HistoryScreen';
import SettingsScreen from './pages/SettingsScreen';

const App: React.FC = () => {
  const [currentScreen, setCurrentScreen] = useState<Screen>('LOGIN');
  const [user, setUser] = useState<User | null>(null);
  const [lastTriageResult, setLastTriageResult] = useState<any>(null);

  const navigateTo = (screen: Screen) => setCurrentScreen(screen);

  const renderScreen = () => {
    switch (currentScreen) {
      case 'LOGIN': return <LoginScreen onLogin={() => navigateTo('HOME')} onGoToRegister={() => navigateTo('REGISTER')} />;
      case 'REGISTER': return <RegisterScreen onRegister={() => navigateTo('HOME')} onGoToLogin={() => navigateTo('LOGIN')} />;
      case 'HOME': return <HomeScreen user={user} onStartTriage={() => navigateTo('TRIAGE')} onGoToExams={() => navigateTo('EXAMS')} />;
      case 'TRIAGE': return <TriageScreen onFinish={(result) => { setLastTriageResult(result); navigateTo('RESULT'); }} onCancel={() => navigateTo('HOME')} />;
      case 'RESULT': return <ResultScreen result={lastTriageResult} onDone={() => navigateTo('HOME')} />;
      case 'PROFILE': return <ProfileScreen user={user} />;
      case 'EXAMS': return <ExamScreen onInterpret={(desc) => console.log(desc)} />;
      case 'HISTORY': return <HistoryScreen />;
      case 'SETTINGS': return <SettingsScreen onLogout={() => navigateTo('LOGIN')} />;
      default: return <HomeScreen user={user} onStartTriage={() => navigateTo('TRIAGE')} onGoToExams={() => navigateTo('EXAMS')} />;
    }
  };

  const showNav = !['LOGIN', 'REGISTER'].includes(currentScreen);

  return (
    <div className="min-h-screen flex flex-col max-w-md mx-auto bg-slate-50 relative overflow-hidden shadow-2xl">
      {/* Header */}
      {showNav && (
        <header className="bg-white px-6 py-4 flex justify-between items-center border-b border-slate-100 z-10 sticky top-0">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-sky-500 rounded-lg flex items-center justify-center text-white font-bold">S+</div>
            <h1 className="text-xl font-bold text-slate-800 tracking-tight">SaúdePronta</h1>
          </div>
          <button onClick={() => navigateTo('SETTINGS')} className="p-2 text-slate-400 hover:text-slate-600">
            <Icons.User />
          </button>
        </header>
      )}

      {/* Content Area */}
      <main className="flex-1 overflow-y-auto pb-24">
        {renderScreen()}
      </main>

      {/* Footer Disclaimer */}
      {showNav && (
        <div className="bg-amber-50 px-4 py-2 text-[10px] text-amber-700 text-center border-t border-amber-100 italic absolute bottom-16 left-0 right-0 z-10">
          Atenção: Este aplicativo não substitui consulta médica. Em emergências, ligue 192.
        </div>
      )}

      {/* Bottom Navigation */}
      {showNav && (
        <nav className="fixed bottom-0 left-0 right-0 max-w-md mx-auto bg-white border-t border-slate-100 h-16 flex items-center justify-around px-4 z-20">
          <NavItem icon={<Icons.Home />} label="Início" active={currentScreen === 'HOME'} onClick={() => navigateTo('HOME')} />
          <NavItem icon={<Icons.History />} label="Histórico" active={currentScreen === 'HISTORY'} onClick={() => navigateTo('HISTORY')} />
          <div className="relative -top-5">
            <button 
              onClick={() => navigateTo('TRIAGE')}
              className="bg-sky-500 p-4 rounded-full text-white shadow-lg shadow-sky-200 active:scale-95 transition-transform"
            >
              <Icons.Plus />
            </button>
          </div>
          <NavItem icon={<Icons.FileText />} label="Exames" active={currentScreen === 'EXAMS'} onClick={() => navigateTo('EXAMS')} />
          <NavItem icon={<Icons.User />} label="Perfil" active={currentScreen === 'PROFILE'} onClick={() => navigateTo('PROFILE')} />
        </nav>
      )}
    </div>
  );
};

interface NavItemProps {
  icon: React.ReactNode;
  label: string;
  active?: boolean;
  onClick: () => void;
}

const NavItem: React.FC<NavItemProps> = ({ icon, label, active, onClick }) => (
  <button 
    onClick={onClick}
    className={`flex flex-col items-center gap-1 transition-colors ${active ? 'text-sky-500 font-medium' : 'text-slate-400'}`}
  >
    <div className="scale-90">{icon}</div>
    <span className="text-[10px] uppercase tracking-wider">{label}</span>
  </button>
);

export default App;
