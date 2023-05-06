import React from 'react';
import ListImage from '../organisms/ListImage';
import SearchBar from '../molecules/SearchBar'

const ListRandomImages = ({imageList, buttonProperties, fieldProperties}) =>{

  return (
    <>
      <SearchBar buttonProperties={buttonProperties} fieldProperties={fieldProperties}>        
      </SearchBar>
      <ListImage imageList={imageList} >        
      </ListImage>
    </>
  )
};

export default ListRandomImages;
