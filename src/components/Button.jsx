import React from 'react'

const Button = (props) => {
  return (
    <div className='mx-2'>

        <button className="bg-gray-200 hover:bg-gray-700 text-black font-bold py-2 px-4 border border-gray-200 hover:border-gray-700 hover:text-white rounded-xl">
          {props.name}
        </button>
    </div>
  )
}

export default Button