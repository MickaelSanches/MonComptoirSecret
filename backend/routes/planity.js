const express = require('express');
const router = express.Router();

router.get('/gift-cards', async (req, res) => {
  // Ajoutez ici la logique d'intégration de l'API Planity
  res.json({ message: 'Planity Gift Cards' });
});

module.exports = router;
