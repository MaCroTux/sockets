### WebSocket vs Socket.io

## Socket.io

Provee una API sobre websockets, que permite la comunicación bidireccional entre el cliente y el servidor.
Control interno de los clientes (Socket), implementa un enrutador interno, permite el envío de mensajes a 
todos los clientes conectados, permite el envío de mensajes a un cliente en particular, permite el envío 
de mensajes a un grupo de clientes, permite el envío de mensajes a todos los clientes excepto a uno en 
particular.

## Cheatsheet
https://socket.io/docs/v3/emit-cheatsheet/

Tabla comparativa de las principales características de WebSocket y Socket.io

| Features                  | WebSocket | Socket.io |
|---------------------------|:---------:|----------:|
| Eventos                   |    Si     |        Si |
| Enrutador                 |    No     |        Si |
| Broadcast                 |    No     |        Si |
| Control de socket interno |    No     |        Si |
| Envío de mensajes         |    Si     |        Si |
| Escaldo horizontal        |    No     |        Si |
| Identificador interno     |    No     |        Si |


## Ejemplo de código

Puesta en marcha
```shelll
npm install
```

WebSockets
```shelll
tsc && node dist/server/ws.io.js
```
Socket.io
```shelll
tsc && node dist/server/ws.js
```

Ejecutar en el navegador

* app.io.html o app.html, para comprobar en terminal los mensajes recibidos

* http://localhost:3000/ para el envío de mensajes hacia los clientes conectados