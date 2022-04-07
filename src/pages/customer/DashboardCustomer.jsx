import React from 'react'

import { Footer, SidebarCustomer } from '../../components'

function DashboardCustomer() {
    return (
        <div className='dark:bg-gray-900 min-h-screen lg:overflow-x-auto overflow-x-hidden'>
            <SidebarCustomer />
            <div className='relative md:ml-64'>
                <section className='text-gray-300'>
                    <div className='container flex flex-col px-5 py-10 mx-auto lg:items-center'>
                        <div className='border-2 p-5 rounded-lg lg:w-2/4 md:w-1/2 w-full'>
                            <div className='flex justify-center items-center border-b'>
                                <h1 className='font-bold text-xl mb-2'>Kalkulator Konversi Heksadesimal</h1>
                            </div>
                            <form>
                                <div className='mt-2 flex flex-col'>
                                    <label htmlFor='Nominal' className='mb-2'>Nominal</label>
                                    <input type='text' id='nominal' className='w-full flex-1 bg-gray-white text-gray-800 placeholder-gray-400 border border-gray-300 focus:ring ring-blue-300 dark:ring-blue-500 rounded outline-none transition duration-100 px-3 py-2' required />
                                </div>
                                <div className='mt-2 flex flex-col'>
                                    <label htmlFor='Konversi' className='mb-2'>Konversi</label>
                                    <select className='w-full flex-1 bg-gray-white text-gray-800 placeholder-gray-400 border border-gray-300 rounded outline-none transition duration-100 px-3 py-2'>
                                        <option value='biner'>Biner</option>
                                        <option value='oktal'>Oktal</option>
                                        <option value='desimal'>Desimal</option>
                                    </select>
                                </div>
                                <div className='mt-2 flex flex-col justify-end items-end'>
                                    <button type='submit' className='flex items-center px-5 py-2 font-semibold text-white transition duration-500 ease-in-out transform bg-blue-700 rounded-lg hover:bg-blue-800 focus:shadow-outline focus:outline-none focus:ring-2 ring-offset-current ring-offset-2'>
                                        Hitung Konversi
                                    </button>
                                </div>
                            </form>
                        </div>
                        <div className='border-2 p-5 mt-5 rounded-lg lg:w-2/4 md:w-1/2 w-full'>
                            <div className='flex justify-center items-center border-b'>
                                <h1 className='font-bold text-xl mb-2'>Hasil</h1>
                            </div>
                        </div>
                    </div>
                </section>
                <Footer />
            </div>
        </div>
    )
}

export default DashboardCustomer