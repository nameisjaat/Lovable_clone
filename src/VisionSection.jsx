import React from "react";
import "./VisionSection.css";

export default function VisionSection() {
  return (
    <section className="vision-section">
      <div className="vision-badge">
        💡 Our Vision
      </div>
      <h2 className="vision-heading">
        Built by <span className="bold">Designers</span>,{" "}
        <span className="highlight">For Designers</span>
      </h2>
      <p className="vision-subtext">
        After witnessing countless startups struggle with design bottlenecks, we built the<br />
        AI solution we wished existed.
      </p>
    </section>
  );
}
