const express = require("express");
const multer = require('multer');

const cors = require('cors');
var app = express();
app.use(cors()); 

// Start by creating some disk storage
const storage = multer.diskStorage({
    destination: function (req, file, callback) {
        callback(null, __dirname + '/uploads');
    },
    // Sets file(s) to be saved in uploads folder in same directory
    filename: function (req, file, callback) {
        callback(null, file.originalname);
    }
    // Sets saved filename(s) to be original filename(s)
  })
  
// Set saved storage    
const upload = multer({ storage: storage })

app.post("/api", upload.array("files"), (req, res) => {
// Sets multer to intercept files named "files" on uploaded form data

    console.log(req.body); // Logs form body values
    console.log(req.files); // Logs any files

});

app.listen(3000, function(){
    console.log("Server running on port 3000");
});