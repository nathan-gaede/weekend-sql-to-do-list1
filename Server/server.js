const express = require('express');

const app = express();

const port = process.env.PORT || 5001;

app.use(express.static('server/public'));
//Add this line 




app.listen(port, () => {
    console.log('Listening on port', port);
});