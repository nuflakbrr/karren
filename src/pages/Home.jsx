import React from 'react'

import { Footer, Navbar, SEO } from '../components'

function Home() {
    return (
        <>
            <SEO title='Karren - Platform Sewa Mobil Pertama di SMK Telkom Malang' keyword='Car Rental, Website, SEO, Car, Rental, Karren, KARREN' desc='' />
            <Navbar />
            <div className="bg-white py-6 sm:py-8 lg:py-12">
                <div className="max-w-screen-xl px-4 md:px-8 mx-auto">
                    <section className="flex flex-col-reverse lg:flex-row justify-between gap-6 sm:gap-10 md:gap-16">
                        {/* <!-- content - start --> */}
                        <div className="xl:w-5/12 flex flex-col justify-center items-center lg:items-start sm:text-center lg:text-left lg:py-12 xl:py-24">
                            <h1 className="text-black-800 text-3xl sm:text-3xl md:text-5xl font-bold mb-8 md:mb-12">Revolutionary way to build the web</h1>

                            <p className="lg:w-4/5 text-gray-500 xl:text-lg leading-relaxed mb-8 md:mb-12">This is a section of some simple filler text, also known as placeholder text. It shares some characteristics of a real written text but is random.</p>

                            <form className="w-full md:max-w-md flex gap-2">
                                <input placeholder="Email" className="w-full flex-1 bg-gray-50 text-gray-800 placeholder-gray-500 border focus:ring ring-indigo-300 rounded outline-none transition duration-100 px-3 py-2" />

                                <button className="inline-block bg-indigo-500 hover:bg-indigo-600 active:bg-indigo-700 focus-visible:ring ring-indigo-300 text-white text-sm md:text-base font-semibold text-center rounded outline-none transition duration-100 px-8 py-2">Sign up</button>
                            </form>
                        </div>
                        {/* <!-- content - end --> */}

                        {/* <!-- image - start --> */}
                        <div className="xl:w-5/12 h-48 lg:h-auto bg-gray-100 overflow-hidden shadow-lg rounded-lg">
                            <img src="https://images.unsplash.com/photo-1620206343767-7da98185edd4?auto=format&q=75&fit=crop&w=1000" loading="lazy" alt="Photo by Fakurian Design" className="w-full h-full object-cover object-center" />
                        </div>
                        {/* <!-- image - end --> */}
                    </section>
                    <div className="bg-white py-6 sm:py-8 lg:py-12">
                        <div className="max-w-screen-2xl px-4 md:px-8 mx-auto">
                            {/* <!-- text - start --> */}
                            <div className="mb-10 md:mb-16">
                                <h2 className="text-gray-800 text-2xl lg:text-3xl font-bold text-center mb-4 md:mb-6">Our competitive advantage</h2>

                                <p className="max-w-screen-md text-gray-500 md:text-lg text-center mx-auto">This is a section of some simple filler text, also known as placeholder text. It shares some characteristics of a real written text but is random or otherwise generated.</p>
                            </div>
                            {/* <!-- text - end --> */}

                            <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-4 md:gap-8">
                                {/* <!-- feature - start --> */}
                                <div className="flex flex-col border rounded-lg p-4 md:p-6">
                                    <h3 className="text-lg md:text-xl font-semibold mb-2">Growth</h3>
                                    <p className="text-gray-500 mb-4">Filler text is dummy text which has no meaning however looks very similar to real text.</p>
                                    <a href="#" className="text-indigo-500 hover:text-indigo-600 active:text-indigo-700 font-bold transition duration-100 mt-auto">More</a>
                                </div>
                                {/* <!-- feature - end --> */}

                                {/* <!-- feature - start --> */}
                                <div className="flex flex-col border rounded-lg p-4 md:p-6">
                                    <h3 className="text-lg md:text-xl font-semibold mb-2">Security</h3>
                                    <p className="text-gray-500 mb-4">Filler text is dummy text which has no meaning however looks very similar to real text.</p>
                                    <a href="#" className="text-indigo-500 hover:text-indigo-600 active:text-indigo-700 font-bold transition duration-100 mt-auto">More</a>
                                </div>
                                {/* <!-- feature - end --> */}

                                {/* <!-- feature - start --> */}
                                <div className="flex flex-col border rounded-lg p-4 md:p-6">
                                    <h3 className="text-lg md:text-xl font-semibold mb-2">Cloud</h3>
                                    <p className="text-gray-500 mb-4">Filler text is dummy text which has no meaning however looks very similar to real text.</p>
                                    <a href="#" className="text-indigo-500 hover:text-indigo-600 active:text-indigo-700 font-bold transition duration-100 mt-auto">More</a>
                                </div>
                                {/* <!-- feature - end --> */}

                                {/* <!-- feature - start --> */}
                                <div className="flex flex-col border rounded-lg p-4 md:p-6">
                                    <h3 className="text-lg md:text-xl font-semibold mb-2">Speed</h3>
                                    <p className="text-gray-500 mb-4">Filler text is dummy text which has no meaning however looks very similar to real text.</p>
                                    <a href="#" className="text-indigo-500 hover:text-indigo-600 active:text-indigo-700 font-bold transition duration-100 mt-auto">More</a>
                                </div>
                                {/* <!-- feature - end --> */}

                                {/* <!-- feature - start --> */}
                                <div className="flex flex-col border rounded-lg p-4 md:p-6">
                                    <h3 className="text-lg md:text-xl font-semibold mb-2">Support</h3>
                                    <p className="text-gray-500 mb-4">Filler text is dummy text which has no meaning however looks very similar to real text.</p>
                                    <a href="#" className="text-indigo-500 hover:text-indigo-600 active:text-indigo-700 font-bold transition duration-100 mt-auto">More</a>
                                </div>
                                {/* <!-- feature - end --> */}

                                {/* <!-- feature - start --> */}
                                <div className="flex flex-col border rounded-lg p-4 md:p-6">
                                    <h3 className="text-lg md:text-xl font-semibold mb-2">Dark Mode</h3>
                                    <p className="text-gray-500 mb-4">Filler text is dummy text which has no meaning however looks very similar to real text.</p>
                                    <a href="#" className="text-indigo-500 hover:text-indigo-600 active:text-indigo-700 font-bold transition duration-100 mt-auto">More</a>
                                </div>
                                {/* <!-- feature - end --> */}
                            </div>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        </>
    )
}

export default Home