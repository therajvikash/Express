const express = require('express');

const port = 9000;

//We are going to create rest object
const app = express();
//where app is rest object
// where are going use "app" for creating rest api GET Post Put ...

//Writing Hello World program
app.get('/',(req, res) => {
    res.send(`<h1>Welcome to Vicky World</h1>`)
})





app.listen(port, () => {
    console.log(`Express Server is started at http://localhost:${port}`);
});
