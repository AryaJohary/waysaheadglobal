import React, { useState } from 'react';
import { MessageSquare, X } from 'lucide-react';

interface ChatMessage {
  sender: 'user' | 'bot';
  text: string;
}

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    { sender: 'bot', text: 'Hello! How can I help you today?' }
  ]);
  const [input, setInput] = useState('');

  const handleSend = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMessage: ChatMessage = { sender: 'user', text: input.trim() };
    setMessages((prev) => [...prev, userMessage]);
    const userInput = input.trim();
    setInput('');

    const apiKey = 'sk-ijklmnopabcd5678ijklmnopabcd5678ijklmnop';

    if (!apiKey) {
      console.error('No API key provided! Check your .env file.');
      const errorMessage: ChatMessage = { sender: 'bot', text: 'API key missing. Please contact support.' };
      setMessages((prev) => [...prev, errorMessage]);
      return;
    }

    const requestBody = {
      model: 'gpt-3.5-turbo',
      messages: [
        {
          role: 'system',
          content:
            'You are an assistant for the WaysAhead Global website. Provide helpful answers based on the provided website sections: Home, Services, News, Contact, FAQs and job inquiries.'
        },
        { role: 'user', content: userInput }
      ],
      temperature: 0.7,
      max_tokens: 150
    };

    try {
      const response = await fetch('https://api.openai.com/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${apiKey}`
        },
        body: JSON.stringify(requestBody)
      });

      if (!response.ok) {
        console.error('OpenAI API call failed. Status:', response.status);
        throw new Error('Failed to fetch response from OpenAI API');
      } else {
        console.log('API key is working. OpenAI API response status:', response.status);
      }

      const data = await response.json();
      const botAnswer =
        data?.choices?.[0]?.message?.content ||
        "I'm sorry, I didn't quite understand that.";
      const botMessage: ChatMessage = { sender: 'bot', text: botAnswer.trim() };
      setMessages((prev) => [...prev, botMessage]);
    } catch (error) {
      console.error('Error calling OpenAI API:', error);
      const botMessage: ChatMessage = {
        sender: 'bot',
        text: 'Sorry, something went wrong while processing your request.'
      };
      setMessages((prev) => [...prev, botMessage]);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {isOpen ? (
        <div className="w-80 bg-gray-800 rounded-lg shadow-lg flex flex-col">
          <div className="flex items-center justify-between px-4 py-2 bg-gray-700 rounded-t-lg">
            <span className="text-white font-semibold">Chat with WaysAhead</span>
            <button onClick={() => setIsOpen(false)} className="text-white">
              <X className="h-5 w-5" />
            </button>
          </div>
          <div className="flex-1 p-4 overflow-y-auto max-h-60">
            {messages.map((msg, i) => (
              <div key={i} className={`mb-2 ${msg.sender === 'user' ? 'text-right' : 'text-left'}`}>
                <span className={`inline-block px-3 py-2 rounded-lg ${msg.sender === 'user' ? 'bg-blue-600' : 'bg-gray-600'} text-white`}>
                  {msg.text}
                </span>
              </div>
            ))}
          </div>
          <form onSubmit={handleSend} className="flex items-center border-t border-gray-700 p-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type a message..."
              className="flex-1 bg-gray-700 text-white px-3 py-2 rounded-lg focus:outline-none"
            />
            <button type="submit" className="ml-2 text-white">
              Send
            </button>
          </form>
        </div>
      ) : (
        <button
          onClick={() => setIsOpen(true)}
          className="bg-blue-600 hover:bg-blue-700 text-white p-4 rounded-full shadow-lg"
        >
          <MessageSquare className="h-6 w-6" />
        </button>
      )}
    </div>
  );
};

export default Chatbot;
