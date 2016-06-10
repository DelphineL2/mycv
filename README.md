README
======

Qu'est ce que MYCV?
-----------------

MYCV correspond aux sources de mon site personnel.
il a pour vocation de montrer mon savoir faire.


1ère étape - site d'une page en HTML5
-------------

Site statique d'une seule page en HTML5, utilisant:
- BOOTSTRAP pour la mise en page Responsive Design.
- la technologie du SPRITE pour l'affichage des images


2ème étape - Ajout fonctionnalités de gestion des assets
-------------

Usage de Bower pour gérer les dépendances CSS/JS de Bootstrap
Usage de Gulp pour le workflow de génération des CSS et JS en partant de Bootstrap-sass-official
Exécutez les 3 lignes de commande suivante pour générer les assets utiles et référencé dans la page principal
1) gulp sass => génère le fichier CSS
2) gulp compress => génère le fichier javascript
3) gulp fonts => copie les fonts de bootstrap dans un répertoire accessible au fichier CSS créé
