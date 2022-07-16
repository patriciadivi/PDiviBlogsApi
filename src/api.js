const express = require('express');
require('express-async-errors');
const globalError = require('./middlewares/globalError');
const { Router } = require('./routes/index.routes');

// ...

const app = express();

app.use(express.json());
app.use(Router);
app.use(globalError.handle);

// ...

// É importante exportar a constante `app`,
// para que possa ser utilizada pelo arquivo `src/server.js`
module.exports = app;
