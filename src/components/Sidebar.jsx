import React from 'react'

const Sidebar = () => {
  return (
    <div className="col-span-1 text-xl">
      <ul>
        <li className="flex">
          <div className="p-2 me-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-9 h-9"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
              />
            </svg>
          </div>
          <div className="py-4  text-gray-600">Home</div>
        </li>
        <li className="flex">
          <div className="p-2 me-4">
            <img
              className="w-9 h-9"
              src="https://i.pinimg.com/originals/17/d2/18/17d21878c22fe49e7e4752eecaa36541.png"
              alt=""
            />
          </div>
          <div className="py-2 text-gray-600">Shorts</div>
        </li>
        <li className="flex">
          <div className="p-2 me-4">
            <img
              className="w-9 h-9"
              src="https://png.pngtree.com/element_our/png/20181213/video-vector-icon-png_267481.jpg"
              alt=""
            />
          </div>
          <div className="py-4 text-gray-600">Vedios</div>
        </li>
        <li className="flex">
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

      <ul>
        <h1 className="font-bold mt-5">Subscriptions</h1>
        <li>Music</li>
        <li>Sports</li>
        <li>Gaming</li>
        <li>Movies</li>
      </ul>

      <ul>
        <h1 className="font-bold mt-5">Watch Later</h1>
        <li>Music</li>
        <li>Sports</li>
        <li>Gaming</li>
        <li>Movies</li>
      </ul>
    </div>
  );
}

export default Sidebar