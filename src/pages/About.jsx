import React from 'react'

import { Navbar, SEO } from '../components'
import CarAbout from '../images/car-about.png'

function About() {
    return (
        <>
            <SEO title='Tentang - Karren' keyword='Car Rental, Website, SEO, Car, Rental, Karren, KARREN' desc='' />
            <Navbar />
            <div class="bg-white py-2 sm:py-4 lg:py-8">
                <div class="max-w-screen-xl px-4 md:px-8 mx-auto">
                    <div class="grid md:grid-cols-2 gap-8 lg:gap-12">
                        <div>
                            <div class="h-64 md:h-auto bg-gray-100 overflow-hidden rounded-lg shadow-lg">
                                <img src={CarAbout} loading="lazy" alt="Photo by Martin Sanchez" class="w-full h-full object-cover object-center" />
                            </div>
                        </div>

                        <div class="md:pt-8">
                            <p class="text-green-600 font-bold text-center md:text-left">Tentang Kami</p>

                            <h1 class="text-green-700 text-2xl sm:text-3xl font-bold text-center md:text-left mb-4 md:mb-6">Our competitive advantage</h1>

                            <p class="text-gray-500 sm:text-lg mb-6 md:mb-8">
                                This is a section of some simple filler text, also known as placeholder text. It shares some characteristics of a real written text but is random or otherwise generated. It may be used to display a sample of fonts or generate text for testing. Filler text is dummy text which has no meaning however looks very similar to real text.<br /><br />

                                This is a section of some simple filler text, also known as placeholder text. It shares some characteristics of a real written text but is <a href="#" class="text-indigo-500 hover:text-indigo-600 active:text-indigo-700 underline transition duration-100">random</a> or otherwise generated. It may be used to display a sample of fonts or generate text for testing. Filler text is dummy text which has no meaning however looks very similar to real text.
                            </p>

                            <h2 class="text-gray-800 text-xl sm:text-2xl font-semibold text-center md:text-left mb-2 md:mb-4">About us</h2>

                            <p class="text-gray-500 sm:text-lg mb-6 md:mb-8">This is a section of some simple filler text, also known as placeholder text. It shares some characteristics of a real written text but is random or otherwise generated. It may be used to display a sample of fonts or generate text for testing. Filler text is dummy text which has no meaning however looks very similar to real text.</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default About