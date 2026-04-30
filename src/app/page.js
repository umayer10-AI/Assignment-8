import About from '@/component/About';
import Banner from '@/component/Banner';
import Breeds from '@/component/Breeds';
import HomeCarts from '@/component/HomeCarts';
import Tips from '@/component/Tips';
import React from 'react';

const page = () => {
  return (
    <div>
      <Banner></Banner>
      <HomeCarts></HomeCarts>
      <Tips></Tips>
      <About/>
      <Breeds></Breeds>
    </div>
  );
};

export default page;