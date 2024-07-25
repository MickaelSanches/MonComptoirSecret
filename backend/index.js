const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const axios = require('axios'); // Utilisation d'axios pour les requêtes HTTP

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Endpoint de connexion
app.post('/login', async (req, res) => {
  const { email, password } = req.body;

  try {
    const response = await axios.post('https://api.planity.com/v1/login', {
      email,
      password,
    });

    if (response.status !== 200) {
      return res.status(response.status).json({ error: response.data.error || 'Login failed' });
    }

    res.status(200).json(response.data);
  } catch (error) {
    console.error('Error during login:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Endpoint de création de compte
app.post('/create-account', async (req, res) => {
  const { email, password } = req.body;

  try {
    const response = await axios.post('https://api.planity.com/v1/signup', {
      email,
      password,
    });

    if (response.status !== 200) {
      return res.status(response.status).json({ error: response.data.error || 'Signup failed' });
    }

    res.status(200).json(response.data);
  } catch (error) {
    console.error('Error during account creation:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
