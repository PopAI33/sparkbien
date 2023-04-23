import { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { Testimonials } from "../components/Testimonials";
import React from 'react';



const Home: NextPage = () => {
  
  return (
    <div className="flex max-w-9xl max-h-3xl bg-white rounded-3xl  ml-4 mr-4 mt-4
   mx-auto flex-col justify-center min-h-screen">
      <Head>
        <title>Sparkitect </title>
      </Head>

      <Header />
      <main className="z-20 flex flex-1 w-full flex-col items-center justify-center text-center px-8 bg-white ">
       
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
          className="flex max-w-fit mb-12 items-center justify-center space-x-2 rounded-3xl text-grey-800 mt-11 px-14 py-5 text-xl shadow-md hover:bg-stone-600 bg-gradient-to-br from-green-400 to-blue-500 font-medium transition-all hover:opacity-90 hover:scale-95 transtion-all duration-900"
          href="/dream"
        >
          Spark it!
          </Link>

          
          <div className="flex justify-center space-y-6 items-center w-full flex-col sm:mt-10 mt-6">
  <div className="flex items-center flex-col">
    <div className="flex flex-col md:flex-row md:space-x-10 items-center space-y-8">
      <div className="group relative h-100 md:h-64">
                <Image
            alt="header text"
            src="/2.webp"
            className="rounded-2xl transition-opacity duration-300 w-400 h-300 sm:w-400 sm:h-400 md:min-h-400 md:max-h-400 place-content-center"
            width={400}
            height={400}
          />
                  <Image
                    alt="header text hover"
                    src="/2A.webp"
                    className="rounded-2xl absolute top-0 left-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 w-400 h-300 sm:w-400 sm:h-400"
                    width={400}
                    height={400}
                  />
                </div>
                <div className="group relative">
                <Image
            alt="header text"
            src="/1.webp"
            className="rounded-2xl transition-opacity duration-300 w-400 h-300 sm:w-400 sm:h-400 md:min-h-400 md:max-h-400 place-content-center"
            width={400}
            height={400}
          />
                  <Image
                    alt="header text hover"
                    src="/1A.webp"
                    className="rounded-2xl absolute top-0 left-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 w-400 h-300 sm:w-400 sm:h-400"
                    width={400}
                    height={400}
                  />
      </div>
    </div>
    <div className="sm:mt-0 mt-8">
      <h3 className=" text-gray-300 mt-6 mb-20 font-light text-lg">Click on the images to see the amazing transformations!</h3>
    </div>
  </div>


          
        </div>
      </main>
      <Testimonials />
      <Footer />
    </div>
  );
};

export default Home;
