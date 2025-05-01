import { useState } from "react";

const produits = [
  {
    nom: "Age Defence Crème de jour anti-âge",
    category: "Soins visage",
    images: [
      "/madara/agedefence.webp",
      "/madara/agedefence1.webp",
      "/madara/agedefence2.webp",
    ],
    description:
      "Ce soin anti-âge unique est enrichi à l'acide hyaluronique multimoléculaire, en hydratants naturels et d'un biocomplexe cellulaire à base d'extraits de 7 plantes nordiques aux puissantes vertus antioxydantes.\n\nSa formule illumine les peaux fatiguées, protège contre les agressions environnementales et aide à préserver le collagène naturel de la peau.\n\nVotre peau reste jeune, lisse et radieuse.\n\n*100 % d'ingrédients d'origine naturelle, 78 % d'ingrédients biologiques.*",
  },
  {
    nom: "Mascara Volume intense",
    category: "Maquillage",
    images: [
      "/madara/deepmatter.webp",
      "/madara/deepmatter1.webp",
      "/madara/deepmatter2.webp",
      "/madara/deepmatter3.webp",
    ],
    description:
      "Apportez de l’intensité à tous vos looks grâce à ce mascara structurant noir de jais, qui vous offrira un regard irrésistible et d’une profondeur quasi-insoutenable.\n\n Sa formule naturelle certifiée à base d’huile de ricin nourrit vos cils et augmente leur vitalité, tout en leur donnant une allure, une longueur et un volume fascinants.\n\n Les cires naturelles véganes et les peptides végétaux garantissent une application facile et une tenue d’une durée incroyable. Le pinceau haute définition vous permettra d’atteindre les cils les plus minuscules pour un effet velouté total complètement révolutionnaire.\n\n*Formule à base de pigments entièrement naturels et sans colorants synthétiques.*",
  },
  {
    nom: "Gel croissance cils et sourcils",
    category: "Maquillage",
    images: [
      "/madara/growfix.webp",
      "/madara/growfix1.webp",
      "/madara/growfix2.webp",
    ],
    description:
      "Formulé avec des peptides, de la caféine, des biopolymères naturels et des extraits de chanterelle du nord de l'Europe concentrés en vitamines, ce sérum double action renforce la brillance, augmente le volume et stimule la pousse, pour des cils et des sourcils visiblement plus sains, plus fournis, et un regard plus intense.\n\n*Dessine et fixe vos sourcils, pour des sourcils disciplinés ou rebelles.*",
  },
  {
    nom: "Hydra Repair Sérum régénérant intense *best seller*",
    category: "Soins visage",
    images: ["/madara/hydrarepair.webp", "/madara/hydrarepair1.webp"],
    description:
      "Ce sérum intensif restaure instantanément le confort des peaux déshydratées et stressées.\n\n" +
      "*Bienfaits :*\n" +
      "- Offre une hydratation intense\n" +
      "- Favorise des niveaux d’humidité optimaux\n" +
      "- Réconforte la peau tendue et stressée\n" +
      "- Aide à redonner rebond et éclat à la peau\n" +
      "- Cible les ridules causées par la sécheresse\n\n" +
      "*Ingrédients clés :* Acide hyaluronique, extrait de pivoine du Nord, PCA.\n\n" +
      "*Texture :* Fluide léger, sans effet gras\n\n" +
      "*Idéal pour traiter :* Sécheresse / Déshydratation / Rides fines / Teint terne.\n\n" +
      "*Types de peau :* Peau sèche / Mixte / Normale / Grasse.\n\n" +
      "*Certifications :* 100% naturel, vegan, bio, cruelty-free.",
  },
  {
    nom: "Concentré d’éclat intense",
    category: "Soins visage",
    images: [
      "/madara/intensevitc.webp",
      "/madara/intensevitc1.webp",
      "/madara/intensevitc2.webp",
    ],
    description:
      "Donnez à votre peau un coup d'éclat intense avec cette essence éclaircissante à base d'un multimélange complémentaire d'acide férulique et de vitamines C+E.\n\n En raison de ses fortes propriétés antioxydantes, l'acide férulique reataure la fermeté et renforce les défenses de la peau contre les dommages causés par les radicaux libres, tandis que les vitamines C + E améliorent le teint et redonnent à la peau son éclat sain.\n\n Cible les dommages causés par le soleil et l'environnement, aidant à prévenir les signes prématurés du vieillissement – ridules, hyperpigmentation et perte d'élasticité. Stimule la synthèse de collagène et revitalise les peaux ternes, fatiguées et vieillissantes. Testé dermatologiquement.\n\n*99% d'origine naturelle, 13% biologique*",
  },
  {
    nom: "Crème régénérante illuminatrice *best seller*",
    category: "Soins visage",
    images: [
      "/madara/vitaminc.webp",
      "/madara/vitaminc1.webp",
      "/madara/vitaminc2.webp",
    ],
    description:
      "Enveloppez votre peau d'éclat et d'hydratation avec cette crème hydratante rehausseuse d'éclat, formulée avec une forme stabilisée de vitamine C pour éclaircir votre teint et cibler efficacement les taches brunes, le teint terne et le teint irrégulier.\n\n" +
      "*Bienfaits :*\n" +
      "- Réduit l'apparence des taches brunes\n" +
      "- Illumine les teints ternes\n" +
      "- Aide à restaurer l'éclat\n" +
      "- Offre une hydratation en profondeur\n\n" +
      "*Ingrédients clés :* Vitamine C, extrait d'algues brunes, acide hyaluronique.\n\n" +
      "*Texture :* Fluide léger, sans effet gras\n\n" +
      "*Idéal pour traiter :* Taches brunes / Teint irrégulier / Teint terne / Manque d'éclat / Photoveillissement.\n\n" +
      "*Types de peau :* Peau sèche / Mixte / Normale / Grasse.\n",
  },
  {
    nom: "Huile fondante démaquillante",
    category: "Nettoyants",
    images: [
      "/madara/melting.webp",
      "/madara/melting1.webp",
      "/madara/melting2.webp",
    ],
    description:
      "Ce nettoyant doux à base d'huile purifie et nettoie en profondeur la peau, et fait disparaître le maquillage, le fond de teint longue tenue ainsi que les écrans solaires minéraux.\n\n Formulée avec des agents nettoyants doux, de la vitamine E, des huiles d'onagre et d’amande, cette huile nourrit et adoucit la peau. Élimine les impuretés sans irriter la peau et sans endommager sa barrière protectrice naturelle.\n\n Particulièrement bénéfique pour les peaux sèches, déshydratées, stressées, fragiles et vieillissantes. L'huile fond au contact de l'eau et se rince facilement. Votre peau reste propre, luxueusement douce et nourrie. Convient au contour des yeux.\n\n*100 % d'ingrédients d'origine naturelle, 39 % d'ingrédients biologiques.*",
  },
  {
    nom: "Écran solaire ultra protecteur Cellules souches végétales SPF 50",
    category: "Solaires",
    images: ["/madara/spf50.webp"],
    description:
      "Écran solaire minéral SPF 50 (haute protection), certifié naturel. Cette émulsion élaborée enrichie en oxyde de zinc naturel, en resvératrol, en acide hyaluronique et en cellules souches de Dragocéphale de Ruysch nordique antioxydantes protège votre peau contre les effets néfastes des rayons UVA/UVB, de la pollution urbaine et de la lumière bleue.\n\n Aide à prévenir tous les types de dommages causés par l'exposition au soleil, tels que la sécheresse cutanée, les rides, la pigmentation et la perte de volume. Convient à toute la famille, y compris aux enfants à partir de 3 ans.\n\n ATTENTION : Cet écran n’assure pas une protection à 100 % contre les rayons UVA/UVB. L'exposition prolongée au soleil constitue une menace sérieuse pour la santé. Évitez de trop vous exposer même avec une protection solaire.",
  },
  {
    nom: "Écran solaire corps antioxydant Cellules souches végétales SPF 30",
    category: "Solaires",
    images: [
      "/madara/sun30.webp",
      "/madara/sun301.webp",
      "/madara/sun302.webp",
    ],
    description:
      "Écran solaire minéral SPF 50 (haute protection), certifié naturel. Cette émulsion élaborée enrichie en oxyde de zinc naturel, en resvératrol, en acide hyaluronique et en cellules souches de Dragocéphale de Ruysch nordique antioxydantes protège votre peau contre les effets néfastes des rayons UVA/UVB, de la pollution urbaine et de la lumière bleue.\n\n Aide à prévenir tous les types de dommages causés par l'exposition au soleil, tels que la sécheresse cutanée, les rides, la pigmentation et la perte de volume. Convient à toute la famille, y compris aux enfants à partir de 3 ans.\n\n ATTENTION : Cet écran n’assure pas une protection à 100 % contre les rayons UVA/UVB. L'exposition prolongée au soleil constitue une menace sérieuse pour la santé. Évitez de trop vous exposer même avec une protection solaire.",
  },
  {
    nom: "Tonique apaisant",
    category: "Nettoyants",
    images: [
      "/madara/toner.webp",
      "/madara/toner1.webp",
      "/madara/toner2.webp",
    ],
    description:
      "Profitez d'un confort exceptionnel avec ce tonique doux qui rafraîchit, calme, adoucit et lisse la peau. Améliore la pénétration et l’efficacité des autres produits de votre routine. Soulage les peaux sèches, tendues et sensibles. Atténue les signes d’irritation.\n\n Formulé avec des eaux florales apaisantes de mélisse et d’hamamélis, de l’extrait de camomille ainsi qu’avec des hydratants naturels qui désaltèrent instantanément la peau et équilibre le microbiome, ce tonique réduit la sensation d’inconfort.\n\n Ce tonique est conditionné dans une bouteille 100 % recyclée afin de réduire la quantité de nouvelles bouteilles en plastique fabriquées chaque année.\n\n*99 % d'ingrédients naturels, 6 % d'ingrédients biologiques.*",
  },
  {
    nom: "Wrinkle Resist Crème contour des yeux avec applicateur",
    category: "Soins visage",
    images: [
      "/madara/wrinkleresist.webp",
      "/madara/wrinkleresist1.webp",
      "/madara/wrinkleresist2.webp",
      "/madara/wrinkleresist3.webp",
    ],
    description:
      "Ce traitement intense et non invasif du contour des yeux cible les ridules, les rides et les signes de fatigue pour une peau à l’apparence instantanément plus lisse, plus ferme et plus rebondie.\n\n Semblable au botox, cette molécule innovante d’origine végétale offre un effet relaxant et contribue à réduire la profondeur des rides. L’acide hyaluronique multimoléculaire et la combinaison simultanée de 7 extraits végétaux actifs hydratent, désengorgent et raffermissent la peau pour une apparence fraîche, éclatante et rajeunie.\n\n*Testé dermatologiquement.*",
  },
];

const bijoux = [
  {
    nom: "Bracelet Lotus Doré",
    category: "Bijoux",
    images: ["/jewels/ACP177_1.webp"],
    description:
      "*Caractéristiques :*\n" +
      "- Matériau Durable : *Fabriqué en acier inoxydable, garantissant durabilité et résistance à l'usure.*\n- Design Délicat : *Présente un design minimaliste avec un charmant pendentif en forme de fleur de lotus, symbolisant la pureté et la renaissance.*\n- Finition Élégante : *La finition dans un ton rosé confère une touche moderne et féminine à la pièce.*\n- Ajustable : *Possède une fermeture réglable qui s'adapte à différentes tailles de poignet, offrant confort et sécurité.*\n- Polyvalent : *Parfait pour combiner avec différents styles et occasions.*\n\n" +
      "*Entretien :*\n" +
      "- *Nettoyer avec un chiffon doux et sec\n- Éviter le contact avec des produits chimiques agressifs\n- Ranger dans un endroit sec à l´abri de la lumière directe du soleil*",
  },
  {
    nom: "Bracelet Soleil Levant",
    category: "Bijoux",
    images: ["/jewels/GKB23121603.webp"],
    description:
      "*Caractéristiques :*\n" +
      "- Matériau : *Acier inoxydable de haute qualité*\n- Design : *Pendentif circulaire avec détails texturés et section en nacre*\n- Fermeture : *Réglable pour un ajustement parfait*\n- Finition : *Placage en or poli pour un éclat durable*\nIdéal pour : *Compléter les looks décontractés ou élégants*\n\n" +
      "*Entretien :*\n" +
      "- *Nettoyer avec un chiffon doux et sec*\n- *Éviter le contact avec des produits chimiques agressifs*\n- *Ranger dans un endroit sec à l´abri de la lumière directe du soleil*",
  },
  {
    nom: "Bracelet Nœud Élégant",
    category: "Bijoux",
    images: ["/jewels/GKB2404027053.webp"],
    description:
      "*Caractéristiques :*\n" +
      "- Matériau : *Acier inoxydable de haute qualité, assurant durabilité et résistance.*\n- Design : *Noeud délicat, avec des détails minimalistes et charmants.*\n- Fermeture : *Réglable pour un ajustement parfait*\n- Finition : *Dorée, offrant un éclat élégant et sophistiqué.*\n- Idéal pour : *Porter au quotidien, ajoutant une touche d'élégance discrète.\nCompléter des looks plus formels, comme lors d'événements et d'occasions spéciales.\nOffrir en cadeau, démontrant un bon goût et une attention aux détails.*\n- Ajustable : *Dispose d'un fermoir réglable pour s'adapter à différentes tailles de poignet.*\n\n" +
      "*Entretien :*\n" +
      "- *Nettoyer avec un chiffon doux et sec\n- Éviter le contact avec des produits chimiques agressifs\n- Ranger dans un endroit sec à l´abri de la lumière directe du soleil*",
  },
  {
    nom: "Bracelet Solaire Émeraude",
    category: "Bijoux",
    images: ["/jewels/YB200721084_ACP002_1.webp"],
    description:
      "*Caractéristiques :*\n" +
      "- Matériau Durable : *Fabriqué en acier inoxydable, garantissant durabilité et résistance à l'usure.*\n- Design Multi-Couches : *Présente deux couches distinctes de chaînes dorées, offrant un look riche et texturé.*\n- Fermeture Réglable : *Équipé d'un fermoir réglable qui permet d'ajuster la taille du bracelet pour un ajustement parfait.*\n- Idéal pour : *Usage quotidien.\nOccasions spéciales.\nOffrir à quelqu'un de spécial*\n- Ajustable : *Dispose d'un fermoir réglable pour s'adapter à différentes tailles de poignet.*\n\n" +
      "*Entretien :*\n" +
      "- *Nettoyer avec un chiffon doux et sec\n- Éviter le contact avec des produits chimiques agressifs\n- Ranger dans un endroit sec à l´abri de la lumière directe du soleil*",
  },
  {
    nom: "Bague Fleur Cristalline",
    category: "Bijoux",
    images: ["/jewels/GKR240628003.12A.webp"],
    description:
      "*Caractéristiques :*\n" +
      "- Matériau : *Acier inoxydable doré de haute qualité, assurant durabilité et éclat longue durée.*\n- Design : *Fleur stylisée avec des détails texturés sur les pétales, lui conférant un charme unique et sophistiqué.*\n- Détail : *Petite pierre étincelante au centre de la fleur, ajoutant une touche de glamour discrète.*\n- Polyvalence : *Idéale pour un usage quotidien ou des occasions spéciales, complétant n´importe quel look avec élégance.\nCette bague est une excellente option pour offrir à quelqu´un de spécial ou pour ajouter une touche de sophistication à votre propre collection d´accessoires.*\n- Ajustable : *Conception ouverte qui permet d´ajuster la taille pour un ajustement parfait sur n´importe quel doigt.*\n\n" +
      "*Entretien :*\n" +
      "- *Nettoyer avec un chiffon doux et sec\n- Éviter le contact avec des produits chimiques agressifs\n- Ranger dans un endroit sec à l´abri de la lumière directe du soleil*",
  },
  {
    nom: "Bague Demi-Lune Onyx",
    category: "Bijoux",
    images: ["/jewels/GKR240628003.68A.webp"],
    description:
      "*Caractéristiques :*\n" +
      "- Matériau : *Fabriquée en acier inoxydable, assurant durabilité et résistance à la corrosion.\nFinition dorée qui offre une brillance luxueuse et raffinée.\nMatériau hypoallergénique, idéal pour les personnes ayant la peau sensible.*\n- Design Distinctif : *Forme géométrique unique rappelant un éventail, ajoutant une touche artistique.\nDétails ajourés dans le métal doré créant un effet visuel intéressant et léger.\nPierre noire ronde centrale qui ajoute un contraste élégant et sophistiqué.*\n- Ajustabilité et Confort : *Conception ajustable qui s'adapte facilement à différentes tailles de doigts.\nLéger et confortable pour un port quotidien sans compromettre le style.\nAjoutez une touche d'élégance et de modernité à votre look avec cette bague unique et ajustable !*\n\n" +
      "*Entretien :*\n" +
      "- *Nettoyer avec un chiffon doux et sec\n- Éviter le contact avec des produits chimiques agressifs\n- Ranger dans un endroit sec à l´abri de la lumière directe du soleil*",
  },
  {
    nom: "Bague Demi-Lune Nacrée",
    category: "Bijoux",
    images: ["/jewels/GKR240628003.69A.webp"],
    description:
      "*Caractéristiques :*\n" +
      "- Matériau : *Fabriquée en acier inoxydable, assurant durabilité et résistance à la corrosion.\nFinition dorée qui offre une brillance luxueuse et raffinée.\nMatériau hypoallergénique, idéal pour les personnes ayant la peau sensible.*\n- Design Distinctif : *Forme géométrique unique rappelant un éventail, ajoutant une touche artistique.\nDétails ajourés dans le métal doré créant un effet visuel intéressant et léger.\nPierre blanche ronde centrale qui ajoute un contraste élégant et sophistiqué.*\n- Ajustabilité et Confort : *Conception ajustable qui s'adapte facilement à différentes tailles de doigts.\nLéger et confortable pour un port quotidien sans compromettre le style.\nAjoutez une touche d'élégance et de modernité à votre look avec cette bague unique et ajustable !*\n\n" +
      "*Entretien :*\n" +
      "- *Nettoyer avec un chiffon doux et sec\n- Éviter le contact avec des produits chimiques agressifs\n- Ranger dans un endroit sec à l´abri de la lumière directe du soleil*",
  },
];

const CATEGORIES = [
  "Tous",
  "Soins visage",
  "Solaires",
  "Maquillage",
  "Nettoyants",
  "Bijoux",
];

const ProductModal = ({ item, onClose }) => {
  const [currentImage, setCurrentImage] = useState(0);

  const handleNext = () => {
    setCurrentImage((prev) => (prev + 1) % item.images.length);
  };

  const handlePrev = () => {
    setCurrentImage(
      (prev) => (prev - 1 + item.images.length) % item.images.length
    );
  };

  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-70 flex items-center justify-center px-4 cursor-none">
      <div className="bg-white w-full max-w-2xl p-6 rounded-lg relative overflow-y-auto max-h-[90vh]">
        <button
          className="absolute top-2 right-2 text-gray-600 hover:text-black cursor-none"
          onClick={onClose}
        >
          ✕
        </button>
        <h2 className="text-2xl mb-4 text-center cursor-none font-normal">
          {item.nom.replace(" *best seller*", "")}
        </h2>
        <div className="relative mb-4">
          <img
            src={item.images[currentImage]}
            alt={item.nom}
            className="w-full h-64 object-contain rounded"
          />
          {item.images.length > 1 && (
            <>
              <button
                onClick={handlePrev}
                className="absolute top-1/2 left-2 transform -translate-y-1/2 text-2xl text-black bg-white rounded-full shadow px-2 cursor-none"
              >
                ‹
              </button>
              <button
                onClick={handleNext}
                className="absolute top-1/2 right-2 transform -translate-y-1/2 text-2xl text-black bg-white rounded-full shadow px-2 cursor-none"
              >
                ›
              </button>
            </>
          )}
        </div>
        <p className="text-gray-700 text-sm text-left whitespace-pre-line cursor-none">
          {item.description
            .split("*")
            .map((part, i) =>
              i % 2 === 1 ? (
                <em key={i}>{part}</em>
              ) : (
                <span key={i}>{part}</span>
              )
            )}
        </p>
        <a
          href="/contact"
          className="mt-6 inline-block bg-primary text-white text-sm px-6 py-2 rounded-full shadow hover:bg-opacity-90 transition cursor-none"
        >
          Me contacter pour ce produit
        </a>
      </div>
    </div>
  );
};

const ShopShowcase = () => {
  const [showModal, setShowModal] = useState(null);
  const [activeCategory, setActiveCategory] = useState("Tous");

  const allItems = [...produits, ...bijoux];
  const filteredItems = allItems.filter((item) => {
    if (activeCategory === "Tous") return true;
    return item.category === activeCategory;
  });

  return (
    <section className="max-w-7xl mx-auto px-4 py-16 text-gray-800 text-center">
      <h1 className="text-5xl font-medium mb-6 tracking-tight">
        Boutique Beauté et Bien-être – Produits Haut de Gamme
      </h1>
      <p className="max-w-3xl mx-auto text-base text-gray-600 mb-12 leading-relaxed">
        Découvrez notre univers de cosmétiques naturels, soins du visage,
        solaires bio, maquillage clean et bijoux élégants. Tous nos produits
        sont sélectionnés pour leur efficacité, leur éthique et leur qualité
        premium. Aujourd’hui disponibles à l’institut, ils seront bientôt
        expédiés partout en France et en Europe grâce à notre e-commerce en
        préparation.
      </p>

      <div className="mb-10 flex flex-wrap justify-center gap-4">
        {CATEGORIES.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-4 py-2 rounded-full border font-medium transition cursor-none ${activeCategory === cat ? "bg-primary text-white border-primary" : "bg-white text-gray-700 border-gray-300 hover:border-primary"}`}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="mb-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
          {filteredItems.map((item, index) => (
            <article
              key={index}
              className="relative bg-white rounded-2xl shadow-lg p-4 hover:shadow-2xl transition-transform transform hover:-translate-y-1 cursor-none group"
              onClick={() => setShowModal(item)}
              itemScope
              itemType="https://schema.org/Product"
            >
              {item.nom.toLowerCase().includes("best seller") && (
                <div className="absolute top-3 left-3 z-10 bg-primary text-white text-xs px-3 py-1 rounded-full font-semibold shadow-md cursor-none group-hover:scale-105 transition-transform origin-top-left">
                  Best-seller
                </div>
              )}
              <div className="relative overflow-hidden rounded-xl">
                <img
                  src={item.images[0]}
                  alt={item.nom}
                  className="w-full h-60 object-contain rounded-xl mb-4 transition duration-300 group-hover:scale-105"
                  itemProp="image"
                />
              </div>
              <h2
                className="text-lg font-normal leading-tight cursor-none"
                itemProp="name"
              >
                {item.nom.replace(" *best seller*", "")}
              </h2>
              <meta
                itemProp="description"
                content={item.description.replace(/\*/g, "").slice(0, 160)}
              />
            </article>
          ))}
        </div>
      </div>

      <p className="mt-20 text-center text-sm text-gray-500 cursor-none">
        🛍️ Les achats en ligne arrivent bientôt. En attendant, venez découvrir
        toute la collection directement à l’institut ou contactez-nous pour
        toute question ✨
      </p>

      {showModal && (
        <ProductModal item={showModal} onClose={() => setShowModal(null)} />
      )}
    </section>
  );
};

export default ShopShowcase;
