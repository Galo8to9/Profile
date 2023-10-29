import React from 'react'

import { BsInstagram, BsLinkedin, BsGithub} from "react-icons/bs"

const Footer = () => {
  return (
    <div className="flex flex-col bg-white h-64 items-center">
        <h1 className="text-3xl font-semibold text-black mt-12">Going to Internet!</h1>
        <p className="text-md font-light text-black max-w-lg text-center mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>

        <div className="text-black mt-6 flex space-x-5">
            <BsInstagram size={25}/>
            <BsLinkedin size={25}/>
            <BsGithub size={25}/>
        </div>

        <p className="text-sm font-light text-black mt-6">Copyright by Rafael Galo</p>
    </div>
  )
}

export default Footer