import React from 'react'
import Image from 'next/image'
import { BsInstagram, BsLinkedin, BsGithub} from "react-icons/bs"

const Projects = () => {
  return (
    <div className="grid grid-cols-3 w-scree bg-black text-white ">
      <div className="flex flex-col h-96 justify-center items-center">
        <Image src="/Tribe.png" width={150} height={150} alt="Picture of the author"></Image>
        <BsInstagram size={25}/>
     
      </div>

      <div className="flex flex-col h-96 justify-center items-center text-white">
        <h1 className="text-3xl font-semibold">Noah</h1>
        <p className="text-md font-ligh max-w-sm text-center mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
      </div>

      <div className="flex flex-col h-96 justify-center items-center">
        <h1 className="text-3xl font-semibold">Card</h1>
        <p className="text-md font-ligh max-w-sm text-center mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
      </div>

    </div>
  )
}

export default Projects

