// Dependencies
// =============================================================
const express = require("express");
const path = require("path");
const fs = require("fs")

// Sets up the Express App
// =============================================================
const app = express();
var PORT = 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//html routes
app.get("/notes/", (req,res) => {
    res.sendFile(path.join(__dirname, "notes.html"));
});
app.get("/", (req,res) => {
    res.sendFile(path.join(__dirname, "index.html"));
});

//API ROUTES
app.get("/api/notes", function(req, res) {
    res.sendFile(path.join(__dirname, "/db/db.json"));
});




app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
});