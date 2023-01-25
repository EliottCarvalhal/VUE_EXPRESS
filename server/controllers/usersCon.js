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