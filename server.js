let http = require("http");
let users = [
  { id: 1, name: "6666" },
  { id: 2, name: "7777" },
  { id: 2, name: "8888" },
  { id: 2, name: "999" },
  { id: 2, name: "53" },
  { id: 2, name: "54" },
  { id: 2, name: "232" },
];
let server = http.createServer(function(req, res) {
  console.log(req.method, req.url);
  if (req.url == "/api") {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.end(JSON.stringify(users));
  } else {
    res.end("Now Found!");
  }
});
server.listen(3000, () => {
  console.log("服务正在3000端口上启动!");
});
