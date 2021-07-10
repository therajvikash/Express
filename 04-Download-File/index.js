const express = require('express');
const path = require('path');

const port = 9000;

//We are going to create rest object
const app = express();
//where app is rest object
// where are going use "app" for creating rest api GET Post Put ...

//Writing Hello World program
app.get('/',(req, res) => {
    res.send('Welcome to vicky World');
});
// download a file
app.get('/download',(req, res) => {
    res.download('database.json');
});

//Redirect method
app.get('/red',(req, res) => {
    res.redirect('https://expressjs.com/en/4x/api.html#res.redirect');
});




app.listen(port, () => {
    console.log(`Express Server is started at http://localhost:${port}`);
});
