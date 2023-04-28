import mongoose, { Schema, Model, Document } from "mongoose";
type userDocument = Document & {
    fullName: string;
    email: string;
    password: string;
    enabled: string;
    role: string;
};

type UserInput = {
    fullName: userDocument['fullName'];
    email: userDocument['email'];
    password: userDocument['password'];
    enabled: userDocument['enabled'];
    role: userDocument['role'];
};

const userSchema = new Schema(
    {
        fullName: {
            type: Schema.Types.String,
            required: true,
        },
        email: {
            type: Schema.Types.String,
            required: true,
            unique: true
        },
        password: {
            type: Schema.Types.String,
            required: true,
        },
        enabled: {
            type: Schema.Types.String,
            required: true,
        },
        role: {
            type: Schema.Types.String,
            ref: 'Role',
            required: true,
            index: true
        },
    },
    {
        collection: 'users',
        timestamps: true,
    },
);

const User: Model<userDocument> = mongoose.model<userDocument>('User', userSchema);
export { User, UserInput, userDocument };
