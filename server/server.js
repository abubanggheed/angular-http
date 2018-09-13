const express = require('express');

const port = 5000;

const app = express();

app.use(express.static('server/public'));

app.listen(port, () => {
    console.log('listening on port', port);
});