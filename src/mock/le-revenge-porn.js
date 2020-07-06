import RevengePorn1 from "../assets/images/revenge-porn-1.jpg"
import RevengePorn2 from "../assets/images/revenge-porn-2.jpg"
import RevengePorn3 from "../assets/images/revenge-porn-3.jpg"
import RevengePorn4 from "../assets/images/revenge-porn-4.jpg"

const mock = [
  {
    id: 1,
    title: "À ton avis ?",
    image: RevengePorn1,
    description: "J’ignore et j’attends qu’il/elle arrête de me harceler ?",
    sucessHelp:
      "<p>L’auteur harcèle la victime jusqu’à envoyer des photos sexuelles non consenties par la victime.</p><p>On te conseille de l’ignorer et de <span>faire des captures d’écran</span> avant de signaler sur la plateforme car il te <span>faudra des preuves quand tu iras porter plainte</span>.</p><p><span>Ecris quelques notes</span> de la situation comme, le réseau, le pseudo, la date, l’heure. Et surtout entoures toi de personnes de confiance. Ne t’isole pas.</p>",
    errorHelp:
      "<p>L’auteur harcèle la victime jusqu’à envoyer des photos sexuelles non consenties par la victime.</p><p>On te conseille de l’ignorer et de <span>faire des captures d’écran</span> avant de signaler sur la plateforme car il te <span>faudra des preuves quand tu iras porter plainte</span>.</p><p><span>Ecris quelques notes</span> de la situation comme, le réseau, le pseudo, la date, l’heure. Et surtout entoures toi de personnes de confiance. Ne t’isole pas.</p>",
    correctAnswer: true,
  },
  {
    id: 2,
    title: "À ton avis ?",
    image: RevengePorn2,
    description:
      "L’auteur d’un revenge porn risque-t-il une peine de 10 mois ?",
    sucessHelp:
      "<p>Il s’agit d’une diffusion de contenu sexuel sans consentement.</p><p>L’auteur risque donc <span>2 ans d’emprisonnement</span> avec une amende allant jusqu’à 60 000€</p><p>Si tu es spectateur de ce genre de contenu on t’invite à signaler sur le site de lutte contre les contenus illicites</p>",
    errorHelp:
      "<p>Il s’agit d’une diffusion de contenu sexuel sans consentement.</p><p>L’auteur risque donc <span>2 ans d’emprisonnement</span> avec une amende allant jusqu’à 60 000€</p><p>Si tu es spectateur de ce genre de contenu on t’invite à signaler sur le site de lutte contre les contenus illicites</p>",
    correctAnswer: true,
  },
  {
    id: 3,
    title: "À ton avis ?",
    image: RevengePorn3,
    description:
      "Une story de photos intimes de moi circule sur snapchat. Je supprime mes comptes et j’en parle à mes parents ?",
    sucessHelp:
      "<p>Il faut toujours parler à ses proches de ce genre de situation.</p><p>On te conseille aussi : De <span>prendre des captures d’écran</span> pour avoir des preuves lorsque tu iras porter plainte.</p><p>Signales le réseau ainsi que sur le site de lutte contre les contenus illicites</p>",
    errorHelp:
      "<p>Il faut toujours parler à ses proches de ce genre de situation.</p><p>On te conseille aussi : De <span>prendre des captures d’écran</span> pour avoir des preuves lorsque tu iras porter plainte.</p><p>Signales le réseau ainsi que sur le site de lutte contre les contenus illicites</p>",
    correctAnswer: false,
  },
  {
    id: 4,
    title: "À ton avis ?",
    image: RevengePorn4,
    description:
      "Mon copain me demande des photos intimes pour “rigoler” en disant que jamais il les publierait ?",
    sucessHelp:
      "<p>Même s’il s’agit de ton copain, <span>ne te sens pas obligé(e)</span> d’envoyer des photos intimes de toi.</p><p>Votre relation pourrait mal tourner et il risquerait de les poster par jalousie, haine...</p><p>C’est en général comme ça que le Revenge Porn commence d’ailleurs.</p>",
    errorHelp:
      "<p>Même s’il s’agit de ton copain, <span>ne te sens pas obligé(e)</span> d’envoyer des photos intimes de toi.</p><p>Votre relation pourrait mal tourner et il risquerait de les poster par jalousie, haine...</p><p>C’est en général comme ça que le Revenge Porn commence d’ailleurs.</p>",
    correctAnswer: true,
  },
]

export default mock
