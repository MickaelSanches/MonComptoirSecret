import { useState } from 'react';
import axios from 'axios';

const Connect = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLogin, setIsLogin] = useState(true); // State to toggle between login and signup
  const [error, setError] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    const url = isLogin ? 'http://localhost:3000/login' : 'http://localhost:3000/create-account';
    
    try {
      const response = await axios.post(url, { email, password });

      if (response.status !== 200) {
        throw new Error(response.data.error || 'An error occurred');
      }

      console.log('User logged in:', response.data);
      // Handle successful login or signup (e.g., redirect, save token, etc.)
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-center text-gray-800">
          {isLogin ? 'Connectez-vous' : 'Créer un compte'}
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email:</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">Mot de passe:</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>
          {error && <p className="text-sm text-red-600">{error}</p>}
          <div>
            <button
              type="submit"
              className="w-full px-4 py-2 font-bold text-white bg-primary rounded hover:bg-gradientStart hover:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            >
              {isLogin ? 'Se connecter' : 'Créer un compte'}
            </button>
          </div>
        </form>
        <p className="text-sm text-center text-gray-600">
          {isLogin ? "Pas de compte ?" : "Déjà un compte ?"}{' '}
          <button
            type="button"
            className="text-gradientStart hover:underline"
            onClick={() => setIsLogin(!isLogin)}
          >
            {isLogin ? 'Créer un compte' : 'Connectez-vous'}
          </button>
        </p>
      </div>
    </div>
  );
};

export default Connect;
