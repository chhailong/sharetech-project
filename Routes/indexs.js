const express = require('express');
const fs = require('fs');
const path = require('path');

const router = express.Router();
const todoJsonFilePath = path.join(__dirname, './../src/API/dataProducts.json');
const dataString = fs.readFileSync(todoJsonFilePath);
const allData = JSON.parse(dataString) ;

router.get('/', (req ,res)=>{
    res.json(allData); 
}) 


router.get('/:id' ,(req ,res )=>{
    let getDataById = allData.filter(data=>data.id === req.params.id);
    res.json({data:getDataById});
    

});

module.exports = router ; 