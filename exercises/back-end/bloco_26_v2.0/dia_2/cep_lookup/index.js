const express = require('express');

const app = express();

const PORT = process.env.PORT || 3000;

app.get('/ping', async (_req, res) => {
  res.status(200).json({ message: 'pong' });
});

app.listen(PORT, () => {
  console.log(`Ouvindo na porta: ${PORT}`);
});
