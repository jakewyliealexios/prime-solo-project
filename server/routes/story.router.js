const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

// Get all of the projects and return them to the client
router.get('/', (req, res) => {
    // Alias tag name as tag
    const queryText = `SELECT * FROM page WHERE id=1;`;
    pool.query(queryText).then((results) => {
        console.log(results);
        res.send(results.rows);
    }).catch((error) => {
        console.log(error);
        res.sendStatus(500);
    })
});

module.exports = router;