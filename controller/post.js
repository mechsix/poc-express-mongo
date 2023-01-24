const express = require("express");

const postRouter = express.Router();

postRouter.route("/").get(async (req, res) => {
    res.status(200).json({
        status: "ok",
        posts: []
    });
});

module.exports = postRouter
