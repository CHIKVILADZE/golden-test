import React from 'react';
import GS from '../assets/GS.png';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="flex w-full">
      <div className="bg w-80 lg:w-3/4 mx-auto  text-white">
        <div className="flex flex-col">
          <div className="border  border-yellow-400 mt-0 flex">
            <div className="flex items-center">
              <div className="w-14 h-14 bg-gray-300 rounded-full ml-3 mt-2 p-2 border-2 border-yellow-400 flex items-center justify-center bg-opacity-25">
                <img src={GS} alt="GS" className="w-12 h-8 opacity-100" />
              </div>
            </div>
            <div className="ml-auto w-14 h-6 border border-white mr-2 mt-2 rounded-lg flex justify-center">
              <h1 className="text-xl">EN</h1>
            </div>
          </div>
          <div className="border border-white mt-10 flex flex-col justify-center items-center gap-1 ">
            <h2 className="text-xl">Golden Strategy</h2>
            <h1 className="text-3xl">Create an Account</h1>
          </div>
          <div className="border border-yellow-500 mt-8 flex flex-col items-center">
            <h3 className="text-base">
              Have an account?{' '}
              <Link className=" text-yellow-400 underline">Log In</Link>
            </h3>

            <input
              type="text"
              placeholder="Name"
              className="w-80 h-14 border-2 border-white rounded-2xl bg-black bg-opacity-60 text-white placeholder-opacity-100 pl-2"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
