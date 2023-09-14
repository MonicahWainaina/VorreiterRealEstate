import React from 'react';
import Banner from '../components/Banner';
import HouseList from '../components/HouseList';
import Header from '../../components/common/header/Header';



const Home = () => {
  return (
    <div className='min-h-p[1800px]'>
      <Banner/>
      <HouseList />
    </div>
  );
};

export default Home;
