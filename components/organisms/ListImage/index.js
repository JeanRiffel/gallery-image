import React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ListImageStyle from './list-image.module.scss';

const ListImage = ({imageList}) =>{

  const getListItems = () =>{                
    return imageList.map((item) => (
      <ImageListItem className={ListImageStyle.listItems} key={item.img}  >
        <img
          src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
          srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
          alt={item.title}
          loading="lazy"
        />
        <p className={ListImageStyle.title} > {item.title}</p>
      </ImageListItem>
    ))
  }

  return (
    
      <ImageList
        className={ListImageStyle.listimage}
      >
        {getListItems()}
      </ImageList>
    
  )
}

export default ListImage;
