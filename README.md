# -Gestion-de-Paiement-de-Cotisation-Syndicale
Cette application a été conçue pour permettre au syndic d'immeuble de gérer efficacement les appartements, les paiements mensuels et l'émission de factures. Les fonctionnalités incluent la création, la modification et la suppression d'appartements, la gestion des paiements mensuels, l'impression de factures, et bien plus encore.
# Prérequis
Avant de commencer, assurez-vous d'avoir installé :
*Node.js
*npm (généralement installé avec Node.js)
*MongoDB
# Installation
1.Clonez le dépôt :
````
git clone https://github.com/hasnaerguig1999/-Gestion-de-Paiement-de-Cotisation-Syndicale
````
2.Remplacez votre répertoire de travail par le dossier du projet
````
cd Gestion-de-Paiement-de-Cotisation-Syndicale
````
aprés 
````
cd backend
````
3.Installez les dépendances :
````
npm install
````
# Configuration
Créez un fichier .env à la racine du projet et ajoutez les variables d'environnement suivantes :
````
DB_CONNECTION_STRING=mongodb://localhost:27017/yourdatabase
JWT_SECRET=your_jwt_secret
PORT=8000
NODE_ENV=development
````
j'ai déja fait un exemple sur .env.example
Pour ignorer les dossiers node_modules et le fichier .env en utilisant un fichier .gitignore, vous devez simplement ajouter leurs noms au fichier. Voici comment vous pouvez le faire :
4-Créez un fichier .gitignore à la racine de votre projet si vous n'en avez pas déjà un.
5-Ouvrez le fichier .gitignore et ajoutez les lignes suivantes :
````
node_modules/
.env
````
# Exécution
-Pour démarrer le serveur, exécutez :
````
npm run dev
````



