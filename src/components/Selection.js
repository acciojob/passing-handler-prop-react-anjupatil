
import React,{useState} from 'react';

const Selection=(props)=>{
  const {id,nextBackground,applyColor,setSelectionStyle}=props;
  console.log("HI",props);
  const [buttonStyle, setButtonStyle] = useState({});
  let [colorName,setColorName]=useState("");
 // let [bg,setbg]=useState(nextBackground);
 console.log(nextBackground.id);
 console.log(id);
 // Helper function to convert RGB value to color name
 const rgbToColorName = (rgbValue) => {
  const colorMap = {
    "rgb(34, 193, 195)": "blue",
    "rgb(221, 112, 18)": "orange",
    "rgb(44, 209, 88)": "green",
  };
  return colorMap[rgbValue] || "";
};


 const handleClick = (e) => {
  applyColor({ id: id, background: nextBackground.background });
  console.log("this",e.target.id);
  setButtonStyle({ background: nextBackground.background });
  setColorName(rgbToColorName(nextBackground.background));
  

  
  
};




 

  return(
    <button id={id} style={buttonStyle}  datatest-id={colorName} className="fix-box" onClick={handleClick}>
      Selection
    </button>
  )

}

export default Selection;

