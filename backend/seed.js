const mongoose = require('mongoose');
const Invoice = require('./models/invoice');
const dotenv = require('dotenv');

dotenv.config();

const mongoURI = process.env.MONGO_URI;
mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to MongoDB');
    seedInvoices();
  })
  .catch((err) => console.error('Error connecting to MongoDB:', err));

const seedInvoices = async () => {
  try {
    const count = await Invoice.countDocuments(); 
    if (count === 0) {
      await Invoice.insertMany([ 
        { customer: 'Quess Corp', amount: 250.00, status: 'paid', invoiceNumber: 'INV-001', recipientEmail: 'quesscorp21cse@gmail.com', dueDate: new Date('2024-12-11'), description: 'Consulting services for Q4 2024', createdAt: new Date('2024-11-15'), updatedAt: new Date('2024-11-15') },
        { customer: 'Star Global', amount: 450.75, status: 'due', invoiceNumber: 'INV-002', recipientEmail: 'sphanendra.krishna.21cse@bmu.edu.in', dueDate: new Date('2024-12-20'), description: 'Web development services for client portal', createdAt: new Date('2024-11-10'), updatedAt: new Date('2024-11-10') },
        { customer: 'ACME Corp.', amount: 1200.50, status: 'pending', invoiceNumber: 'INV-003', recipientEmail: 'contact@acmecorp.com', dueDate: new Date('2024-12-30'), description: 'Software license renewal for enterprise use', createdAt: new Date('2024-11-01'), updatedAt: new Date('2024-11-01') },
        { customer: 'Phanar Ltd.', amount: 620.30, status: 'due', invoiceNumber: 'INV-004', recipientEmail: 'billing@techsolutions.com', dueDate: new Date('2024-12-22'), description: 'Annual IT support and maintenance contract', createdAt: new Date('2024-10-15'), updatedAt: new Date('2024-10-15') },
        { customer: 'Dentsu Inc.', amount: 890.00, status: 'due', invoiceNumber: 'INV-005', recipientEmail: 'finance@creativestudios.com', dueDate: new Date('2024-12-10'), description: 'Graphic design work for new marketing campaign', createdAt: new Date('2024-09-30'), updatedAt: new Date('2024-09-30') },
        { customer: 'Bright Minds LLC', amount: 950.00, status: 'paid', invoiceNumber: 'INV-006', recipientEmail: 'admin@brightminds.com', dueDate: new Date('2024-12-18'), description: 'Educational consultancy services', createdAt: new Date('2024-10-20'), updatedAt: new Date('2024-10-20') },
        { customer: 'Vertex corp', amount: 1350.75, status: 'due', invoiceNumber: 'INV-007', recipientEmail: 'billing@vertexinnovations.com', dueDate: new Date('2024-12-28'), description: 'Prototype design and testing', createdAt: new Date('2024-11-02'), updatedAt: new Date('2024-11-02') },
        { customer: 'Skyline Ventures', amount: 480.50, status: 'pending', invoiceNumber: 'INV-008', recipientEmail: 'contact@skylineventures.com', dueDate: new Date('2024-12-12'), description: 'Digital advertising campaign', createdAt: new Date('2024-11-12'), updatedAt: new Date('2024-11-12') },
        { customer: 'Eco World', amount: 725.00, status: 'due', invoiceNumber: 'INV-009', recipientEmail: 'finance@ecoworld.org', dueDate: new Date('2024-12-20'), description: 'Eco-friendly product design services', createdAt: new Date('2024-11-25'), updatedAt: new Date('2024-11-25') },
        { customer: 'Innovate Solutions', amount: 980.25, status: 'paid', invoiceNumber: 'INV-010', recipientEmail: 'support@innovatesolutions.com', dueDate: new Date('2024-12-15'), description: 'Custom software development', createdAt: new Date('2024-10-30'), updatedAt: new Date('2024-10-30') }
      ]);
      console.log('Dummy invoices seeded.');
    } else {
      console.log('Invoices already seeded.');
    }
  } catch (error) {
    console.error('Error seeding invoices:', error);
  } finally {
    mongoose.disconnect();  
  }
};
