var express = require("express");
var app = express();
const http = require("http").Server(app);
const cors = require("cors");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

// // mongoose database connection
// mongoose.connect(process.env.MONGO_URI, (err, db) => {
//   console.log("Db connected");
// });

// Setting up route
// app.use("/api/kt/v1", indexRoutes);


const port = process.env.PORT || 8000;

app.listen(port, () => {
  console.log(`Server is started on port :${port}`);
});