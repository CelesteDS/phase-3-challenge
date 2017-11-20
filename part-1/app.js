const express = require('express');
const bodyParser = require('body-parser');
const { getDay, concatArrays } = require('./utils');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/api/days/:day', getDay);
app.post('/api/array/concat', concatArrays);


const server = app.listen(3000, () => {
  console.log('Listening on port %s...', server.address().port);
});
