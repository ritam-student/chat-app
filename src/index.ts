import { WebSocketServer , WebSocket} from "ws";

const wss = new WebSocketServer({port : Number(process.env.PORT) || 8080});

const allSockets: WebSocket[] = [];

wss.on('connection' , (socket) => {
    console.log("user connected...");
    allSockets.push(socket);

    socket.on('message' , (e) => {
        allSockets.forEach((s) => {
            if(s !== socket){
                s.send(e.toString());
            }
        })
    })
})