import React from 'react';

const Expart = ({expart}) => {
  const{name,id, img} =expart;
  return (
    <div className=' mx-auto text-center mt-6
    '>
      <img src={img} alt="" />
      <h2>Name : {name}</h2>
      <h2>Name : {id}</h2>
      <button className='p-3 bg-orange-400 rounded-md mb-4'>Book This Expart</button>
    </div>
  );
};

export default Expart;