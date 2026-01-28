
import React, { useState } from 'react';
import { Icons } from '../constants';
import { interpretExam } from '../geminiService';

interface Props {
  onInterpret: (desc: string) => void;
}

const ExamScreen: React.FC<Props> = () => {
  const [image, setImage] = useState<string | null>(null);
  const [isInterpreting, setIsInterpreting] = useState(false);
  const [interpretation, setInterpretation] = useState<string | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result as string);
        setInterpretation(null);
      };
      reader.readAsDataURL(file);
    }
  };

  const startAnalysis = async () => {
    if (!image) return;
    setIsInterpreting(true);
    try {
      const base64 = image.split(',')[1];
      const result = await interpretExam(base64);
      setInterpretation(result);
    } catch (e) {
      alert('Erro ao analisar exame.');
    } finally {
      setIsInterpreting(false);
    }
  };

  return (
    <div className="p-6 space-y-6 animate-fade-in">
      <div>
        <h2 className="text-2xl font-bold text-slate-800">Interpretar Exames</h2>
        <p className="text-slate-500">Envie uma foto do seu exame para simplificarmos os termos para você.</p>
      </div>

      {!image ? (
        <div className="relative h-64 border-2 border-dashed border-slate-200 rounded-3xl flex flex-col items-center justify-center bg-white group hover:border-sky-300 transition-colors overflow-hidden">
          <input 
            type="file" 
            accept="image/*" 
            onChange={handleFileChange}
            className="absolute inset-0 opacity-0 cursor-pointer z-10" 
          />
          <div className="w-16 h-16 bg-sky-50 text-sky-500 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
            <Icons.Camera />
          </div>
          <span className="font-bold text-slate-700">Tirar foto ou Upload</span>
          <span className="text-xs text-slate-400 mt-1">Formatos suportados: JPG, PNG</span>
        </div>
      ) : (
        <div className="space-y-4">
          <div className="relative rounded-3xl overflow-hidden border border-slate-100 shadow-lg">
            <img src={image} alt="Exame" className="w-full h-auto" />
            <button 
              onClick={() => { setImage(null); setInterpretation(null); }}
              className="absolute top-4 right-4 bg-white/80 p-2 rounded-full text-rose-500 backdrop-blur"
            >
              <Icons.Plus className="rotate-45" />
            </button>
          </div>
          
          {!interpretation && (
            <button 
              onClick={startAnalysis}
              disabled={isInterpreting}
              className="w-full bg-sky-500 text-white py-4 rounded-xl font-bold shadow-lg shadow-sky-100 active:scale-95 disabled:bg-slate-300 disabled:shadow-none transition-all flex items-center justify-center gap-3"
            >
              {isInterpreting ? (
                <>
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  Analisando Termos...
                </>
              ) : (
                'Simplificar Resultados'
              )}
            </button>
          )}
        </div>
      )}

      {interpretation && (
        <div className="bg-emerald-50 border border-emerald-100 p-6 rounded-3xl space-y-4 animate-slide-up shadow-sm">
          <div className="flex items-center gap-2 text-emerald-600 font-bold">
            <Icons.CheckCircle />
            <span>Resumo Simplificado</span>
          </div>
          <div className="text-sm text-slate-700 leading-relaxed whitespace-pre-wrap">
            {interpretation}
          </div>
          <div className="bg-white/50 p-4 rounded-xl text-[10px] text-slate-500 italic">
            Importante: Esta é apenas uma explicação dos termos. Procure seu médico para a conduta terapêutica correta.
          </div>
        </div>
      )}
    </div>
  );
};

export default ExamScreen;
