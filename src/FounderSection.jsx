import React from "react";
import "./FounderSection.css";

export default function FounderSection() {
  return (
    <section className="founder-section">
      <div className="founder-container">
        {/* Left: Image & Tags */}
        <div className="founder-image-wrapper">
          <img
            className="founder-image"
            src="https://i.imgur.com/2DH2Fsi.jpg" // Placeholder image
            alt="Alex Chen"
          />
          <div className="badge badge-top-left">MIT<br /><span>Computer Science</span></div>
          <div className="badge badge-top-right">✅ Available for Investor Calls</div>
          <div className="badge badge-bottom-right">Y22<br /><span>Y Combinator</span></div>
        </div>

        {/* Right: Content */}
        <div className="founder-content">
          <h2 className="founder-name">Alex Chen</h2>
          <h3 className="founder-title">Founder & CEO</h3>
          <p className="founder-bio">
            Former Principal Designer at Figma and Stripe. Led design systems that served 100M+ users and helped shape the tools that millions of designers use daily.
          </p>

          <div className="founder-stats">
            <div className="stat-card">
              <div className="stat-value">8+</div>
              <div className="stat-label">Years at Top Tech Companies<br /><span>Figma, Stripe, Airbnb</span></div>
            </div>
            <div className="stat-card">
              <div className="stat-value">100M+</div>
              <div className="stat-label">Users Impacted<br /><span>Through design systems</span></div>
            </div>
            <div className="stat-card">
              <div className="stat-value">$2.5M</div>
              <div className="stat-label">Pre-Seed Raised<br /><span>From tier-1 VCs</span></div>
            </div>
            <div className="stat-card">
              <div className="stat-value">15+</div>
              <div className="stat-label">Design Awards<br /><span>Including Webby & D&AD</span></div>
            </div>
          </div>

          <div className="founder-quote">
            <em>
              Every startup deserves world-class design. DMI makes it possible for any team to create professional brand experiences without the traditional time and cost barriers.
            </em>
          </div>
        </div>
      </div>
    </section>
  );
}
