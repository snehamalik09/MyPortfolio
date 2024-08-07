import React from 'react'
import html from '../assets/html.png';
import css from '../assets/css.png';
import javascript from '../assets/javascript.png';
import react from '../assets/react.png';
import node from '../assets/node.png';
import cplusplus from '../assets/cplusplus.jpg'; 
import tailwind from '../assets/tailwind.png'; 
import mysql from '../assets/mysql.jpg'; 
import p from '../assets/p.jpg'; 

const Skills = () => {
    const links = [
        {
            id: 1,
            imagelink: html,
            text:"HTML",
            style: 'shadow-orange-600',
        }, 
        {
            id: 2,
            imagelink: css,
            text:"CSS",
            style: 'shadow-blue-600',
        },
        {
            id: 3,
            imagelink: javascript,
            text:"JavaScript",
            style: 'shadow-yellow-600',
        },
        {
            id: 4,
            imagelink: node,
            text:"Node",
            style: 'shadow-green-800',
        },
        
        {
            id: 5,
            imagelink: react,
            text:"React",
            style: 'shadow-blue-400',
        }, 
        {
            id: 6,
            imagelink: tailwind,
            text:"Tailwind",
            style: 'shadow-black',
        }, 
        {
            id: 7,
            imagelink: p,
            text:"Python",
            style: 'shadow-black',
        }, 
        
        {
            id: 8,
            imagelink: cplusplus,
            text:"C++",
            style: 'shadow-black',
        }, 

        {
            id: 9,
            imagelink: mysql,
            text:"MySQL",
            style: 'shadow-black',
        }, 

    ]
    return (

    <div name="Skills">
            <div className='md:w-full mt-48 w-[90%] justify-center mx-auto flex flex-col gap-16 lg:gap-36 '>
                <div>
                <h1 className='text-center text-3xl sm:text-4xl font-bold text-black'>SKILLS</h1>
                </div>
                <div className=' flex flex-col md:max-w-screen-lg w-full h-full justify-center items-center mx-auto  '>
                    <div className='grid gap-8 grid-cols-2 md:grid-cols-3 px-10 md:px-0 cursor-pointer'>
                        {links.map((item) => (
                            <div key={item.id} className={`shadow-lg px-8 sm:px-16 sm:pt-8 pt-3 rounded-lg bg-white ${item.style} hover:shadow-gray-800 `} >
                                <img src={item.imagelink} alt="" />
                                <div className='sm:text-lg sm:py-6 py-3 md:font-bold font-semibold text-xs text-center'> {item.text} </div>
                            </div>
                        ))}
                    </div>



                </div>
            </div>
    </div>
    )
}

export default Skills




