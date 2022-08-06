import React from 'react';

const Footer = () => {
  return (
    <div className=' bg-gray-900 text-center p-4'>
      <p className='text-white'> Copyright &copy; {new Date().getFullYear()} Your Name All Rights Reserved</p>
    </div>
  );
};

export default Footer;