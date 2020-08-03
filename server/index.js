const express = require('express');
const app = express();
app.use(express.json());
const port = 3992;

const ctrl = require('./controller');





app.listen(port, () => console.log(`Hey Hey, Your Port, Works Today: ${port}`));