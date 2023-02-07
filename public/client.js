// Establish a Socket.io connection
var socket //= io();
// Initialize our Feathers client application through Socket.io
// with hooks and authentication.

function connetti() {

  socket = io()



  let nick = document.getElementById("nick").value

  //socket.nickname=nick
  //socket = io.connect();

  socket.on("connect", () => {



  });

  socket.on("data", (dt) => {
    socket.emit("iscriz", nick);
    console.log("qhaak", dt)
    console.log("connesso!!!")

    document.getElementById("btn").style.visibility = "hidden"
  });

  socket.on("iscritto", (dt) => {
    
    console.log("iscritto!!!", dt)
    document.getElementById("iscritti").innerHTML="";

    dt.forEach(el => {
      
 
    var node=document.createElement("LI");
    var textnode=document.createTextNode(el);
    node.appendChild(textnode); 
    document.getElementById("iscritti").appendChild(node);  });
  });
}


