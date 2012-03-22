var app = require('express').createServer()
, io = require('socket.io').listen(app);

app.listen(3000);

app.get('/', function (req, res) {
  res.sendfile(__dirname + '/index.html');
});


function getRandomNumber(){
  return Math.round(Math.random(12) * 10);
};

function getRandomSymbol(){
  var val = getRandomNumber();
  switch(true){
    case (val < 4):
      return "+";
      break;
    case (val >= 4 && val < 6):
      return "*";
      break;
    case (val >= 6 && val < 8):
      return "/";
      break;
    default:
      return "-";
      break;
  }
}


io.sockets.on('connection', function (socket) {
  socket.emit('welcome', { first: getRandomNumber(), second: getRandomNumber(), type : getRandomSymbol() });
});