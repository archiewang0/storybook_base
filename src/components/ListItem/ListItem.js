
import React from 'react';
import PropTypes from "prop-types";
const ListItem = ({children , fontSize = '12px' , border = "none"})=>{
    const style = {
        fontSize,
        border,
    }
    return <li style={style}>{children}</li>
}

ListItem.propTypes = {
    fontSize: PropTypes.string,
    border: PropTypes.string
}

export default ListItem