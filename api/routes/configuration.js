const express = require('express');
const router = express.Router();
const checkAuth = require('../middleware/authCheck')

router.post('/', checkAuth, (req, res, next) => {
    res.status(200).json({
        id: 1,
        status: 50,
        MultiDataSet: [
            100,
            72.0654
        ],
        MultiDataSetSchema: [
            164.80,
            // 1853.25,
            116.52,
            729.18
        ],
        labels: ["capacity_gbytes", "used_gbytes"],
        schemalabesls: [
            "public",
            "pres_sandbox",
            //"pres_dev_5yrs_r_bkp",
            "pres_dev_5yrs"
        ],
        environment: 'production',
        "schemaDetails": [{
                "schema_name": "public",
                "databasename": "redshiftDb",
                "space_used_in_mb": 168765
            },
            // {
            //     "schema_name": "pres_sandbox",
            //     "databasename": "redshiftDb",
            //     "space_used_in_mb": 1897733
            // },
            {
                "schema_name": "pres_dev_5yrs_r_bkp",
                "databasename": "redshiftDb",
                "space_used_in_mb": 119320
            },
            {
                "schema_name": "pres_dev_5yrs",
                "databasename": "redshiftDb",
                "space_used_in_mb": 746690
            },

        ],


        message: "Successfully data devlivered"

    })
})


module.exports = router;