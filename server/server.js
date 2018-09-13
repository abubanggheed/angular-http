const express = require('express');

const port = 5000;

const app = express();

let shells = [{ type: 'Conch', color: 'pink' },
{ type: 'Blue', color: 'blue' }];

app.use(express.static('server/public'));

app.listen(port, () => {
    console.log('listening on port', port);
});

app.get('/shells', (req, res) => {
    res.send(shells);
});