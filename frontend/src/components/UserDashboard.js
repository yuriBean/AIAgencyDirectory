import React, { useEffect, useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { fetchUserAgencies, updateUsername, updatePassword, deleteAgency } from '../services/firestoreService';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faEdit, faTrash } from '@fortawesome/free-solid-svg-icons'; // Import FontAwesome icons
import CaseStudies from './SingleAgency/CaseStudies'
import Testimonials from './SingleAgency/Testimonials';
import Pricing from './SingleAgency/Pricing';
import PageHead from './Common/PageHead';
import { useNavigate } from 'react-router-dom'; // Assuming react-router-dom is used

const UserDashboard = () => {
    const { currentUser } = useAuth();
    const [agencies, setAgencies] = useState([]);
    const [username, setUsername] = useState(currentUser.username);
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        const getAgencies = async () => {
            const agenciesList = await fetchUserAgencies(currentUser.uid);
            setAgencies(agenciesList);
        };

        getAgencies();
    }, [currentUser]);

    const handleUsernameChange = async (e) => {
        e.preventDefault();
        await updateUsername(currentUser, username);
    };

    const handlePasswordChange = async (e) => {
        e.preventDefault();
        await updatePassword(currentUser, password);
        setPassword('');
    };

    const handleDelete = async (agencyId) => {
        if (window.confirm('Are you sure you want to delete this agency?')) {
            await deleteAgency(agencyId);
        }
    };

    const handleEdit = (agencyId) => {
        navigate(`/edit-agency/${agencyId}`);
    };

    return (
        <>
        <PageHead pagename='Dashboard' />

        <div className="p-6 max-w-full md:max-w-7xl mx-auto">
            <div className="bg-white shadow-md rounded-lg p-6 mb-8">
                <h2 className="text-4xl text-secondary font-bold mb-4">Your Agencies</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {agencies.map((agency) => (
                        <div key={agency.id} className="bg-gray-50 p-4 rounded-lg shadow flex flex-col space-y-4">
                            <div className="flex justify-between items-center">
                                <h3 className="text-2xl font-semibold text-primary">
                                    <a href={`/agency/${agency.id}`}>
                                    {agency.name}
                                    </a>
                                    </h3>
                                <div className="space-x-2">
                                    <button 
                                        onClick={() => handleEdit(agency.id)} 
                                        className="text-blue-500 hover:text-blue-700"
                                    >
                                        <FontAwesomeIcon icon={faEdit} />
                                    </button>
                                    <button 
                                        onClick={() => handleDelete(agency.id)} 
                                        className="text-red-500 hover:text-red-700"
                                    >
                                        <FontAwesomeIcon icon={faTrash} />
                                    </button>
                                </div>
                            </div>

                            <div className="flex flex-col space-y-2">
                                <img
                  src={agency.logo || '/placeholder.jpg'}
                  alt={agency.name}
                                    className="w-40 h-40 object-cover rounded-lg mx-auto"
                                />
                                <p className="text-gray-600">
                                    <strong>Industry:</strong> {agency.industry}
                                </p>
                                <p className="text-gray-600">
                                    <strong>Rating:</strong>
                                    <span className="ml-2 text-yellow-500">
                                        {Array.from({ length: 5 }, (_, i) => (
                                            <FontAwesomeIcon
                                                key={i}
                                                icon={faStar}
                                                className={`${i < Number(agency.rating) ? 'text-yellow-500' : 'text-gray-300'}`}
                                            />
                                        ))}
                                    </span>
                                </p>
                                <p className="text-gray-600">
                                    <strong>Date Created:</strong> {new Date(agency.dateCreated.seconds * 1000).toLocaleDateString()}
                                </p>
                                <p className="text-gray-600">
                                    <strong>Contact:</strong> {agency.email}, {agency.phone}
                                </p>
                                <p className="text-gray-700">
                                    {agency.description}
                                </p>

                                <a
                                    href={agency.website}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="px-4 py-2 bg-primary text-white rounded-lg text-center hover:bg-blue-700 transition-colors"
                                >
                                    Visit Website
                                </a>
                            </div>
                           
                            <div className="mt-4">
                            {agency.services.length > 0 && (
                                <>
                                <h4 className="text-lg font-semibold">Services Offered</h4>
                                <div className="flex flex-wrap gap-2 mt-2">
                                    {agency.services.map((service, index) => (
                                        <span
                                            key={index}
                                            className="bg-blue-200 text-blue-800 text-sm font-medium px-3 py-1 rounded"
                                        >
                                            {service}
                                        </span>
                                    ))}
                                </div>
                                </>)}

                                <div className="mt-4">
                                    {agency.caseStudies && <CaseStudies caseStudies={agency.caseStudies} />}
                                    {agency.testimonials && <Testimonials testimonials={agency.testimonials} />}
                                    {agency.pricings && <Pricing pricings={agency.pricings} />}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="bg-white shadow-md rounded-lg p-6 text-secondary">
                <h2 className="text-4xl font-bold mb-4">Update Account</h2>

                <form onSubmit={handleUsernameChange} className="mb-6">
                    <div className="flex flex-col mb-4">
                        <input
                            type="text"
                            id="username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            placeholder="New Username"
                            required
                            className="border border-gray-300 rounded-lg px-4 py-2 text-lg"
                        />
                    </div>
                    <button
                        type="submit"
                        className="bg-primary text-white font-semibold px-6 py-2 rounded-lg hover:bg-blue-600 transition-colors"
                    >
                        Update Username
                    </button>
                </form>

                <form onSubmit={handlePasswordChange}>
                    <div className="flex flex-col mb-4">
                        <input
                            type="password"
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="New Password"
                            required
                            className="border border-gray-300 rounded-lg px-4 py-2 text-lg"
                        />
                    </div>
                    <button
                        type="submit"
                        className="bg-primary text-white font-semibold px-6 py-2 rounded-lg hover:bg-blue-600 transition-colors"
                    >
                        Update Password
                    </button>
                </form>
            </div>
        </div>
        </>
    );
};

export default UserDashboard;
