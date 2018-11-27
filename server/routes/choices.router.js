const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

// Get all of the projects and return them to the client
router.get('/', (req, res) => {
    // Alias tag name as tag
    const queryText = `
        SELECT page_choices.page_id, page_choices.choices_id, choices.choice_text, choices.next_page_id FROM page_choices
        JOIN choices ON page_choices.choices_id = choices.id
        WHERE page_id=1
        ORDER BY choices_id ASC;`;
    pool.query(queryText).then((results) => {
        console.log(results);
        res.send(results.rows);
    }).catch((error) => {
        console.log(error);
        res.sendStatus(500);
    })
});

// Add information from the client to the database
router.post('/', (req, res) => {
    console.log('req.body is set as', req.body);
    const queryText = `INSERT INTO "choices" 
                            ("choice_text", "next_page_id")
                        VALUES ($1, $2);`;
    pool.query(queryText, [req.body.choice_text, req.body.next_page_id])
        .then((results) => {
            res.sendStatus(201);
        }).catch((error) => {
            console.log(error);
            res.sendStatus(500);
        });
});


module.exports = router;