import { useState, useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ScrollArea } from '@/components/ui/scroll-area';
import { apiRequest } from '@/lib/queryClient';

interface Message {
  id: string;
  text: string;
  isUser: boolean;
  timestamp: Date;
}

export default function ChatbotWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: "Hi! I'm Imed's AI assistant. Ask me about his experience, skills, or projects!",
      isUser: false,
      timestamp: new Date()
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [sessionId] = useState(() => `session_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = async () => {
    const message = inputValue.trim();
    if (!message || isLoading) return;

    const userMessage: Message = {
      id: `user_${Date.now()}`,
      text: message,
      isUser: true,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsLoading(true);

    try {
      const response = await apiRequest('POST', '/api/chat', {
        message,
        sessionId
      });
      
      const result = await response.json();
      
      if (result.success) {
        const aiMessage: Message = {
          id: `ai_${Date.now()}`,
          text: result.response,
          isUser: false,
          timestamp: new Date()
        };
        setMessages(prev => [...prev, aiMessage]);
      } else {
        throw new Error(result.message);
      }
    } catch (error) {
      const errorMessage: Message = {
        id: `error_${Date.now()}`,
        text: "I'm experiencing technical difficulties. Please try again or contact Imed directly through the contact form.",
        isUser: false,
        timestamp: new Date()
      };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Chat Window */}
      {isOpen && (
        <div className="glass-effect rounded-2xl w-80 h-96 flex flex-col mb-4 border border-gray-600">
          {/* Header */}
          <div className="p-4 border-b border-gray-600 rounded-t-2xl">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <div className="w-8 h-8 bg-[var(--portfolio-accent)] rounded-full flex items-center justify-center mr-3">
                  <i className="fas fa-robot text-[var(--portfolio-primary)] text-sm"></i>
                </div>
                <span className="font-semibold">AI Assistant</span>
              </div>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsOpen(false)}
                className="text-gray-400 hover:text-white p-1"
              >
                <i className="fas fa-times"></i>
              </Button>
            </div>
          </div>

          {/* Messages */}
          <ScrollArea className="flex-1 p-4">
            <div className="space-y-4">
              {messages.map((message) => (
                <div key={message.id} className={`flex ${message.isUser ? 'justify-end' : 'justify-start'}`}>
                  <div className={`max-w-xs p-3 rounded-lg text-sm ${
                    message.isUser 
                      ? 'bg-[var(--portfolio-accent)] text-[var(--portfolio-primary)] ml-8' 
                      : 'bg-gray-700 text-white mr-8'
                  }`}>
                    {message.text}
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="flex justify-start">
                  <div className="bg-gray-700 text-white p-3 rounded-lg text-sm mr-8">
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                    </div>
                  </div>
                </div>
              )}
            </div>
            <div ref={messagesEndRef} />
          </ScrollArea>

          {/* Input */}
          <div className="p-4 border-t border-gray-600">
            <div className="flex">
              <Input
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Ask me anything..."
                className="flex-1 bg-portfolio-primary border-gray-600 text-sm focus:border-[var(--portfolio-accent)] rounded-r-none"
                disabled={isLoading}
              />
              <Button
                onClick={handleSendMessage}
                disabled={isLoading || !inputValue.trim()}
                className="bg-[var(--portfolio-accent)] hover:opacity-90 px-4 rounded-l-none"
              >
                <i className="fas fa-paper-plane text-sm"></i>
              </Button>
            </div>
          </div>
        </div>
      )}

      {/* Toggle Button */}
      <Button
        onClick={() => setIsOpen(!isOpen)}
        className="w-16 h-16 bg-gradient-to-r from-[var(--portfolio-accent)] to-[var(--portfolio-coral)] rounded-full shadow-lg hover:scale-110 transition-transform"
      >
        <i className={`fas ${isOpen ? 'fa-times' : 'fa-comments'} text-white text-xl`}></i>
      </Button>
    </div>
  );
}
