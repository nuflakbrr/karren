import React from 'react'

function register() {
    return (
        <>
            <SEO title='Masuk - Karren' keyword='Car Rental, Website, SEO, Car, Rental, Karren, KARREN' desc='' />
            <div className="bg-white py-6 sm:py-8 lg:py-12">
                <div className="max-w-screen-2xl px-4 md:px-8 mx-auto">
                    <h2 className="text-green-700 text-3xl lg:text-4xl font-bold text-center mb-2 md:mb-2">Selamat Datang!</h2>
                    <h6 className="text-gray-800 text-md lg:text-md text-center mb-4 md:mb-8">Silakan Masukkan Data Diri Anda</h6>

                    <form className="max-w-lg border rounded-lg mx-auto">
                        <div className="flex flex-col gap-4 p-4 md:p-8">
                            <div>
                                <label htmlFor="username" className="inline-block text-gray-800 text-sm sm:text-base mb-2">Username</label>
                                <input name="username" className="w-full bg-gray-50 text-gray-800 border focus:ring ring-green-400 rounded outline-none transition duration-100 px-3 py-2" />
                            </div>

                            <div>
                                <label htmlFor="password" className="inline-block text-gray-800 text-sm sm:text-base mb-2">Password</label>
                                <input name="password" className="w-full bg-gray-50 text-gray-800 border focus:ring ring-green-400 rounded outline-none transition duration-100 px-3 py-2" />
                            </div>

                            <button className="block bg-green-700 hover:bg-green-800 active:bg-green-700 focus-visible:ring ring-green-400 text-white text-sm md:text-base font-semibold text-center rounded-lg outline-none transition duration-100 px-8 py-3">Log in</button>
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

export default register