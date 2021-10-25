require('dotenv').config();
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const multer = require('multer');
const fs = require('fs');

const PORT = 3000;

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

    const files = fs.readdirSync('./uploads');
    if (files.some((f) => f.endsWith(file.originalname))) {
      return callback(new Error('File already exists'));
    }

    callback(null, true);
  },
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.post('/upload', upload.single('arquivo'), (req, res) => {
  res.status(200).json({ body: req.body, file: req.file });
});

app.post('/multiple', upload.array('files'), (req, res) => {
  res.status(200).json([
    ...req.files.map(({ originalname, path }) => ({
      file: originalname,
      url: path,
    })),
  ]);
});

app.post(
  '/profile',
  multer({ dest: 'profilePics' }).single('profilePic'),
  (req, res) => {
    const { name, email, password, bio } = req.body;

    const PATH = `./profilePics/profile.json`;

    const files = JSON.parse(fs.readFileSync(PATH));
    files.push({ id: req.file.filename, name, email, password, bio });
    fs.writeFileSync(PATH, JSON.stringify(files));

    res.status(200).json({ files });
  }
);

app.get('/profiles/:id', (req, res) => {
  const { id } = req.params;

  const files = JSON.parse(fs.readFileSync('./profilePics/profile.json'));
  const profile = files.find((prof) => prof.id === Number(id));

  if (!profile) {
    return res.status(404).json({
      error: {
        message: 'Perfil não encontrado',
      },
    });
  }

  res.status(200).json({ profile });
});

app.use(middlewares.error);

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});
