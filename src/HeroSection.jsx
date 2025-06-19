import React from 'react';
import './Herosection.css';
import { motion } from 'framer-motion';

const steps = [
  {
    icon: "📁",
    step: "01",
    title: "Upload Brand Kit",
    desc: "Drop your logo, fonts, colors, and brand guidelines. Our AI analyzes your brand DNA instantly."
  },
  {
    icon: "🤖",
    step: "02",
    title: "AI Generates Content",
    desc: "Watch as intelligent algorithms create stunning social media posts, web designs, and app interfaces."
  },
  {
    icon: "🚀",
    step: "03",
    title: "Auto-Publish Everywhere",
    desc: "Seamlessly distribute to Instagram, TikTok, LinkedIn, and your website with one click."
  },
  {
    icon: "📈",
    step: "04",
    title: "Continuous Optimization",
    desc: "AI learns from performance data to improve your brand assets and maximize engagement."
  }
];

export default function HeroSection() {
  return (
    <section>
      <div className="hero">
        <motion.div
          className="hero-content"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="hero-title">
            Create Amazing <br />
            <span className="gradient-text">Brand Content</span> in Minutes
          </h1>
          <p className="hero-subtext">
            From brand guidelines to websites, social posts, and apps — all powered by AI that understands your business.
          </p>
          <p className="hero-smalltext">
            Trusted by 500+ growing businesses to create professional, consistent brand experiences across all channels.
          </p>
          <div className="hero-buttons">
            <button className="btn primary-btn">▶ See It in Action</button>
            <button className="btn secondary-btn">Get Started Free ✨</button>
          </div>
        </motion.div>
      </div>

      <div className="how-it-works">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: true }}
        >
          How It <span className="highlight">Works</span>
        </motion.h2>
        <motion.p
          className="section-subtext"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.1 }}
          viewport={{ once: true }}
        >
          From brand upload to global distribution – our AI handles everything so you can focus on growing your business.
        </motion.p>

        <div className="steps">
          {steps.map(({ icon, step, title, desc }, index) => (
            <motion.div
              className="card"
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <span className="step-badge">{step}</span>
              <div className="card-icon">{icon}</div>
              <h3 className="card-title">{title}</h3>
              <p className="card-desc">{desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
