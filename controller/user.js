const express = require("express");

const userRouter = express.Router();

userRouter.route("/").get(async (req, res) => {
    res.status(200).json({
        status: 'ok',
        users: []
    });
});

module.exports = userRouter
