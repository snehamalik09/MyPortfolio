import React from 'react'
import resume from '../assets/Sneha Malik Resume.pdf'

const Contact = () => {
    return (
        <div name="Contact">
            <div className='w-3/4 lg:w-3/4 lg:pt-20 lg:pb-28 px-18 py-12 h-full md:mt-[18%]  flex flex-col justify-center  items-center mx-auto gap-12 border-4 border-black rounded-xl text-black'>
                <h1 className='text-center text-2xl sm:text-4xl font-bold text-black'>CONTACT</h1>

                <form action="https://getform.io/f/lajnnpoa" method="POST" className = "flex flex-col h-full gap-3 w-3/4 lg:w-1/2 md:w-2/3">
                        <input type="text" placeholder="Name" required className=' p-2 bg-white border-black border-[3px]' />
                        <input type="email" placeholder="Email" required className='p-2 bg-white border-[3px] border-black ' />
                        <input type="text" placeholder="Subject" required className='p-2 bg-white border-[3px] border-black' />
                        <textarea className='bg-white border-[3px] border-black  p-2' required name="message" cols="30" rows="4" placeholder="Message"></textarea>
                        <button className='bg-blue-800 px-5 py-2 lg:w-2/6 rounded-md mx-auto my-2 border-2 font-bold hover:bg-white hover:text-blue-800 hover:border-blue-800 hover:font-semibold duration-500'> Let's Talk</button>
                </form>
                </div>

                <div className='w-100 flex items-center'>
                <a href={resume} target="_blank" className='bg-blue-800 mx-auto font-bold my-[5%] p-2 lg:w-1/6 rounded-md border-2 text-center hover:bg-white hover:text-blue-800 hover:border-blue-800 hover:font-semibold duration-500'> View Resume </a>
                </div>
        </div>
    )
}

export default Contact
