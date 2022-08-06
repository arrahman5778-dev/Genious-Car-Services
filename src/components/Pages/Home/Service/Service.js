import React from 'react';
import {useNavigate} from 'react-router-dom'

const Service = ({service}) => {
  const {name,id,price ,img} =service;
  const navigate = useNavigate();
  const handleServiceDetail =id=>{
navigate(`/service/${id}`)
  }
  return (
    <div className='pb-5 text-center mx-auto border-2 p-2 rounded mb-8'>
      <img src={img} alt="" />
      <h2>Name : {name}</h2>
      <p>Price : {price}</p>
      <h2>Porduct ID : {id}</h2>
      <button onClick={()=> handleServiceDetail(id)} className='rounded  p-3 bg-orange-400 text-white font-bold mt-3'>Book Now</button>
    </div>
  );
};

export default Service;