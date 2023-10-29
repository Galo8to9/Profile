"use client"

import React, { useState } from 'react'
import useDownloader from "react-use-downloader";
import { useTypewriter, Cursor } from "react-simple-typewriter"

import { BsInstagram, BsLinkedin, BsGithub} from "react-icons/bs"
import { MdOutlineClose } from "react-icons/md"

const Hero = () => {
  
  const [text] = useTypewriter({
    words: ["Web.dev","Entrepeneur","IST Student"],
    loop: {},
    typeSpeed: 100,
    deleteSpeed: 100,
  });

  const { size, elapsed, percentage, download, 
    cancel, error, isInProgress } = 
useDownloader(); 

  const fileUrl = "http://localhost:3000/Curriculum.pdf"; 
  const filename = "Curriculum.pdf"; 

  return (
    <div className="flex flex-col bg-white h-screen items-center">
        <div className="flex flex-col text-center h-72 justify-center">
            <h1 className="text-5xl font-semibold mt:pt-0 pt-20 text-black">Profile</h1>
            <a  className="text-xl font-light text-black cursor-pointer hover:underline" download>more +</a>
        </div>


        <div className="flex flex-col m-5">ß«
            <p className="text-xl font-medium text-black">Hello! I´m</p>
            <h1 className="md:text-6xl font-semibold text-black text-5xl">Rafael Galo</h1>
            <span className="text-2xl font-medium text-black">{text}<Cursor/></span>
            <p className="text-md font-light text-black max-w-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate</p>
        </div>

        <div className="text-black md:mt-16 mt-24 flex space-x-5">
            <a href="https://www.instagram.com" className="cursor-pointer"> <BsInstagram size={25}/> </a>
            <a href="https://www.linkedin.com/in/rafael-filipe-galo-372258276/" className="cursor-pointer"> <BsLinkedin size={25} className="cursor-pointer"/> </a>
            <a href="https://github.com/Galo8to9" className="cursor-pointer"> <BsGithub size={25} className="cursor-pointer"/> </a>
          
        </div>

    </div>
  )
}

export default Hero