const axios = require('axios');
const Invoice = require('../models/invoice'); 

exports.triggerAutomation = async (req, res) => {
  try {
 
    const overdueInvoices = await Invoice.find({
      status: 'due',
    });

    console.log("Fetched overdue invoices:", overdueInvoices); 

    if (overdueInvoices.length === 0) {
      return res.status(200).json({ message: 'No overdue invoices found.' });
    }

    const payload = overdueInvoices.map(invoice => ({
      invoiceNumber: invoice.invoiceNumber,
      customer: invoice.customer,
      dueDate: invoice.dueDate,
      amountDue: invoice.amountDue,
    }));

    console.log("Payload being sent to Zapier:", payload); 

    const zapResponse = await axios.post(process.env.ZAPIER_WEBHOOK_URL, payload);

    console.log("Zapier response:", zapResponse.data); 

    res.status(200).json({ message: 'Automation triggered successfully!' });
  } catch (err) {
    console.error("Error in triggering automation:", err.message);

    if (err.response) {
      console.error("Error details from Zapier:", err.response.data);
    } else if (err.request) {
      console.error("No response received from Zapier:", err.request);
    } else {
      console.error("Error message:", err.message);
    }

    res.status(500).json({ message: 'Failed to trigger automation', error: err.message });
  }
};
