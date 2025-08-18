import cors from 'cors';
import express from 'express';
import 'dotenv/config';
import routes from './routes/showcase.routes.js';

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.text());
app.use('/showcase/api', routes);

app.listen(process.env.PORT);
