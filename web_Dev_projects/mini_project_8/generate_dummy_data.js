/*
generate a dummy data in this format in a collection called employees in a db called company
 like this---
{
   name:"raj",
   salary:4000000,
   language:"python",
   city:"balia",
   ismanager:true
}
   generate 10 such records when button called gen data is clicked
   create an express app with mongoose to achieve it
   every time the button is clicked you should clear the collection

*/

const express = require('express');
const mongoose = require('mongoose');
const app = express();
const port = 3000;

mongoose.connect('mongodb://localhost:27017/company', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => console.log('Connected to MongoDB'))
  .catch((error) => console.error('Connection error', error));

const employeeSchema = new mongoose.Schema({
  name: String,
  salary: Number,
  language: String,
  city: String,
  ismanager: Boolean,
});

const Employee = mongoose.model('Employee', employeeSchema);

const generateEmployeeData = () => {
  const names = ["Raj", "Anita", "Vikas", "Priya", "Amit", "Sunita", "Rohit", "Neha", "Suresh", "Meera"];
  const languages = ["Python", "JavaScript", "Java", "C#", "Ruby"];
  const cities = ["Balia", "Delhi", "Mumbai", "Chennai", "Kolkata"];

  return Array.from({ length: 10 }).map(() => ({
    name: names[Math.floor(Math.random() * names.length)],
    salary: Math.floor(Math.random() * 5000000) + 3000000,
    language: languages[Math.floor(Math.random() * languages.length)],
    city: cities[Math.floor(Math.random() * cities.length)],
    ismanager: Math.random() < 0.5,
  }));
};

app.get('/gen-data', async (req, res) => {
  try {
    await Employee.deleteMany({});
    await Employee.insertMany(generateEmployeeData());
    res.send('Data generated and inserted successfully');
  } catch (error) {
    res.status(500).send('Error generating data');
  }
});

app.listen(port, () => console.log(`Server running at http://localhost:${port}`));
