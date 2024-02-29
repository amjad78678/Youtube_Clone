import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { closeMenu, toggleSideBar } from '../Redux/appSlice'
import { useParams, useSearchParams } from 'react-router-dom'

const WatchPage = () => {


   const [searchParams]=useSearchParams()

   let vedioId=searchParams.get('v')

 const dispatch = useDispatch();

   useEffect(()=>{

   dispatch(closeMenu())

   },[])

  return (
    <div className="col-span-11 ps-28 py-5">
      <iframe
        width="1200"
        height="600"
        className='rounded-xl'
        src={`https://www.youtube.com/embed/${vedioId}?si=myB6CoRc4HUDcFqQ`}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
    </div>
  );
}

export default WatchPage