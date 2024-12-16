import React from 'react';
import { Link, Outlet } from 'react-router-dom'; 
import '../styles/homepage.css';

const HomePage = () => {
  return (
    <div className="homepage">
      <header className="topbar">
        <div className="topbar-left">
          <img src="/images/tensor.png" alt="Logo" className="logo" />
          <span className="company-name">Tensor Invoices</span>
        </div>
        <div className="topbar-right">
          <div className="dummy-icons">
            <span className="icon">🔔</span>
            <span className="icon">⚙️</span>
          </div>
          <div className="user-info">
            <span className="user-icon">👤</span>
          </div>
        </div>
      </header>

      <aside className="sidebar">
        <nav>
          <ul>
            <li>
              <Link to="/homepage/dashboard">
                <span className="icon">📊</span>
                Dashboard
              </Link>
            </li>
            <li>
              <Link to="/homepage/customers">
                <span className="icon">👥</span>
                Customers
              </Link>
            </li>
            <li>
              <Link to="/homepage/estimates">
                <span className="icon">📝</span>
                Estimates
              </Link>
            </li>
            <li>
              <Link to="/homepage/invoices">
                <span className="icon">📄</span>
                Invoices
              </Link>
            </li>
            <li>
              <Link to="/homepage/reminders">
                <span className="icon">⏰</span>
                Reminders
              </Link>
            </li>
            <li>
              <Link to="/homepage/transactions">
                <span className="icon">💳</span>
                Transactions
              </Link>
            </li>
            <li>
              <Link to="/homepage/reports">
                <span className="icon">📈</span>
                Reports
              </Link>
            </li>
            <li>
              <Link to="/homepage/expenses">
                <span className="icon">💰</span>
                Expenses
              </Link>
            </li>
            <li>
              <Link to="/homepage/accounting">
                <span className="icon">📚</span>
                Accounting
              </Link>
            </li>
            <li>
              <Link to="/homepage/settings">
                <span className="icon">⚙️</span>
                Settings
              </Link>
            </li>
          </ul>
        </nav>
      </aside>

      <main className="main-content">
        <Outlet />
      </main>
    </div>
  );
};

export default HomePage;
