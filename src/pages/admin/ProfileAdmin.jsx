import React, { useState } from 'react'
import { Footer, SidebarAdmin } from '../../components'

function ProfileAdmin() {
    const [name, setName] = useState('')
    const [role, setRole] = useState('')
    const [photo, setPhoto] = useState('')

    return (
        <div className='dark:bg-gray-900 min-h-screen lg:overflow-x-auto overflow-x-hidden'>
            <SidebarAdmin />
            <div className='relative md:ml-64'>
                <section>
                    <div className='container flex flex-col px-5 py-10 mx-auto lg:items-center'>
                        <div className='border-2 p-5 rounded-lg lg:w-2/4 md:w-1/2 w-full'>
                            <div className='flex justify-center items-center border-b'>
                                <h1 className='font-bold text-xl mb-2'>Update Profile</h1>
                            </div>
                            <form>
                                <div className='mt-2 flex flex-col'>
                                    <label htmlFor='Name' className='mb-2'>Nama Patugas</label>
                                    <input type='text' id='name' className='w-full flex-1 bg-gray-white text-gray-800 placeholder-gray-400 border border-gray-300 focus:ring ring-green-300 dark:ring-green-500 rounded outline-none transition duration-100 px-3 py-2' required />
                                </div>
                                <div className='mt-2 flex flex-col'>
                                    <label htmlFor='Role' className='mb-2'>Role</label>
                                    <select className='w-full flex-1 bg-gray-white text-gray-800 placeholder-gray-400 border border-gray-300 rounded outline-none transition duration-100 px-3 py-2'>
                                        <option disabled selected>Pilih Role</option>
                                        <option value='superadmin'>Super Admin</option>
                                        <option value='admin'>Admin</option>
                                    </select>
                                </div>
                                <div className='mt-2 flex flex-col'>
                                    <label htmlFor='Photo' className='mb-2'>Foto Profil</label>
                                    <input type='text' id='photo' className='w-full flex-1 bg-gray-white text-gray-800 placeholder-gray-400 border border-gray-300 focus:ring ring-green-300 dark:ring-green-500 rounded outline-none transition duration-100 px-3 py-2' placeholder="ex: https://naufalakbar.me/images/avatar.jpg" required />
                                </div>
                                <div className='mt-2 flex flex-col justify-end items-end'>
                                    <button type='submit' className='flex items-center px-5 py-2 font-semibold text-white transition duration-500 ease-in-out transform bg-green-700 rounded-lg hover:bg-green-800 focus:shadow-outline focus:outline-none focus:ring-2 ring-offset-current ring-offset-2'>
                                        Update Data
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </section>
                <Footer />
            </div>
        </div>
    )
}

export default ProfileAdmin