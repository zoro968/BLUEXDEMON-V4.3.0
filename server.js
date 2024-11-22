

const express = require('express')
const app = express();
const http = require('http');
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);
qrwa = null


function connect(conn, PORT) {
  
app.enable('trust proxy')
app.set("json spaces",2)
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.get('/', (req, res) => {
  if (qrwa) return res.type('.jpg').send(qrwa)
 //res.send('QRCODE BELUM TERSEDIA. SILAHKAN REFRESH TERUS MENERUS')
 res.sendFile(__dirname + '/index.html');
});
app.listen(PORT, async() => {
    console.log(`express listen on port ${PORT}`)
})

  
io.on('connection', (socket) => {
  console.log('a user connected');
  socket.on('chat message', (msg) => {
    console.log('message: ' + msg);
  });
  socket.on('disconnect', () => {
    console.log('user disconnected');
  });
});
/*
server.listen(PORT, () => {
  console.log('listening on *: 3000');
});
*/
}



module.exports = connect