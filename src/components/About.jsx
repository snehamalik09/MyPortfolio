import React from 'react'

const About = () => {
  return (
    <div name="Portfolio">
      <div className='w-full mt-8 md:mt-24 xl:h-full'>
        <h1 className='text-center text-3xl sm:text-4xl font-bold md:mb-28'>ABOUT</h1>

        <div className='hidden md:flex md:flex-col md:leading-relaxed md:max-w-screen-xl w-[80%] justify-center m-auto mt-[24px] text-md md:text-lg'>
          <p>Hello there! I'm Sneha, a dedicated MCA student at GGSIPU with a profound passion for web development. Equipped with expertise in HTML, CSS, JavaScript and Node.js along with proficiency in frameworks like Tailwind and React.js, I'm on a mission to craft exceptional digital experiences. My journey in computer applications has honed my skills and ignited a fervor for mastering new technologies. Currently, I'm focused on enhancing my knowledge in back-end development, database management, server-side scripting, and data structures and algorithms (DSA), aiming to evolve into a well-rounded full-stack developer. </p> <br />

          <p>As I continue my education, I am actively seeking opportunities to gain hands-on experience and make a meaningful impact in the tech field. Whether it's through internships, projects, or collaborations, I am enthusiastic about embracing new challenges and pushing the boundaries of what's possible in the world of technology. Feel free to explore my skills and projects here.</p> 
        </div>

        <div className='flex flex-col md:hidden md:leading-relaxed md:max-w-screen-xl w-[80%] justify-center m-auto mt-[24px] text-md md:text-lg'>
            <p>Hello! I'm Sneha, an MCA student at GGSIPU passionate about web development. I specialize in HTML, CSS, JavaScript, Node.js, Tailwind, and React.js, crafting exceptional digital experiences. My focus areas include back-end development, database management, and server-side scripting, aiming to become a well-rounded full-stack developer.</p><br />
            <p>I thrive on creative problem-solving continuously refining my skills to create intuitive, visually appealing interfaces. Committed to learning and growth, I’m eager to contribute to impactful projects in the digital realm. Let's connect and make a difference together!</p>
        </div>



      </div>
    </div>
  )
}

export default About

