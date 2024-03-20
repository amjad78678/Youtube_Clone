import React from 'react'
import { useSelector } from 'react-redux';
import store from '../Redux/store';
import { Link } from 'react-router-dom';

const Sidebar = () => {


  const isMenuOpen=useSelector((store)=>store.app.isSideBarOpen)

  //we can use early return pattern
   if(!isMenuOpen) return null;

   
  return (
    <div className="text-xl w-72 ps-4">
      <ul>
        <li className="rounded-xl flex hover:bg-gray-200 w-full">
          <div className="p-2 me-4 flex">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
              <path d="M11.47 3.841a.75.75 0 0 1 1.06 0l8.69 8.69a.75.75 0 1 0 1.06-1.061l-8.689-8.69a2.25 2.25 0 0 0-3.182 0l-8.69 8.69a.75.75 0 1 0 1.061 1.06l8.69-8.689Z" />
              <path d="m12 5.432 8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 0 1-.75-.75v-4.5a.75.75 0 0 0-.75-.75h-3a.75.75 0 0 0-.75.75V21a.75.75 0 0 1-.75.75H5.625a1.875 1.875 0 0 1-1.875-1.875v-6.198a2.29 2.29 0 0 0 .091-.086L12 5.432Z" />
            </svg>

        
          <div className="mx-6 text-md font-semibold text-gray-600">
            <Link to={`/`}>Home</Link>{' '}
          </div>
          </div>
        </li>
        <li className="rounded-xl flex hover:bg-gray-200 w-full">
          <div className="p-2 me-4">
            <img
              className="w-9 h-9"
              src="https://i.pinimg.com/originals/17/d2/18/17d21878c22fe49e7e4752eecaa36541.png"
              alt=""
            />
          </div>
          <div className="py-2 text-gray-600">Shorts</div>
        </li>
        <li className="rounded-xl flex hover:bg-gray-200 w-full">
          <div className="p-2 me-4">
            <img
              className="w-9 h-9"
              src="https://png.pngtree.com/element_our/png/20181213/video-vector-icon-png_267481.jpg"
              alt=""
            />
          </div>
          <div className="py-4 text-gray-600">Vedios</div>
        </li>
        <li className="rounded-xl flex hover:bg-gray-200 w-full">
          <div className="p-2 me-4">
            <img
              className="w-9 h-9"
              src="https://thumb.ac-illust.com/96/966dcf92df92f48f8e1de3df732da5ec_t.jpeg"
              alt=""
            />
          </div>
          <div className="py-4 text-gray-600">Live</div>
        </li>
      </ul>

      <ul className="px-3">
        <h1 className="font-semibold mt-5 mb-2 ">Subscriptions</h1>

        <li className='rounded-xl hover:bg-gray-200 w-full py-2'>Music</li>
        <li className='rounded-xl hover:bg-gray-200 w-full py-2'>Sports</li>
        <li className='rounded-xl hover:bg-gray-200 w-full py-2'>Gaming</li>
        <li className='rounded-xl hover:bg-gray-200 w-full py-2'>Movies</li>
      </ul>

      <ul className="px-3">
        <h1  className="font-semibold mt-5 mb-2">Watch Later</h1>
        <li className='rounded-xl hover:bg-gray-200 w-full py-2'>Music</li>
        <li className='rounded-xl hover:bg-gray-200 w-full py-2'>Sports</li>
        <li className='rounded-xl hover:bg-gray-200 w-full py-2'>Gaming</li>
        <li className='rounded-xl hover:bg-gray-200 w-full py-2'>Movies</li>
      </ul>

      <ul className="px-3">
        <h1 className="font-semibold mt-5 mb-2">Explore</h1>
        <li  className='rounded-xl hover:bg-gray-200 w-full py-2'>Trending</li>
        <li  className='rounded-xl hover:bg-gray-200 w-full py-2'>Shopping</li>
        <li  className='rounded-xl hover:bg-gray-200 w-full py-2'>Music</li>
        <li  className='rounded-xl hover:bg-gray-200 w-full py-2'>News</li>
      </ul>
    </div>
  );
}

export default Sidebar