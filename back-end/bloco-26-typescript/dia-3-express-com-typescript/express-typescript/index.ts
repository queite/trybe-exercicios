import express, {Request, Response} from 'express';
import { StatusCodes } from 'http-status-codes';
import dotenv from "dotenv";
import errMiddleware from './middleware/errMiddleware';
import 'express-async-errors';
import UserRoutes from './routes/user.routes';

dotenv.config();

const app = express();

app.use(express.json());

const PORT = process.env.PORT || 3000;

app.use('/users', UserRoutes);

app.use(errMiddleware);

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});