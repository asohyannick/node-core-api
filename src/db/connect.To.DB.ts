import mongoose, { ConnectOptions } from "mongoose";
import dotenv from 'dotenv';
mongoose.Promise = global.Promise;
dotenv.config();

const { CONNECTION_STRING } = process.env;

const connectedToDB = async () : Promise<void> => {
    mongoose.connect(`${CONNECTION_STRING}`, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    } as ConnectOptions)
};

export {
    connectedToDB
};