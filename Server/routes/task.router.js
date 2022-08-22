const express = require('express');
const router = express.Router();
const pool = require('../modules/pool.js');

router.post('/', (req, res) => {
    console.log('in POST /tasks');
    const taskInput = req.body;
    const queryText = `INSERT INTO "task list" ("task")
    VALUES ($1);`
    pool.query(queryText, [taskInput])
    .then((results) => {
        console.log(results);
        res.send(results);
    })
    .catch((error) => {
        console.log('ERROR in POST /tasks', error);
        res.sendStatus(500);
    });
});

router.get('/', (req, res) => {
    console.log('in router.get');
    //Didn't check name of table before trying the 
    //line of code below. Use Postico to see if SQL
    //code is solid first.
    const queryText = 'SELECT * FROM "task list";';
    pool.query(queryText).then((result) => {
        console.log('SELECT success', result);
        //Rows is all table rows
        res.send(result.rows);
    }).catch((error) => {
        console.log('Error in GET /tasks', error);
        res.sendStatus(500);//Error message sent to client
    });
});







module.exports = router;