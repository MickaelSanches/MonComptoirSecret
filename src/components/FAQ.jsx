import { useState } from "react";

const FAQ = () => {
  const [open, setOpen] = useState(null);

  const toggleFAQ = (index) => {
    setOpen(open === index ? null : index);
  };

  return (
    <section className="max-w-4xl mx-auto p-8">
      <h2 class="tracking-wider font-semibold text-2xl mb-8 text-center text-gray-800">Questions Fréquemment Posées</h2>
      <div className="space-y-4">
        {faqData.map((faq, index) => (
          <div key={index} className="border border-gray-300 p-4 rounded-lg shadow-md">
            <button
              className="w-full text-left text-black focus:outline-none flex justify-between items-center"
              onClick={() => toggleFAQ(index)}
            >
              <span className="text-lg font-semibold">{faq.question}</span>
              <span>{open === index ? '-' : '+'}</span>
            </button>
            {open === index && (
              <p className="mt-4 text-gray-600">{faq.answer}</p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

const faqData = [
  {
    question: "Qu'est-ce que l'épilation définitive à la lumière pulsée ?",
    answer: "L’épilation à la lumière pulsée est une technique non invasive qui utilise des flashs lumineux pour cibler et détruire les follicules pileux, permettant ainsi une réduction durable de la pilosité."
  },
  {
    question: "Quels sont les avantages du photorajeunissement ?",
    answer: "Le photorajeunissement aide à réduire les taches pigmentaires, les traces d'acnés, les vergetures, les ridules et les rougeurs diffusent. Il améliore également la texture de le grain de peau en stimulant la production de collagène."
  },
  {
    question: "Combien de séances sont nécessaires pour voir les résultats ?",
    answer: "Les résultats varient en fonction de chaque personne, mais généralement, 6 à 8 séances sont nécessaires pour des résultats optimaux."
  }
];

export default FAQ;
