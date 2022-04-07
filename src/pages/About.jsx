import React from 'react'

import { Footer, Navbar, SEO, TeamCard } from '../components'
import CarAbout from '../images/car-about.png'
import komedi from '../data/Komedi'

function About() {
    const { komedis } = komedi

    return (
        <>
            <SEO title='Tentang - Karren' keyword='Car Rental, Website, SEO, Car, Rental, Karren, KARREN' desc='' />
            <Navbar />
            <div className="bg-white py-2 sm:py-4 lg:py-8">
                <div className="max-w-screen-xl px-4 md:px-8 mx-auto">
                    <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
                        <div>
                            <div className="h-64 md:h-auto bg-slate-100 overflow-hidden rounded-lg shadow-lg">
                                <img src={CarAbout} loading="lazy" alt="Car About Image" className="w-full h-full object-cover object-center" />
                            </div>
                        </div>

                        <div className="md:pt-8">
                            <h1 className="text-green-700 text-2xl sm:text-3xl font-bold text-center md:text-left mb-4 md:mb-6">Berawal dari Mimpi</h1>

                            <p className="text-gray-500 sm:text-lg mb-6 md:mb-8">
                                Berawal dari sebuah ide siswa yang ingin mengaaplikasikan pemrogaman berbasis Website. Dengan memperhatikan keadaan sekitar, melihat ketersediaan jenis transportasi ini tidak sebanyak transportasi lainnya sehingga sering kali cukup sulit untuk dicari. Kami menginginkan keefisienan persewaan yang bisa ada setiap saat dibutuhkan. Dari pengalamannya tersebut, Kami melihat adanya peluang untuk membuat sebuah layanan yang dapat menghubungkan pelanggan dengan jasa penyedia layanan.
                            </p>

                            <h1 className="text-green-700 text-2xl sm:text-3xl font-bold text-center md:text-left mb-4 md:mb-6">Tentang Kami</h1>

                            <p className="text-gray-500 sm:text-lg mb-6 md:mb-8">
                                Karren adalah Perusahaan Jasa Sewa Mobil Murah di kota Malang. Kami Hadir menjadi pilihan yang terbaik dalam solusi transportasi anda. Kami memiliki tenaga sopir yang ramah dan sangat terampil di bidangnya, membuat anda akan selalu merasa nyaman. Karren juga menetapkan harga yang sangat bersahabat. Semua itu tidak lain agar anda puas terhadap pelayanan kami.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <section className="text-gray-600 body-font">
                <div className="container px-5 py-24 mx-auto">
                    <div className="flex flex-col text-center w-full mb-20">
                        <h1 className="text-green-700 text-2xl sm:text-3xl font-bold text-center mb-4 md:mb-6 tracking-widest">Komedi Group</h1>
                        <p className="lg:w-2/4 mx-auto leading-relaxed text-md"><span className='bg-gray-300 p-1.5 rounded-lg font-bold'>Komedi Group</span> adalah sekumpulan siswa SMK Telkom Malang yang berambisi membuat sebuah aplikasi guna untuk masyarakat. Dengan penggunaan aplikasi ini diharapkan masyarakat dapat terbantu. Mari berkenalan dengan kami!</p>
                    </div>
                    <div className="flex flex-wrap -m-4 justify-center items-center md:justify-center md:items-center">
                        {
                            komedis.map((komedi) => (
                                <TeamCard key={komedi.id} img={komedi.img} name={komedi.name} job={komedi.job} desc={komedi.desc} github={komedi.github} twitter={komedi.twitter} instagram={komedi.instagram} website={komedi.website} />
                            ))
                        }
                    </div>
                </div>
            </section>
            <Footer />
        </>
    )
}

export default About