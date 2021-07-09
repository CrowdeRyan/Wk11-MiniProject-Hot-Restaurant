//Loading npm packages
const express = require('express');
const path = require('path');
const http = require('http');
const fs = require('fs');

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
  

  






const displayHome = (req, res) => {
    fs.readFile(`${__dirname}/home.html`, (err, data) => {
        if (err) throw err;
        res.writeHead(200, { 'Content-Type': 'text/html'});
        res.end(data);
    });
};

const displayReserve = (req, res) => {
    fs.readFile(`${__dirname}/reserve.html`, (err, data) => {
        if (err) throw err;
        res.writeHead(200, { 'Content-Type': 'text/html'});
        res.end(data);
    });
};

const displayTable = (req, res) => {
    fs.readFile(`${__dirname}/table.html`, (err, data) => {
        if (err) throw err;
        res.writeHead(200, { 'Content-Type': 'text/html'});
        res.end(data);
    });
};

const server = http.createServer((req, res) => {
    const path = req.url;

    switch (path) {
        case '/home.html':
            return displayHome(path, res);
        case '/reserve.html':
            return displayReserve(path, res);
        case '/table.html':
            return displayTable(path, res);
        default:
            return displayHome(path, res);
        };
});


//Listen for activity
server.listen(PORT, () => console.log(`Express server currently running on port ${PORT}`));
