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
router.get('/laptops', (req ,res)=>{
   
    res.json(allData.laptops); 
}) 
router.get('/accessories', (req ,res)=>{
   
    res.json(allData.accessories); 
}) 
router.get('/laptops/:id' ,(req ,res )=>{
    let getLaptops = allData.laptops.filter(data=>data.id === req.params.id);
    res.json({laptop:getLaptops});

});
router.get('/accessories/:id' ,(req ,res )=>{
    let getAccessories = allData.accessories.filter(data=>data.id === req.params.id);
    res.json({accessorie:getAccessories});
});
module.exports = router ; 