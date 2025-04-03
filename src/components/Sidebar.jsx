import React, { useState } from 'react';
import './Sidebar.css'; // You can style it according to your needs

const Sidebar = () => {
  const [messages, setMessages] = useState([
    { id: 1, user: 'John', message: 'Hello! How are you?' },
    { id: 2, user: 'Doe', message: 'I am good, how about you?' },
  ]);
  
  const [newMessage, setNewMessage] = useState('');

  const handleSendMessage = () => {
    if (newMessage.trim()) {
      setMessages([...messages, { id: messages.length + 1, user: 'You', message: newMessage }]);
      setNewMessage('');
    }
  };

  return (
    <div className="sidebar">
      <div className="chat-header">
        <h3>Chat</h3>
      </div>
      
      <div className="chat-messages">
        {messages.map((msg) => (
          <div key={msg.id} className={`message ${msg.user === 'You' ? 'message-self' : ''}`}>
            <strong>{msg.user}:</strong> {msg.message}
          </div>
        ))}
      </div>

      <div className="chat-input">
        <input
          type="text"
          placeholder="Type a message..."
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
        />
        <button onClick={handleSendMessage}>Send</button>
      </div>
    </div>
  );
};

export default Sidebar;
