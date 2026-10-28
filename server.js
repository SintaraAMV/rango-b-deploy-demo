const path = require('path');
const express = require('express');
const config = require('./src/config');
const { leads, STATUSES } = require('./src/data/leads');

const app = express();

app.use(express.static(path.join(__dirname, 'public')));

app.get('/health', (req, res) => {
  res.json({ status: 'ok', app: config.appName, version: config.version });
});

app.get('/api/config', (req, res) => {
  res.json({ appName: config.appName, version: config.version, statuses: STATUSES });
});

app.get('/api/leads', (req, res) => {
  const { status } = req.query;
  if (status === undefined || status === '') {
    return res.json(leads);
  }
  if (typeof status !== 'string' || !STATUSES.includes(status)) {
    return res.status(400).json({
      error: `Estado inválido: se esperaba uno de ${STATUSES.join(', ')}`
    });
  }
  res.json(leads.filter((lead) => lead.status === status));
});

app.use('/api', (req, res) => {
  res.status(404).json({ error: 'Ruta no encontrada' });
});

app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).json({ error: 'Error interno del servidor' });
});

app.listen(config.port, config.host, () => console.log(`${config.appName} escuchando en http://${config.host}:${config.port}`));
