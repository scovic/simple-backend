var express = require('express');
var router = express.Router();


router.get('/', (req, res, next) => {
    res.status(200).send("It wordks");
})

router.post('/getUser', (req, res, next) => {
    //geting a user by some params

    res.status(200).send("goten the user");
})

router.post('/:id', (req, res, next) => {
    //geting a user by id
})

router.post('/createUser', (req, res, next) => {
    //creating a user
})

router.put('/updateUser/:id', (req, res, next) => {
    //updateing a user
})

router.delete('/deleteUser/:id', (req, res, next) => {

})

module.exports = router;