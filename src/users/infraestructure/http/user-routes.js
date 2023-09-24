const express = require("express")
const {userGetController} = require("../dependencies")

const userRouter = express.Router();

userRouter.get('/:id', userGetController.run.bind(userGetController));
userRouter.get("/", userGetController.getAll.bind(userGetController))

module.exports = userRouter;