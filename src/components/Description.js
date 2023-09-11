import React from 'react'
import {LiaLaptopCodeSolid} from 'react-icons/Lia'
import {AiOutlineStop} from 'react-icons/Ai'
import {MdOutlineGppGood} from 'react-icons/Md'
import {GiAchievement} from 'react-icons/gi'
import {RxHobbyKnife} from 'react-icons/rx'

const Description = () => {
  return (
    <div>
    {/*Why C++?*/}  
    <div className='md:w-2/3 container flex flex-col mx-auto my-10 p-2 bg-white shadow-lg border-orange-400 border-b-4'>
     <div className='flex items-center justify-between'>
        <h1 className='font-Montserrat text-4xl p-2'> Why C++ ? </h1>
        <LiaLaptopCodeSolid color='Orange' size={60}/>
     </div>
        <hr></hr>
        <p className='p-4 md:text-lg'>C++ serves as the backbone of the gaming industry, recognized as the industry standard. Its speed and ability to establish direct communication with hardware, thanks to its compilation into assembly/machine code, make it the ideal choice for game development. My interest in C++ stems from a desire to delve into the inner workings of game engines, exploring areas like graphics programming with OpenGL and mastering physics engines like NVIDIA PhysX and Havok. Furthermore, I aim to excel in C++ for my application to the Creative Media and Game Technologies program at Breda University, where a strong foundation in this language is paramount to my future pursuits in game development.</p>
    </div>

    {/*Strength*/}  
    <div className='md:w-2/3 container flex flex-col  mx-auto mt-10 p-2 bg-white shadow-lg border-green-400 border-b-4'>
     <div className='flex items-center justify-between'>
        <h1 className='font-Montserrat text-3xl p-2'> Strengths </h1>
        <MdOutlineGppGood color='Green' size={40}/>
     </div>
        <hr></hr>
        <p className='p-4 md:text-lg'> I'm a quick learner and can pick up new skills and concepts fast. I often work on projects by myself, but when teamwork is needed, I'm flexible and can easily adapt to collaborate effectively with others. This versatility lets me excel whether I'm working solo or as part of a team. I'm also a hard worker, and I'm always looking for ways to improve my skills and knowledge.</p>
    </div>

    {/*Weakness*/}  
    <div className='md:w-2/3 container flex flex-col  mx-auto mb-10 p-2 bg-white shadow-lg border-red-400 border-b-4'>
     <div className='flex items-center justify-between'>
        <h1 className='font-Montserrat text-3xl p-2'> Weakness </h1>
        <AiOutlineStop color='Red' size={40}/>
     </div>
        <hr></hr>
        <p className='p-4 md:text-lg'> One of my areas for improvement is my occasional difficulty in maintaining prolonged focus on a single task. I sometimes struggle to stay focused on a project, often moving on to new topics without revisiting what I've previously learned. Procrastination has also been a challenge I'm addressing. To improve, I'm setting specific goals and using techniques like the Pomodoro method to enhance my concentration, time management, and the thoroughness of my learning process.</p>
    </div>

    {/*Achievements*/}  
    <div className='md:w-2/3 container flex flex-col  mx-auto my-10 p-2 bg-white shadow-lg border-cyan-500 border-b-4'>
     <div className='flex items-center justify-between'>
        <h1 className='font-Montserrat text-4xl p-2'> Achievements </h1>
        <GiAchievement color='rgb(6,182,212)' size={60}/>
     </div>
        <hr></hr>
        <p className='p-4 md:text-lg'> During my school days, I played chess professionally and achieved a FIDE rating of 1425. I also secured the District Championship in 9th grade, highlighting my success in competitive chess.</p>
    </div>

    {/*Hobbies*/}  
    <div className='md:w-2/3 container flex flex-col  mx-auto my-10 p-2 bg-white shadow-lg border-y-indigo-500 border-b-4'>
     <div className='flex items-center justify-between'>
        <h1 className='font-Montserrat text-4xl p-2'> Hobbies </h1>
        <RxHobbyKnife color='rgb(99,102,241)' size={50}/>
     </div>
        <hr></hr>
        <p className='p-4 md:text-lg'> I have a deep passion for programming, finding the process of creating things from scratch truly magical. My main focus lies in game programming, often delving into web development on the side. I'm an avid writer of technical blogs, which you can find on my <span className='underline'><a href='https://dev.to/gaurav_de' target='_blank'>DEV</a></span> profile, and I enjoy reading technical blogs to stay updated on industry trends. In addition, I've nurtured an interest in drawing since childhood and am currently learning basic pixel game art and digital art for creating simple game assets and animations, though they may fall under the 'programmer art' category. Lastly, gaming has been a cherished pastime since my early years, with favorites including Dota 2, RDR2, Cities Skylines, and Paper Mario: Thousand Year Door.</p>
    </div>

    {/*Check it out*/}
    <div className='md:w-2/3 container flex flex-col items-start mx-auto my-10 p-2 bg-[#0066FF]'>
        <h1 className='font-Montserrat text-4xl p-6 text-white'> Check Out My C++ 2D Game Project, It uses the modern C++ for Games Framework!</h1>
        <button className='text-white text-lg border-white border-2 py-2 px-6 ml-4 mb-4 transition hover:bg-white hover:text-[#0066FF]'> Show Me! </button>
    </div>
    
    
   </div>
  )
}

export default Description
