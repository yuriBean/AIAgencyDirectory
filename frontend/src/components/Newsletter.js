import PageHead from './Common/PageHead';
import React, { useEffect, useState } from 'react';
import Latest from './Common/Latest'

const Newsletter = () => {
    
  return (
    <>
    <PageHead pagename='Newsletter' />
    <div className="max-w-7xl mt-10 mx-auto p-4 sm:p-6 flex flex-col justify-center items-center space-y-16">
      {/* Title Section */}
      <div className="flex flex-col sm:flex-row justify-between items-center text-center sm:items-center">
        <div className='my-6 md:my-9 sm:mb-0'>
          <h1 className="text-4xl font-bold text-secondary">Stay Ahead
          with Our Latest AI Insights</h1>
          <p className="text-lg  font-medium mt-2 sm:mt-4"> 
          Stay informed and inspired with our curated selection of articles. Our newsletter delivers the latest trends, success stories, and expert insights directly to your inbox, helping you stay ahead in the ever-evolving world of AI.

          </p>
        </div>
      </div>

      {/* Agency Cards */}
      <Latest /> 
      <button className='bg-primary py-2 px-8 sm:py-3 sm:px-11 rounded-full text-white hover:bg-blue-600 sm:text-xl'>
          View All Articles
        </button>

    </div>

    <div className="max-w-5xl mt-10 mx-auto p-4 sm:p-6 flex flex-col justify-center items-center space-y-16">
        <div className="flex flex-col sm:flex-row justify-between items-center text-center sm:items-center">
        <div className='mt-6 md:my-9 sm:mb-0 leading-wider space-y-9'>
          <h2 className="text-4xl font-bold text-secondary ">Unlock the Power<br /> 
          of AI with a Free Consultation</h2>
          <p className="text-lg  font-medium mt-2 sm:mt-4"> 
          Stay informed and inspired with our curated selection of articles. Our newsletter delivers the latest trends, success stories, and expert insights directly to your inbox, helping you stay ahead in the ever-evolving world of AI.

          </p>
        </div>
        
      </div>
            </div>
            <div className=' flex items-center justify-center my-16 mx-2 '>
            <form className="space-y-8 text-grey-600 w-full md:w-2/3">
          <div className="grid gr id-cols-1 md:grid-cols-2 gap-8">
            <input
              type="text"
              placeholder="Full Name"
              className="w-full p-3 bg-transparent border border-gray-600 border-2 rounded-xs focus:outline-none placeholder-grey-600"
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full p-3 bg-transparent border border-gray-600 border-2 rounded-xs focus:outline-none placeholder-grey-600"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <input
              type="text"
              placeholder="Phone Number"
              className="w-full p-3 bg-transparent border border-gray-600 border-2 rounded-xs focus:outline-none placeholder-grey-600"
            />
            <input
              type="text"
              placeholder="Company Name"
              className="w-full p-3 bg-transparent border border-gray-600 border-2 rounded-xs focus:outline-none placeholder-grey-600"
            />
          </div>

          <textarea
            placeholder="Tell Us About Your Project Or What Services You're Interested In"
            className="w-full p-3 border bg-transparent border-gray-600 border-2 rounded-xs h-48 focus:outline-none placeholder-grey-600"
          ></textarea>
            <div className='mb-6 flex justify-center'>
          <button className="px-7 font-medium text-xl bg-primary text-white py-3 border border-2 border-transparent rounded-full hover:bg-blue-600 transition">
            Get My Free Consultation
          </button>
          </div>
        </form>
        </div>

    </>
  );
};

export default Newsletter
