const express = require('express');
const fs = require('fs');
const path = require('path');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
app.use(cors());
app.use(bodyParser.json());

const DB_PATH = path.join(__dirname, 'certs.json');

function readDB() {
  try {
    const raw = fs.readFileSync(DB_PATH, 'utf8');
    return JSON.parse(raw || '[]');
  } catch (e) {
    return [];
  }
}
function writeDB(data) {
  fs.writeFileSync(DB_PATH, JSON.stringify(data, null, 2));
}

app.get('/api/certificates/:id', (req, res) => {
  const id = String(req.params.id || '').toUpperCase();
  const certs = readDB();
  const found = certs.find(c => String(c.id || '').toUpperCase() === id);
  if (found) return res.json(found);
  return res.status(404).json({ error: 'Not found' });
});

app.post('/api/certificates', (req, res) => {
  const cert = req.body;
  if (!cert || !cert.id) return res.status(400).json({ error: 'Invalid certificate payload' });
  const certs = readDB();
  if (certs.find(c => c.id === cert.id)) return res.status(409).json({ error: 'Already exists' });
  certs.unshift(cert);
  writeDB(certs);
  return res.status(201).json(cert);
});

app.get('/api/certificates', (req, res) => {
  res.json(readDB());
});

const port = process.env.PORT || 4000;
app.listen(port, () => console.log(`Certificate registry API listening on http://localhost:${port}`));
