const express = require('express');
const fs = require('fs');
const path = require('path');

const router = express.Router();
const productJsonFilePath = path.join(__dirname, './../src/API/dataProducts.json');
const dataString = fs.readFileSync(productJsonFilePath);
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


router.post('/accessories' , (req ,res) =>{
    const addProduct = req.body ; 
    const  id = (allData.accessories.length + 1).toString(); 
    const newProduct = {...addProduct, id}
    allData.accessories.push(newProduct);  
    const dataString = JSON.stringify(allData);
    fs.writeFileSync(productJsonFilePath, dataString);
    res.json({
        'message': 'product add successful',
        'data': newProduct 
    });
    
});
router.put('/accessories/:id', (req, res) => {
    const updateProduct = req.params.id;
    const updated = allData.accessories.findIndex(data => data.id == updateProduct );
    allData.accessories[updated] ={
        ...allData.accessories[updated]
    };
    const dataString = JSON.stringify(allData);
    fs.writeFileSync(productJsonFilePath, dataString);
    res.json({
        'message': 'Product  is successfully updated',
        'data': updateProduct
    });
});
router.delete('/accessories/:id', (req, res) => {
    const deleteProduct = req.params.id;
    const removed = allData.accessories.filter(data => data.id !== deleteProduct );
    allData.accessories = removed;
    const dataString = JSON.stringify(allData);
    fs.writeFileSync(productJsonFilePath, dataString);
    res.json({
        'message': 'Product  is successfully deleted',
        'data': deleteProduct
    });
});

module.exports = router ; 