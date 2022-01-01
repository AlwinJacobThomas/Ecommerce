var express = require('express');
var router = express.Router();
var productHelper = require('../helpers/product-helpers')
// Retrieve



/* GET home page. */



router.get('/', function (req, res, next) {
  productHelper.getAllProducts().then((products) => {
    console.log(products)
    res.render('users/products', { products, admin: false });
  })

});
router.get('/login',(req,res)=>{
  res.render('users/login');
});
router.get('/signup',(req,res)=>{
  res.render('users/signup');
});
router.post('/signup',(req,res)=>{
  
})


module.exports = router;
