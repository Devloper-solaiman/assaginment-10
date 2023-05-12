import React, { useEffect, useState } from 'react';
import ServiceData from './ServiceData';

const Service = () => {
    const [service, setService] = useState([])
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/photos')
            .then(res => res.json())
            .then(service => setService(service))
    }, [service])
    return (
        <div>
            <section>
                <div className='my-20'>
                    <h1 className='text-primary text-2xl font-bold text-center uppercase'>our serveces</h1>
                    <h1 className='text-black/80 text-5xl font-bold text-center uppercase'>Browse Our Online Courses</h1>
                </div>
                <div className='grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2  gap-2'>
                    {
                        service.slice(0, 30).map(serviceData => <ServiceData
                            key={serviceData.id}
                            serviceData={serviceData}
                        ></ServiceData>)
                    }
                </div>
            </section>
        </div>
    );
};

export default Service;