import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import { getTestimonials } from '../../services/firestoreService'; 

const customDotStyles = `
  .slick-dots {
    bottom: -30px; 
    background-color:white;
    text-decoration:none;
  }
  .slick-dots li {
    width: 12px;
    height: 12px;
    margin: 0 14px;
    background-color:white;

  }
  .slick-dots li button {
    width: 12px;
    height: 12px;
    border: 3px solid grey; 
    border-radius: 50%;
    background-color: white;
   padding: 0; 
    
  }

  .slick-dots li button:hover{
  
   background-color: white;
  }
  .slick-dots li.slick-active button {
    border-color: #1D2FD8;
    background-color: #1D2FD8;
  }
`;

const Clients = () => {
  const [testimonials, setTestimonials] = useState([]);

  useEffect(() => {
    const fetchTestimonials = async () => {
      const data = await getTestimonials();
      setTestimonials(data);
    };
    fetchTestimonials();
  }, []); 

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <section className="p-12 flex flex-col justify-center items-center my-16">
        <h1 className="text-4xl  text-secondary font-bold leading-normal">
        What Our Clients Say
        </h1>

      <style>
        {customDotStyles}
      </style>
      <div className="container max-w-4xl w-full">
        <Slider {...settings}>
          {testimonials.map((testimonial, index) => (
            <div key={index} className="flex flex-col items-center justify-center w-full p-6 space-y-8 bg-white rounded-md shadow-xl">
              <div className="flex items-center justify-center w-full">
                <img src='./assets/quote.png' alt={testimonial.name} className="w-20 h-20" />
              </div>
              <blockquote className="max-w-4xl text-2xl italic text-center">
                "{testimonial.text}"
              </blockquote>
              <div className="text-center">
                <p className="text-primary text-xl font-bold">{testimonial.name}</p>
                <p className="text-gray-600">{testimonial.position}</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Clients;
