const router = require('express').Router();
const { v4: uuidv4 } = require('uuid');
const save = require("../db/db.json");

router.get("/notes", (req, res) => 
    res.json(save)
);

router.post("/notes", (req, res) => {
    let { body } = req;
    body.id = uuidv4();
    save.push(body);
    return res.send(body.id);
});

module.exports = router;
