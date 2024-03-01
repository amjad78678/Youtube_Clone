import React, { useEffect, useState } from 'react'
import { YOUTUBE_VIDEOS_API } from '../utils/constants'
import VedioCard from './VedioCard'
import Shimmer from './Shimmer'
import { Link } from 'react-router-dom'

const VideoContainer = () => {


  const [vedios,setVedios] = useState([])

  async function getVediosFromApi (){

    const response=await fetch(YOUTUBE_VIDEOS_API)
    const data=await response.json()
     
    setVedios(data.items)
  }

 
  useEffect(()=>{
    getVediosFromApi()
  },[])


  

  return vedios.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="flex flex-wrap">
      {vedios.map((vedio) => (
      
          <VedioCard key={vedio.id} info={vedio} />
       
      ))}
    </div>
  );
}

export default VideoContainer