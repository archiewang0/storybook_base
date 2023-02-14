import React from "react";
import propTypes from "prop-types"
import './button.scss'

// sb ui controls default is from argument of Button Component 
const Button =({bgColor, fontSize, border , padding=5 , fontWeight= 300,content ,onClickHandler=()=>{}})=>{
    // const {bgColor= 'none', fontSize=12, border="none" , padding=5 , fontWeight= 300} = props
    const style = {
        backgroundColor: bgColor,
        fontSize: fontSize,
        border: border,
        padding: `${padding}px`,
        fontWeight: fontWeight,
    }
    return <button style={style} onClick={onClickHandler}>
        {content}
    </button>
}

Button.propTypes={
    bgColor: propTypes.string,
    fontSize: propTypes.number,
    border: propTypes.string,
    padding: propTypes.number,
    fontWeight: propTypes.number,
    content: propTypes.string
}
export default Button;