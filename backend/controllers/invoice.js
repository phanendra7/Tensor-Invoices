exports.getInvoiceList = (req, res) => {
    const demoInvoices = [
        { id: 1, customer: 'John Doe', amount: 120.5 },
        { id: 2, customer: 'Jane Smith', amount: 250.75 },
    ];

    res.status(200).json(demoInvoices);
};
