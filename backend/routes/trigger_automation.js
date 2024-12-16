const express = require('express');
const axios = require('axios');
const Invoice = require('../models/invoice');
const router = express.Router();


router.get('/past-due', async (req, res) => {
  try {
    const pastDueInvoices = await Invoice.find({status: 'due' });
    res.status(200).json(pastDueInvoices);
  } catch (error) {
    console.error('Error fetching past-due invoices:', error.message);
    res.status(500).json({ error: 'Failed to fetch past-due invoices.' });
  }
});


router.post('/trigger-zapier', async (req, res) => {
  const zapierWebhookUrl = process.env.ZAPIER_WEBHOOK_URL; 

  try {
    const pastDueInvoices = await Invoice.find({status: 'due' });


    if (pastDueInvoices.length === 0) {
      return res.status(200).json({ message: 'No overdue invoices to send.' });
    }

    const invoicesToSend = pastDueInvoices.map(invoice => ({
      invoiceNumber: invoice.invoiceNumber,
      customer: invoice.customer,
      dueDate: invoice.dueDate,
      amountDue: invoice.amountDue,
    }));

    await axios.post(zapierWebhookUrl, { invoices: invoicesToSend }, { headers: { 'Content-Type': 'application/json' } });

    res.status(200).json({ message: 'Zapier automation triggered successfully.' });
  } catch (error) {
    console.error('Error triggering Zapier:', error.message);

    if (error.response) {
      console.error('Error response from Zapier:', error.response.data);
    } else if (error.request) {
      console.error('No response received from Zapier:', error.request);
    }

    res.status(500).json({ error: 'Failed to trigger Zapier automation.' });
  }
});

module.exports = router;
