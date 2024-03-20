import React from 'react'

const ChatMessage = ({name,message}) => {
  return (
    <div className="flex my-2 py-2 cursor-pointer hover:bg-gray-200">
      <img
        className="rounded-full mx-2"
        src="https://yt4.ggpht.com/C8ZWOpS0YcPs8m5oiWhuWNtN-cwykWjVMgocSC7FaPjVzwC-he-fBRgq00QWKOSp8VaUw7xm=s32-c-k-c0x00ffffff-no-rj"
        alt="useImg"
      />

      <span className="font-bold text-gray-400 mx-2">{name}</span>

      <span className="mx-1 text-sm">{message}</span>
    </div>
  );
}

export default ChatMessage
