const express = require('express');

const app = express();

const port = process.env.PORT || 5001;

app.use(express.static('server/public'));
//Add this line to parse URL-encoded bodies
app.use(express.urlencoded({extended: true}));

app.post('/tasks', (req, res) => {
    //Do I need to store data in a variable?
    console.log(req.body);
});


app.listen(port, () => {
    console.log('Listening on port', port);
});