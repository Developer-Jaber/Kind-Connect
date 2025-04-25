import { useState, useRef, useEffect } from 'react';
import { FiSend, FiMessageSquare, FiX } from 'react-icons/fi';

const ChatSupport = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { 
      text: "Hello! I'm your volunteer assistant. How can I help you today?", 
      sender: 'bot' 
    }
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const messagesEndRef = useRef(null);

  // Auto-scroll to bottom of chat
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSendMessage = async () => {
    if (!inputMessage.trim()) return;

    // Add user message
    const userMessage = { text: inputMessage, sender: 'user' };
    setMessages(prev => [...prev, userMessage]);
    setInputMessage('');

    // Simulate typing indicator
    setMessages(prev => [...prev, { text: '...', sender: 'bot', typing: true }]);

    // Get AI response
    try {
      const response = await getAIResponse(inputMessage);
      
      // Remove typing indicator and add actual response
      setMessages(prev => [
        ...prev.filter(msg => !msg.typing),
        { text: response, sender: 'bot' }
      ]);
    } catch (error) {
      setMessages(prev => [
        ...prev.filter(msg => !msg.typing),
        { text: "Sorry, I'm having trouble connecting. Please try again later.", sender: 'bot' }
      ]);
    }
  };

  const getAIResponse = async (message) => {
    // In a real implementation, you would call your backend API here
    // For now, we'll use a simple mock response
    return mockAIResponse(message);
  };

  const mockAIResponse = (message) => {
    const lowerMsg = message.toLowerCase();
    
    if (lowerMsg.includes('sign up') || lowerMsg.includes('register')) {
      return "You can sign up as a volunteer by clicking on 'Register' in the top navigation. The process takes less than 2 minutes!";
    } else if (lowerMsg.includes('opportunity') || lowerMsg.includes('event')) {
      return "Our volunteer opportunities are listed on the 'Opportunities' page. You can filter by location, date, or skills required.";
    } else if (lowerMsg.includes('time') || lowerMsg.includes('hours')) {
      return "Most opportunities list the expected time commitment. You can also find flexible volunteering options marked with a ⏱️ icon.";
    } else {
      return "I'm here to help with questions about volunteering. You can ask about signing up, available opportunities, time commitments, or impact tracking.";
    }
  };

  return (
    <>
      {/* Chat toggle button (fixed position) */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`fixed bottom-6 right-6 z-50 p-4 rounded-full shadow-lg transition-all duration-300 ${
          isOpen ? 'bg-red-500 text-white' : 'bg-blue-600 text-white'
        }`}
      >
        {isOpen ? <FiX size={24} /> : <FiMessageSquare size={24} />}
      </button>

      {/* Chat window */}
      {isOpen && (
        <div className="right-6 bottom-20 z-50 fixed flex flex-col bg-white shadow-xl border border-gray-200 rounded-lg w-80 h-96">
          {/* Chat header */}
          <div className="flex justify-between items-center bg-blue-600 p-3 rounded-t-lg text-white">
            <h3 className="font-semibold">Volunteer Support</h3>
            <button onClick={() => setIsOpen(false)} className="text-white hover:text-gray-200">
              <FiX size={18} />
            </button>
          </div>

          {/* Messages container */}
          <div className="flex-1 p-4 overflow-y-auto">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`mb-3 flex ${
                  msg.sender === 'user' ? 'justify-end' : 'justify-start'
                }`}
              >
                <div
                  className={`max-w-xs p-3 rounded-lg ${
                    msg.sender === 'user'
                      ? 'bg-blue-100 text-blue-900 rounded-br-none'
                      : 'bg-gray-100 text-gray-800 rounded-bl-none'
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          {/* Input area */}
          <div className="p-3 border-gray-200 border-t">
            <div className="flex">
              <input
                type="text"
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                placeholder="Type your question..."
                className="flex-1 p-2 border border-gray-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button
                onClick={handleSendMessage}
                disabled={!inputMessage.trim()}
                className="bg-blue-600 hover:bg-blue-700 disabled:bg-gray-400 p-2 rounded-r-lg text-white transition-colors"
              >
                <FiSend size={20} />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ChatSupport;