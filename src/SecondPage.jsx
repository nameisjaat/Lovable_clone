import React from "react";
import "./SecondPage.css";

export default function SecondPage() {
  return (
    <div className="homepage-container">
      {/* Badge Row */}
      <div className="badge-row">
        <span className="badge blue">⚡ Lightning Fast</span>
        <span className="badge green">🎯 Brand Consistent</span>
        <span className="badge purple">👥 Team Friendly</span>
      </div>

      {/* Magic Area */}
      <div className="magic-box">
        <div className="card-row">
          <div className="magic-card">
            <div className="card-icon red">DMI</div>
            <p className="card-label">Logo Design</p>
          </div>
          <div className="magic-card">
            <div className="card-icon gradient"></div>
            <p className="card-label">Social Media</p>
          </div>
          <div className="magic-card">
            <div className="card-icon website"></div>
            <p className="card-label">Website</p>
          </div>
        </div>
        <div className="status-pill">
          <span className="dot"></span>
          Creating magic...
        </div>
      </div>

      {/* Bottom Icons Row */}
      <div className="features-row">
        <div className="feature-item">
          <div className="feature-icon yellow"></div>
          <p className="feature-title">Upload Brand Assets</p>
          <p className="feature-desc">Drop your logo & brand guidelines</p>
        </div>
        <div className="feature-item">
          <div className="feature-icon pink"></div>
          <p className="feature-title">AI Analysis</p>
          <p className="feature-desc">Intelligent design system generation</p>
        </div>
        <div className="feature-item">
          <div className="feature-icon green"></div>
          <p className="feature-title">Launch-Ready Content</p>
          <p className="feature-desc">Website, socials, apps — instantly</p>
        </div>
      </div>
    </div>
  );
}
