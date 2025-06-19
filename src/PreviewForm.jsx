import React, { useState } from 'react';
import './PreviewForm.css';
import { motion } from 'framer-motion';

export default function PreviewForm() {
  const [brandName, setBrandName] = useState('');
  const [brandTone, setBrandTone] = useState('Playful');
  const [submitted, setSubmitted] = useState(false);
  const [generatedAt, setGeneratedAt] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setGeneratedAt((Math.random() * 3 + 1).toFixed(1));
  };

  const cards = [
    {
      component: (
        <>
          <div className="design-sample red-sample">
            <h4>{brandName.toUpperCase()}</h4>
            <span>Your {brandTone.toLowerCase()} brand</span>
          </div>
          <div className="design-info">
            <strong>Instagram Carousel</strong>
            <p>3 posts ready for social media</p>
            <span>1080×1080px • RGB/sRGB</span>
          </div>
        </>
      )
    },
    {
      component: (
        <>
          <div className="design-sample mockup">
            <div className="bar"></div>
            <div className="text-line"></div>
            <div className="text-line short"></div>
            <button className="sample-btn">Get Started</button>
          </div>
          <div className="design-info">
            <strong>Landing Page Hero</strong>
            <p>Responsive web design ready</p>
            <span>1920×1080px • Mobile Ready</span>
          </div>
        </>
      )
    },
    {
      component: (
        <>
          <div className="design-sample phone-mock">
            <div className="status-bar"></div>
            <div className="screen-content"></div>
            <button className="sample-btn">Launch</button>
          </div>
          <div className="design-info">
            <strong>App Splash Screen</strong>
            <p>iOS & Android ready</p>
            <span>1170×2532px • Retina Ready</span>
          </div>
        </>
      )
    }
  ];

  return (
    <section className="preview-section">
      <div className="preview-header">
        <h2>
          See It In <span className="highlight">Action</span>
        </h2>
        <p>
          Experience the magic yourself. Enter your brand details and watch AI create
          stunning designs instantly.
        </p>
      </div>

      <form className="preview-form" onSubmit={handleSubmit}>
        <div className="input-group">
          <label>Brand Name</label>
          <input
            type="text"
            value={brandName}
            placeholder="e.g. NovaStudio"
            onChange={(e) => setBrandName(e.target.value)}
            required
          />
        </div>

        <div className="input-group">
          <label>Brand Tone</label>
          <select value={brandTone} onChange={(e) => setBrandTone(e.target.value)}>
            <option>Playful</option>
            <option>Bold</option>
            <option>Elegant</option>
            <option>Minimal</option>
          </select>
        </div>

        <button type="submit" className="preview-btn">
          Generate Preview
        </button>
      </form>

      {submitted && (
        <div className="preview-output">
          <h3>AI-Generated Designs for "{brandName}"</h3>
          <p>
            Tone: {brandTone} • Generated in {generatedAt} seconds
          </p>

          <div className="design-grid">
            {cards.map((card, idx) => (
              <motion.div
                className="design-card"
                key={idx}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1, duration: 0.5 }}
              >
                {card.component}
              </motion.div>
            ))}
          </div>
        </div>
      )}
    </section>
  );
}
