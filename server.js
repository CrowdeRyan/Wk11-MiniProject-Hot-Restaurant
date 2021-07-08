//Loading npm packages
const express = require('express');

//Create instance of express to serve endpoints
const app = express();

const PORT = process.env.PORT || 3000;


//Listen for activity
app.listen(PORT, () => console.log(`Express server currently running on port ${PORT}`));
