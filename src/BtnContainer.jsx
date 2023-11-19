import React from "react";

const BtnContainer = ({ data, currentItem, setCurrentItem }) => {
  return (
    <div className="btn-container">
      {data.map((item, index) => {
        return (
          <button
            key={item.id}
            className={index === currentItem ? "job-btn active-btn" : "job-btn"}
            onClick={() => setCurrentItem(index)}
          >
            {item.company}
          </button>
        );
      })}
    </div>
  );
};

export default BtnContainer;
