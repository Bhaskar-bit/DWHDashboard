const express = require('express');
const router = express.Router();
const checkAuth = require('../middleware/authCheck')




router.post('/', checkAuth, (req, res, next) => {
    res.status(200).json({
        "jobs": [{
                "id": 1,
                "Source_System": "Bollywood",
                "Load_frequency": "Daily",
                "File_Date": "23-05-2019",
                "Last_load_date": "23-05-2019",
                "Schema": "pres_dev_5yrs",
                "status": "Completed",
            },
            {
                "id": 2,
                "Source_System": "Sword",
                "Load_frequency": "Daily",
                "File_Date": "23-05-2019",
                "Last_load_date": "23-05-2019",
                "Schema": "pres_dev_5yrs",
                "status": "Completed",
            },
            {
                "id": 3,
                "Source_System": "BW EPQR",
                "Load_frequency": "Daily",
                "File_Date": "23-05-2019",
                "Last_load_date": "23-05-2019",
                "Schema": "pres_dev_5yrs",
                "status": "Completed",
            },
            {
                "id": 4,
                "Source_System": "Parts Return",
                "Load_frequency": "Daily",
                "File_Date": "23-05-2019",
                "Last_load_date": "23-05-2019",
                "Schema": "pres_dev_5yrs",
                "status": "Completed",
            },
            {
                "id": 5,
                "Source_System": "IQM",
                "Load_frequency": "Daily",
                "File_Date": "22-05-2019",
                "Last_load_date": "23-05-2019",
                "Schema": "pres_dev_5yrs",
                "status": "Completed",
            },
            {
                "id": 6,
                "Source_System": "CAESAR",
                "Load_frequency": "Daily",
                "File_Date": "22-05-2019",
                "Last_load_date": "22-05-2019",
                "Schema": "pres_dev_5yrs",
                "status": "Completed",
            },
            {
                "id": 7,
                "Source_System": "WIPS-ADHOC",
                "Load_frequency": "Daily",
                "File_Date": "23-05-2019",
                "Last_load_date": "23-05-2019",
                "Schema": "pres_dev_5yrs",
                "status": "Completed",
            },
            {
                "id": 8,
                "Source_System": "CMMS3",
                "Load_frequency": "Daily",
                "File_Date": "23-05-2019",
                "Last_load_date": "23-05-2019",
                "Schema": "pres_dev_5yrs",
                "status": "Completed",
            }
        ]
    })
})

module.exports = router;