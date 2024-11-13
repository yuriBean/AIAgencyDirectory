import React from 'react'
import Hero from './Hero'
import TopRatedAgencies from '../Common/Top'
import LatestNews from '../Common/Latest'
import Consultation from './Consultation'
import Clients from './Clients'
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  const handleAgencies = () => {
    navigate('/agencies');
  }

  return (
    <div className='grow'>
      <Hero />
      <div className="max-w-7xl mt-10 mx-auto p-4 sm:p-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mt-8">
        <div className='my-6 md:my-9 sm:mb-0'>
          <h1 className="text-4xl font-bold text-secondary">Top-Rated AI Agencies</h1>
          <p className="text-gray-600 font-medium mt-2 sm:mt-4"> 
            Discover the leading AI consulting firms trusted by businesses worldwide.
          </p>
        </div>
        <button onClick={handleAgencies} className='bg-primary my-2 py-2 px-8 sm:py-3 sm:px-11 rounded-full text-white text-base hover:bg-blue-600 sm:text-xl'>
          See All Agencies
        </button>
      </div>
      </div>
      <TopRatedAgencies />
      <div className="max-w-7xl mt-10 mx-auto p-4 sm:p-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center my-8">
        <div className='my-6 md:my-9 sm:mb-0'>
          <h1 className="text-4xl font-bold text-secondary">Latest AI Industry News</h1>
          <p className="text-gray-600 font-medium mt-2 sm:mt-4"> 
          Stay informed with the latest trends, insights, and developments in AI
          </p>
        </div>
        <button className='bg-primary py-2 px-8 sm:py-3 sm:px-11 rounded-full text-white hover:bg-blue-600 text-base sm:text-xl'>
          View All Articles
        </button>
      </div></div>
      <LatestNews />
      <Consultation />
      <Clients />
    </div>
  )
}

export default Home