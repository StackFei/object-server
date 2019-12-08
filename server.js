let http = require("http");
let users = [
  { id: 1, name: "dddddddddddddddd" },
  { id: 2, name: "dddddddddddddddd" },
  { id: 2, name: "dddddddddddddddd" },
  { id: 2, name: "dddddddddddddddd" },
  { id: 2, name: "dddddddddddddddd" },
  { id: 2, name: "dddddddddddddddd" },
  { id: 2, name: "dddddddddddddddd" },
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
