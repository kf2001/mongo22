// Establish a Socket.io connection
const socket = io();
// Initialize our Feathers client application through Socket.io
// with hooks and authentication.
function connetti(){

socket = io.connect();

alert("connesso!")

}

