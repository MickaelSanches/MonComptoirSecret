import { useEffect } from 'react';

const GiftCards = () => {
  useEffect(() => {
    const container = document.getElementById('giftVoucherContainer');
    window.planity = {
      key: '-Ndenpt2NBzQXjUpPT0x',
      primaryColor: '#FF5733',
      giftVoucherContainer: container,
    };

    // Charger les scripts Planity
    const script1 = document.createElement('script');
    script1.src = '/js/polyfills.latest.js';
    script1.async = true;
    document.body.appendChild(script1);

    const script2 = document.createElement('script');
    script2.src = '/js/app.latest.js';
    script2.async = true;
    document.body.appendChild(script2);
  }, []);

  return (
    <div id="giftVoucherContainer"></div>
  );
};

export default GiftCards;
