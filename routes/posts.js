import express from "express";
import Post from "../models/Post.js";

const router = express.Router();

// get all the posts
const getPosts = async (req, res) => {
  try {
    const posts = await Post.find();
    res.json(posts);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
};

// get a specific post
const getOnePost = async (req, res) => {
  const postTitle = req.params.title;
  try {
    const posts = await Post.findOne({title: postTitle});
    res.json(posts);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
};

// use the Post model to add new posts
const addPost = async (req, res) => {
  const { name, state, town, title, issue, contactInfo } = req.body;
  try {
    const newPost = new Post({
      name,
      state,
      town,
      title,
      issue,
      contactInfo,
    });
    const post = await newPost.save();
    res.json(post);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
};

// delete a post
const deletePost = async (req, res) => {
  const date = req.params.dateCreated;
  try {
    // Find the post by title and delete it
    const deletedPost = await Post.findOneAndDelete({ dateCreated: date });
    if (!deletedPost) {
      return res.status(404).json({ message: "Post not found" });
    }
    res.json({ message: "Post deleted successfully", deletedPost });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
};

// register the routes
router.post("/addPost", addPost);
router.delete("/posts/delete/:dateCreated", deletePost); // Assuming you will use "/posts/delete/:title" to delete a post
router.get("/posts/:title", getOnePost)
router.get("/posts", getPosts); // most general last

export default router;
