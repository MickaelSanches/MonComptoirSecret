import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import helmet from 'helmet';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import pool from './db.js';

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.use(helmet());
app.use(cors({
  origin: 'http://localhost:4321',
  methods: ['GET', 'POST'],
  allowedHeaders: ['Content-Type']
}));
app.use(express.json());

const generateToken = (user) => {
  return jwt.sign({ id: user.id, email: user.email }, process.env.JWT_SECRET, { expiresIn: '1h' });
};

const authenticateToken = (req, res, next) => {
  const token = req.headers['authorization'];
  if (token) {
    jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
      if (err) return res.sendStatus(403);
      req.user = user;
      next();
    });
  } else {
    res.sendStatus(401);
  }
};

// Simulated user login endpoint
app.post('/login', async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await pool.query('SELECT * FROM users WHERE email = $1', [email]);
    if (user && bcrypt.compareSync(password, user.password)) {
      const token = generateToken(user);
      res.json({ token });
    } else {
      res.status(401).json({ message: 'Email ou mot de passe incorrect' });
    }
  } catch (error) {
    console.error('Erreur lors de la connexion:', error);
    res.status(500).json({ error: 'Erreur interne du serveur' });
  }
});

// Example of a protected endpoint
app.get('/protected', authenticateToken, (req, res) => {
  res.json({ message: 'Ceci est une ressource protégée.', user: req.user });
});

app.listen(port, () => {
  console.log(`Le serveur fonctionne sur le port ${port}`);
});
