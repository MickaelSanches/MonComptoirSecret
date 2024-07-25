import React, { useEffect } from 'react';

const UserAccount = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = "https://www.planity.com/widget/script.js";
    script.async = true;
    script.onload = () => {
      window.PlanityBooker.init({
        establishmentKey: import.meta.env.PLANITY_API_KEY,
        containerId: 'accountContainer'
      });
    };
    document.body.appendChild(script);
  }, []);

  return (
    <div id="accountContainer" style={{ minHeight: '600px' }}></div>
  );
};

export default UserAccount;

