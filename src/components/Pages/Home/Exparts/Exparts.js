import React, { useEffect, useState } from 'react';
import Expart from '../Expart/Expart';


const Exparts = () => {
  const [exparts, setExparts] = useState([]);
  useEffect(() => {
    fetch('exparts.json')
      .then(res => res.json())
      .then(data => setExparts(data));
  }, [])
  return (
    <div>
      <h2 className='text-center text-4xl  text-sky-600 '>Our Exparts </h2>
      <div  className=' grid grid-cols-3 lg:grid-cols-3  md:grid-cols-2  sm:grid-cols-3 gap-2'>
        {
          exparts.map(expart => <Expart
            key={expart.id}
            expart={expart}
          ></Expart>)}
      </div>

    </div>
  );
};

export default Exparts;