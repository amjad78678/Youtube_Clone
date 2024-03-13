import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { closeMenu, toggleSideBar } from '../Redux/appSlice'
import { useParams, useSearchParams } from 'react-router-dom'
import CommentContainer from './CommentContainer'
import LiveChat from './LiveChat'

const WatchPage = () => {


   const [searchParams]=useSearchParams()

   let vedioId=searchParams.get('v')

 const dispatch = useDispatch();

   useEffect(()=>{

   dispatch(closeMenu())

   },[])

  return (
    <div >
      <div className=" ps-28 pt-5">
        <div className="flex">
          <iframe
            width="1200"
            height="600"
            className="rounded-xl w-8/12"
            src={`https://www.youtube.com/embed/${vedioId}?si=myB6CoRc4HUDcFqQ`}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>

          <div className='w-4/12 p-5 m-5'>
            <LiveChat />
          </div>
        </div>
      </div>

      <div className="col-span-11 ps-28 pb-5">
        <CommentContainer />
      </div>
    </div>
  );
}

export default WatchPage