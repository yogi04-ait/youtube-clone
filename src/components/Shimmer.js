import React from "react";

const Shimmer = () => {
  return (
    <div>
      {Array(20)
        .fill("")
        .map((_e, index) => (
          <div key={index} className="shimmer-container">
            <div className="shimmer-box w-full h-80 rounded-lg mb-4"></div>
            <div className="shimmer-box w-full h-80 rounded-lg mb-4"></div>
            <div className="shimmer-box w-full h-80 rounded-lg mb-4"></div>
          </div>
        ))}
    </div>
  );
};

export default Shimmer;
