import React from 'react';

const CustomButton = ({buttonProperties}) => {

  return (
    <div>      
      <input
        type="button"
        value={buttonProperties.name}
        onClick={buttonProperties.onClick}
      />     
    </div>
  );

}

export default CustomButton;