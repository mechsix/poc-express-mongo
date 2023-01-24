const express = require("express");
const postRouter = require("../controller/post.js")
const userRouter = require("../controller/user.js")

const app = express()

app.use("/post", postRouter)
app.use("/user", userRouter)

app.listen(3000, () => {
  console.log(`Example app listening on port 3000`)
})
