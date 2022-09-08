const express = require('express');

const app = express();
const bp = require('body-parser');
app.use(bp.json());
const port = process.env.PORT || 5000;

const addDetails = require('./Problem1/addStudentDetails');
app.use('/student', addDetails);
const getDetails = require('./Problem1/getStudentDetails');
app.use('/student', getDetails);

const studList = require('./Problem2/studentlist')
app.use('/student', studList)

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
