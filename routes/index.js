const { response } = require('express');
var express = require('express');
var router = express.Router();

var productHelpers = require('../helpers/product-helpers');
var userHelpers = require('../helpers/user-helpers'); 

/* GET home page. */

router.get('/', function (req, res, next) {
  let user=req.session.user
  //console.log(user);
  productHelpers.getAllProducts().then((products) => {
    res.render('users/products', {user, products, admin: false });
  })

});
router.get('/login',(req,res)=>{
  res.render('users/login');
});
router.get('/signup',(req,res)=>{
  res.render('users/signup');
});
router.post('/signup',(req,res)=>{
  userHelpers.doSignup(req.body).then((response)=>{
    console.log(response);
  })
})
router.post('/login',(req,res)=>{
  userHelpers.doLogin(req.body).then((response)=>{
    if(response.status){
      
      req.session.loginStatus=true
      req.session.user=response.user
      res.redirect('/')
    }else{
      res.redirect('/login')
    }
  })
})
router.get('/logout',(req,res)=>{
  req.session.destroy()
  res.redirect('/')
})

module.exports = router;
