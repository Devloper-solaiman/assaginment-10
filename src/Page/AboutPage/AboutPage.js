import React from 'react';
import { Link } from 'react-router-dom';

const AboutPage = () => {
    return (
        <div>

            <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
                <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                    <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900 uppercase"> welcome </h2>
                    <img className="mx-auto mt-10 h-40 rounded-lg w-auto" src="https://i.ibb.co/2jH9y6j/330627512-592240872276183-2582803296430789135-n.png" alt="Your Company" />

                </div>
                <div className=''>
                    <h2 className=' mt-10 text-left text-xl ms-64 w-7/12 font-semibold  border   text-gray-900' >I am striving to become a frontend developer with a good understanding of JavaScript, MongoDB, and frontend development within 4 to 5 months. I aim to quickly secure a job in this field. Additionally, I am working on several practice projects. If you wish, you can visit my GitHub profile.</h2>
                </div>
                <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                    <Link to='https://github.com/Devloper-solaiman' className="uppercase flex w-full justify-center rounded-md bg-primary px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary" >viue Github</Link>
                </div>
            </div>
        </div >
    );
};

export default AboutPage;