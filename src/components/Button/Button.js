import React from "react";
import propTypes from "prop-types"
import './button.scss'

// sb ui controls default is from argument of Button Component 
const Button =({bgColor= 'none', fontSize=12, border="none" , padding=5 , fontWeight= 300,content ,clickHandler=()=>{}})=>{
    // const {bgColor= 'none', fontSize=12, border="none" , padding=5 , fontWeight= 300} = props
    const style = {
        backgroundColor: bgColor,
        fontSize: fontSize,
        border: border,
        padding: `${padding}px`,
        fontWeight: fontWeight,
    }
    return <button style={style} onClick={clickHandler}>
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