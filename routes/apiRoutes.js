const router = require('express').Router();
const { v4: uuidv4 } = require('uuid');
const save = require("../db/db.json");

// GET Route
router.get("/notes", (req, res) => 
  res.json(save)
);

// POST Route
router.post("/notes", (req, res) => {
  let { body } = req;
  body.id = uuidv4();
  save.push(body);
  res.send(body.id);
});

// DELETE Route
router.delete('/notes/:id', (req, res) => {
  const noteId = req.params.id;
  let result = save.findIndex(note => note.id === noteId);
  save.splice(result, 1); 
  // Respond to the DELETE request
  res.send("Deleted!");
})

module.exports = router;
