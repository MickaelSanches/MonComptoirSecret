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
  origin: 'http://localhost:4321',
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

// Endpoint de contact utilisant EmailJS
app.post('/contact', async (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ error: 'Tous les champs sont obligatoires' });
  }

  const serviceID = process.env.EMAILJS_SERVICE_ID;
  const templateID = process.env.EMAILJS_TEMPLATE_ID;
  const userID = process.env.EMAILJS_USER_ID;

  const templateParams = {
    from_name: name,
    from_email: email,
    message: message,
  };

  emailjs.send(serviceID, templateID, templateParams, userID)
    .then(() => {
      res.status(200).json({ message: 'Votre message a été envoyé avec succès.' });
    })
    .catch((error) => {
      console.error('Erreur lors de l\'envoi de l\'email:', error);
      res.status(500).json({ error: 'Erreur lors de l\'envoi de l\'email' });
    });
});

app.listen(port, () => {
  console.log(`Le serveur fonctionne sur le port ${port}`);
});
