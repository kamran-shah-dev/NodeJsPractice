const express = require("express");
const router = express.Router();
router.get('/', (req, res) => {
    res.json(
        [
            {
                id: 1,
                name: "Bukhari"
            }, 
            {
                id: 2,
                name: "Umer"
            }, 
            {
                id: 3,
                name: "Zaman"
            }
        ]
    )
} );

module.exports = router;