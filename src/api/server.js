/* eslint-disable import/extensions */
import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import dotenv from 'dotenv';
import morgan from 'morgan';
import compression from 'compression';
import routes from './routes.js';
import errorHandler from './middleware/errorHandler.js';

dotenv.config();
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(compression());
app.use(helmet());
app.use(cors({ origin: '*' }));
app.use(morgan('tiny'));

app.use('/v1/quotes', routes.quotes);

app.use(errorHandler);

app.listen(process.env.PORT,
  () => console.log(`App running at port ${process.env.PORT}`));
