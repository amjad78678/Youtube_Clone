import React from 'react'

const Comment = ({data}) => {
       const { name, text, replies } = data;

  return (
    <div className="flex bg-gray-50 rounded-xl w-8/12 ">
      <div className='mx-3 flex my-3'>
        <img
          className="w-10 h-10 m-5"
          src="https://w7.pngwing.com/pngs/178/595/png-transparent-user-profile-computer-icons-login-user-avatars-thumbnail.png"
          alt="https://w7.pngwing.com/pngs/178/595/png-transparent-user-profile-computer-icons-login-user-avatars-thumbnail.png"
        />

        <div className="mt-5">
          <p className="font-bold">{name}</p>
          <p>{text}</p>
        </div>
      </div>
    </div>
  );
}

export default Comment