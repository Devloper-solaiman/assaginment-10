import React, { useState } from 'react';
import { RxDotFilled } from 'react-icons/rx';
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs'
import { Link } from 'react-router-dom';


const Banner = () => {
    const slides = [
        { url: 'https://i.ibb.co/gzdLwgf/b3.webp' },
        { url: 'https://i.ibb.co/gyP6W03/banner-1.jpg' },
        { url: 'https://i.ibb.co/RTTK9Fn/banner-2.jpg' },
        { url: 'https://i.ibb.co/x1KwqZL/banner-3.jpg' },
    ]
    const [currentIndex, setCurrentIndex] = useState(0);

    const prevSlide = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
    };

    const nextSlide = () => {
        const isLastSlide = currentIndex === slides.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
    };

    const goToSlide = (slideIndex) => {
        setCurrentIndex(slideIndex);
    };

    return (
        <div className='max-w-[1400px] h-[780px] w-full m-auto py-16 px-4 relative group'>
            <div
                style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
                className='w-full h-full rounded-2xl bg-center bg-cover duration-500'
            ></div>

            <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
                <BsChevronCompactLeft onClick={prevSlide} size={30} />
            </div>

            <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
                <BsChevronCompactRight onClick={nextSlide} size={30} />
            </div>
            <div className=' absolute top-[60%] -translate-x-0 translate-y-[-50%] left-96 text-2xl rounded-full p-2 text-white cursor-pointer'>
                <h1 className='uppercase text-4xl text-primary font-bold'>Star Online Education</h1>
                <h2 className='text-6xl ms-12 text-accent  font-bold'>Enrole Now </h2>
                <p className='w-8/12 text-whtite/50 '>Online education provides learners with the flexibility to study at their own pace and convenience, eliminating geographical constraints and time limitations.  </p>
                <Link to='/blogs' className='btn btn-primary ms-16 mt-5'>More Details</Link>
            </div>
            <div className='flex top-4 justify-center py-2'>
                {slides.map((slide, slideIndex) => (
                    <div
                        key={slideIndex}
                        onClick={() => goToSlide(slideIndex)}
                        className='text-2xl cursor-pointer'
                    >
                        <RxDotFilled />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Banner;