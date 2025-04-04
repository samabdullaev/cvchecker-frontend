"use client";

import { useState } from "react";

const FaqItem = ({ question, answer, defaultOpen = false }) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);
  return (
    <div className="accordion-item border-0 bg-gradient-light">
      <h2 className="accordion-header">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={`accordion-button ${isOpen ? "" : "collapsed"}`}
        >
          {question}
        </button>
      </h2>
      <div className={`accordion-collapse ${isOpen ? "show" : "collapse"}`}>
        <div className="accordion-body">{answer}</div>
      </div>
    </div>
  );
};

export default FaqItem;
