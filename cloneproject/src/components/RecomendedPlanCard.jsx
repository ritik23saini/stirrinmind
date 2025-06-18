import React from 'react'
import { FaPuzzlePiece } from "react-icons/fa6";
import { FaChartPie } from "react-icons/fa";
import { FaBook } from "react-icons/fa";
import { IoNavigate } from "react-icons/io5";
import { Link } from 'react-router-dom';

const RecomendedPlanCard = () => {
  return (
    <div className='  border-2 p-10 text-center m-2 border-blue-500'>
      <h3 className='bg-blue-600 inline px-3  hover:text-white hover: cursor-pointer'>RECOMMENDED PLANS</h3>
      <h3 className='hover:text-blue-500 hover: cursor-pointer'><strike>5999</strike><sup>$</sup></h3>
      <h5 className='text-red-600 font-bold'>16%off</h5>
      <h4 className='text-white font-bold inline-block px-2 py-1 rounded-xl bg-blue-500'>4999 <sup>$</sup></h4>
      <div className='flex flex-col gap-2 m-5'>

      <div className="flex text-gray-600 border-b-black border-2 border-white">
        <FaPuzzlePiece />
        <Link className=' '><span className='text-black'> 2 </span> PSYCHOMETRIC CAREER TEST</Link>
        <IoNavigate />

      </div>

      <div className="flex text-gray-600 border-b-black border-2 border-white">
        <FaChartPie />
        <Link><span className='text-black'> 2 </span> PSYCHOMETRIC CAREER REPORT</Link>
        <IoNavigate />
      </div>

      <div className="flex text-gray-600 border-b-black border-2 border-white">
        <FaChartPie />
        <Link> <span className='text-black'> 1 </span> VIDEO CAREER COUNSELLING SESSION</Link>
        <IoNavigate />
      </div>


      <div className="flex text-gray-600 border-b-black border-2 border-white">
        <FaBook />
        <Link> E-BOOK SELF CAREER COUNSELLING</Link>
        <IoNavigate />

      </div>
      <div className="flex text-gray-600 border-b-black border-2 border-white">
        <FaBook />
        <Link> E-BOOK NEW AGE CARRERS</Link>
        <IoNavigate />

      </div>
      <button className='border-2 p-2 m-4'>GET STARTED</button>
    </div>
    </div>
  )
}

export default RecomendedPlanCard