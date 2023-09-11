import React from 'react'
import Header from './Header'
import Footer from './Footer'
import Week from './Week'
import { weeksData } from '../utils/learning-log-database'

const Learning = () => {
  return (
    <div className="flex flex-col min-h-screen">
     <Header/>
       <div className='flex-grow'> 
        <div className='md:w-2/3 container mx-auto my-16 bg-gray-50 shadow-md'>
          <h1 className='font-Montserrat text-2xl font-bold p-2'>Learning Log</h1>
          <hr/>
          {weeksData.map((weekData, index) => (
            <Week key={index} weekData={weekData} />
          ))}
        </div>
       </div>
     <Footer/>
    </div>
  )
}

export default Learning
