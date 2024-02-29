import React from 'react'
import { Link } from 'react-router-dom';

const VedioCard = ({info}) => {

    console.log('info', info)

    const {snippet,statistics}=info

    const {channelTitle,title,thumbnails}=snippet;

  return (
    <div className="p-2 m-2 shadow-lg w-3/12 mx-auto">
      <Link to={'/watch?v='+info.id}>
        <img
          className="rounded-lg w-full"
          src={thumbnails.medium.url}
          alt="youtube thumbnail"
        />
      </Link>
      <ul>
        <li className="font-bold py-2">{title}</li>
        <li className="text-gray-600">{channelTitle}</li>
        <li className="text-gray-600">{statistics.viewCount} views</li>
      </ul>
    </div>
  );
}

export default VedioCard