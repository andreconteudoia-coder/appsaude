
export type Screen = 
  | 'LOGIN' 
  | 'REGISTER' 
  | 'HOME' 
  | 'TRIAGE' 
  | 'RESULT' 
  | 'PROFILE' 
  | 'EXAMS' 
  | 'HISTORY' 
  | 'SETTINGS';

export interface User {
  name: string;
  age: number;
  conditions: string[];
  medications: string[];
}

export interface ChatMessage {
  role: 'user' | 'assistant';
  content: string;
}

export interface TriageResult {
  priority: 'low' | 'medium' | 'high' | 'emergency';
  title: string;
  description: string;
  recommendation: string;
}

export interface HistoryItem {
  id: string;
  date: string;
  type: 'triage' | 'exam';
  summary: string;
}
