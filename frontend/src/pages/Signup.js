import React, { useState } from 'react';
import { signup } from '../services/authService';
import { Link } from 'react-router-dom';

const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  const [error, setError] = useState('');

  const handleSignup = async (e) => {
    e.preventDefault();
    const userData = {
      username,
      role: 'user',
      dateJoined: new Date(),
      isSubscribed: false,
    };
    try {
      const user = await signup(email, password, userData);
      console.log('User signed up:', user);
    } catch (error) {
      setError('Signup failed. Please try again.');
    }
  };

  return (
    <div className="min-h-screen grid grid-cols-1 md:grid-cols-3 bg-cover bg-center" style={{ backgroundImage: `url('/assets/test2.jpg')` }}>
      <div className="flex items-center justify-center bg-transparent p-8">
        <div className="bg-secondary md:bg-transparent p-8 rounded-lg shadow-none md:shadow-xl md:shadow-primary w-full  max-w-sm">
          <h2 className="text-3xl font-bold mb-6 text-center text-white">Signup</h2>
          <form onSubmit={handleSignup}>
            <div className="mb-4">
              <input 
                type="text" 
                placeholder="Username" 
                value={username} 
                onChange={(e) => setUsername(e.target.value)} 
                required 
                className="w-full p-3 border border-primary rounded-lg focus:outline-none"
              />
            </div>
            <div className="mb-4">
              <input 
                type="email" 
                placeholder="Email" 
                value={email} 
                onChange={(e) => setEmail(e.target.value)} 
                required 
                className="w-full p-3 border border-primary rounded-lg focus:outline-none"
              />
            </div>
            <div className="mb-6">
              <input 
                type="password" 
                placeholder="Password" 
                value={password} 
                onChange={(e) => setPassword(e.target.value)} 
                required 
                className="w-full p-3 border border-primary rounded-lg focus:outline-none"
              />
            </div>
            <button 
              type="submit" 
              className="w-full bg-primary text-white py-3 rounded-lg hover:bg-blue-700 transition duration-200"
            >
              Signup
            </button>
          </form>
          <small className='text-white mt-1'>Already registered? <Link to='/login' className='text-primary underline hover:text-white'>Login</Link></small>
          {error && <p className="text-red-500 text-sm mt-4">{error}</p>}
        </div>
      </div>
    </div>
  );
};

export default Signup;
