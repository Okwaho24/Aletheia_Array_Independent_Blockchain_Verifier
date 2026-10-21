export interface UniversalMessage {
  role: 'system' | 'user' | 'assistant';
  content: string;
}

export interface UniversalOptions {
  model?: string;
  temperature?: number;
  maxTokens?: number;
}

export class UniversalAIClient {
  private baseURL: string;
  private apiKey: string;
  private defaultModel: string;

  constructor() {
    this.baseURL = process.env.UNIVERSAL_AI_BASE_URL || 'http://localhost:11434/v1';
    this.apiKey = process.env.UNIVERSAL_AI_API_KEY || '';
    this.defaultModel = process.env.UNIVERSAL_AI_MODEL || 'llama3';
  }

  async generateChatCompletion(messages: UniversalMessage[], options?: UniversalOptions): Promise<string> {
    const response = await fetch(`${this.baseURL}/chat/completions`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        ...(this.apiKey ? { 'Authorization': `Bearer ${this.apiKey}` } : {})
      },
      body: JSON.stringify({
        model: options?.model || this.defaultModel,
        messages,
        temperature: options?.temperature ?? 0.7,
        max_tokens: options?.maxTokens
      })
    });

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`Universal AI Provider Error [${response.status}]: ${errorText}`);
    }

    const data = await response.json();
    return data.choices?.[0]?.message?.content || '';
  }

  async streamChatCompletion(messages: UniversalMessage[], options?: UniversalOptions): Promise<ReadableStream> {
    const response = await fetch(`${this.baseURL}/chat/completions`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        ...(this.apiKey ? { 'Authorization': `Bearer ${this.apiKey}` } : {})
      },
      body: JSON.stringify({
        model: options?.model || this.defaultModel,
        messages,
        temperature: options?.temperature ?? 0.7,
        stream: true
      })
    });

    if (!response.ok || !response.body) {
      throw new Error(`Universal AI Stream Error [${response.status}]: ${response.statusText}`);
    }

    return response.body;
  }
}
