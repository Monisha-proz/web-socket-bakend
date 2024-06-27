// const express = require('express');
// const app = express();
// const cors = require('cors');

// app.use(cors());
// app.listen('3001',()=>{
//     console.log('Server connect 3001')
// })

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { WebSocketServer } = require('ws');
const app = express();
const PORT = 5000;

app.use(bodyParser.json());
app.use(cors());

let playerData = [
    { id: 1, name: 'Player 1', score: 0 },
    { id: 2, name: 'Player 2', score: 0 }
];

app.get('/api/players', (req, res) => {
    res.json(playerData);
});

app.post('/api/update-score', (req, res) => {
    const { id, score } = req.body;
    playerData = playerData.map(player => 
        player.id === id ? { ...player, score } : player
    );
    broadcastUpdate(id);
    res.json({ success: true });
});

const server = app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

const wss = new WebSocketServer({ server });

wss.on('connection', (ws) => {
    ws.send(JSON.stringify(playerData));
});

const broadcastUpdate = (id) => {
    wss.clients.forEach((client) => {
        if (client.readyState === client.OPEN) {
            const player =[]
            playerData = playerData.map(players => {
                if(players.id ==id){
                    player.push(players)
                }
            })

            client.send(JSON.stringify(player));
        }
    });
};
