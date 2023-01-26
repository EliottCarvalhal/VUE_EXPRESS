var express = require('express')
var mongoose = require('mongoose')
var router = express.Router()

var User = require('../models/user')


router.get('/api/users', function (req, res) {
    User.find(function (err,users) {
        if(err){ console.log("error")
    }
        else {
            res.status(200).json({"users": users})
        }
    })
}
)


router.get('/api/users/:id', function (req, res, next) {
    var id = req.params.id;
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ "message": "User not found" })

    } else {

        User.findById(id, function (err, user) {
            if (err) { return next(err) }
            if (user == null) {
                return res.status(404).json({ "message": "User not found" })
            }
            res.status(200).json(user)
        });
    }
});


router.post('/api/users', function(req,res){
    var new_user = new User(req.body)
    new_user.save(function(err){
       if(err){return next(err)}
        res.status(201).json(new_user)
    })
})

router.put('/api/users/:id', function(req,res){
    var id = req.params.id
    User.findById(id, function (err,user){
        if(err) {return next(err)}
        if(user == null){
            res.status(404).json({
                "message": "User not found"
            })
        }
        user.username = req.body.username
        user.pwd = req.body.pwd
        user.save(function(err){
            if(err){return next(err)}
            res.status(200).json(user)
        })
    })

})

router.patch('/api/users/:id', function (req, res, next) {
    var id = req.params.id;
    User.findById(id, function (err, user) {
        if (err) { return next(err) }
        if (user == null) {
            return res.status(404).json({ "message": "User not found" })
        }
        user.username = (req.body.username || user.username)
        user.pwd = (req.body.pwd || user.pwd)
        user.save(function (err) {
            if (err) { return next(err) }
            res.status(200).json(user);
        });
    });
});


router.delete('/api/users', function(req,res){
    User.deleteMany({}, function (err,){
        if(err){return next(err)}
        res.status(204).json()
        
    })
})

router.delete('/api/users/:id', function(req,res) {
    id = req.params.id
    User.findOneAndDelete({_id: id}, function(err,user){
        if(err) {return next(err)}
        if(user==null){
            return res.status(404).json( {"message": "User not found"})

        }
        res.status(204).json(user)
    })
})

module.exports = router