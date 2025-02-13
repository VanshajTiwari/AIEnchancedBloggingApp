import mongoose, { Schema, model, models } from "mongoose";

interface PersonalInfo {
    userId: mongoose.Types.ObjectId;
    follows: mongoose.Types.ObjectId[];
    fellows: mongoose.Types.ObjectId[];
    experience: string[];
    about: string;
    blogs: mongoose.Types.ObjectId[];
    interests: string[];
    projects: string[];
    achievement: string[];
    sentrequest: Schema.Types.ObjectId[];
    connectionrequest: Schema.Types.ObjectId[];

}

const SchemaUser = new Schema<PersonalInfo>({
    userId: {
        type: Schema.Types.ObjectId,
        ref: "users",
        required: true
    },
    follows: [{
        type: Schema.Types.ObjectId,
        ref: "users"
    }],
    fellows: [{
        type: Schema.Types.ObjectId,
        ref: "users"
    }],
    experience: [{
        type: String
    }],
    about: {
        type: String,
        required: true
    },
    interests: [{
        type: String
    }],
    projects: [{
        type: String
    }],
    achievement:[ {
        type: String
    }],
    sentrequest:[{
        type:Schema.Types.ObjectId,
        ref:"users"
    }],
    connectionrequest:[{
        type:Schema.Types.ObjectId,
        ref:"users"
    }]
});

const PersonalInfo = models.personalinfo || model<PersonalInfo>("personalinfo", SchemaUser);
export default PersonalInfo;
