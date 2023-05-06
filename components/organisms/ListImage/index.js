import React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';

const ListImage = ({imageList}) =>{

  const getListItems = () =>{                
    return imageList.map((item) => (
      <ImageListItem key={item.img}>
        <img
          src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
          srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
          alt={item.title}
          loading="lazy"
        />
        <p>{item.title}</p>
      </ImageListItem>
    ))
  }

  return (
    <>
      <ImageList
        sx={{ width: 500, height: 550 }}
        variant="quilted"
        cols={4}
        rowHeight={121}
      >
        {getListItems()}
      </ImageList>
    </>  
  )
}

export default ListImage;
