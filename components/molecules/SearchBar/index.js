import React  from 'react';
import CustomButton from '../../atoms/CustomButton';
import Field from '../../atoms/Field';

const SearchBar = ({buttonProperties, fieldProperties})=> {
  return (
    <>      
      <Field fieldProperties={fieldProperties}/>
      <CustomButton buttonProperties={buttonProperties}/>
    </>
  )
}

export default SearchBar;