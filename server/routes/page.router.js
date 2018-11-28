const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

// Get all of the projects and return them to the client
router.get('/', (req, res) => {
    // Alias tag name as tag
    const queryText = `SELECT * FROM page WHERE id=1;`;
    pool.query(queryText)
        .then((results) => {
        console.log(results);
        res.send(results.rows);
    }).catch((error) => {
        console.log(error);
        res.sendStatus(500);
    })
});

// router.get('/next_page_id', (req, res) => {
//     // Alias tag name as tag
//     console.log('req.body for router.get /next_page_id', req.body);
//     const queryText = `SELECT * FROM page WHERE id=$1;`;
//     pool.query(queryText, [req.body.next_page_id])
//         .then((results) => {
//         console.log(results);
//         res.send(results.rows);
//     }).catch((error) => {
//         console.log(error);
//         res.sendStatus(500);
//     })
// });


//get request for /:next_page_id
//join choices

// Add information from the client to the database
router.post('/', (req, res) => {
    console.log('req.body is set as', req.body);
    const queryText = `INSERT INTO "page" 
                            ("page_text", "hp_adjust")
                        VALUES ($1, $2);`;
    pool.query(queryText, [req.body.page_text, req.body.hp_adjust])
        .then((results) => {
            res.sendStatus(201);
        }).catch((error) => {
            console.log(error);
            res.sendStatus(500);
        });
});


module.exports = router;