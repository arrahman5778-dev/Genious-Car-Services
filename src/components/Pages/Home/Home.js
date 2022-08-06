import React from 'react';
import Banner from './Banner/Banner';
import Exparts from './Exparts/Exparts';
import Servisces from './Services/Servisces';



const Home = () => {
  return (
    <div>
      <Banner />
      <Servisces />
      <Exparts />
    </div>
  );
};

export default Home;