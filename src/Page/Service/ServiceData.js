import React from 'react';
import { Link } from 'react-router-dom';

const ServiceData = ({ serviceData }) => {
    return (
        <div>
            <div className="card w-60 h-80 bg-base-100 shadow-xl hover:bg-violet-400 hover:w-64 duration-200">
                <div className="card-body">
                    <h2 className="card-title"><img className='h-32' src={serviceData.url} alt="" /></h2>
                    <p>{serviceData.title}</p>
                    <div className="card-actions justify-end">
                        <Link to='/chakout' className='btn btn-primary uppercase'>{serviceData.id}</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceData;