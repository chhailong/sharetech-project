const express = require('express'); 
const app = express () ; 
const cors = require('cors');
const path = require('path');
const bodyParser = require('body-parser');
const dataRoute =  require("./Routes/indexs"); 
// Parse application/json
app.use(bodyParser.json());
app.use(cors()); 

// serve "public" folder as starting point for static asset
app.use(express.static(path.join(__dirname, 'public')));

app.use("/product", dataRoute );

app.listen(3333, () => {
    console.log("Api running on port 3333!!")
})

