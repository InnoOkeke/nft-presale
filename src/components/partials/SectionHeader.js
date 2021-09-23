import React from "react";

const SectionHeader = ({ heading, slogan }) => {
  return (
    <div>
      <div class="section-header">
        <h2>{heading}</h2>
        <p>{slogan}</p>
      </div>
    </div>
  );
};

export default SectionHeader;
