// creating variable for the port
const employee_tracker = require('./server.js');
const port = 3305;

// allowing an interaction to the prompts.js.
// the interactions are view, add, and update.
const dbInteraction = require('./lib/prompts');

// TUTORING QUESTION: 
const server = http.createServer((req, res) => {
    if (req.url === '/view') {
        dbInteraction.viewWhat();
        res.end('Viewing Database');
    } else if (req.url === '/add') {
        dbInteraction.addWhat();
        res.end('Adding Data to database');
    } else if (req.url === '/update') {
        dbInteraction.updateWhat();
        res.end('Updating data on database');
    } else {
        res.end('Invalid Request');
    }
});

// allows file to listen to the port
server.listening(port, () => {
    console.log('Server is runnning on port ${port}');
});