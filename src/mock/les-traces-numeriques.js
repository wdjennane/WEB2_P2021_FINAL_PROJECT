import TracesNumeriques1 from "../assets/images/traces-numeriques-1.jpg"
import TracesNumeriques2 from "../assets/images/traces-numeriques-2.png"
import TracesNumeriques3 from "../assets/images/traces-numeriques-3.jpg"
import TracesNumeriques4 from "../assets/images/traces-numeriques-4.jpg"

const mock = [
  {
    id: 1,
    title: "Historique de recherche",
    image: TracesNumeriques1,
    description: "Est-il suffisant de supprimer son historique de recherche ?",
    sucessHelp:
      "<p>Tu as pensé à ton historique sur Facebook ? Youtube ?</p><p>Lorsque tu crées un compte sur un réseau social, comme par exemple sur Youtube (via google aussi les vidéos que tu auras regardé seront enregistrées par défaut dans un historique pendant plusieurs mois.</p>",
    errorHelp:
      "<p>Tu as pensé à ton historique sur Facebook ? Youtube ?</p><p>Lorsque tu crées un compte sur un réseau social, comme par exemple sur Youtube (via google aussi les vidéos que tu auras regardé seront enregistrées par défaut dans un historique pendant plusieurs mois.</p>",
    correctAnswer: false,
  },
  {
    id: 2,
    title: "Ursupateur d’identité",
    image: TracesNumeriques2,
    description: "Un ursupateur d’identité risque 6 mois de prison ?",
    sucessHelp:
      "<p>Bien plus!</p><p>Un usurpateut d’identité risque <span>1</span> an d’emprisonnement avec <span>une peine d’amande de 15 000 €</span></p>",
    errorHelp:
      "<p>Bien plus!</p><p>Un usurpateut d’identité risque <span>1</span> an d’emprisonnement avec <span>une peine d’amande de 15 000 €</span></p>",
    correctAnswer: true,
  },
  {
    id: 3,
    title: "Formulaire de jeux",
    image: TracesNumeriques3,
    description:
      "J’ai bien remplis tous les champs et le site est sécurisé. Je l’envoie ?",
    sucessHelp:
      "<p>On t’invite fortement à utiliser un pseudonyme car en mettant ton VRAI nom complet, quelqu’un pourrait conserver cette information et l’utiliser sans ton consentement (ne divulgue pas ton adresse, c’est plutôt étrange qu’un jeu en ligne la demande non ?)</p><p>Ainsi que tes coordonées bancaires même si le site est sécurisé, tes données restent enregistrées.</p>",
    errorHelp:
      "<p>On t’invite fortement à utiliser un pseudonyme car en mettant ton VRAI nom complet, quelqu’un pourrait conserver cette information et l’utiliser sans ton consentement (ne divulgue pas ton adresse, c’est plutôt étrange qu’un jeu en ligne la demande non ?)</p><p>Ainsi que tes coordonées bancaires même si le site est sécurisé, tes données restent enregistrées.</p>",
    correctAnswer: true,
  },
  {
    id: 4,
    title: "Formulaire de jeux",
    image: TracesNumeriques4,
    description:
      "De toute façon y’a tellement de tweet que le mien passera inconito",
    sucessHelp:
      "<p>Je te conseille vivement de ne pas partager ton opinion politque, religieux sur les réseaux sociaux.</p><p>Cela pourrait nuire tes relations sociales et professionnelles.</p>",
    errorHelp:
      "<p>Je te conseille vivement de ne pas partager ton opinion politque, religieux sur les réseaux sociaux.</p><p>Cela pourrait nuire tes relations sociales et professionnelles.</p>",
    correctAnswer: true,
  },
]

export default mock
