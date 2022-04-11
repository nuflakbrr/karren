import React, { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import axios from 'axios'

import { SEO } from '../../components'

function LoginAdmin() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [msg, setMsg] = useState('')
    let navigate = useNavigate()

    const LoginAuth = async (e) => {
        e.preventDefault()
        try {
            await axios.post('http://localhost:5000/api/petugas/login', {
                email: email,
                password: password
            })
            navigate('/admin/dashboard')
        } catch (error) {
            if (error) {
                setMsg('Email atau Password salah')
            }
        }
    }

    return (
        <>
            <SEO title='Masuk - Karren' keyword='Car Rental, Website, SEO, Car, Rental, Karren, KARREN' desc='' />
            <div className="bg-white py-6 sm:py-8 lg:py-12">
                <div className="max-w-screen-2xl px-4 md:px-8 mx-auto">
                    <h2 className="text-green-700 text-3xl lg:text-4xl font-bold text-center mb-2 md:mb-2">Selamat Datang Admin!</h2>
                    <h6 className="text-gray-800 text-md lg:text-md text-center mb-4 md:mb-8">Silakan Masukkan Akun Anda</h6>

                    <form className="max-w-lg border rounded-lg mx-auto" onSubmit={LoginAuth}>
                        <div className="flex flex-col gap-4 p-4 md:p-8">
                            <p>{msg}</p>
                            <div>
                                <label htmlFor="email" className="inline-block text-gray-800 text-sm sm:text-base mb-2">Email <span className="text-red-500">*</span></label>
                                <input type="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} className="w-full bg-gray-50 text-gray-800 border focus:ring ring-green-400 rounded outline-none transition duration-100 px-3 py-2" required />
                            </div>

                            <div>
                                <label htmlFor="password" className="inline-block text-gray-800 text-sm sm:text-base mb-2">Password <span className="text-red-500">*</span></label>
                                <input type="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} className="w-full bg-gray-50 text-gray-800 border focus:ring ring-green-400 rounded outline-none transition duration-100 px-3 py-2" required />
                            </div>

                            <button type="submit" className="block bg-green-700 hover:bg-green-800 active:bg-green-700 focus-visible:ring ring-green-400 text-white text-sm md:text-base font-semibold text-center rounded-lg outline-none transition duration-100 px-8 py-3">Masuk</button>
                        </div>

                        <div className="flex justify-center items-center bg-gray-100 p-4">
                            <p className="text-gray-500 text-sm text-center">Belum Memiliki Akun? <NavLink to="/register" className="text-green-700 hover:text-green-800 active:text-green-600 transition duration-100">Daftar!</NavLink></p>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default LoginAdmin