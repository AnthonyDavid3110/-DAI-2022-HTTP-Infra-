# Rapport laboratoire 4 - SMTP
Auteurs : Anthony David, Stéphane Nascimento Santos
Date : 08.12.2022

# Table des matières
TODO : compléter la table des matières

# 1. Introduction



# 2. Suivi du projet
## 2.1 Etape 1
### 2.1.1 Choix de l'image docker à utiliser
Comme vu dans la vidéo, on peut utiliser soit l'image officielle Apache, soit cette PHP présente sur le DockerHub.
Nous avons décidé de travailler avec l'image PHP.

Lancement du serveur docker :
`$ docker run -d -p 9090:80 php:7.4-cli`

Lancement du serveur en fond