import React, { useState } from 'react'
import Header from './Header'
import Footer from './Footer'
import {CiCircleChevDown} from 'react-icons/ci'

const Learning = () => {
  const [isOpen, setIsOpen] = useState({});

  const toggleOpen = (index) => {
    setIsOpen(prevState => ({ ...prevState, [index]: !prevState[index] }));
  }

  return (
    <div className="flex flex-col min-h-screen">
     <Header/>
       <div className='flex-grow'> 
        <div className='md:w-2/3 container mx-auto my-16 bg-gray-50 shadow-md'>
          <h1 className='font-Montserrat text-2xl font-bold p-2'>Learning Log</h1>
          <hr/>
            <div className='border-b-2 border-cyan-500'>
                <div className='flex items-center justify-between'>
                 <h2 className='text-xl font-bold text-cyan-500 p-2 mx-2 mt-2 underline'>Week 1</h2>
                 <CiCircleChevDown size={35} className='mr-5' onClick={() => toggleOpen(1)}/>
                </div>                
                <h3 className='text-lg p-2'><span className='font-bold'>Published: </span> September 04, 2023</h3>
                <p className='p-2'>The first of the 10 weeks for the C++ for Games course. In this week, I got started with the learning portfolio, creating a game design document for my game and started to learn the basics of C++.</p>
                {isOpen[1] && (
                  <div className='p-2'>
                      <h2 className='font-bold text-lg'>Plan</h2>
                      <p className='mb-4'>The plan is here</p>
                      <h2 className='font-bold text-lg'>Do</h2>
                      <p className='mb-4'>The plan is here</p>
                      <h2 className='font-bold text-lg'>Check</h2>
                      <p className='mb-4'>The plan is here</p>
                      <h2 className='font-bold text-lg'>Act</h2>
                      <p className='mb-4'>The plan is here</p>
                  </div>
                )}
            </div>
            <div className='border-b-2 border-cyan-500'>
                <div className='flex items-center justify-between'>
                 <h2 className='text-xl font-bold text-cyan-500 p-2 mx-2 mt-2 underline'>Week 2</h2>
                 <CiCircleChevDown size={35} className='mr-5' onClick={() => toggleOpen(2)}/>
                </div>                
                <h3 className='text-lg p-2'><span className='font-bold'>Published: </span> September 11, 2023</h3>
                <p className='p-2'>Description for the 2nd Week. 10 Weeks course on C++ For Games Programming.</p>
                {isOpen[2] && (
                  <div className='p-2'>
                      <h2 className='font-bold text-lg'>Plan</h2>
                      <p className='mb-4'>The plan is here</p>
                      <h2 className='font-bold text-lg'>Do</h2>
                      <p className='mb-4'>The plan is here</p>
                      <h2 className='font-bold text-lg'>Check</h2>
                      <p className='mb-4'>The plan is here</p>
                      <h2 className='font-bold text-lg'>Act</h2>
                      <p className='mb-4'>The plan is here</p>
                  </div>
                )}
            </div>
        </div>
       </div>
    <Footer/>
    </div>
  )
}

export default Learning
