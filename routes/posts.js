import express from "express";

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

// register the routes
router.get("/getPosts", getPosts);
router.post("/addPost", addPost);

export default router;
