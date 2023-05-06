import React from 'react';

const Field = ({fieldProperties}) => {

  return (    
    <input
      type="text"      
      onChange={fieldProperties.onChange}      
    >      
    </input>
    
  )

}

export default Field;