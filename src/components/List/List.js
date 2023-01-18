
import React from 'react';
import PropTypes from "prop-types";
const List = ({children , fontSize = '12px' , border = "none"})=>{
    const style = {
        fontSize,
        border,
    }
    return <ul style={style}>{children}</ul>
}

List.propTypes = {
    fontSize: PropTypes.string,
    border: PropTypes.string
}

export default List