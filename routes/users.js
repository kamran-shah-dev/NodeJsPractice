const express = require("express");
const router = express.Router();
const users = [
            {id: 1, name: "Bukhari"}, 
            {id: 2, name: "Umer"}, 
            {id: 3, name: "Zaman"}
];
router.get('/:id', (req, res) => {
    const user = users.find(u => u.id === Number(req.params.id));

    if (!user) {
        console.log
    }
    res.json(
        [
            {
                message: 'getting user by id',
                userid: req.params.id
            }
        ]
    )
} );


router.get('/', (req, res) => {
    res.json(
        users
    )
} );

router.post('/add', (req, res) => {
    res.status(201).json(
        [
            {
                message: 'User createdsuccessfully',
                // user: req.body -> It will show the boy as a json object
                userid: req.body.userid,
                username: req.body.username
            }
        ]
    )
} );


module.exports = router;