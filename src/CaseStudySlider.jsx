import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import './CaseStudySlider.css';

const caseStudies = [
  {
    title: "Health & Wellness",
    description: "Personalized content campaigns that drove 250% increase in customer acquisition.",
    color: "green",
  },
  {
    title: "Food & Hospitality",
    description: "Menu design and restaurant branding that increased orders by 180% within first month.",
    color: "red",
  },
  {
    title: "Beauty & Cosmetics",
    description: "Instagram-ready product launches with consistent brand aesthetics across all touchpoints.",
    color: "pink",
  },
];

const stats = [
  { value: "500+", label: "Brands Transformed" },
  { value: "$50M+", label: "Revenue Generated" },
  { value: "98%", label: "Client Satisfaction" },
  { value: "24h", label: "Average Delivery" },
];

const CaseStudySlider = () => {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -320 : 320,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className="slider-container">
      {/* Cards */}
      <div className="card-wrapper" ref={scrollRef}>
        {caseStudies.map((study, index) => (
          <motion.div
            key={index}
            className={`case-card ${study.color}`}
            whileHover={{ y: -10, boxShadow: "0px 10px 20px rgba(0,0,0,0.15)" }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <h3>{study.title}</h3>
            <p>{study.description}</p>
            <button className="case-btn">View Full Case Study →</button>
          </motion.div>
        ))}
      </div>

      {/* Arrows */}
      <div className="arrow-wrapper">
        <button className="arrow" onClick={() => scroll('left')}>&larr;</button>
        <button className="arrow" onClick={() => scroll('right')}>&rarr;</button>
      </div>

      {/* Stats Section */}
      <div className="stats-wrapper">
        {stats.map((stat, index) => (
          <div className="stat-card" key={index}>
            <div className="stat-value">{stat.value}</div>
            <div className="stat-label">{stat.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CaseStudySlider;
