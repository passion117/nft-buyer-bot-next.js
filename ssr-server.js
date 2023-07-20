const express = require('express');
var path = require('path');
const swaggerJsdoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');
const morgan = require('morgan');
const next = require('next');
require('dotenv').config();
const options = require('./server/api-documentation/swagger');

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();
var apiRouter = require('./server/routes/api');
var cors = require('cors');
const mongoose = require('mongoose');

mongoose.connect(process.env.MONGO_DB_URL).then(() => {
  // logger('Connected to MongoDB');
  console.log('Connected to MongoDB');
});

app
  .prepare()
  .then(() => {
    const server = express();
    server.use(cors());
    server.use(express.json());
    server.use(express.urlencoded({ extended: false }));
    server.use(morgan('dev'));

    server.use(express.static(path.join(__dirname, 'public')));

    server.use('/api', apiRouter);

    const specs = swaggerJsdoc(options);
    server.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs));

    server.get('*', (req, res) => {
      return handle(req, res);
    });

    // ! Must add the result to the TOKEN_SECRET variable on .env file only.
    // ** console.log(require('crypto').randomBytes(64).toString('hex'));

    server.listen(process.env.PORT, err => {
      if (err) throw err;
      console.log(`> Ready on http://localhost:${process.env.PORT}`);
    });
  })
  .catch(ex => {
    console.error(ex.stack);
    process.exit(1);
  });
