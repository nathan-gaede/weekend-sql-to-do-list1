const express = require('express');

const app = express();

const port = process.env.PORT || 5002;

app.use(express.static('server/public'));
//Add this line to parse URL-encoded bodies
app.use(express.urlencoded({extended: true}));

//Send requests with url 'task' to task.router.js
const taskRouter = require('./routes/task.router.js');
app.use('/tasks', taskRouter);

//Commenting app.post out to set up router
// app.post('/tasks', (req, res) => {
//     //Do I need to store data in a variable?
//     console.log(req.body);
// });


app.listen(port, () => {
    console.log('Listening on port', port);
});