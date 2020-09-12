import React from 'react';
import './Button.css'

const Button = (props) => {
    return (
        <a href={props.link} target="_blank" rel="noopener noreferrer" >
            <button className={props.variant}>
                {props.title}
            </button>
        </a>
    )
}

export default Button;