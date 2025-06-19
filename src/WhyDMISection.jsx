import React from 'react';
import './WhyDMISection.css';

const features = [
  {
    icon: "🚀",
    title: "Democratize Design",
    desc: "Make professional-grade design accessible to every startup, regardless of budget or team size."
  },
  {
    icon: "⚡",
    title: "Accelerate Growth",
    desc: "Eliminate design bottlenecks that slow down product launches and marketing campaigns."
  },
  {
    icon: "🎯",
    title: "Ensure Consistency",
    desc: "Maintain brand coherence across all touchpoints with AI-powered design systems."
  }
];

const stats = [
  {
    value: "500+",
    label: "Startups Onboarded",
    sub: "In private beta"
  },
  {
    value: "50M+",
    label: "Designs Generated",
    sub: "Since launch"
  },
  {
    value: "99.8%",
    label: "Platform Uptime",
    sub: "Enterprise-grade SLA"
  },
  {
    value: "24h",
    label: "Avg. Brand Delivery",
    sub: "From brief to assets"
  }
];

const WhyDMISection = () => {
  return (
    <div className="why-dmi-section">
      <h2 className="why-title">Why DMI Exists</h2>
      <div className="why-dots">
        <span className="dot active"></span>
        <span className="dot"></span>
        <span className="dot"></span>
      </div>

      <div className="features">
        {features.map((item, i) => (
          <div key={i} className="feature-card">
            <div className="icon-box">{item.icon}</div>
            <h3>{item.title}</h3>
            <p>{item.desc}</p>
          </div>
        ))}
      </div>

      <hr className="divider" />

      <div className="stats">
        {stats.map((stat, i) => (
          <div key={i} className="stat-item">
            <div className="stat-value">{stat.value}</div>
            <div className="stat-label">{stat.label}</div>
            <div className="stat-sub">{stat.sub}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhyDMISection;
