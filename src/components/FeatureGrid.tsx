import React from 'react'

import { BsCardChecklist } from 'react-icons/bs'

import { VscChecklist } from 'react-icons/vsc'

import {FaServer, FaTools} from 'react-icons/fa'



import rubberducky from '../assets/rubberducky.png'

const FeatureGrid = () => {
  return (
    <div className='px-10'>
      <div className="grid grid-cols-8 grid-rows-4 gap-x-2 gap-y-2">
        <div className="col-span-2 row-span-2 bg-div1 bg-blue-500 h-96 rounded-[30px] flex items-center justify-center">  Integrated Coding Enironment </div>
        <div className="col-span-4 row-span-1 bg-div2 bg-blue-500 h-48 rounded-[30px] flex items-center justify-center">  <VscChecklist className='text-4xl'/> <span className='px-1'/> <h3 className='text-3xl'>Automated Grading</h3> </div>
        <div className="col-span-2 row-span-1 bg-div3 bg-blue-500 h-48 rounded-[30px] flex items-center justify-center">  <FaServer className='text-4xl' /> <span className='px-1'/> <h3 className='text-3xl block line-clamp-2'>Robust Reliability</h3>  </div>
        <div className="col-span-4 row-span-2 bg-div5 bg-blue-500 h-96 rounded-[30px] flex items-center justify-center">  <h2 className='text-5xl'>Odin Classroom </h2> </div>
        <div className="col-span-2 row-span-2 bg-div4 bg-blue-500 h-96 rounded-[30px] flex items-center flex-col justify-center ">  <h3 className='text-4xl'>Generative AI</h3> <br /> <p> Integrated Large Language Models</p> </div>
        <div className="col-span-2 row-span-1 bg-div6 bg-blue-500 h-48 rounded-[30px] flex items-center justify-center">  Easy Submission </div>
        <div className="col-span-1 row-span-1 bg-div7 bg-blue-500 h-48 rounded-[30px] flex items-center justify-center flex-col"> <FaTools /> Quick Setup </div>
        <div className="col-span-1 row-span-1 bg-div8 bg-blue-500 h-48 rounded-[30px] flex items-center justify-center flex-col">  <img src={rubberducky} alt="" className='h-20'/> Rubber Ducky </div>
        <div className="col-span-3 row-span-1 bg-div9 bg-blue-500 h-48 rounded-[30px] flex items-center justify-center">  Interact </div>
        <div className="col-span-1 row-span-1 bg-div10 bg-blue-500 h-48 rounded-[30px] flex items-center justify-center"> Data Privacy </div>
        <div className="col-span-2 row-span-1 bg-div11 bg-blue-500 h-48 rounded-[30px] flex items-center justify-center"> *********** </div>
      </div>

    </div>
  )
}

export default FeatureGrid