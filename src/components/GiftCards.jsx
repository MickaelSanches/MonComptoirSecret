import React, { useEffect, useState } from 'react';
import { getGiftCards } from '../services/planity';

const GiftCards = () => {
  const [giftCards, setGiftCards] = useState([]);

  useEffect(() => {
    const fetchGiftCards = async () => {
      try {
        const cards = await getGiftCards();
        setGiftCards(cards);
      } catch (error) {
        console.error('Error fetching gift cards:', error);
      }
    };

    fetchGiftCards();
  }, []);

  return (
    <div className="p-4 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">Cartes Cadeaux</h2>
      <ul className="list-disc list-inside">
        {giftCards.length > 0 ? (
          giftCards.map((card) => (
            <li key={card.id} className="mb-2">
              {card.name}: {card.price}€
            </li>
          ))
        ) : (
          <li>Aucune carte cadeau disponible pour le moment.</li>
        )}
      </ul>
    </div>
  );
};

export default GiftCards;
