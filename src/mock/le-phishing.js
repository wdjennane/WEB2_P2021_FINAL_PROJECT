import Phishing1 from "../assets/images/phishing-1.jpg"
import Phishing2 from "../assets/images/phishing-2.jpg"
import Phishing3 from "../assets/images/phishing-3.jpg"

const mock = [
  {
    id: 1,
    title: "Phishing avec PayPal",
    image: Phishing1,
    description: "Il s’agit de phishing car c’est écris en anglais ?",
    help:
      "<p>Quasiment tous les mails phishing en rapport avec PayPal sont écris en anglais.</p><p>Je te conseille de plutôt regarder l’expéditeur car ils ne peuvent pas reprendre l’adresse mail de l’entreprise et ne clique surtout pas sur le lien proposé.</p><p>Pour te débarasser du mail cliques sur : <span>Courrier indisérable > Hameçonnage</span>.</p>",
    successPath: "2",
    errorPath: "incorrect/1",
  },
  {
    id: 2,
    title: "Phishing sur Leboncoin",
    image: Phishing2,
    description: "Pay pal est un service sûr je ne crains rien ?",
    help:
      "<p>Il existe plusieurs type de phishing, ici c’est par SMS, cette méthode est très courante via Le bon coin, en effet l’auteur t’enverras un email ressemblant à ceux de PayPal comme quoi il y’a bien eu un virement et qui contient un lien t’incitant à te connecter : C’est là que le phishing opère. </</p><p>Je te préconise de refuser le paiement par paypal et de bloquer le contact.</p>",
    successPath: "3",
    errorPath: "incorrect/2",
  },
  {
    id: 3,
    title: "Le phisheur attrapé",
    image: Phishing3,
    description: "Un phisheur risque-t-il 5 ans de prison ?",
    help:
      "<p>Yes ! Il risque <span>5 années d’emprisonnement</span> avec une amande de <span>375 000 €</span></p><p>Mais ce n’est pas tout, <span>pour une contrefaçon</span> (page web, logo), l’auteur risque <span>3 ans de prison</span> avec une peine d’amande de <span>300 000 €</span></p>",
    successPath: "3",
    errorPath: "incorrect/3",
  },
]

export default mock
