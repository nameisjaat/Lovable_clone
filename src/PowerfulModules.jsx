import React from 'react';
import './PowerfulModules.css';
import { motion } from 'framer-motion';

const modules = [
  {
    icon: '🎨',
    title: 'BrandKit OS',
    description: 'Centralized brand management system that maintains consistency across all touchpoints.',
    features: ['Logo Management', 'Color Palettes', 'Typography', 'Brand Guidelines'],
  },
  {
    icon: '📱',
    title: 'Social Media Studio',
    description: 'AI-powered content creation for Instagram, TikTok, LinkedIn, and more platforms.',
    features: ['Auto-posting', 'Content Calendar', 'Hashtag Optimization', 'Analytics'],
  },
  {
    icon: '💻',
    title: 'Web/App Generator',
    description: 'Instantly generate responsive websites and mobile apps that match your brand.',
    features: ['Responsive Design', 'Mobile Apps', 'E-commerce Ready', 'SEO Optimized'],
  },
  {
    icon: '🚀',
    title: 'Brand Genesis AI',
    description: 'Launch new brands from scratch with AI-generated logos, websites, and identity systems.',
    features: ['Logo Generation', 'Name Suggestions', 'Market Analysis', 'Launch Strategy'],
  }
];

export default function PowerfulModules() {
  return (
    <section className="modules-section">
      <h2>
        <span className="black">Powerful </span>
        <span className="red">Modules</span>
      </h2>
      <p className="modules-desc">
        Four integrated AI-powered tools that work together to transform your brand presence across all channels.
      </p>

      <div className="modules-grid">
        {modules.map((mod, i) => (
          <motion.div
            key={i}
            className="module-card"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1, duration: 0.5 }}
          >
            <div className="module-icon">{mod.icon}</div>
            <h3>{mod.title}</h3>
            <p>{mod.description}</p>
            <ul>
              {mod.features.map((item, idx) => (
                <li key={idx}>🔴 {item}</li>
              ))}
            </ul>
            <div className="module-arrow">→</div>
          </motion.div>
        ))}
      </div>

      <div className="module-sync-note">
        <span className="dot"></span> All modules sync in real-time
      </div>
    </section>
  );
}