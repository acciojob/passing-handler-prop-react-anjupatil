import React from 'react';

const ColourSelector = (props) => {
  const { config, selectNextBackground } = props
  const {label, background } = config;
  return (
    <button className={className} onClick={() => selectNextBackground({background: background})}>
      {label}
    </button>
  )
}
export default ColourSelector;
