import { useState } from "react";

const FAQ = () => {
  const [open, setOpen] = useState(null);

  const toggleFAQ = (index) => {
    setOpen(open === index ? null : index);
  };

  return (
    <section className="max-w-4xl mx-auto p-8">
      <h2 className="tracking-wider font-semibold text-2xl mb-8 text-center text-gray-800">Questions Fréquemment Posées</h2>
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
              <p className="mt-4 text-gray-600 whitespace-pre-line">{faq.answer}</p>
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
    answer:
      "L’épilation à la lumière pulsée (IPL) est une méthode moderne et sûre qui utilise de la lumière à haute intensité pour cibler les follicules pileux à la racine. Contrairement au rasage ou à la cire, elle permet une réduction durable de la pilosité sur le visage et le corps."
  },
  {
    question: "Quels sont les avantages du photorajeunissement ?",
    answer:
      "Le photorajeunissement par lumière pulsée améliore l’apparence globale de la peau. Il est idéal pour estomper les rides fines, les rougeurs diffuses, les taches brunes, les pores dilatés, et pour raffermir la peau. C’est une solution non invasive pour retrouver un teint plus jeune et éclatant."
  },
  {
    question: "Combien de séances sont nécessaires pour voir les résultats ?",
    answer:
      "Le nombre de séances dépend de la zone traitée, de la densité du poil et de votre phototype. En moyenne, il faut compter entre 6 à 8 séances espacées de quelques semaines pour obtenir des résultats significatifs et durables. Des séances d’entretien annuelles peuvent ensuite être recommandées."
  },
  {
    question: "Est-ce que la lumière pulsée est adaptée à tous les types de peau ?",
    answer:
      "Les appareils modernes permettent aujourd’hui de traiter un large éventail de phototypes (types de peaux). Toutefois, certaines précautions sont prises pour les peaux très foncées ou très claires. Un bilan personnalisé est toujours effectué avant la première séance."
  },
  {
    question: "Y a-t-il des contre-indications ou des effets secondaires ?",
    answer:
      "La lumière pulsée est déconseillée aux femmes enceintes, aux personnes sous traitement photosensibilisant, ou atteintes de certaines pathologies cutanées. Des rougeurs temporaires peuvent apparaître après une séance mais elles disparaissent rapidement."
  }
];

export default FAQ;
