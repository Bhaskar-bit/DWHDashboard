const express = require('express');
const router = express.Router();
const checkAuth = require('../middleware/authCheck')

router.post('/', checkAuth, (req, res, next) => {
    res.status(200).json({
        labels: [
            350,
            450
        ],
        events: ["2", "2", 0, 0, "7", 0, 0, "8"]

    })
})

module.exports = router;