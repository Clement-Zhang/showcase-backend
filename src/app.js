const cors = require('cors');
const express = require('express');
const routes = require('./routes/showcase.routes.js');
require('dotenv').config({
    path: require('path').resolve(__dirname, '../.env'),
});

const app = express();
app.use(cors());
app.use(express.json());
app.use('/', routes);

app.listen(process.env.PORT);
