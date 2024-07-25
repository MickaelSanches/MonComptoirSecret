const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const { Pool } = require('pg');

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Pool de connexion PostgreSQL
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false,
  },
});

// Endpoint de connexion
app.post('/login', async (req, res) => {
  const { email, password } = req.body;

  try {
    const { rows } = await pool.query('SELECT * FROM users WHERE email = $1 AND password = $2', [email, password]);

    if (rows.length === 0) {
      return res.status(401).json({ error: 'Email ou mot de passe incorrect' });
    }

    const user = rows[0];
    res.status(200).json({ user });
  } catch (error) {
    console.error('Erreur lors de la connexion:', error);
    res.status(500).json({ error: 'Erreur interne du serveur' });
  }
});

// Endpoint de création de compte
app.post('/create-account', async (req, res) => {
  const { email, password, firstName, lastName, phone } = req.body;

  try {
    console.log("Vérification de l'email:", email);
    const { rows } = await pool.query('SELECT * FROM users WHERE email = $1', [email]);

    if (rows.length > 0) {
      console.log("L'email est déjà utilisé");
      return res.status(400).json({ error: 'L\'email est déjà utilisé' });
    }

    console.log("Création de l'utilisateur:", { email, password, firstName, lastName, phone });
    await pool.query('INSERT INTO users (email, password, first_name, last_name, phone) VALUES ($1, $2, $3, $4, $5)', [email, password, firstName, lastName, phone]);
    
    res.status(200).json({ message: 'Compte créé avec succès' });
  } catch (error) {
    console.error('Erreur lors de la création de compte:', error);
    res.status(500).json({ error: 'Erreur interne du serveur' });
  }
});

app.listen(port, () => {
  console.log(`Le serveur fonctionne sur le port ${port}`);
});
