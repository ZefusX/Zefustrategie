---
title: "Comment héberger gratuitement un site web"
description: "Un guide qui montre comment j'ai hébergé ce site et comment vous pouvez héberger le votre gratuitement"
tags: ["web", "api", "backend"]
date: "2025-05-22"
author: "Théo K."
---

# Héberger un site vitrine

Pour héberger un site vitrine, rien de plus simple, rendez vous sur GitHub, importez votre projet (si ce n'est pas déjà fait), puis allez dans "Settings" et "Pages".
![](Pasted%20image%2020250521191145.png)
_Petit exemple pour illustrer où aller_
Ensuite suivez les instruction (généralement avec du HTML ça prend moins d'une minute) et rendez vous à votre URL.
Le site sera en ligne avec comme url : `https://{nom-utilisateur}/github.io/{nom-projet}`

# Héberger un site avec du Backend

Ca commence à se compliquer un peu.
Le plus simple (et c'est ce que j'ai fait) c'est de séparer le Backend du Frontend pour l'hébergement.

### Pour le Frontend

J'utilise **Vercel** mais il existe d'autres solutions bien meilleurs et plus indépendantes.
Sur Vercel, c'est très simple. Il suffit de lier son répertoire github avec le projet puis tout sera guider. Si vous utiliser un FrameWork JS spécifique il faudra le renseigner et également préciser la commande nécessaire pour build le projet.

### Pour le Backend

J'utilise **Render** mais encore une fois il existe d'autres solutions. Comme pour Vercel, tout est guidé et vous pouvez héberger gratuitement.

[!IMPORTANT] Quoi qu'il en soit, je vous recommande de faire un monorepo sur GitHub puis de spécifier le dossier du Backend et du Frontend sur le site de votre hébergeur. C'est beaucoup plus simple à maintenir.
