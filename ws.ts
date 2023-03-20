import {WebSocket} from 'ws'
import * as express from 'express'
import {Request, Response} from "express";

const app = express()
const port = 3000

const wss = new WebSocket.Server({ port: 7071 });
const clients = new Map();

const registerNewClientAndConfirmOurId = (ws: WebSocket, req: Request) => {
    const id = req.headers['sec-websocket-key'];
    console.log(`Received connection ${id}`);
    ws.send(JSON.stringify({"ClientId": id}));
    clients.set(id, ws);
}

const sendBroadcastMessageForAllClientsAndReturnStatistics = async () => {
    let connected = 0
    let disconnected = 0

    clients.forEach((clientWs: WebSocket, id: string) => {
        if (clientWs.readyState === WebSocket.OPEN) {
            connected++
            clientWs.emit("message", {id, "Message": "Broadcast"})
        } else {
            disconnected++
            clients.delete(id)
        }
    });

    return [connected, disconnected]
}

wss.on('error', console.error)

wss.on('close', function() {
    console.log('Connection closed!')
});

wss.on('connection', (ws: WebSocket, req: Request) => {
    registerNewClientAndConfirmOurId(ws, req)
});

app.get('/', async (req: Request, res: Response) => {
    const [connected, disconnected] = await sendBroadcastMessageForAllClientsAndReturnStatistics()
    const statistics = `Send Broadcast, ${connected} connected users and ${disconnected} disconnected and deleted users.`
    console.log(statistics)
    res.send(statistics)
})

app.listen(3000, () => {
    console.log(`Example app listening on port ${port}`)
})