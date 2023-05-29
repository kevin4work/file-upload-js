const express = require('express');
const multer = require('multer');
const path = require('path');
const app = express();
const port = 8080;

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/');
  },
  filename: (req, file, cb) => {
    console.log(file);
    let extname = path.extname(file.originalname);
    let basename = path.basename(file.originalname, extname)
    cb(null, basename + '-' + Date.now() + extname);
  }
});

const upload = multer({ storage: storage });

app.use(express.static('public'));

app.post('/upload', upload.single('file'), (req, res) => {
  res.send('File uploaded successfully.');
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});