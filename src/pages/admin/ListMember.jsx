import React from 'react'

import { Footer, SidebarAdmin } from '../../components'

function ListMember() {
    return (
        <div className='dark:bg-gray-900 min-h-screen lg:overflow-x-auto overflow-x-hidden'>
            <SidebarAdmin />
            <div className='relative md:ml-64'>
                <div className='container flex flex-col px-5 py-10 mx-auto lg:items-center'>
                    {/* <!-- component --> */}
                    <table class="border-collapse w-full">
                        <thead>
                            <tr>
                                <th class="p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 hidden lg:table-cell">Company name</th>
                                <th class="p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 hidden lg:table-cell">Country</th>
                                <th class="p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 hidden lg:table-cell">Status</th>
                                <th class="p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 hidden lg:table-cell">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr class="bg-white lg:hover:bg-gray-100 flex lg:table-row flex-row lg:flex-row flex-wrap lg:flex-no-wrap mb-10 lg:mb-0">
                                <td class="w-full lg:w-auto p-3 text-gray-800 text-center border border-b block lg:table-cell relative lg:static">
                                    <span class="lg:hidden absolute top-0 left-0 bg-green-200 px-2 py-1 text-xs font-bold uppercase">Company name</span>
                                    KnobHome
                                </td>
                                <td class="w-full lg:w-auto p-3 text-gray-800 border border-b text-center block lg:table-cell relative lg:static">
                                    <span class="lg:hidden absolute top-0 left-0 bg-green-200 px-2 py-1 text-xs font-bold uppercase">Country</span>
                                    German
                                </td>
                                <td class="w-full lg:w-auto p-3 text-gray-800 border border-b text-center block lg:table-cell relative lg:static">
                                    <span class="lg:hidden absolute top-0 left-0 bg-green-200 px-2 py-1 text-xs font-bold uppercase">Status</span>
                                    <span class="rounded bg-red-400 py-1 px-3 text-xs font-bold">deleted</span>
                                </td>
                                <td class="w-full lg:w-auto p-3 text-gray-800 border border-b text-center block lg:table-cell relative lg:static">
                                    <span class="lg:hidden absolute top-0 left-0 bg-green-200 px-2 py-1 text-xs font-bold uppercase">Actions</span>
                                    <a href="#" class="underline">Edit</a>
                                    <a href="#" class="underline pl-6">Remove</a>
                                </td>
                            </tr>
                            <tr class="bg-white lg:hover:bg-gray-100 flex lg:table-row flex-row lg:flex-row flex-wrap lg:flex-no-wrap mb-10 lg:mb-0">
                                <td class="w-full lg:w-auto p-3 text-gray-800 text-center border border-b block lg:table-cell relative lg:static">
                                    <span class="lg:hidden absolute top-0 left-0 bg-green-200 px-2 py-1 text-xs font-bold uppercase">Company name</span>
                                    Squary
                                </td>
                                <td class="w-full lg:w-auto p-3 text-gray-800 border border-b text-center block lg:table-cell relative lg:static">
                                    <span class="lg:hidden absolute top-0 left-0 bg-green-200 px-2 py-1 text-xs font-bold uppercase">Country</span>
                                    Schweden
                                </td>
                                <td class="w-full lg:w-auto p-3 text-gray-800 border border-b text-center block lg:table-cell relative lg:static">
                                    <span class="lg:hidden absolute top-0 left-0 bg-green-200 px-2 py-1 text-xs font-bold uppercase">Status</span>
                                    <span class="rounded bg-green-400 py-1 px-3 text-xs font-bold">active</span>
                                </td>
                                <td class="w-full lg:w-auto p-3 text-gray-800 border border-b text-center block lg:table-cell relative lg:static">
                                    <span class="lg:hidden absolute top-0 left-0 bg-green-200 px-2 py-1 text-xs font-bold uppercase">Actions</span>
                                    <a href="#" class="underline">Edit</a>
                                    <a href="#" class="underline pl-6">Remove</a>
                                </td>
                            </tr>
                            <tr class="bg-white lg:hover:bg-gray-100 flex lg:table-row flex-row lg:flex-row flex-wrap lg:flex-no-wrap mb-10 lg:mb-0">
                                <td class="w-full lg:w-auto p-3 text-gray-800 text-center border border-b block lg:table-cell relative lg:static">
                                    <span class="lg:hidden absolute top-0 left-0 bg-green-200 px-2 py-1 text-xs font-bold uppercase">Company name</span>
                                    ghome
                                </td>
                                <td class="w-full lg:w-auto p-3 text-gray-800 border border-b text-center block lg:table-cell relative lg:static">
                                    <span class="lg:hidden absolute top-0 left-0 bg-green-200 px-2 py-1 text-xs font-bold uppercase">Country</span>
                                    Switzerland
                                </td>
                                <td class="w-full lg:w-auto p-3 text-gray-800 border border-b text-center block lg:table-cell relative lg:static">
                                    <span class="lg:hidden absolute top-0 left-0 bg-green-200 px-2 py-1 text-xs font-bold uppercase">Status</span>
                                    <span class="rounded bg-yellow-400 py-1 px-3 text-xs font-bold">inactive</span>
                                </td>
                                <td class="w-full lg:w-auto p-3 text-gray-800 border border-b text-center block lg:table-cell relative lg:static">
                                    <span class="lg:hidden absolute top-0 left-0 bg-green-200 px-2 py-1 text-xs font-bold uppercase">Actions</span>
                                    <a href="#" class="underline">Edit</a>
                                    <a href="#" class="underline pl-6">Remove</a>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                {/* <section className='text-gray-300'>
                    <div className='container flex flex-col px-5 py-10 mx-auto lg:items-center'>
                        <div className='border-2 p-5 rounded-lg lg:w-2/4 md:w-1/2 w-full'>
                            <div className='flex justify-center items-center border-b'>
                                <h1 className='font-bold text-xl mb-2'>Kalkulator Konversi Heksadesimal</h1>
                            </div>
                            <form>
                                <div className='mt-2 flex flex-col'>
                                    <label htmlFor='Nominal' className='mb-2'>Nominal</label>
                                    <input type='text' id='nominal' className='w-full flex-1 bg-gray-white text-gray-800 placeholder-gray-400 border border-gray-300 focus:ring ring-green-300 dark:ring-green-500 rounded outline-none transition duration-100 px-3 py-2' required />
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
                                    <button type='submit' className='flex items-center px-5 py-2 font-semibold text-white transition duration-500 ease-in-out transform bg-green-700 rounded-lg hover:bg-green-800 focus:shadow-outline focus:outline-none focus:ring-2 ring-offset-current ring-offset-2'>
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
                </section> */}
                <Footer />
            </div>
        </div>
    )
}

export default ListMember