// Dependencies
// =============================================================
const express = require("express");
const path = require("path");
const fs = require("fs");

// Sets up the Express App
// =============================================================
const app = express();
var PORT = 3000;

// Sets up the Express app to handle data parsing
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//html routes
app.get("/notes/", (req,res) => {
    res.sendFile(path.join(__dirname, "/public/notes.html"));
});
app.get("/", (req,res) => {
    res.sendFile(path.join(__dirname, "/public/index.html"));
});

//API ROUTES
app.get("/api/notes", function(req, res) {
    res.sendFile(path.join(__dirname, "/db/db.json"));
});

app.post("/api/notes", function(req, res) {
   
      
      let savednotes = fs.readFileSync("./Develop/db/db.json", "utf8");
      savednotes = JSON.parse(savednotes);
      let newnote = req.body
      newnote.id = savednotes.length;
      savednotes.push(req.body); 
      console.log(savednotes)
});

app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
});