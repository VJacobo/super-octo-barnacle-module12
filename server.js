const http = require('http');
const port = 3305;

const dbInteraction = require('./lib/prompts');

const server = http.createServer((req, res) => {
    if (req.url === '/view') {
        dbInteraction.viewWhat();
        res.end('Viewing Database');
    } else if (req.url === '/add') {
        dbInteraction.addWhat();
        res.end('Adding Data to database');
    } else if (req.url === './update') {
        dbInteraction.updateWhat();
        res.end('Updating data to the database') {
        } else {
            res.end('Invalid Request');
    }
});

server.listening(port, () => {
    console.log('Server is runnning on port ${port}');
});