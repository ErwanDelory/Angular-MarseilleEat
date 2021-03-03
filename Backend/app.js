const express = require('express');
const config = require('./config');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const routes = require('./api/routes/route.js');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use((req, res, next) => {
  // CORS POLICY
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept, Authorization'
  );
  res.setHeader(
    'Access-Control-Allow-Methods',
    'GET, POST, PATCH, DELETE, PUT'
  );

  next();
});

app.use('/api', routes);

app.use(cookieParser());

app.listen(config.node.port, function () {
  console.log('Serveur up on ' + config.node.port);
});
