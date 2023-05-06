import React, { useEffect, useState } from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';

const ImgList = () =>{

  const [imagesList,  setImageList] = useState([]);

  const getImageList = async () => {    
    
    const response = await fetch("/api/images");
    const data = await response.json();    

    setImageList(data);
  };


  useEffect(() => {
    getImageList()
  }, [getImageList] );


  const getListItems = () =>{           
    return imagesList.map((item) => (
      <ImageListItem key={item.img}>
        <img
          src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
          srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
          alt={item.title}
          loading="lazy"
        />
      </ImageListItem>
    ))
  }    
  

 
  return (
      <>         
        <ImageList
        sx={{ width: 500, height: 450 }}
        variant="quilted"
        cols={4}
        rowHeight={121}
      >
        {getListItems()}
      </ImageList>
    </>
  )
}


export default ImgList;


