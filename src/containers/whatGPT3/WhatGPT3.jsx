import React from "react";
import Features from "../features/Features";
import "./whatGPT3.css";

const WhatGPT3 = () => {
  return (
    <div className="gpt__wgpt section_margin" id="wgpt">
      <div className="gpt__wgpt-feature">
        <Features />
      </div>
      <div className="gpt__wgpt-heading">
        <h1 className="gradient_text">
          The possibilities are beyond your imagination
        </h1>
        <p>Explore The Library</p>
      </div>
      <div className="gpt__wgpt-container">
        <Features />
        <Features />
        <Features />
      </div>
    </div>
  );
};

export default WhatGPT3;
