import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/landingpage.css';

const LandingPage = () => {
  const navigate = useNavigate();

  const handleGoogleLogin = () => {

    window.location.href = 'http://localhost:8080/auth/google';
  };

  useEffect(() => {

    const welcomeText = document.querySelector('.welcome-text');
    setTimeout(() => {
      welcomeText.classList.add('fade-in');
    }, 500); 
  }, []);


  const handleLoginSuccess = () => {

    navigate('/homepage/invoices');
  };

  return (
    <div className="landing-page">

      <header className="hero">
        <div className="hero-content">
          <h1 className="welcome-text">Welcome to Tensor Invoices</h1>
          <p>Your all-in-one solution to manage invoices and get paid faster!</p>
          <button className="google-login-btn" onClick={handleGoogleLogin}>
            <img 
              src="/images/googleicon.png" 
              alt="Google Icon" 
              className="google-icon" 
            />
            Login with Google
          </button>
        </div>
        <div className="hero-image">
          <img src="/images/tensor.png" alt="SaaS Illustration" />
        </div>
      </header>

      <section className="features">
        <h2>Why Choose Us?</h2>
        <div className="features-list">
          <div className="feature-item">
            <h3>Automated Invoicing</h3>
            <p>Save time by automating your invoicing processes.</p>
          </div>
          <div className="feature-item">
            <h3>Payment Reminders</h3>
            <p>Ensure timely payments with smart reminders.</p>
          </div>
          <div className="feature-item">
            <h3>Real-Time Analytics</h3>
            <p>Track your invoices and payments with ease.</p>
          </div>
        </div>
      </section>

      <section className="testimonials">
        <h2>What Our Customers Say</h2>
        <div className="testimonial">
          <p>"InvoiceQuick has transformed how I manage my business finances!"</p>
          <span>- Jane Doe</span>
        </div>
      </section>

      <footer className="footer">
        <p>© 2024 Tensor Invoices. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default LandingPage;
