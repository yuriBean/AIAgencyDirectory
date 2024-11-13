import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Signup from './pages/Signup';
import Login from './pages/Login';
import { AuthProvider } from './context/AuthContext';
import PrivateRoute from './components/PrivateRoute';
import Navbar from './components/Common/Navbar';
import Home from './components/Home/Home';
import Company from './components/Company';
import Footer from './components/Common/Footer';
import Newsletter from './components/Newsletter';
import Submit from './components/Submit';
import AgencyArchive from './components/AgencyArchive';
import ArticleArchive from './components/ArticleArchive';
import SingleAgencyPage from './components/SingleAgencyPage';
import ArticlePage from './components/ArticlePage';
import Payments from './components/Payments';
import UserDashboard from './components/UserDashboard';
import EditAgency from './components/EditAgency';
import SearchResults from './components/SearchResults';
import Fail from './components/Stripe/Fail';
import Success from './components/Stripe/Success';
import PrivacyPolicy from './components/PrivacyPolicy';
import TermsOfServices from './components/TermsOfServices';
import Cookies from './components/Cookies';
import ContactUs from './components/Contact';

function App() {

  return (
    <AuthProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<Company />} />
          <Route path="/newsletter" element={<Newsletter />} />
          <Route path="/submit" element={<PrivateRoute><Submit /></PrivateRoute>} />
          <Route path="/agencies" element={<AgencyArchive />} />
          <Route path="/agency/:agencyId" element={<SingleAgencyPage />} />
          <Route path="/blogs" element={<ArticleArchive />} />
          <Route path="/blog/:slug" element={<ArticlePage />} />
          <Route path="/payments" element={<Payments />} />
          <Route path="/dashboard" element={<UserDashboard />} />
          <Route path="/edit-agency/:agencyId" element={<EditAgency />} />
          <Route path="/search-results" element={<SearchResults />} />
          <Route path='/fail' element={<Fail />} />
          <Route path='/success' element={<Success />} />
          <Route path='/privacy-policy' element={<PrivacyPolicy />} />
          <Route path='/terms-of-service' element={<TermsOfServices />} />
          <Route path='/cookie-policy' element={<Cookies />} />
          <Route path='/contact' element={<ContactUs />} />
        </Routes>
        <Footer />
      </Router>
    </AuthProvider>
  );
}

export default App;
