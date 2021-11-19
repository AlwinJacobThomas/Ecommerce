var express = require('express');
var router = express.Router();
// Retrieve



  /* GET home page. */


router.get('/', function(req, res, next) {
  let products=[
    {
      link:"data:image/jpeg;base64,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",
      title:"tshirt",
      category:"dress",
      desc:"this is an awsome tshirt that suits well"
    },
    {
      link:"data:image/jpeg;base64,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",
      title:"red tshirt",
      category:"dress",
      desc:"hi  tshirt,this is an awsome tshirt that suits well"
    }
  ]
    res.render('users/products',{products});
  });

module.exports = router;
