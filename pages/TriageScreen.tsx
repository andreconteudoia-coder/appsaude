
import React, { useState, useRef, useEffect } from 'react';
import { Icons } from '../constants';
import { triageSymptoms } from '../geminiService';

interface Props {
  onFinish: (result: any) => void;
  onCancel: () => void;
}

const TriageScreen: React.FC<Props> = ({ onFinish, onCancel }) => {
  const [messages, setMessages] = useState<any[]>([
    { role: 'assistant', text: 'Olá! Sou seu assistente de orientação. Para começar, qual o principal sintoma que você está sentindo agora?' }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = async () => {
    if (!inputValue.trim()) return;

    const userMsg = inputValue;
    setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
    setInputValue('');

    // Logic: if we have more than 3 user messages, let's triage. Else, ask for more detail.
    const userMessageCount = messages.filter(m => m.role === 'user').length;
    
    if (userMessageCount >= 2) {
      setIsLoading(true);
      try {
        const history = [...messages, { role: 'user', text: userMsg }].map(m => m.text);
        const result = await triageSymptoms(history);
        onFinish(result);
      } catch (e) {
        setMessages(prev => [...prev, { role: 'assistant', text: 'Ops, tive um problema ao analisar. Pode repetir o que sente?' }]);
      } finally {
        setIsLoading(false);
      }
    } else {
      setTimeout(() => {
        setMessages(prev => [...prev, { role: 'assistant', text: 'Entendi. Há quanto tempo isso começou e você sente alguma outra coisa?' }]);
      }, 600);
    }
  };

  return (
    <div className="flex flex-col h-full animate-fade-in bg-white">
      {/* Header Overlap for Triage */}
      <div className="px-6 py-4 flex items-center gap-4 bg-slate-50 border-b border-slate-100">
        <button onClick={onCancel} className="text-slate-400"><Icons.Plus className="rotate-45" /></button>
        <div className="flex-1">
          <div className="h-1.5 w-full bg-slate-200 rounded-full overflow-hidden">
            <div 
              className="h-full bg-sky-500 transition-all duration-500" 
              style={{ width: `${(messages.filter(m => m.role === 'user').length / 3) * 100}%` }} 
            />
          </div>
        </div>
      </div>

      <div ref={scrollRef} className="flex-1 overflow-y-auto p-6 space-y-6">
        {messages.map((m, i) => (
          <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
            <div className={`max-w-[80%] px-4 py-3 rounded-2xl ${
              m.role === 'user' 
                ? 'bg-sky-500 text-white rounded-tr-none' 
                : 'bg-slate-100 text-slate-800 rounded-tl-none'
            }`}>
              {m.text}
            </div>
          </div>
        ))}
        {isLoading && (
          <div className="flex justify-start">
            <div className="bg-slate-100 p-4 rounded-2xl flex gap-2">
              <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce" />
              <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce [animation-delay:0.2s]" />
              <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce [animation-delay:0.4s]" />
            </div>
          </div>
        )}
      </div>

      <div className="p-4 border-t border-slate-100 flex gap-2 bg-white">
        <input 
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && handleSend()}
          placeholder="Digite aqui seus sintomas..."
          className="flex-1 px-4 py-3 bg-slate-50 rounded-xl outline-none border border-transparent focus:border-sky-500 transition-all"
        />
        <button 
          onClick={handleSend}
          className="bg-sky-500 text-white p-3 rounded-xl shadow-lg shadow-sky-200 active:scale-90 transition-all"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg>
        </button>
      </div>
    </div>
  );
};

export default TriageScreen;
