import React, { useState } from 'react';
import { addUserToFirestore } from '../../services/firestoreService'; 

const Consultation = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    projectDetails: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await addUserToFirestore(formData.email, formData); // Use email as userId
    // Optionally reset form or show success message
  };

  return (
    <section className="relative flex flex-col items-center justify-center py-16 min-h-0 bg-center" style={{ backgroundImage: 'url("./assets/consul.png")'  }}>
      <div className="absolute inset-0 bg-primary opacity-85"></div>
      <div className="text-center z-10 px-4 sm:px-8 md:px-12 lg:px-16">
        <h1 className="text-4xl mb-4  text-white font-bold leading-normal">
                        Get a Free 
                Consultation to Find the <br />
                Perfect AI Agency
        </h1>
        <p className="text-lg mb-6 text-white">
        Let us help you connect with the right AI experts to meet your business needs
        </p>
      
        <form className="space-y-8 text-white " onSubmit={handleSubmit}>
          <div className="grid gr id-cols-1 md:grid-cols-2 gap-8">
            <input
              type="text"
              placeholder="Full Name"
              onChange={handleChange}
              className="w-full p-3 bg-transparent border border-white rounded-md focus:outline-none placeholder-white"
            />
            <input
              type="email"
              placeholder="Email"
              onChange={handleChange}
              className="w-full p-3 bg-transparent border border-white rounded-md focus:outline-none placeholder-white"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <input
              type="text"
              placeholder="Phone Number"
              onChange={handleChange}
              className="w-full p-3 bg-transparent border border-white rounded-md focus:outline-none placeholder-white"
            />
            <input
              type="text"
              placeholder="Company Name"
              onChange={handleChange}
              className="w-full p-3 bg-transparent border border-white rounded-md focus:outline-none placeholder-white"
            />
          </div>

          <textarea
            placeholder="Tell Us About Your Project Or What Services You're Interested In"
            onChange={handleChange}
            className="w-full p-3 border bg-transparent border-white rounded-md h-32 focus:outline-none placeholder-white"
          ></textarea>
            <div>
          <button type='submit' className="px-7 font-medium text-xl bg-white text-primary py-3 border border-2 border-transparent rounded-full hover:bg-primary hover:text-white hover:border-white transition">
            Get My Free Consultation
          </button></div>
        </form>
        </div>
    </section>
  );
};

export default Consultation;
