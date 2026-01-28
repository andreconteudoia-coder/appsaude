
import { GoogleGenAI, Type } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: import.meta.env.VITE_GEMINI_API_KEY });

export async function triageSymptoms(messages: string[]) {
  const response = await ai.models.generateContent({
    model: "gemini-3-flash-preview",
    contents: `Analise os seguintes sintomas e forneça uma orientação pré-hospitalar. 
    Lembre-se: NÃO faça diagnóstico médico. Forneça nível de risco (low, medium, high, emergency).
    Retorne em JSON com campos: priority, title, description, recommendation.
    Sintomas: ${messages.join(" -> ")}`,
    config: {
      responseMimeType: "application/json",
      responseSchema: {
        type: Type.OBJECT,
        properties: {
          priority: { type: Type.STRING },
          title: { type: Type.STRING },
          description: { type: Type.STRING },
          recommendation: { type: Type.STRING }
        },
        required: ["priority", "title", "description", "recommendation"]
      }
    }
  });
  return JSON.parse(response.text);
}

export async function interpretExam(imageBase64: string) {
  const response = await ai.models.generateContent({
    model: "gemini-3-flash-preview",
    contents: {
      parts: [
        { inlineData: { data: imageBase64, mimeType: "image/jpeg" } },
        { text: "Explique os termos médicos deste exame de forma simples para um paciente. Informe o que parece estar normal e o que requer atenção. NÃO faça diagnóstico." }
      ]
    }
  });
  return response.text;
}
