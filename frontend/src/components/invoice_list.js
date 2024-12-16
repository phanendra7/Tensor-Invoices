import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../styles/invoice_list.css';

const InvoiceList = () => {
  const [invoices, setInvoices] = useState([]);
  const [filteredInvoices, setFilteredInvoices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState('all');
  const [search, setSearch] = useState('');

  useEffect(() => {
    axios.get('http://localhost:8080/invoices', { withCredentials: true })
      .then(response => {
        if (response.data && Array.isArray(response.data)) {
          setInvoices(response.data);
          setFilteredInvoices(response.data);
        } else {
          console.error('Invalid invoice data:', response.data);
        }
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching invoices:', error);
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    let updatedInvoices = [...invoices];

    if (filter === 'due') {
      updatedInvoices = updatedInvoices.filter(invoice => invoice.status === 'due');
    }

    if (search) {
      updatedInvoices = updatedInvoices.filter(invoice =>
        invoice.customer.toLowerCase().includes(search.toLowerCase())
      );
    }

    setFilteredInvoices(updatedInvoices);
  }, [filter, search, invoices]);

  if (loading) {
    return (
      <div className="loader-container">
        <div className="loader"></div>
      </div>
    );
  }

  return (
    <div className="invoice-list-container">
      <h1>Invoices</h1>

      <div className="controls">
        
        <input
          type="text"
          placeholder="Search by customer..."
          className="search-box"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <div className="invoice-grid">
        {filteredInvoices.length === 0 ? (
          <p className="no-invoices">No invoices found.</p>
        ) : (
          filteredInvoices.map((invoice) => (
            <div key={invoice._id} className="invoice-card">
              <h2 className="invoice-customer">{invoice.customer}</h2>
              <p><strong>Amount:</strong> ${invoice.amount.toFixed(2)}</p>
              <p><strong>Status:</strong> {invoice.status}</p>
              <p><strong>Due Date:</strong> {invoice.dueDate && !isNaN(new Date(invoice.dueDate))?new Date(invoice.dueDate).toLocaleDateString():'Not Available'}</p>
              <p><strong>Description:</strong> {invoice.description}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default InvoiceList;
