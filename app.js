(async function() {
    const ws = new WebSocket('ws://localhost:7071/ws');
    const channel = 'channel'

    ws.addEventListener('message', function(message){
        console.log(message.data);
        ws.send(JSON.stringify({type: 'subscribe', channel}));
    })
})()