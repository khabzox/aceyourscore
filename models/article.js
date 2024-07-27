import mongoose, { Schema } from "mongoose";

mongoose.connect(process.env.MONGODB_URI);
mongoose.Promise = global.Promise;

const articleSchema = new Schema(
  {
    title: String,
    postImg: String,
    avatarImg: String,
    avatarName: String,
    description: String,
    postBody: String,
  },
  {
    timestamps: true,
  }
);

const Article = mongoose.models.Article || mongoose.model("Article", articleSchema);

export default Article;