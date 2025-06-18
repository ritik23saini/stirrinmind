import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
    return (
        <div className='w-full h-[50px] shadow-lg flex justify-around items-center gap-2 sticky top-0 z-50 bg-white'>
            <h2 className='text-2xl font-bold'>CareerGuide.com</h2>

            <div className='flex justify-evenly gap-3'>
                <Link>Class 10</Link>
                <Link>Class 11-12</Link>
                <Link>Counsellor</Link>
                <Link>Professionals</Link>
                <Link>Study Abroad</Link>
                <Link>Psychometric test</Link>
                <Link>Pricing</Link>
                <Link>Courses</Link>
                <p className='text-blue-400'>918800442358</p>
            </div>

            <div className='text-lg font-bold flex justify-center gap-3'>
                <Link>Signup</Link>
                <Link>Login</Link>
            </div>
        </div>
    )
}

export default Nav