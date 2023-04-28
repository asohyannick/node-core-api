import express from 'express';
import dotenv from 'dotenv';
// connected to db
import {  connectedToDB } from './db/connect.To.DB';
// main  routes
import { roleRoute } from './routes/role.route/role.route';
import { userRoute } from './routes/user.route/user.route';


const app = express();
dotenv.config();


 const PORT = parseInt(process.env. PORT || '8000');

// general set up.
app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.use('/api/v1/roles', roleRoute);
app.use('/api/v1/user', userRoute);


app.listen(PORT,  async () => {
    await connectedToDB();

    console.log(`Server is running on port ${PORT}...`);
});