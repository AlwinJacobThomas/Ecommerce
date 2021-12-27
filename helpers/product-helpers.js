var db = require("../config/connection");
var collection = require("../config/collections");

module.exports = {
    addProduct: (product, callback) => {
        db.get().collection("product")
            .insertOne(product)
            .then(data => {
                console.log(data.insertedId)
                callback(data.insertedId)
            })
            .catch(err => {
                console.log("error:"+err)
            });
    },
    getAllProducts:()=>{
        return new Promise(async(resolve,reject)=>{
            let products=await db.get().collection(collection.PRODUCT_COLLECTION).find().toArray()
            resolve(products)
        })
    }
}