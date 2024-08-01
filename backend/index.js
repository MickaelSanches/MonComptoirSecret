import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import pool from './db.js';
import helmet from 'helmet';
import emailjs from 'emailjs-com';

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.use(helmet());

app.use(helmet.frameguard({ action: 'sameorigin' }));

app.use(cors({
  origin: ['http://localhost:4321','https://mon-comptoir-secret.vercel.app/'],
  methods: ['GET', 'POST'],
  allowedHeaders: ['Content-Type']
}));
app.use(express.json());

// Endpoint de newsletter
app.post('/newsletter', async (req, res) => {
  const { email } = req.body;
  try {
    await pool.query('INSERT INTO newsletters (email) VALUES ($1)', [email]);
    res.status(200).json({ message: 'Inscription réussie à la newsletter' });
  } catch (error) {
    console.error('Erreur lors de l\'inscription à la newsletter:', error);
    res.status(500).json({ error: 'Erreur interne du serveur' });
  }
});

app.listen(port, () => {
  console.log(`Le serveur fonctionne sur le port ${port}`);
});
