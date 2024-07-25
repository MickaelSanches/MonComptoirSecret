import React, { useEffect } from 'react';

const GiftCards = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = "https://www.planity.com/widget/script.js";
    script.async = true;
    script.onload = () => {
      window.PlanityBooker.init({
        establishmentKey: import.meta.env.PLANITY_API_KEY,
        containerId: 'giftVoucherContainer'
      });
    };
    document.body.appendChild(script);
  }, []);

  return (
    <div id="giftVoucherContainer" style={{ minHeight: '600px' }}></div>
  );
};

export default GiftCards;
