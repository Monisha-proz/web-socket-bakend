const WebSocket = require('ws');

const wss = new WebSocket.Server({ port: 8080 });

wss.on('connection', ws => {
  console.log('Client connected');
  
  ws.on('message', message => {
    console.log(`Received message => ${message}`);
  });

  ws.on('close', () => {
    console.log('Client disconnected');
  });
});

function broadcast(data) {
  wss.clients.forEach(client => {
    if (client.readyState === WebSocket.OPEN) {
      client.send(JSON.stringify(data));
    }
  });
}

// Function to handle value updates from the admin panel
function updateValue(newValue) {
  broadcast({ type: 'VALUE_UPDATE', value: newValue });
}

// Example of value change trigger (you should replace this with your actual update logic)
setTimeout(() => {
  updateValue(42); // Simulate value update
}, 5000);
