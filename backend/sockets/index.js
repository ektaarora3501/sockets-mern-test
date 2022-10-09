module.exports = function socket(io) {
  io.on("connection", (socket) => {
    console.log(socket.id);
    //   io.emit("accident", { data: "hello" });
  });
};
