import React, { useEffect, useState } from 'react';

const UserAccount = () => {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    fetch('https://api.planity.com/v1/account', {
      headers: {
        'Authorization': `Bearer ${process.env.PLANITY_API_KEY}`
      }
    })
      .then(response => response.json())
      .then(data => setUserData(data));
  }, []);

  return (
    <div className="p-4 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">Mon Compte</h2>
      {userData ? (
        <div>
          <p><strong>Nom:</strong> {userData.name}</p>
          <p><strong>Email:</strong> {userData.email}</p>
          <p><strong>Téléphone:</strong> {userData.phone}</p>
        </div>
      ) : (
        <p>Chargement des informations du compte...</p>
      )}
    </div>
  );
};

export default UserAccount;
