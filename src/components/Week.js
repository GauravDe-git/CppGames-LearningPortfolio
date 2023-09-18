import React, { useState } from 'react'
import {CiCircleChevDown} from 'react-icons/ci'

const Week = ({ weekData }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  }

  return (
    <div className='border-b-2 border-cyan-500'>
      <div className='flex items-center justify-between'>
        <h2 className='text-xl font-bold text-cyan-500 p-2 mx-2 mt-2 underline'>{weekData.title}</h2>
        <CiCircleChevDown size={35} className='mr-5' onClick={toggleOpen}/>
      </div>                
      <h3 className='text-lg p-2'><span className='font-bold'>Published: </span> {weekData.published}</h3>
      <p className='p-2'>{weekData.description}</p>
      {isOpen && (
        <div className='p-2'>
          <h2 className='font-bold text-lg'>Plan</h2>
          {weekData.plan.map((block, index) => {
            switch (block.type) {
              case 'text':
                return <p key={index} className='mb-4'>{block.content}</p>;
              default:
                return null;
            }
          })}
          <h2 className='font-bold text-lg'>Do</h2>
          {weekData.do.map((block, index) => {
            switch (block.type) {
              case 'text':
                return <p key={index} className='mb-4'>{block.content}</p>;
              default:
                return null;
            }
          })}
          <h2 className='font-bold text-lg'>Check</h2>
          {weekData.check.map((block, index) => {
            switch (block.type) {
              case 'text':
                return <p key={index} className='mb-4'>{block.content}</p>;
              default:
                return null;
            }
          })}
          <h2 className='font-bold text-lg'>Act</h2>
          <p className='mb-4'>{weekData.act}</p>
        </div>
      )}
    </div>
  );
}

export default Week
