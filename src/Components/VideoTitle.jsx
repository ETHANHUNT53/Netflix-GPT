import React from 'react'
import { FaPlay } from "react-icons/fa";
import { IoIosInformationCircleOutline } from "react-icons/io";
const VideoTitle = ({title,overview}) => {
return (
    <div className='pt-[20%] px-24 absolute text-white bg-gradient-to-r from-black w-screen aspect-video'>
        <h1 className='text-6xl font-bold'>{title}</h1>
        <p className='py-6 text-lg w-1/3'>{overview}</p>
        <div className='flex'>
            <button className='bg-white text-black p-4 px-16 text-xl rounded-lg hover:bg-opacity-80 flex items-center'>
                <FaPlay className='mr-2 ' /> Play
            </button>
            <button className='ml-2 bg-gray-400 flex items-center text-white p-4 px-12 text-xl bg-opacity-50 rounded-lg hover:bg-gray-600 hover:bg-opacity-35'>
                <IoIosInformationCircleOutline className='mr-2 text-3xl '/>More Info</button>
        </div>
    </div>
)
}

export default VideoTitle