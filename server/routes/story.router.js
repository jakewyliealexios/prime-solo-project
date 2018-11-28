const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

router.get('/', (req, res) => {
    // Alias tag name as tag
    console.log('req.body for router.get /story', req.query);
    const queryText = `SELECT * FROM page WHERE id=$1;`;
    pool.query(queryText, [req.query.next_page_id])
        .then((results) => {
        console.log(results);
        res.send(results.rows);
    }).catch((error) => {
        console.log(error);
        res.sendStatus(500);
    })
});

module.exports = router;