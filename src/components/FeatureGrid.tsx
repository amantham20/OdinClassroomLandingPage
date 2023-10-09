import React from 'react'

import { BsCardChecklist } from 'react-icons/bs'

import { VscChecklist } from 'react-icons/vsc'

import { FaServer, FaTools } from 'react-icons/fa'

import { FcLock } from 'react-icons/fc'

import { RxCursorArrow } from 'react-icons/rx'

import AIstar from '../assets/AIstar.png'

import rubberducky from '../assets/rubberducky.png'

import easysubmission from '../assets/easysubmission.png'

import odindashboard from '../assets/OdinDashboard.png'

import InteractImage from '../assets/InteractImage.png'

import automatedgrading from '../assets/automatedgrading.png'

import IDEPage from '../assets/IDEPage.png'

const FeatureGrid = () => {
  return (
    <div className='px-10 text-white hidden lg:block'>
      <div className="grid grid-cols-8 grid-rows-4 gap-x-2 gap-y-2">
        <div className="col-span-2 row-span-2 bg-div1 bg-[#0C2821] h-96 rounded-[30px] flex items-center justify-center flex-col overflow-hidden">
          <h3 className='text-3xl text-center mb-5 mt-32'> Integrated Coding Enironment</h3>
          <img className='w-[100]' src={IDEPage} alt="" />

        </div>
        <div className="col-span-4 row-span-1 bg-div2 bg-[#0C2821] h-48 rounded-[30px] flex items-center justify-center overflow-hidden">
          <img src={automatedgrading} className='h-64' alt="" />
          <h3 className='text-3xl ml-10 mr-50'>Automated Grading</h3>
        </div>
        <div className="col-span-2 row-span-1 bg-div3 bg-[#0C2821] h-48 rounded-[30px] flex items-center justify-center">  <FaServer className='text-4xl' /> <span className='px-2' /> <h3 className='text-3xl block line-clamp-2'>Robust Reliability</h3>  </div>
        <div className="col-span-4 row-span-2 bg-div5 bg-[#0C2821] h-96 rounded-[30px] flex items-center justify-center flex-col overflow-hidden">

          <h2 className='text-5xl mt-[250px] mb-10 font-semibold'>Odin Classroom </h2>
          <img src={odindashboard} className="w-[40rem] rounded-xl glow" alt="" />
        </div>
        <div className="col-span-2 row-span-2 bg-div4 bg-[#0C2821] h-96 rounded-[30px] flex items-center flex-col justify-center">  <img src={AIstar} className='invert-colors h-32 mb-5' alt="Generative AI image" />    <h3 className='text-4xl'>Generative AI</h3> <br /> <p> Integrated Large Language Models</p> </div>


        <div className="col-span-2 row-span-1 bg-div6 bg-[#0C2821] h-48 rounded-[30px] flex items-center justify-center overflow-x-hidden ">
          <VscChecklist className='text-4xl' /> <span className='px-1' />
          <h3 className='text-3xl'>Easy Submission</h3>
        </div>
        <div className="col-span-1 row-span-1 bg-div7 bg-[#0C2821] h-48 rounded-[30px] flex items-center justify-center flex-col"> <FaTools className='text-6xl mb-5' /> Quick Setup </div>
        <div className="col-span-1 row-span-1 bg-div8 bg-[#0C2821] h-48 rounded-[30px] flex items-center justify-center flex-col">  <img src={rubberducky} alt="" className='h-20' /> Rubber Ducky </div>
        <div className="col-span-3 row-span-1 bg-div9 bg-[#0C2821] h-48 rounded-[30px] flex items-center justify-center overflow-hidden">
          <img src={InteractImage} className="h-80 rounded-xl" alt="" />
          <h3 className='ml-10 mr-32 text-3xl'>Interact</h3>
        </div>
        <div className="col-span-1 row-span-1 bg-div10 bg-[#0C2821] h-48 rounded-[30px] flex items-center justify-center flex-col"> <FcLock className="text-6xl mb-5" /> Data Privacy </div>
        <div className="col-span-2 row-span-1 bg-div11 bg-[#0C2821] h-48 rounded-[30px] flex items-center justify-center text-2xl"> <RxCursorArrow className="text-3xl mr-5" /> Easy to navigate </div>
      </div>

    </div>
  )
}

export default FeatureGrid