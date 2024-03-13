import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { toggleSideBar } from '../Redux/appSlice';
import { YOUTUBE_SUGGESTIONS_API } from '../utils/constants';
import Shimmer from './Shimmer';
import store from '../Redux/store';
import { cacheResults } from '../Redux/searchSlice';




const Head = () => {

const dispatch = useDispatch();

const handleToggleMenu = () => {

  dispatch(toggleSideBar())

};   

const [searchQuery,setSearchQuery]=useState(null)

const [searchSuggestions,setSearchSuggestions]=useState(null)


 const [showSuggestions, setShowSuggestions] = useState(false);


const searchCache=useSelector((store)=>store.search)



useEffect(()=>{

  //make an api call for every key press
  //if the diffrence between 2 api calls is < 200ms then declne the api call

 const timer= setTimeout(()=>{

  if(searchCache[searchQuery]){
    setSearchSuggestions(searchCache[searchQuery])
    
  }else{


    if(searchQuery!==null){
      getSearchSuggestions();

    }



  }
    
  },200)

  return ()=>{
    clearTimeout(timer);
  }

},[searchQuery])




const getSearchSuggestions=async ()=>{
  const data = await fetch(YOUTUBE_SUGGESTIONS_API + searchQuery);

  const json = await data.json();

  console.log('apicall',json)

  setSearchSuggestions(json[1]);

  //now need to update our search cache

  dispatch(
    cacheResults({
      [searchQuery]: json[1],
    }),
  );
}

  return  (
    <div className="grid grid-flow-col">
      <div className="flex col-span-1 my-2">
        <svg
          onClick={handleToggleMenu}
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-8 h-8 m-5 cursor-pointer"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
          />
        </svg>

        <img
          className="h-8 m-5"
          src="https://vectorseek.com/wp-content/uploads/2021/01/YouTube-Logo-Vector.png"
          alt="youtube_logo"
        />
      </div>
      <div className="col-span-10 m-5  mx-96 my-5 flex ">
        <div className="flex-1">
          <div className="flex">
            <div className="flex-grow relative">
              <input
                onChange={(event) => setSearchQuery(event.target.value)}
                onFocus={() => setShowSuggestions(true)}
                onBlur={() => setShowSuggestions(false)}
                value={searchQuery}
                type="relative text"
                className="h-12 w-full px-3 border border-gray-400 rounded-l-full shadow-lg"
                placeholder="Search"
              />

              <svg
                onClick={() => setSearchQuery('')}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-8 h-8 cursor-pointer text-gray-500 absolute right-0 top-2 "
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18 18 6M6 6l12 12"
                />
              </svg>
            </div>

            <button className="px-3 pt-1 border border-gray-400 rounded-r-full bg-gray-100">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-8 h-8 my-1 cursor-pointer  rounded-r-full"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                />
              </svg>
            </button>
          </div>
          {showSuggestions &&
            searchSuggestions &&
            searchSuggestions.length > 0 && (
              <div className="absolute  bg-white py-6 px-6 rounded-lg shadow-2xl w-4/12">
                <ul>
                  {searchSuggestions &&
                    searchSuggestions.map((suggestion, i) => (
                      <div key={i} className="flex hover:bg-gray-200">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="currentColor"
                          className="w-8 h-8 my-1 cursor-pointer  rounded-r-full me-2"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                          />
                        </svg>
                        <li className="my-2  font-semibold text-xl text-gray-600">
                          {suggestion}
                        </li>
                      </div>
                    ))}
                </ul>
              </div>
            )}
        </div>
      </div>

      {/* for suggestions of youtube search bar */}

      <div className="col-span-1 m-5">
        <button className="float-right">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-10 h-10 ms-10"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}

export default Head