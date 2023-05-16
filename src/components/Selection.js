
import React from 'react';

const Selection = ({ applyColor, nextBackground }) => {
  const handleClick = () => {
    applyColor(nextBackground);
  };

  return (
    <div className="selection">
      <div
        className="box"
        style={{ background: nextBackground.background }}
        onClick={handleClick}
      ></div>
      <button onClick={handleClick}>Apply Color</button>
    </div>
  );
};

export default Selection;
