const express = require('express');
const router = express.Router();
const checkAuth = require('../middleware/authCheck')

router.post('/', checkAuth, (req, res, next) => {
    res.status(200).json({
        "data": [
            // { data: [168765 , 1897733, 119320, 746690, 20688 ,642008,3468], label: 'redshiftdb', fill: false }
            { data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A' }
        ],
        "queries": [{
                "User_Name": "rdsdb",
                "Database_Name": "dev",
                "Process_Id": -1,
                "Start_time": "5 / 7 / 2019 , 10:30",
                "Duration": 32,
                "Status": "Done"
            },
            {
                "User_Name": "rdsdb",
                "Database_Name": "dev",
                "Process_Id": -1,
                "Start_time": "5/7/2019 10:30",
                "Duration": 16279,
                "Status": "Done"
            },
            {
                "User_Name": "rdsdb",
                "Database_Name": "dev",
                "Process_Id": -1,
                "Start_time": "5/7/2019 10:30",
                "Duration": 1230,
                "Status": "Done"
            }
        ]

    })
})

module.exports = router;