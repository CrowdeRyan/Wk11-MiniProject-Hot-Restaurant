//Loading npm packages
const express = require('express');
const path = require('path');

//Create instance of express to serve endpoints
const app = express();

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const PORT = process.env.PORT || 3000;

const reservations = [
    {
      ID: "664",
      Name: "Elizabeth",
      Email: "madeup@sure.com",
      Phone: "5555555555",
    },
    {
      ID: "442",
      Name: "Enrico",
      Email: "madeup3@sure.com",
      Phone: "5555554455",
    },
  ];

// route
app.get('/', (req, res) => res.sendFile(path.join(__dirname, "/index.html")));


//get route - return reservations
app.get("/api/reservations", (req, res) => res.json(reservations));


//post route - add reservation
app.post('/api/reservations', (req, res) => {

const newReservations = req.body;

console.log(newReservations);

reservations.push(newReservations);
res.json(newReservations);
});
  

  


//Listen for activity
app.listen(PORT, () => console.log(`Express server currently running on port ${PORT}`));
