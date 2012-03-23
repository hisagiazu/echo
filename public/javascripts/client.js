$(function(){
  var socket = new io.connect('http://localhost:3000/');
  socket.on('news', function(data){
    $("#show").html(data["hello"] + "<br>");
    console.log(data);
    socket.emit('my other event', {my: 'data'});
  });
});
