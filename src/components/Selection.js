
import React,{useState} from 'react';

const Selection=(props)=>{
  const {id,nextBackground,applyColor,setSelectionStyle,selected}=props;
  console.log("HI",props);
  const [buttonStyle, setButtonStyle] = useState({});
 // let [bg,setbg]=useState(nextBackground);
 console.log(nextBackground.id);
 console.log(id);

 const handleClick = (e) => {
  applyColor({ id: id, background: nextBackground.background });
  console.log("this",e.target.id);
  setButtonStyle({ background: nextBackground.background });

  
  
};

 

  return(
    <button id={id} style={buttonStyle}  className="fix-box" onClick={handleClick}>
      Selection
    </button>
  )

}

export default Selection;

