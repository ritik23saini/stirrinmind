import React from 'react'
import { FaPuzzlePiece } from "react-icons/fa6";
import { FaChartPie } from "react-icons/fa";
import { FaBook } from "react-icons/fa";
import { IoNavigate } from "react-icons/io5";
import { Link } from 'react-router-dom';
const PopularplanCard = () => {
  return (

    <div className=' max-w-[400px] border-2 p-10 text-center m-2 bg-blue-400'>
      <h3 className='bg-white inline px-3  hover:text-blue-400 hover: cursor-pointer'>OUR MOST POPULAR CAREER PLAN</h3>
      <h3 className='hover:text-blue-500 hover: cursor-pointer'><strike>12999</strike><sup>$</sup></h3>
      <h5 className='text-red-600 font-bold'>24%off</h5>
      <h4 className='text-blue-400 font-bold inline-block px-2 py-1 rounded-xl bg-white hover:text-blue-400'>9999 <sup>$</sup></h4>

      <div className='flex flex-col gap-2 m-5'>
        <div className="flex text-gray-600 border-b-black border-2 border-blue-400">
          <FaPuzzlePiece />
          <Link className=' '><span className='text-black'> 3 </span> PSYCHOMETRIC CAREER TEST</Link>
          <IoNavigate />

        </div>

        <div className="flex text-gray-600 border-b-black border-2 border-blue-400">
          <FaChartPie />
          <Link><span className='text-black'> 3 </span> PSYCHOMETRIC CAREER REPORT</Link>
          <IoNavigate />
        </div>

        <div className="flex text-gray-600 border-b-black border-2 border-blue-400">
          <FaChartPie />
          <Link> <span className='text-black'> 3 </span> VIDEO CAREER COUNSELLING SESSION</Link>
          <IoNavigate />
        </div>


        <div className="flex text-gray-600 border-b-black border-2 border-blue-400">
          <FaBook />
          <Link> E-BOOK SELF CAREER COUNSELLING</Link>
          <IoNavigate />

        </div>
        <div className="flex text-gray-600 border-b-black border-2 border-blue-400">
          <FaBook />
          <Link> E-BOOK NEW AGE CARRERS</Link>
          <IoNavigate />

        </div>
        <div className="flex text-gray-600 border-b-black border-2 border-blue-400">
          <FaBook />
          <Link> E-BOOK NEW AGE TECHNOLOGY</Link>
          <IoNavigate />

        </div>
        <div className="flex text-gray-600 border-b-black border-2 border-blue-400">
          <FaBook />
          <Link> E-BOOK DIGITAL CAREER</Link>
          <IoNavigate />

        </div>
        <button className='border-2 p-2 m-4'>GET STARTED</button>
      </div>
    </div>
  )
}

export default PopularplanCard