import { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { Testimonials } from "../components/Testimonials";
import React from 'react';
import CardSlider from '../components/CardSlider';


const Home: NextPage = () => {
  const items = [
    { title: 'home1', content: 'This is the content for card 1.' },
    { title: 'home2', content: 'This is the content for home2.' },
    { title: 'home2', content: 'This is the content for home2.' },
    { title: 'home2', content: 'This is the content for home2.' },
    { title: 'home2', content: 'This is the content for home2.' },
    { title: 'home2', content: 'This is the content for home2.' },
    // Add more cards as needed
  ];

  return (
    <div className="flex max-w-9xl max-h-3xl bg-stone-900 rounded-3xl  
   mx-auto flex-col items-center justify-center py-3 px-3 min-h-screen">
      <Head>
        <title>Sparkitect </title>
      </Head>

      <Header />
      <main className="z-20 flex flex-1 w-full flex-col items-center justify-center text-center px-4 sm:-mt-10 -mt-10 bg-white ">
       
        <h1 className="mx-auto max-w-3xl mt-40 tracking-tight font-display text-5xl font-medium text-stone-800 sm:text-7xl">
          Capture, Click, Create:{" "}
          <span className="relative whitespace-nowrap text--600">
            <span className="mx-auto tracking-tighter text-transparent bg-clip-text bg-gradient-to-br from-blue-500 to-teal-500 text-white max-w-3xl font-semibol ">Sparkitect</span>
          </span>{" "}
        </h1>
        <h2 className="mx-auto mt-12 max-w-xl text-lg sm:text-grey text-gray-400 leading-7">
          One Spark, Endless Styles:<br></br>Sparkitect's AI Makes Home Redecoration Fast and Accurate.
        </h2>
        <Link
          className="flex max-w-fit mb-12 items-center justify-center space-x-2 rounded-full text-grey-800 mt-11 px-14 py-5 text-xl shadow-md hover:bg-stone-600 bg-gradient-to-br from-green-400 to-blue-500 font-medium transition-all hover:opacity-90 hover:scale-95 transtion-all duration-900"
          href="/dream"
        >
          Spark it!
        </Link>
        <div className="flex justify-between items-center w-full flex-col sm:mt-10 mt-6">
          <div className="flex flex-col space-y-10 mt-4 mb-16">
            <div className="flex sm:space-x-8 sm:flex-row flex-col">
              <h3 className="mb-1 font-medium text-lg text-stone-700"></h3>
                <Image className="ease-in duration-300 rounded-3xl sm:mt-0 mt-2 bg-[url('/1.jpg')] bg-center bg-cover  hover:bg-[url('/1-new.jpg')]  "
                  width={600}
                  height={400}

                
                />
            
              <div className="sm:mt-0 mt-8">
                <h3 className="mb-1 font-medium text-lg text-stone-700"></h3>
                <Image
                  alt="Generated photo of a room with sparkitect.co"
                  width={400}
                  height={400}
                  src="/1-new.jpg"
                  className="ease-in duration-300 opacity-50 hover:opacity-100 w-full object-cover h-96 rounded-3xl sm:mt-0 mt-2"
                />
                
              </div>
              
              
            </div>
            
          </div>
          
        </div>
        
        {/* Add the CardSlider component where you want it to appear */}
       
       
      </main>
      <Testimonials />
      <Footer />
    </div>
  );
};

export default Home;
