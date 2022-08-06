import { data } from 'autoprefixer';
import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';

const Servisces = () => {
  const [services,setServices]= useState([]);
  useEffect(()=>{
    fetch('services.json')
    .then(res => res.json())
    .then(data=> setServices(data))
  },[])
  return (
    <div>
      <h1 className=' text-center text-4xl pb-6 md:mx-auto'>Our Services</h1>
     <div className='grid grid-cols-1 lg:grid-cols-3  md:grid-cols-2 sm:grid-cols-1  gap-6'>
     {
        services.map(service =><Service
        key={service.id}
        service={service}
        ></Service>)
      }
     </div>
    </div>
  );
};

export default Servisces;