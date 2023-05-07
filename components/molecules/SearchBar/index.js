import React  from 'react';
import CustomButton from '../../atoms/CustomButton';
import Field from '../../atoms/Field';
import SearchBarStyle from './search-bar.module.scss';

const SearchBar = ({buttonProperties, fieldProperties})=> {
  return (        
    <div className={SearchBarStyle.searchbar}>
      <Field fieldProperties={fieldProperties}/>
      <CustomButton buttonProperties={buttonProperties}/>
    </div>    
  )
}

export default SearchBar;