# Les dangers du WEB - Groupe 10

#### Lien du site
https://heticprojet.zinutti.fr/
#### Repo du back-end
https://github.com/MydroX/web2-2021-project

## 📝 Table des matières
- [Technos/Librairies](#tech)
- [Installation](#setup)
- [Contributeurs](#authors)

## ⛏️ Technos/Librairies utilisées <a name = "tech"></a>

### ⚛️ React

React (ou React JS) est une librairie javascript open source permettant de réaliser des interfaces utilisateurs pour des single-page application.<br> React permet de créer des composants qui sont réutilisables à souhait dans notre application.<br> Le principal atout de React sa simplicité (ex : avec une connaissance basique en HTML & CSS il est possible de créer des petits projets).<br>
De plus React possède une multitude de component et de framework ui.

### 🌎 Axios

Axios permet de faire des requêtes http depuis le navigateur en utilisant le/la Promise API.<br>
Axios permet de simplifier les requêtes avec notre API<br>
Il a été utilisé dans ce projet afin de récupérer les données du quiz et de l'introduction.

### 🎨 SASS

SASS est un préprocesseur CSS qui permet l’utilisation de variables, mixins, fonctions ainsi que l’utilisation d’import.<br>
SASS permet de rendre le CSS beaucoup plus « puissant » tout en restant simple, avec par exemple l’imbrication des sélecteurs.<br>
SASS a été utilisé pour l'import du reset, des polices et du style du toast.

### 🖌️ Styled Component

Styled Components permet de rendre plus simple le style de notre composant dans notre application et le js.<br>
Styled Components permet donc de changer facilement de style en fonction des interactions de l'utilisateur.

### 📱 Mobile first

Notre projet vise les adolescents (début collège – fin lycée), il était donc nécessaire de faire en sorte que notre projet soit Mobile First car l’un des devices les plus utilisées par cette tranche d’âge est le téléphone. 

### 🚀 PWA

Afin de reproduire le comportement d'une application mobile (sans passer par React Native) nous avons décidé de faire une pwa.<br>
Cela permet d'ajouter la web app à l'écran d'accueil du téléphone et de masquer les divers éléments présents sur un navigateur mobile (ex: barre d'adresse).

### 📦 Divers packages npm

[react-toastify](https://www.npmjs.com/package/react-toastify): Permet la création de toast pouvant être utilisé comme notification (notification de message dans le cas de notre projet)<br>
[react-tinder-card](https://www.npmjs.com/package/react-tinder-card): Permet de reproduire l’effet de swipe présent dans l’application tinder (utilisé dans notre projet pour la partie mise en situation/quiz)<br>
[react-page-scroller](https://www.npmjs.com/package/react-page-scroller): Permet de scroll entre plusieurs sections avec un scroll « guidé » similaire à l’application TikTok (utilisé dans la partie introduction)<br>
L’utilisation de ces packages ont permis de reproduire certains comportements propres aux applications mobiles.


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