import React, { useState } from 'react';
import './ChatSystem.css';


const ChatSystem = () => {
  const [messages, setMessages] = useState([
    { id: 1, text: 'Meeting scheduled for 3 PM', priority: 'Urgent' },
    { id: 2, text: 'Please complete the task by tomorrow', priority: 'Normal' },
  ]);

  const handleSendMessage = (text, priority) => {
    setMessages([...messages, { id: messages.length + 1, text, priority }]);
  };

  return (
    <div className="chat-system">
      <h2>Chat</h2>
      <div className="message-list">
        {messages.map((message) => (
          <div key={message.id} className={`message ${message.priority.toLowerCase()}`}>
            <span>{message.text}</span>
          </div>
        ))}
      </div>
      <button onClick={() => handleSendMessage('New message example', 'Urgent')}>
        Send Message
      </button>
    </div>
  );
};

export default ChatSystem;
