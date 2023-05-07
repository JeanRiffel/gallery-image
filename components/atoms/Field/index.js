import React from 'react';
import field from './field.module.scss'

const Field = ({fieldProperties}) => {

  return (    
    <input
      type="text"      
      onChange={fieldProperties.onChange} 
      className={field.field}     
    >      
    </input>
    
  )

}

export default Field;