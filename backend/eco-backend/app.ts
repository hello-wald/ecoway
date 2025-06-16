import express from 'express';
import path from 'path';
import cookieParser from 'cookie-parser';
import logger from 'morgan';
import cors from 'cors';
import usersRouter from './routes/users';
import vehicleRouter from './routes/vehicle';
import destinationRouter from './routes/destination';
import carpoolRouter from './controller/carpoolController'
import carpool2Router from './routes/carpool';

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(cors());

app.use('/users', usersRouter)
app.use('/carpooling', carpoolRouter)
app.use('/vehicle', vehicleRouter)
app.use('/destination', destinationRouter)
app.use('/carpool', carpool2Router)

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

export default app;
