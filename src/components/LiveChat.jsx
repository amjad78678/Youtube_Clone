import React, { useEffect, useState } from 'react'
import ChatMessage from './ChatMessage'
import { addMessage } from '../Redux/chatSlice';
import { useDispatch, useSelector } from 'react-redux';
import store from '../Redux/store';





const LiveChat = () => {


  const dispatch = useDispatch()

  const [chat,setChat] = useState(null)

  const [liveMessage,setLiveMessage]=useState(null)
  const chatMessages = useSelector((store) => store.chat.messages)

  const [currentIndex, setCurrentIndex] = useState(0);


  const handleClickMessage=()=>{

    dispatch(addMessage({
      id: 1,
      name: 'amjadali',
      message: liveMessage
    }))

setLiveMessage('')

  }

  async function getLiveChatData() {
    const data = await fetch('https://dummyjson.com/comments');
    const json = await data.json();
    return json.comments;
  }

  useEffect(() => {
    const fetchData = async () => {
      const comments = await getLiveChatData();
      setChat(comments);
    };

    fetchData();
  }, []);


  useEffect(() => {
    const timer = setInterval(() => {
      if (chat.length > 0) {
        const currentDetail = chat[currentIndex];
        dispatch(addMessage({
          id: 1,
          name: currentDetail.user.username,
          message: currentDetail.body
        }));
        setCurrentIndex((currentIndex + 1) % chat.length); // Reset index to 0 when it reaches the end
      }
    }, 500);

    return () => clearInterval(timer);
  }, [chat, currentIndex, dispatch]);


  return (
    <>
    <div className='w-full h-[600px] px-5 border border-gray-200 shadow-md rounded-xl overflow-y-auto flex flex-col-reverse'>

    {

      chatMessages&&chatMessages.map((comment,i)=>
        
        <ChatMessage key={i} name={comment.name} message={comment.message} />
      )
    }

    </div>
    <div className='flex my-2'>
         <input value={liveMessage} onChange={(e)=>setLiveMessage(e.target.value)} className='py-2 px-2 border-2 border-gray-200  rounded-md w-full' type="text" placeholder='chat...' /><span><svg onClick={handleClickMessage} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 my-2 mx-1 cursor-pointer">
          <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 0 1 .865-.501 48.172 48.172 0 0 0 3.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z" />
        </svg>
</span>
    </div>
    </>
  )
}

export default LiveChat