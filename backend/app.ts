import express from 'express';
import logger from 'morgan';
import cors from 'cors';
import { pollutionRouter } from '@routes/pollution';
import { config } from 'dotenv';
import mysql from 'mysql2/promise';

config();
const app = express();
const dev = process.env.NODE_ENV !== 'production';

const port = process.env.PORT || 5000;

export let connection: mysql.Connection;
mysql.createConnection({
    host: '85.193.83.91',
    user: 'favorx',
    database: 'pollution',
    password: '1234',
    port:3306
  })
  .then((con) => {
    connection = con;
    console.log('Connected to MYSQL Database');
  }).catch(err => console.log("!!!" + err));

// setting middleware
app.use(express.json());
app.use(logger('dev'));
app.use(cors());

// setting routes
app.use('/api/users', pollutionRouter);

const server = app.listen(port, () => {
  console.log('\x1b[42m\x1b[37m', 'Server is running on port', port, '\x1b[0m');
});
