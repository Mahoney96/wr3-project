const express = require('express');
const ctrl = require('./controller');
const app = express();
const port = 3992;

app.use(express.json());

app.listen(port, () => console.log(`Hey Hey, Your Port, Works Today: ${port}`));