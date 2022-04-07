import React from 'react'
import { NavLink } from 'react-router-dom'

import { SEO } from '../../components'

function RegisterAdmin() {
    return (
        <>
            <SEO title='Masuk - Karren' keyword='Car Rental, Website, SEO, Car, Rental, Karren, KARREN' desc='' />
            <div className="bg-white py-6 sm:py-8 lg:py-12">
                <div className="max-w-screen-2xl px-4 md:px-8 mx-auto">
                    <h2 className="text-green-700 text-3xl lg:text-4xl font-bold text-center mb-2 md:mb-2">Selamat Datang Admin!</h2>
                    <h6 className="text-gray-800 text-md lg:text-md text-center mb-4 md:mb-8">Silakan Masukkan Data Diri Anda</h6>

                    <form className="max-w-lg border rounded-lg mx-auto">
                        <div className="flex flex-col gap-4 p-4 md:p-8">
                            <div>
                                <label htmlFor="nama" className="inline-block text-gray-800 text-sm sm:text-base mb-2">Nama Lengkap <span className="text-red-500">*</span></label>
                                <input type="text" name="nama" className="w-full bg-gray-50 text-gray-800 border focus:ring ring-green-400 rounded outline-none transition duration-100 px-3 py-2" required />
                            </div>

                            <div>
                                <label htmlFor="username" className="inline-block text-gray-800 text-sm sm:text-base mb-2">Email <span className="text-red-500">*</span></label>
                                <input type="email" name="username" className="w-full bg-gray-50 text-gray-800 border focus:ring ring-green-400 rounded outline-none transition duration-100 px-3 py-2" required />
                            </div>

                            <div>
                                <label htmlFor="username" className="inline-block text-gray-800 text-sm sm:text-base mb-2">Username <span className="text-red-500">*</span></label>
                                <input type="text" name="username" className="w-full bg-gray-50 text-gray-800 border focus:ring ring-green-400 rounded outline-none transition duration-100 px-3 py-2" required />
                            </div>

                            <div>
                                <label htmlFor="password" className="inline-block text-gray-800 text-sm sm:text-base mb-2">Password <span className="text-red-500">*</span></label>
                                <input type="password" name="password" className="w-full bg-gray-50 text-gray-800 border focus:ring ring-green-400 rounded outline-none transition duration-100 px-3 py-2" required />
                            </div>

                            <div>
                                <label htmlFor="password2" className="inline-block text-gray-800 text-sm sm:text-base mb-2">Konfirmasi Password <span className="text-red-500">*</span></label>
                                <input type="password" name="password2" className="w-full bg-gray-50 text-gray-800 border focus:ring ring-green-400 rounded outline-none transition duration-100 px-3 py-2" required />
                            </div>

                            <div>
                                <label htmlFor="password2" className="inline-block text-gray-800 text-sm sm:text-base mb-2">Jabatan <span className="text-red-500">*</span></label>
                                <select name="role" id="role" className="w-full bg-gray-50 text-gray-800 border focus:ring ring-green-400 rounded outline-none transition duration-100 px-3 py-2">
                                    <option selected disabled>Pilih Jabatan</option>
                                    <option value="super_admin">Super Admin</option>
                                    <option value="admin">Admin</option>
                                </select>
                            </div>

                            <button className="block bg-green-700 hover:bg-green-800 active:bg-green-700 focus-visible:ring ring-green-400 text-white text-sm md:text-base font-semibold text-center rounded-lg outline-none transition duration-100 px-8 py-3">Daftar</button>
                        </div>

                        <div className="flex justify-center items-center bg-gray-100 p-4">
                            <p className="text-gray-500 text-sm text-center">Sudah Memiliki Akun? <NavLink to="/login" className="text-green-700 hover:text-green-800 active:text-green-600 transition duration-100">Masuk!</NavLink></p>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default RegisterAdmin