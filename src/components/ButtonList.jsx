import React from 'react'
import Button from './Button'

 const buttonNames = [
   'All',
   'Gaming',
   'Trending',
   'Music',
   'Live',
   'Cricket',
   'Football',
   'Soccer',
   'Computers',
   'Trailers',
   'Playlists',
   'Cooking',
   'Valentines',
   'New to you',
 ];

const ButtonList = () => {
  return (
    <div className="flex">
      {buttonNames.map((name,index) => (
        <Button key={index} name={name} />
      ))}
    </div>
  );
}

export default ButtonList



