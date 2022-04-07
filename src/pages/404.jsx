import React from 'react'
import { NavLink } from 'react-router-dom'

function NotFound() {
    return (
        <div>
            <main className='h-screen w-full flex flex-col justify-center items-center bg-white'>
                <h1 className='text-9xl font-extrabold text-green-700 tracking-widest'>404</h1>
                <div className='bg-green-900 text-white px-2 text-sm rounded rotate-12 absolute'>
                    Page Not Found
                </div>
                <button className='mt-5'>
                    <NavLink to='/' className='relative inline-block text-sm font-medium text-white group active:text-white focus:outline-none focus:ring focus:ring-green-500'>
                        <span
                            className='absolute inset-0 transition-transform translate-x-0.5 translate-y-0.5 bg-green-700 group-hover:translate-y-0 group-hover:translate-x-0'
                        ></span>

                        <span className='relative block px-8 py-3 bg-green-900 border border-current'>
                            Go Home
                        </span>
                    </NavLink>
                </button>
            </main>
        </div>
    )
}

export default NotFound