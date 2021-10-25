require('dotenv').config();
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const multer = require('multer');

const PORT = 3000;

const controllers = require('./controllers');
const middlewares = require('./middlewares');

const app = express();

const storage = multer.diskStorage({
  destination: (_req, _file, callback) => {
    callback(null, 'uploads/');
  },
  filename: (_req, file, callback) => {
    callback(null, `${Date.now()}-${file.originalname}`);
  },
});

app.use(
  cors({
    origin: `http://localhost:${PORT}`,
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Authorization'],
  })
);

const upload = multer({
  storage,
  fileFilter: (_req, file, callback) => {
    if (!file.originalname.endsWith('.png')) {
      return callback(new Error('Extension must be `png`'));
    }
    callback(null, true);
  },
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/ping', controllers.ping);

app.post('/upload', upload.single('arquivo'), (req, res) => {
  res.status(200).json({ body: req.body, file: req.file });
});

app.use(middlewares.error);

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});
