import React from "react";
import { motion } from "framer-motion";
import "./DesignRevolution.css";

export default function DesignRevolution() {
  return (
    <div className="homepage-container">
      {/* Hero Section */}
      <section className="hero-section">
        <motion.h1
          className="hero-title"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Be Part of the <span className="highlight">Design Revolution</span>
        </motion.h1>
        <p className="hero-subtitle">
          Join thousands of brands already transforming their presence with AI-powered design.
        </p>
        <div className="stats-container">
          <div className="stat-item">
            <p className="stat-number">1000+</p>
            <p className="stat-label">Active Brands</p>
          </div>
          <div className="stat-item">
            <p className="stat-number">50M+</p>
            <p className="stat-label">Designs Created</p>
          </div>
          <div className="stat-item">
            <p className="stat-number">99.8%</p>
            <p className="stat-label">Satisfaction Rate</p>
          </div>
        </div>

        {/* Email Signup */}
        <div className="signup-container">
          <input
            type="email"
            placeholder="Enter your email address"
            className="signup-input"
          />
          <button className="signup-button">Join Revolution →</button>
        </div>
        <p className="signup-note">
          🚀 Be among the first 1000 users to get lifetime Pro features
        </p>
      </section>

      {/* Demo Call Section */}
      <section className="demo-section">
        <h2 className="demo-title">Want a personalized demo? Schedule a call with our founding team.</h2>
        <button className="demo-button">📅 Schedule Demo Call</button>
        <div className="social-links">
          <div className="social-item">
            <div className="icon">🔍</div>
            LinkedIn
          </div>
          <div className="social-item">
            <div className="icon">💬</div>
            Discord
          </div>
          <div className="social-item">
            <div className="icon">🔦</div>
            Twitter
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-col">
          <div className="brand">
            <div className="logo">DMI</div>
            <p className="brand-name">Design Made Intelligent</p>
          </div>
          <p className="footer-text">Democratizing world-class design through AI innovation.</p>
        </div>
        <div className="footer-col">
          <p className="footer-heading">Company</p>
          <ul className="footer-links">
            <li>About</li>
            <li>Careers</li>
            <li>Blog</li>
            <li>Press Kit</li>
          </ul>
        </div>
        <div className="footer-col">
          <p className="footer-heading">Legal</p>
          <ul className="footer-links">
            <li>Privacy Policy</li>
            <li>Terms of Service</li>
            <li>Contact</li>
            <li>Support</li>
          </ul>
        </div>
      </footer>

      {/* Status */}
      <div className="status-bar">
        <p>© 2024 DMI. All rights reserved. Powered by AI, crafted by humans.</p>
        <p className="status-ok">System Status: Operational</p>
      </div>
    </div>
  );
}
