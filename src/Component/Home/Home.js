import React from 'react';
import img1 from '../../images/clearnPark.png';
import Events from '../Events';
import './Home.css';

const Home = () => {
    return (
      <div>
          <img className='banner' src={img1} alt="" />
        <div >
          <h1 className="text-3xl my-10 font-bold text-center">I GROW BY HELPING PEOPLE IN NEED</h1>
          <div className='flex justify-center'>
              <input className='w-1/3 rounded-xl text-xl py-2 px-2'  type="text" />
              <button className='bg-blue-500 px-3 rounded-xl text-xl py-2 text-white font-bold'>Search</button>
          </div>
        </div>
        <Events/>
      </div>
    );
};

export default Home;