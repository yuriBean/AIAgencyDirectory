import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for navigation
import { getServices, getIndustries } from '../../services/firestoreService'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

const Hero = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [dropdown1, setDropdown1] = useState('');
  const [dropdown2, setDropdown2] = useState('');
  const [services, setServices] = useState([]);
  const [industries, setIndustries] = useState([]);
  const navigate = useNavigate(); // Initialize useNavigate

  useEffect(() => {
    const fetchData = async () => {
      const servicesData = await getServices();
      const industriesData = await getIndustries();
      setServices(servicesData);
      setIndustries(industriesData);
    };
    fetchData();
  }, []);

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleDropdown1Change = (event) => {
    setDropdown1(event.target.value);
  };

  const handleDropdown2Change = (event) => {
    setDropdown2(event.target.value);
  };

  const handleSearch = () => {
    navigate(`/search-results?term=${encodeURIComponent(searchTerm)}&service=${encodeURIComponent(dropdown1)}&industry=${encodeURIComponent(dropdown2)}`);
  };

  return (
    <section
      className="relative flex flex-col items-center justify-center py-24 min-h-0 bg-center bg-cover px-4 sm:px-6"
      style={{ backgroundImage: 'url("./assets/hero.png")' }}
    >
      <div className="absolute inset-0 bg-primary opacity-80"></div>
      <div className="text-center z-10">
        <h1 className="text-5xl mb-4 text-white leading-snug">
          Find the <b>Perfect <br />AI Agency</b> for Your Business Needs
        </h1>
        <p className="text-lg mb-6 text-gray-200">
          Explore the Most Trusted and Top-Rated AI Consulting Firms and Services
        </p>
        <div className="mb-3 p-2 rounded-full w-full justify-between bg-transparent md:bg-white shadow-lg md:flex md:justify-between md:items-center max-w-4xl">
          <div className="flex items-center w-full mb-4 md:mb-0">
            <FontAwesomeIcon icon={faSearch} className="text-gray-500 text-lg m-4 hidden sm:block" />
            <input
              type="text"
              value={searchTerm}
              onChange={handleSearchChange}
              placeholder="Enter keyword"
              className="p-3 text-md border-2 border-gray-300 rounded-full w-full focus:outline-primary transition-shadow focus:shadow-lg"
            />
          </div>
          <button 
            onClick={handleSearch}
            className="px-8 ml-2 py-3 bg-primary border border-white md:border-none text-white text-lg rounded-full hover:bg-blue-600 transition-colors">
            Search
          </button>
        </div>
        {/* Dropdowns for Services and Industries */}
        <div className="mb-6 rounded-full w-full justify-between shadow-lg md:flex md:justify-between md:items-center max-w-4xl">
          <select
            value={dropdown1}
            onChange={handleDropdown1Change}
            className="p-3 mb-4 w-full md:w-1/2 md:mb-0 border-2 border-gray-300 rounded-full focus:outline-primary transition-shadow focus:shadow-lg md:mr-4"
          >
            <option value="" disabled selected>Services</option>
            <option value="Workflow Automation">Workflow Automation</option>
            <option value="Custom App Development">Custom App Development</option>
            <option value="Content Creation">Content Creation</option>
            <option value="Chatbots">Chatbots</option>
            <option value="CRM">CRM</option>
            <option value="Data Labeling">Data Labeling</option>
          </select>
          <select
            value={dropdown2}
            onChange={handleDropdown2Change}
            className="p-3 mb-4 w-full md:w-1/2 md:mb-0 border-2 border-gray-300 rounded-full focus:outline-primary transition-shadow focus:shadow-lg "
          >
            <option value="" disabled selected>Industry</option>
            <option value="Marketing & Sales">Marketing & Sales</option>
            <option value="Finance">Finance</option>
            <option value="Ecommerce">Ecommerce</option>
            <option value="Real Estate">Real Estate</option>
            <option value="Accounting">Accounting</option>
            <option value="Technology">Technology</option>
            <option value="Manufacturing">Manufacturing</option>
            <option value="Law">Law</option>
            <option value="Education">Education</option>
          </select>
        </div>
        <div className="px-5">
          <h4 className="text-white my-4 text-xl text-left">Popular Searches:</h4>
          <div className="flex flex-wrap justify-start gap-4">
            <span className="bg-transparent text-white border border-white py-2 px-4 rounded-full cursor-pointer hover:bg-white hover:text-primary transition-colors">
              Graphic Design
            </span>
            <span className="bg-transparent text-white border border-white py-2 px-4 rounded-full cursor-pointer hover:bg-white hover:text-primary transition-colors">
              UI Design
            </span>
            <span className="bg-transparent text-white border border-white py-2 px-4 rounded-full cursor-pointer hover:bg-white hover:text-primary transition-colors">
              Tech Solutions
            </span>
            <span className="bg-transparent text-white border border-white py-2 px-4 rounded-full cursor-pointer hover:bg-white hover:text-primary transition-colors">
              Technology
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
