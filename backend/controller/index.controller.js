// index controller

exports.demoFunction = async (req, res) => {
  const io = req.app.get("socketIo");
  const color = req.params.color;
  io.emit("data", color);
  return res.status(200).json("Hey this api was success");
};
