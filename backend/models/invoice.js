const mongoose = require('mongoose');

const invoiceSchema = new mongoose.Schema({
  customer: { type: String, required: true },  
  amount: { type: Number, required: true },     
  date: { type: Date, default: Date.now },     
  dueDate: { type: Date, required: true },
  status: { type: String, default: 'pending' },        
  invoiceNumber: { type: String, unique: true },       
  recipientEmail: { type: String, required: true }, 
  description: { type: String },              
  createdAt: { type: Date, default: Date.now },     
  updatedAt: { type: Date, default: Date.now }        
});

const Invoice = mongoose.model('Invoice', invoiceSchema, 'invoices');

module.exports = Invoice;
