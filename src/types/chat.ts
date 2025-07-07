export interface ChatMessage {
  id: string;
  content: string;
  sender: 'user' | 'ai';
  timestamp: Date;
  type?: 'text' | 'chart' | 'analysis';
  chartData?: {
    type: 'line' | 'bar' | 'pie' | 'area';
    data: any[];
    title: string;
    color?: string;
  };
}

export interface ChatResponse {
  message: string;
  data?: any;
  chartType?: 'line' | 'bar' | 'pie';
  analysis?: {
    insights: string[];
    recommendations: string[];
    predictions: string[];
  };
}