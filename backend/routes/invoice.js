const express = require('express');
const router = express.Router();
const Invoice = require('../models/invoice');

const verifyAuth = require('../middlewares/authMiddleware');

router.get('/', verifyAuth, async (req, res) => {
    try {
        const invoices = await Invoice.find({});
        res.status(200).json({ success: true, data: invoices });
    } catch (error) {
        res.status(500).json({ success: false, message: 'Error fetching invoices', error });
    }
});

module.exports = router;
