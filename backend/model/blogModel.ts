import mongoose, { Document, Schema } from "mongoose";
interface ContentI {
  con_type: string;
  data: string;
}

interface BlogI extends Document {
  category:string
  author: unknown;
  createdAt: Date;
  title: string;
  thumbnail: string;
  content: ContentI[];
  lastUpdated: Date;
}

const contentSchema = new Schema<ContentI>({
  con_type: { type: String, required: true },
  data: { type: String, required: true },
});

const blogSchema = new Schema<BlogI>({
  author: { type: mongoose.Schema.Types.ObjectId, ref: "user" },
  createdAt: { type: Date, default: Date.now },
  thumbnail: { type: String, required: [true, "Thumbnail missing"] },
  title: { type: String, required: true },
  category:{
    type:String,
    enum:["science","cyber","health","god","culture","lifestyle","kids","awareness","politics","other"]
  }, 
  content: { type: [contentSchema], required: true },
  lastUpdated: {
    type: Date,
    default: Date.now,
  },
});

blogSchema.pre(["findOneAndUpdate", "findOneAndDelete"], async function (next) {
  next();
});

blogSchema.pre("save", async function (next) {
  this.lastUpdated = new Date();
  next();
});

const BlogModel = mongoose.model<BlogI>("blog", blogSchema);
export default BlogModel;
