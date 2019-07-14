const express = require("express");
const helmet = require("helmet");
const cors = require("cors");
const usersRoutes = require("./routes/users");
const stepsRoutes = require("./routes/steps");
const repliesRoutes = require("./routes/replies");
const keyPointsRoutes = require("./routes/keyPoints");
const howTosRoutes = require("./routes/howTos");
const commentsRoutes = require("./routes/comments");
const loginRoutes = require("./routes/login");
const signUpRoutes = require("./routes/signup");
const restricted = require("../data/middleware/restricted");

const server = express();

server.use(express.json());
server.use(helmet());
server.use(cors());
server.use("/api/users", restricted, usersRoutes);
server.use("/api/steps", restricted, stepsRoutes);
server.use("/api/replies", restricted, repliesRoutes);
server.use("/api/keyPoints", restricted, keyPointsRoutes);
server.use("/api/howTos", howTosRoutes);
server.use("/api/comments", restricted, commentsRoutes);
server.use("/api/login", loginRoutes);
server.use("/api/signup", signUpRoutes);

server.get("/", (req, res) => {
  res.json({ message: "You reached the Ho-To-Build api" });
});

module.exports = server;
