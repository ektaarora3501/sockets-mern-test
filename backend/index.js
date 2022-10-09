var express = require("express");
var app = express();
const httpServer = require("http").Server(app);
const cors = require("cors");
const socketIo = require("socket.io");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use("/routes", require("./routes/index"));

const port = process.env.PORT || 8000;

app.listen(port, () => {
  console.log(`Server is started on port :${port}`);
});

const io = socketIo(httpServer, {
  cors: {
    origin: "*",
  },
});
