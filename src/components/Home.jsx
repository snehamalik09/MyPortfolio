import React from 'react';
import HeroImage from '../assets/myHeroImage.jpg';
import downarrow from '../assets/down-arrow.png';
import healthWebsite from '../assets/healthwebsite.png';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

const Home = () => {
    return (
        <div name="Home" className='overflow-hidden w-[100%] max-h-[100%]'>
            <div className='hidden lg:block'>
                <Carousel showThumbs={false}>
                    <div className='sm:max-w-screen-lg sm:flex justify-center items-center mx-auto p-[12]'>
                        <div className='h-full text-left sm:h-screen sm:flex justify-center items-center mx-auto sm:p-0 flex-row gap-[4%] p-10'>
                            <div className='sm:max-w-[30%] justify-center mx-auto item-center flex max-w-[60%] mt-[17%] mb-[10%] sm:my-0'>
                                <img src={HeroImage} alt="My Image" className='rounded-[50%]' />
                            </div>
                            <div className='slideFromTop sm:max-w-[60%] max-w-[85%] font-semibold justify-center mx-auto item-center flex flex-col text-sm sm:text-lg'>
                                <h1 className='text-2xl'>Web Developer</h1>
                                <p className='text-black font-normal text-md my-2'>
                                    Welcome to my portfolio! I'm Sneha, an aspiring web developer driven by curiosity and a passion for innovation. Currently, I'm deeply engaged in exploring the realm of computer applications at GGSIPU, with ambitions to evolve into a proficient full-stack developer.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className='h-screen'>
                        <div className='relative w-full h-full'>
                            <img src={healthWebsite} className='h-[100%] object-cover opacity-65' />
                            <h1 className='text-purple animate-bounce absolute top-[50%] left-[35%] text-5xl flex justify-center items-center'>Checkout my Projects!</h1>
                            <a href="#Project" className='scroll-smooth absolute top-[60%] left-[50%] w-14 h-14'>
                                <img src={downarrow} className='w-8 h-8 cursor-pointer' />
                            </a>
                        </div>
                    </div>
                </Carousel>
            </div>

            <div className='xl:hidden sm:max-w-screen-lg sm:flex justify-center items-center mx-auto p-[12]'>
                <div className='h-full text-left sm:h-screen sm:flex justify-center items-center mx-auto sm:p-0 flex-row gap-[4%] p-10'>
                    <div className='sm:max-w-[30%] justify-center mx-auto item-center flex max-w-[60%] mt-[17%] mb-[10%] sm:my-0'>
                        <img src={HeroImage} alt="My Image" className='rounded-[50%]' />
                    </div>
                    <div className='slideFromRight sm:max-w-[60%] max-w-[85%] font-semibold justify-center mx-auto item-center flex flex-col text-sm sm:text-lg'>
                        <h1 className='text-2xl'>Web Developer</h1>
                        <p className='text-black font-normal text-md my-2'>
                            Welcome to my portfolio! I'm Sneha, an aspiring web developer driven by curiosity and a passion for innovation. Currently, I'm deeply engaged in exploring the realm of computer applications at GGSIPU, with ambitions to evolve into a proficient full-stack developer.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
