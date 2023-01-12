import React from "react";
import propTypes from "prop-types"


// 改變 component 的參數 default 可以設立在這裡
// 假如要用參數改變children狀態, 需要在 stories 的部分設立 argTypes
const Button =({children ,spacing= 1, wrap=false, direction="column", clickEvent =()=>{}
    // size bgc borderColor arg要改變 children狀態, 需要設立在 stories 使用 argTypes
    // size=50,bgc="none", borderColor="none"
})=>{
    const style = {
        display: "flex",
        gap: `${spacing * 0.25}rem`,
        flexWrap: wrap? "wrap" : "nowrap",
        flexDirection: direction,

    }   
    return <div style={style} 
        onClick={clickEvent}>
        {children}
    </div>
}

Button.propTypes={
    spacing: propTypes.number,
    wrap: propTypes.bool,
    direction: propTypes.oneOf(['row','column']),
    clickEvent: propTypes.func,
    // size: propTypes.number,
    // bgc: propTypes.string,
    // borderColor: propTypes.string,
}
export default Button;