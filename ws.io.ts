import { createServer } from "http";
import { Server, Socket } from "socket.io";

import * as express from 'express'
import {Request, Response} from "express";

const httpServer = createServer();
const io = new Server(httpServer, {
    // ...
});

io.of("/room1").on("connection", (socket: Socket) => {
    console.log(">>>>>> a user connected to room1: " + socket.id);
    socket.join("Room1");
})

io.on("connection", (socket: Socket) => {
    console.log("a user connected: " + socket.id);
    socket.emit("message", { someProperty: "some value", otherProperty: "other value" });
});

io.on("disconnect", (socket: Socket) => {
    console.log("Disconnected");
});

httpServer.listen(7071);

const app = express()
const port = 3000

app.get('/', async (req: Request, res: Response) => {
    console.log("Sending message");
    io.to("Room1").emit("message", { someProperty: "some value Roommm", otherProperty: "other value" });
    io.emit("message", { someProperty: "some value", otherProperty: "other value" });
    res.send('Sending message')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})