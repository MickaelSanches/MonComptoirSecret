import { useEffect, useState } from 'react';
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
    <div>
      <h2>Cartes Cadeaux</h2>
      <ul>
        {giftCards.length > 0 ? (
          giftCards.map((card) => (
            <li key={card.id}>
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
