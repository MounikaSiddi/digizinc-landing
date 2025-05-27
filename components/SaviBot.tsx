'use client'
import React, { useState, useEffect, useRef } from 'react'; // Import useEffect and useRef
import { X, SendHorizontal, Sparkles } from 'lucide-react';

interface SaviBotProps {
  isOpen: boolean;
  onClose: () => void;
}

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'bot';
}

const SaviBot: React.FC<SaviBotProps> = ({ isOpen, onClose }) => {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: "Hi there! I'm SaaVik AI, your AI assistant. How can I help you with digital marketing, content creation, or industry-specific AI solutions?",
      sender: 'bot'
    }
  ]);

  const messagesEndRef = useRef<HTMLDivElement>(null); // Ref for scrolling to the bottom

  // Scroll to the bottom of the chat when messages update
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSendMessage = () => {
    if (!input.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: input,
      sender: 'user'
    };

    setMessages(prev => [...prev, userMessage]);
    setInput('');

    setTimeout(() => {
      const botResponses = [
        "I can help create AI-powered content tailored to your industry. Would you like to see some examples?",
        "Our AI solutions can help automate your digital marketing and increase engagement by up to 40%. Let me show you how.",
        "For your industry, I recommend our comprehensive digital transformation package with AI-driven analytics.",
        "Digizinc's AI-powered video animation and content creation services would be perfect for your needs.",
        "Let me show you how our AI can help optimize your marketing strategy and improve ROI."
      ];

      const randomResponse = botResponses[Math.floor(Math.random() * botResponses.length)];

      const botMessage: Message = {
        id: Date.now().toString(),
        text: randomResponse,
        sender: 'bot'
      };

      setMessages(prev => [...prev, botMessage]);
    }, 1000);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed bottom-4 right-4 z-50 w-full max-w-md"> {/* Positioned to bottom-right */}
      <div className="bg-white dark:bg-secondary-900 rounded-xl shadow-2xl h-[600px] flex flex-col overflow-hidden border border-gray-200 dark:border-secondary-700"> {/* Added border for definition */}
        <div className="bg-gradient-primary p-4 flex items-center justify-between">
          <div className="flex items-center">
            <div className="h-10 w-10 rounded-full bg-white/20 flex items-center justify-center mr-3">
              <Sparkles className="h-5 w-5 text-white" />
            </div>
            <div>
              <h3 className="text-white font-medium">Saavee AI Assistant</h3>
              <p className="text-white/80 text-sm">Online</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-full hover:bg-white/10 text-white transition-colors"
          >
            <X size={20} />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-4 bg-gray-50 dark:bg-secondary-950">
          {messages.map(message => (
            <div
              key={message.id}
              className={`mb-4 flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              {message.sender === 'bot' && (
                <div className="h-8 w-8 rounded-full bg-secondary-100 dark:bg-secondary-700 flex items-center justify-center text-secondary-600 dark:text-secondary-300 mr-2 flex-shrink-0">
                  <Sparkles size={16} />
                </div>
              )}

              <div
                className={`max-w-[80%] rounded-2xl p-4 ${
                  message.sender === 'user'
                    ? 'bg-primary-50 dark:bg-primary-900/30 rounded-tr-none text-gray-800 dark:text-gray-200'
                    : 'bg-white dark:bg-secondary-800 rounded-tl-none text-gray-700 dark:text-gray-300'
                }`}
              >
                {message.text}
              </div>

              {message.sender === 'user' && (
                <div className="h-8 w-8 rounded-full bg-primary-100 dark:bg-primary-700/30 flex items-center justify-center text-primary-600 dark:text-primary-300 ml-2 flex-shrink-0">
                  U
                </div>
              )}
            </div>
          ))}
          <div ref={messagesEndRef} /> {/* Element to scroll to */}
        </div>

        <div className="p-4 border-t border-gray-100 dark:border-secondary-800">
          <div className="flex">
            <input
              type="text"
              value={input}
              onChange={e => setInput(e.target.value)}
              onKeyDown={e => e.key === 'Enter' && handleSendMessage()}
              placeholder="Ask Saavee anything..."
              className="flex-1 bg-gray-100 dark:bg-secondary-800 border-none rounded-l-full py-3 px-4 text-gray-700 dark:text-gray-300 focus:outline-none focus:ring-2 focus:ring-primary-500 dark:focus:ring-primary-400"
            />
            <button
              onClick={handleSendMessage}
              className="bg-gradient-primary rounded-r-full text-white py-3 px-5 flex items-center transition-all hover:shadow-md"
            >
              <SendHorizontal size={20} />
            </button>
          </div>

          <div className="mt-3 flex flex-wrap gap-2"> {/* Changed to flex-wrap and gap-2 for better layout */}
            <button
              onClick={() => setInput("AI solutions")} // Added onClick to populate input
              className="bg-gray-100 dark:bg-secondary-800 hover:bg-gray-200 dark:hover:bg-secondary-700 text-xs px-3 py-1 rounded-full text-gray-700 dark:text-gray-300 transition-colors"
            >
              AI solutions
            </button>
            <button
              onClick={() => setInput("Video animation")} // Added onClick to populate input
              className="bg-gray-100 dark:bg-secondary-800 hover:bg-gray-200 dark:hover:bg-secondary-700 text-xs px-3 py-1 rounded-full text-gray-700 dark:text-gray-300 transition-colors"
            >
              Video animation
            </button>
            <button
              onClick={() => setInput("Get a quote")} // Added onClick to populate input
              className="bg-gray-100 dark:bg-secondary-800 hover:bg-gray-200 dark:hover:bg-secondary-700 text-xs px-3 py-1 rounded-full text-gray-700 dark:text-gray-300 transition-colors"
            >
              Get a quote
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SaviBot;