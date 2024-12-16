import React, { useState, useEffect } from "react";
import axios from "axios";
import { FiCheckSquare } from "react-icons/fi";
import "../styles/reminders.css"; 

const Reminders = () => {
  const [dueInvoices, setDueInvoices] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("http://localhost:8080/invoices", { withCredentials: true })
      .then((response) => {
        const filteredInvoices = response.data.filter(
          (invoice) => invoice.status === "due"
        );
        setDueInvoices(filteredInvoices);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching invoices:", error);
        setLoading(false);
      });
  }, []);

  const triggerAutomation = () => {
    if (dueInvoices.length === 0) {
      alert("No due invoices to send reminders for.");
      return;
    }

    axios
      .post(
        "https://hooks.zapier.com/hooks/catch/21023751/2sq8amy/",
        { invoices: dueInvoices },
        { headers: { "Content-Type": "application/json" } }
      )
      .then(() => {
        alert("Emails have been sent successfully!");
      })
      .catch((error) => {
        console.error("Error triggering automation:", error);
        alert("Tiggered automation.");
      });
  };

  const reminders = [
    { title: "Reminder 1", description: "7 days before the due date" },
    { title: "Reminder 2", description: "On the due date" },
    { title: "Reminder 3", description: "Every 2 days after the due date" },
  ];

  if (loading) {
    return (
      <div className="loader-container">
        <div className="loader"></div>
        <p>Loading reminders...</p>
      </div>
    );
  }

  return (
    <div className="reminders-container">
      <h1>Automated Invoice Reminders</h1>
      
      <div className="reminders-list">
        {reminders.map((reminder, index) => (
          <div key={index} className="reminder-card">
            <h3>{reminder.title}</h3>
            <p>{reminder.description}</p>
          </div>
        ))}
      </div>

      <button onClick={triggerAutomation} className="trigger-btn">
        <FiCheckSquare /> Trigger Email Reminders
      </button>

      <div className="invoices-section">
        <h2>Due Invoices</h2>
        {dueInvoices.length === 0 ? (
          <p>No due invoices. Keep up the great work!</p>
        ) : (
          <div className="horizontal-scroll">
            {dueInvoices.map((invoice) => (
              <div key={invoice._id} className="invoice-card">
                <h3>{invoice.customer}</h3>
                <p>
                  <strong>Amount:</strong> ${invoice.amount.toFixed(2)}
                </p>
                <p>
                  <strong>Due Date:</strong>{" "}
                  {new Date(invoice.dueDate).toLocaleDateString()}
                </p>
                <span className="status">{invoice.status}</span>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Reminders;
