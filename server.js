const express = require('express');
const app = express();
app.use(express.json());
app.use('/api/users' , require('./routes/users')); // End point, route
app.listen(5000);
