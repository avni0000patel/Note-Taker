const path = require("path");
const express = require("express");
const router = require("express").Router();
router.use(express.static('public'));

// GET Route for notes page
router.get('/notes', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/notes.html'));
});

// GET Route for homepage
router.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/index.html'));
});

module.exports = router;