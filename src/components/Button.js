import React from 'react';
import './Button.css'

// ICONS
import LocalGroceryStoreIcon from '@material-ui/icons/LocalGroceryStore';

const Button = ({link, title, variant, color, size, disableShadow}) => {

    return (
        <a href={link} target="_blank" rel="noopener noreferrer" >
            <button 
                className={`${variant} color--${color} ${size} ${disableShadow}`}
            
            >
                {title}
            </button>
        </a>
    )
}

Button.defaultProps = {
    variant: 'default',
    size: 'md',
    color: 'primary'
}

export default Button;