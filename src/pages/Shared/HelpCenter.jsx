import React from 'react';
import './HelpCenter.css';
import { MessageSquare, PhoneCall, BookOpen, Mail, HelpCircle, Video, Bot } from 'lucide-react';

const HelpCenter = () => {
  return (
    <div className="help-container">
      <div className="help-hero glass-panel">
        <h1>How can we help you?</h1>
        <input type="text" placeholder="Search for articles, guides..." className="search-bar" />
      </div>

      <div className="support-channels">
        <div className="glass-panel channel">
          <MessageSquare size={32} color="#4f46e5" />
          <h3>Live Chat</h3>
          <p>Average Response Time: 5 Mins</p>
          <button className="chat-btn">Start Chat</button>
        </div>
        <div className="glass-panel channel">
          <PhoneCall size={32} color="#10b981" />
          <h3>Call Support</h3>
          <p>Available 24/7 For Urgent Cases</p>
          <button className="call-btn">Request Callback</button>
        </div>
        <div className="glass-panel channel">
          <Video size={32} color="#a855f7" />
          <h3>Video Assistance</h3>
          <p>Schedule A Live Screen Session</p>
          <button className="video-btn">Book Session</button>
        </div>
        <div className="glass-panel channel">
          <Mail size={32} color="#f59e0b" />
          <h3>Email Support</h3>
          <p>Typical Reply Within 24 Hours</p>
          <button className="email-btn">Send Email</button>
        </div>
        <div className="glass-panel channel">
          <HelpCircle size={32} color="#3b82f6" />
          <h3>Help Center</h3>
          <p>Browse FAQs and Guides</p>
          <button className="help-btn">View Articles</button>
        </div>

        <div className="glass-panel channel">
          <Bot size={32} color="#14b8a6" />
          <h3>AI Assistant</h3>
          <p>Instant Answers Powered By AI</p>
          <button className="ai-btn">Ask Now</button>
        </div>




      </div>
    </div>
  );
};

export default HelpCenter;