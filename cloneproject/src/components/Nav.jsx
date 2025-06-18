import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
    return (
        <div className='w-full shadow-lg flex justify-around items-center gap-2'>
            <h2 className='text-2xl font-bold'>CareerGuide.com</h2>

            <div className='flex justify-evenly gap-3'> <Link> Class 10 </Link>
                <Link> Class 11-12 </Link>

                <Link>Counsellor </Link>
                <Link> Professionals </Link>
                <Link> Study Aborad </Link>
                <Link> Psychometric test </Link>
                <Link > Pricing </Link>
                <Link> Courses </Link>
                <p>918800442358</p>
            </div>
            <div className=' text-lg font-bold flex justify-center gap-3'>
                <Link> Signup</Link>
                <Link> Login</Link>

            </div>

        </div>
    )
}

export default Nav