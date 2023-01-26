var express = require('express')
var mongoose = require('mongoose')
var router = express.Router()

var Product = require('../models/product')
var User = require('../models/user')

router.get('/api/products', function(req,res){
    Product.find(function (err,product) {
        if(err){ console.log("error")
    }
        else {
            res.status(200).json({"products": product})
        }
    })
})

router.post('/api/products', function(req,res){ 
    var new_product = new Product(req.body)
    new_product.save(function(err){
       if(err){return next(err)}
        res.status(201).json(new_product)
    })
    

})




//get products owner
router.get('/api/products/:id/user', function(req,res){
    var id = req.params.id;
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ "message": "Product not found" })

    } else {
        Product.findById(id, function (err, product) {
            if (err) { return next(err) }
            if (product == null) {
                return res.status(404).json({ "message": "Product not found" })
            }

            id_owner = product.owner._id
        

            User.findById(id_owner, function (err, user) {
                if (err) { return next(err) }
                if (user == null) {
                    return res.status(404).json({ "message": "User not found" })
                }
                res.status(200).json(user)
            });
        });
    }
})

router.put('/api/products/:id', function(req,res){
    var id = req.params.id
    Product.findById(id, function (err,product){
        if(err) {return next(err)}
        if(product == null){
            res.status(404).json({
                "message": "product not found"
            })
        }
        product.productName = req.body.productName
        product.price = req.body.price
        product.owner = req.body.owner

        product.save(function(err){
            if(err){return next(err)}
            res.status(200).json(product)
        })
    })

})


router.patch('/api/products/:id', function (req, res, next) {
    var id = req.params.id;
    Product.findById(id, function (err, product) {
        if (err) { return next(err) }
        if (product == null) {
            return res.status(404).json({ "message": "product not found" })
        }
        product.productName = (req.body.productName || product.productName)
        product.price = (req.body.price || product.price)
        product.owner = (req.body.owner || product.owner)
        product.save(function (err) {
            if (err) { return next(err) }
            res.status(200).json(product);
        });
    });
});




router.delete('/api/products', function(req,res){
    Product.deleteMany({}, function (err,){
        if(err){return next(err)}
        res.status(204).json()
        
    })
})

router.delete('/api/products/:id', function(req,res){
    id = req.params.id
    Product.findOneAndDelete({_id: id}, function(err,product){
        if(err) {return next(err)}
        if(product==null){
            return res.status(404).json( {"message": "product not found"})

        }
        res.status(204).json(product)
    })
})



module.exports = router;