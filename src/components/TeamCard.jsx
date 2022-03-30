import React from 'react'
import { FaGithub, FaInstagram, FaGlobe } from 'react-icons/fa'

export default function TeamCard({ img, name, job, desc, github, instagram, website }) {
    return (
        <div className="p-4 lg:w-1/2">
            <div className="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
                <img alt="team" className="flex-shrink-0 rounded-lg w-48 h-48 object-cover object-center sm:mb-0 mb-4" src={img} />

                <div className="flex-grow sm:pl-8">
                    <h2 className="title-font font-medium text-lg text-gray-900">{name}</h2>
                    <h3 className="text-gray-500 mb-3">{job}</h3>
                    <p className="mb-4">{desc}</p>
                    <span className="inline-flex">
                        {
                            github && (
                                <a href={github} target='_blank' className="text-gray-500">
                                    <FaGithub className='text-xl' />
                                </a>
                            )
                        }

                        {
                            instagram && (
                                <a href={instagram} target='_blank' className="ml-2 text-gray-500">
                                    <FaInstagram className='text-xl' />
                                </a>
                            )
                        }

                        {
                            website && (
                                <a href={website} target='_blank' className="ml-2 text-gray-500">
                                    <FaGlobe className='text-xl' />
                                </a>
                            )
                        }
                    </span>
                </div>
            </div>
        </div>
    )
}
