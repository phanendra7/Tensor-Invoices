import React, { useState } from 'react'; // Removed useEffect import
import { Routes, Route, Navigate } from 'react-router-dom';
import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google'; // Import GoogleOAuthProvider and GoogleLogin component
import LandingPage from './components/landingpage';
import HomePage from './components/homepage';
import InvoiceList from './components/invoice_list';
import Reminders from './components/reminders'; // Import the Reminders component
import { useNavigate } from 'react-router-dom'; // Import useNavigate

const App = () => {
  const [user, setUser] = useState(null); // State to store user data after login
  const navigate = useNavigate(); // Initialize useNavigate hook

  const handleLogin = (response) => {
    try {
      // Get user info from the response
      const userInfo = response?.credential ? JSON.parse(atob(response.credential.split('.')[1])) : null;
      
      if (userInfo) {
        setUser(userInfo); // Set user info in state
        navigate('/homepage/invoices'); // Navigate to invoices after login
      } else {
        console.error('Invalid response:', response);
      }
    } catch (error) {
      console.error('Login processing error:', error);
    }
  };

  return (
    <GoogleOAuthProvider clientId="YOUR_GOOGLE_CLIENT_ID"> 
      <Routes>

        <Route path="/" element={<Navigate to="/landingpage" />} />
        <Route path="/landingpage" element={<LandingPage />} />


        <Route path="/homepage/*" element={<HomePage user={user} />}>
          <Route path="invoices" element={<InvoiceList />} />
          <Route path="reminders" element={<Reminders />} /> 
        </Route>

        <Route path="/login" element={
          <GoogleLogin 
            onSuccess={handleLogin} 
            onError={(error) => console.error('Login Failed:', error)} 
          />
        } />
      </Routes>
    </GoogleOAuthProvider>
  );
};

export default App;
