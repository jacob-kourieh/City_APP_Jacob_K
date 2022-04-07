const express = require('express');
const cors = require('cors');


//sätta upp webservern 
const app = express();

//bestämma vilken port vi vill targeta
const port = 5002;

app.use(cors({
    origin: '*'
}));
app.use(express.static('public'));

app.listen(port, () => {
    console.log('SERVER IS LISTNING ON PORT ' + port);
});

