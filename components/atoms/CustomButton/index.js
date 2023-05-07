import React from 'react';
import customButton from './custom-button.module.scss'


const CustomButton = ({buttonProperties}) => {

  return (
    <div>      
      <input
        type="button"
        value={buttonProperties.name}
        onClick={buttonProperties.onClick}
        className={customButton.customButton}
      />     
    </div>
  );

}

export default CustomButton;