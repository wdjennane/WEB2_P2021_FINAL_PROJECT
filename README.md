# Les dangers du WEB

https://heticprojet.zinutti.fr/

## 📝 Table des matières
- [Technos/Librairies](#tech)
- [Installation](#setup)
- [Contributeurs](#authors)

## ⛏️ Technos/Librairies utilisés <a name = "tech"></a>

### ⚛️ React

React (ou React JS) est une librairie javascript open source permettant de réaliser des interfaces utilisateurs pour des single-page application.<br> React permet de créer des composants qui sont réutilisables à souhait dans notre application.<br> Le principal atout de React est sa vitesse et sa simplicité (ex : avec une connaissance basique en HTML & CSS il est possible de créer des petits projets).<br>
React peut aussi être utilisé pour la création d’application mobile (React Native) ce qui permet par exemple de faire une web application & application iOS/Android.

### 🌎 Axios

Axios permet de faire des requêtes http depuis le navigateur en utilisant le/la Promise API.<br>
Axios permet de simplifier les requêtes asynchrones et permet de faire des opérations de manière très simple (ex : dans un CRUD)<br>
Axios peut être utilisé en JS Vanilla mais aussi avec un framework tel que React ou Vue.

### 🎨 SASS

SASS est un préprocesseur CSS qui permet l’utilisation de variables, mixins, fonctions ainsi que l’utilisation d’import.<br>
SASS permet de rendre le CSS beaucoup plus « puissant » tout en restant simple, avec par exemple l’imbrication des sélecteurs.<br>
SASS compile le code et crée un fichier CSS qui est compréhensible pour le navigateur.

### 🎨 Styled Component

Styled Components permet de rendre plus simple le style de notre composant dans notre application et le js.<br>
Styled Components permet donc de changer facilement de style en fonction des interactions de l'utilisateur.

### 📱 Mobile first

Notre projet vise les adolescents (début collège – fin lycée), il était donc nécessaire de faire en sorte que notre projet soit Mobile First car l’un des devices les plus utilisées par cette tranche d’âge est le téléphone. 

### 📦 Divers package npm

react-toastify : Permet la création de toast pouvant être utilisé comme notification (notification de message dans le cas de notre projet)<br>
react-tinder-card : Permet de reproduire l’effet de swipe présent dans l’application tinder (utilisé dans notre projet pour la partie mise en situation/quiz)<br>
react-page-scroller : Permet de scroll entre plusieurs sections avec un scroll « guidé » similaire à l’application TikTok (utilisé dans la partie introduction)<br>
L’utilisation de ces packages permet de reproduire certains comportements propres aux applications mobiles.


## 🏁 Développement <a name = "setup"></a>

### Installation

```
git clone https://github.com/wdjennane/WEB2_P2021_FINAL_PROJECT
npm install
```

### Dev mode

```
npm start
```

### Prod mode

```
npm run build
```

### Lancer le linter

```
npm run lint
```

## ✍️ Contributeurs <a name = "authors"></a>

- [Jacky Shao](https://github.com/jshaows)
- [Nathanaël Louzoun](https://github.com/NatsuDzn)
- [Wilem Djennane](https://github.com/wdjennane)