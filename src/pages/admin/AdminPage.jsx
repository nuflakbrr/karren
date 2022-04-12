import React from 'react'
import { NavLink } from 'react-router-dom'

function AdminPage() {
    return (
        <div>
            <div class="bg-white py-6 sm:py-8 lg:py-12">
                <div class="max-w-screen-xl px-4 md:px-8 mx-auto">
                    {/* <!-- text - start --> */}
                    <div class="mb-10 md:mb-16">
                        <h2 class="text-gray-800 text-2xl lg:text-3xl font-bold text-center mb-4 md:mb-6">Selamat Datang di Halaman Admin!</h2>

                        <p class="max-w-screen-md text-gray-500 md:text-lg text-center mx-auto">Di halaman ini aku mau kamu jangan beritahu ke siapa-siapa ya! 🤫</p>
                    </div>
                    {/* <!-- text - end --> */}

                    <div class="grid sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-4 md:gap-6 xl:gap-8">
                        {/* <!-- article - start --> */}
                        <NavLink to="/admin/login" class="group w-full md:w-32 lg:w-48 h-48 md:h-full block self-start shrink-0 bg-gray-100 overflow-hidden relative">
                            <div class="flex flex-col md:flex-row items-start border rounded-lg overflow-hidden">
                                <div class="flex flex-col gap-2 p-4 lg:p-6">
                                    <span class="text-gray-400 text-sm">/admin/login</span>

                                    <h2 class="text-xl font-bold">
                                        <span class="hover:text-green-800 text-green-700 transition duration-100">Halaman Login Admin</span>
                                    </h2>

                                    <p class="text-gray-500">cuman halaman login kok.</p>

                                    <div>
                                        <span class="text-green-500 hover:text-green-600 active:text-green-700 font-semibold transition duration-100">Kunjungi Halaman 🚀</span>
                                    </div>
                                </div>
                            </div>
                        </NavLink>
                        {/* <!-- article - end --> */}

                        {/* <!-- article - start --> */}
                        <NavLink to="/admin/register" class="group w-full md:w-32 lg:w-48 h-48 md:h-full block self-start shrink-0 bg-gray-100 overflow-hidden relative">
                            <div class="flex flex-col md:flex-row items-start border rounded-lg overflow-hidden">
                                <div class="flex flex-col gap-2 p-4 lg:p-6">
                                    <span class="text-gray-400 text-sm">/admin/register</span>

                                    <h2 class="text-gray-800 text-xl font-bold">
                                        <span class="hover:text-green-800 text-green-700 transition duration-100">Halaman Register</span>
                                    </h2>

                                    <p class="text-gray-500">cuman halaman register kok.</p>

                                    <div>
                                        <span class="text-green-500 hover:text-green-600 active:text-green-700 font-semibold transition duration-100">Kunjungi Halaman 🚀</span>
                                    </div>
                                </div>
                            </div>
                        </NavLink>
                        {/* <!-- article - end --> */}

                        {/* <!-- article - start --> */}
                        <NavLink to="/admin/dashboard" class="group w-full md:w-32 lg:w-48 h-48 md:h-full block self-start shrink-0 bg-gray-100 overflow-hidden relative">
                            <div class="flex flex-col md:flex-row items-start border rounded-lg overflow-hidden">
                                <div class="flex flex-col gap-2 p-4 lg:p-6">
                                    <span class="text-gray-400 text-sm">/admin/dashboard</span>

                                    <h2 class="text-gray-800 text-xl font-bold">
                                        <a href="#" class="hover:text-green-800 text-green-700 transition duration-100">Halaman Dashboard</a>
                                    </h2>

                                    <p class="text-gray-500">cuman halaman dashboard buat admin kok.</p>

                                    <div>
                                        <a href="#" class="text-green-500 hover:text-green-600 active:text-green-700 font-semibold transition duration-100">Kunjungi Halaman 🚀</a>
                                    </div>
                                </div>
                            </div>
                        </NavLink>
                        {/* <!-- article - end --> */}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AdminPage