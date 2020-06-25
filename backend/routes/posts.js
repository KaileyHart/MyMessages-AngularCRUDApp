const express = require("express");


const checkAuth = require("../middleware/check-auth");
const extractFile = require("../middleware/file");

const PostController = require("../controllers/posts");

const router = express.Router();



//Create new post
router.post(
  "",
  checkAuth,
  extractFile,
  PostController.createPost
);

//Update
router.put(
  "/:id",
  checkAuth,
  extractFile,
  PostController.updatePost
);

//Getting Posts
router.get("", PostController.getPosts );

//Get a single post
router.get("/:id", PostController.getSinglePost);

//Deleting Posts
router.delete(
  "/:id",
  checkAuth, PostController.deletePost
  );

module.exports = router;
