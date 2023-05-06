import React, {useEffect, useState} from 'react';
import ListRandomImages from '../components/template/ListRandomImages';

export default function Home() {
  
  const [imageList,  setImageList] = useState([]);
  const [changeField, setChangeField] = useState('');

  const getImageList = async () => {    
    
    const response = await fetch("/api/images");
    const data = await response.json();    

    setImageList(data);
  };

  const buttonProperties = ()=>{
    return {
      name: 'Search',
      onClick: getImageById
    }
  }

  const fieldProperties = ()=>{
    return {
      onChange: onChangeField      
    }
  }

  const getImageById = async ()=>{    
    const result = imageList.filter(item => item.title === changeField);    

    if (result.length === 0){
      await getImageList();
      return;
    }

    setImageList(result);        
  }

  const onChangeField = (e)=>{
    setChangeField(e.target.value);
  }

  useEffect(() => {
    getImageList()    
  }, []);
 
  return (
    <ListRandomImages 
      imageList={imageList} 
      buttonProperties={buttonProperties()}
      fieldProperties={fieldProperties()}
    />
  )
}
