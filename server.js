import express from 'express';
import connectDB from './Database/db.js';
import bookingRoutes from './Routes/bookings.js'

const app = express();
const PORT = process.env.Port || 5500;

app.use(express.json()); 

connectDB();

app.use('/bookings' , bookingRoutes);

app.listen(PORT,() => {
    console.log(`Server is listening on port ${PORT}`);
});
