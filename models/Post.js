import mongoose from "mongoose";

const PostSchema = new mongoose.Schema({
  dateCreated: {
    type: Date,
    default: Date.now,
    required: true,
  },
  name: String,
  state: String,
  town: String,
  title: String,
  issue: String,
  contactInfo: String,
});

const Post = mongoose.model("Post", PostSchema);

export default Post;
