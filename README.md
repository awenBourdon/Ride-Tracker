# Ride Tracker - Application mobile

Description

Ride Tracker est une application mobile développée avec React Native et Expo, qui permet aux riders de trouver des spots en fonction de leur localisation géographique. L'application se concentre sur l'accessibilité et la simplicité pour aider les utilisateurs à se connecter, découvrir de nouveaux spots, et planifier leurs sessions. La base de données et les fonctionnalités backend sont gérées par Supabase.

# Fonctionnalités

Fonctionnalités actuelles

    - Création de comptes et connexion : Les utilisateurs peuvent créer des comptes et se connecter pour accéder aux fonctionnalités de l'application.
    - Interface utilisateur adaptée : UI optimisée pour une expérience utilisateur fluide et intuitive.
    - Carte des spots : Utilisation de React Map pour afficher les spots de ride selon leurs localisations géographiques.

# Fonctionnalités à venir

    - Amélioration des pages de recherche : Classement des spots par critères comme "plus récent" ou "plus visité".
    - Système de favoris : Les utilisateurs pourront ajouter des spots à leurs favoris pour les retrouver facilement.
    - Ajout de spots : Les utilisateurs pourront proposer et ajouter des spots de ride.
    - Gestion des avis : Les utilisateurs pourront laisser des avis sur les spots.

# Installation

Prérequis

    Node.js (version 16.x ou supérieure)
    Expo CLI (npm install -g expo-cli)
    Supabase CLI pour la gestion de la base de données

Installation des dépendances

# Clonez le dépôt et installez les dépendances nécessaires :

  npm install

# Configuration

Créez un fichier .env à la racine du projet pour stocker les informations d'API et les clés secrètes :

    SUPABASE_URL=your_supabase_url
    SUPABASE_ANON_KEY=your_supabase_anon_key

# Démarrage

Pour lancer l'application sur un simulateur ou un appareil physique :

    expo start

# Technologies

    Frontend : React Native, Expo
    Backend : Supabase (authentification et base de données)
    Carte : React Map
