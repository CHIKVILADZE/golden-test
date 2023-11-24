import React from 'react';
import GS from '../assets/GS.png';
import { Link } from 'react-router-dom';
import Register from '../components/register';

function Home() {
  return (
    <div className="flex w-full  p-2 lg:flex-row">
      <div className="bg w-full lg:w-1/2 mx-auto lg:mx-0 text-white border-2 border-white-500 rounded-3xl lg:flex lg:flex-col">
        <div className="flex flex-col w-[100%] h-[100%] justify-between">
          <div className=" mt-0 flex">
            <div className="flex items-center">
              <div className="w-14 h-14 lg:w-28 lg:h-24 bg-gray-300 rounded-full ml-3 mt-2 p-2 border-2 border-yellow-400 flex items-center justify-center bg-opacity-25">
                <img src={GS} alt="GS" className="w-12 h-8 opacity-100" />
              </div>
            </div>
            <div className=" lg:hidden ml-auto w-14 h-6 border border-white mr-2 mt-2 rounded-lg flex justify-center">
              <h1 className="text-xl">EN</h1>
            </div>
          </div>
          <div className="lg:hidden ">
            <div className=" mt-10 flex flex-col justify-center items-center gap-1 ">
              <h2 className="text-xl">Golden Strategy</h2>
              <h1 className="text-3xl">Create an Account</h1>
            </div>
            <div className=" mt-8 flex flex-col items-center gap-3.5">
              <h3 className="text-base">
                Have an account?{' '}
                <Link to="/login" className=" text-yellow-400 underline">
                  Log In
                </Link>
              </h3>

              <input
                type="text"
                placeholder="Name"
                className="w-80 h-14 border-2 border-white rounded-2xl bg-black bg-opacity-60 text-white placeholder-opacity-100 pl-3"
              />
              <input
                type="text"
                placeholder="Surname"
                className="w-80 h-14 border-2 border-white rounded-2xl bg-black bg-opacity-60 text-white placeholder-opacity-100 pl-3"
              />
              <input
                type="text"
                placeholder="Email"
                className="w-80 h-14 border-2 border-white rounded-2xl bg-black bg-opacity-60 text-white placeholder-opacity-100 pl-3"
              />
              <input
                type="texy"
                placeholder="Password"
                className="w-80 h-14 border-2 border-white rounded-2xl bg-black bg-opacity-60 text-white placeholder-opacity-100 pl-3"
              />
              <input
                type="text"
                placeholder="User Name"
                className="w-80 h-14 border-2 border-white rounded-2xl bg-black bg-opacity-60 text-white placeholder-opacity-100 pl-3"
              />
              <button className="w-80 h-14 border-2 border-white rounded-2xl bg-black bg-opacity-60 text-white placeholder-opacity-100 flex items-center justify-center p-1">
                <div className="bg-yellow-400 text-black text-2xl rounded-2xl w-80 h-10 flex items-center justify-center font-imprima">
                  Register
                </div>
              </button>
            </div>
          </div>
          <div className="flex justify-center items-center"></div>
          <div className="lg:items-center flex flex-col items-center">
            <h3 className="lg:hidden text-xl">Privacy Policy</h3>
            <h3 className="text-xl lg:text-5xl mb-8">
              Make your <span className="text-yellow-400">DREAMS</span> come
              true!
            </h3>
          </div>
        </div>
      </div>
      <div className="hidden lg:block w-1/2">
        <Register />
      </div>
    </div>
  );
}

export default Home;
