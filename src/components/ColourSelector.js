import React,{useState} from 'react';

const ColourSelector = (props) => {
  const { config, selectNextBackground } = props
  const { label,background,classname } = config;
 
  return (
    <button className={classname} onClick={() =>{console.log(config); selectNextBackground({background: background})}}>
      
      {label}
    </button>
   
    
  )
}
export default ColourSelector;