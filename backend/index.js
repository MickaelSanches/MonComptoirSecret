const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const { Pool } = require('pg');
const axios = require('axios');

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false,
  }
});

// Endpoint de connexion
app.post('/login', async (req, res) => {
  const { email, password } = req.body;

  try {
    // Vérification des identifiants dans votre base de données
    const { rows } = await pool.query('SELECT * FROM users WHERE email = $1 AND password = $2', [email, password]);

    if (rows.length === 0) {
      return res.status(401).json({ error: 'Email ou mot de passe incorrect' });
    }

    const user = rows[0];

    // Authentification avec Planity
    const planityResponse = await axios.post('https://api.planity.com/v1/auth/login', {
      email: email,
      password: password
    });

    if (planityResponse.status !== 200) {
      return res.status(planityResponse.status).json({ error: 'Erreur de connexion à Planity' });
    }

    res.status(200).json({ user, planity: planityResponse.data });
  } catch (error) {
    console.error('Erreur lors de la connexion:', error);
    res.status(500).json({ error: 'Erreur interne du serveur' });
  }
});

// Endpoint de création de compte
app.post('/create-account', async (req, res) => {
  const { email, password, firstName, lastName, phone } = req.body;

  try {
    const { rows } = await pool.query('SELECT * FROM users WHERE email = $1', [email]);

    if (rows.length > 0) {
      return res.status(400).json({ error: 'L\'email est déjà utilisé' });
    }

    await pool.query('INSERT INTO users (email, password, first_name, last_name, phone) VALUES ($1, $2, $3, $4, $5)', [email, password, firstName, lastName, phone]);

    // Création de compte sur Planity
    const planityResponse = await axios.post('https://api.planity.com/v1/auth/signup', {
      email: email,
      password: password,
      firstName: firstName,
      lastName: lastName,
      phone: phone
    });

    if (planityResponse.status !== 200) {
      return res.status(planityResponse.status).json({ error: 'Erreur de création de compte sur Planity' });
    }

    res.status(200).json({ message: 'Compte créé avec succès' });
  } catch (error) {
    console.error('Erreur lors de la création de compte:', error);
    res.status(500).json({ error: 'Erreur interne du serveur' });
  }
});

app.listen(port, () => {
  console.log(`Le serveur fonctionne sur le port ${port}`);
});
