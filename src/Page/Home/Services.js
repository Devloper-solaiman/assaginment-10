import React, { useEffect, useState } from 'react';
import CardData from './CardData';
// https://jsonplaceholder.typicode.com/photos
const Services = () => {
    const [data, setData] = useState([])
    useEffect(() => {
        fetch('imgData.json')
            .then(res => res.json())
            .then(data => setData(data))
    }, [data])
    return (
        <section>
            <div className='my-20'>
                <h1 className='text-primary text-2xl font-bold text-center uppercase'>our serveces</h1>
                <h1 className='text-black/80 text-5xl font-bold text-center uppercase'>Browse Our Online Courses</h1>
            </div>
            <div className='grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2  gap-2'>
                {
                    data.map(datas => <CardData
                        key={datas.id}
                        datas={datas}
                    ></CardData>)
                }
            </div>
        </section>
    );
};

export default Services;