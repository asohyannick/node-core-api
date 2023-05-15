import mongoose, { ConnectOptions } from "mongoose";
mongoose.Promise = global.Promise;
import dotenv from 'dotenv';
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