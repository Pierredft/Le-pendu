const mots = [
  // Language de programmation
    { mot: "javascript", categorie: "Langage de programmation" },
    { mot: "php", categorie: "Langage de programmation" },
    { mot: "html", categorie: "Langage de programmation" },
    { mot: "css", categorie: "Langage de programmation" },

  // Nourriture
    { mot: "pizza", categorie: "Nourriture" },
    { mot: "poutine", categorie: "Nourriture" },
    { mot: "poulet", categorie: "Nourriture" },
    { mot: "hamburger", categorie: "Nourriture" },
    { mot: "spaghetti", categorie: "Nourriture" },
    { mot: "sushi", categorie: "Nourriture" },
    { mot: "tacos", categorie: "Nourriture" },
    { mot: "frites", categorie: "Nourriture" },
    { mot: "salade", categorie: "Nourriture" },
    { mot: "soupe", categorie: "Nourriture" },
    { mot: "sandwich", categorie: "Nourriture" },
    { mot: "hotdog", categorie: "Nourriture" },

  // Jeux video
    { mot: "mario", categorie: "Jeu Video"},
    { mot: "pokemon", categorie: "Jeu Video"},
    { mot: "sonic", categorie: "Jeu Video"},
    { mot: "zelda", categorie: "Jeu Video"},
    { mot: "minecraft", categorie: "Jeu Video"},
    { mot: "fortnite", categorie: "Jeu Video"},
    { mot: "league of legends", categorie: "Jeu Video"},
    { mot: "call of duty", categorie: "Jeu Video"},
    { mot: "fifa", categorie: "Jeu Video"},
    { mot: "gta", categorie: "Jeu Video"},
    { mot: "overwatch", categorie: "Jeu Video"},
    { mot: "apex legends", categorie: "Jeu Video"},

  // Animaux
    { mot: "Tigre", categorie: "Animaux"},
    { mot: "Aigle", categorie: "Animaux"},
    { mot: "Tortue", categorie: "Animaux"},
    { mot: "Poisson", categorie: "Animaux"},
    { mot: "Chien", categorie: "Animaux"},
    { mot: "Chat", categorie: "Animaux"},
    { mot: "Lion", categorie: "Animaux"},
    { mot: "Ours", categorie: "Animaux"},
    { mot: "Serpent", categorie: "Animaux"},
    { mot: "Girafe", categorie: "Animaux"},
    { mot: "Elephant", categorie: "Animaux"},
    { mot: "Crocodile", categorie: "Animaux"},

  // Fruit
    { mot: "Pomme", categorie: "Fruit"},
    { mot: "Banane", categorie: "Fruit"},
    { mot: "Orange", categorie: "Fruit"},
    { mot: "Kiwi", categorie: "Fruit"},
    { mot: "Fraise", categorie: "Fruit"},
    { mot: "Ananas", categorie: "Fruit"},
    { mot: "Raisin", categorie: "Fruit"},
    { mot: "Cerise", categorie: "Fruit"},
    { mot: "Pêche", categorie: "Fruit"},
    { mot: "Poire", categorie: "Fruit"},
    { mot: "Melon", categorie: "Fruit"},
    { mot: "Mangue", categorie: "Fruit"},

  // Objet
    { mot: "Stylo", categorie: "Objets"},
    { mot: "Lampe", categorie: "Objets"},
    { mot: "Voiture", categorie: "Objets"},
    { mot: "Telephone", categorie: "Objets"},
    { mot: "Ordinateur", categorie: "Objets"},
    { mot: "Table", categorie: "Objets"},
    { mot: "Chaise", categorie: "Objets"},
    { mot: "Lit", categorie: "Objets"},
    { mot: "Couteau", categorie: "Objets"},
    { mot: "Fourchette", categorie: "Objets"},
    { mot: "Cuillère", categorie: "Objets"},
    { mot: "Assiette", categorie: "Objets"},

  // Métiers
    { mot: "Policier", categorie: "Métiers"},
    { mot: "Medecin", categorie: "Métiers"},
    { mot: "Ingénieur", categorie: "Métiers"},
    { mot: "Artiste", categorie: "Métiers"},
    { mot: "Agriculteur", categorie: "Métiers"},
    { mot: "Boulanger", categorie: "Métiers"},
    { mot: "Cuisinier", categorie: "Métiers"},
    { mot: "Pompier", categorie: "Métiers"},
    { mot: "Professeur", categorie: "Métiers"},
    { mot: "Vétérinaire", categorie: "Métiers"},
    { mot: "Infirmier", categorie: "Métiers"},
    { mot: "Avocat", categorie: "Métiers"},

  // Pays
    { mot: "Canada", categorie: "Pays"},
    { mot: "France", categorie: "Pays"},
    { mot: "Mexique", categorie: "Pays"},
    { mot: "Japon", categorie: "Pays"},
    { mot: "Chine", categorie: "Pays"},
    { mot: "Brésil", categorie: "Pays"},
    { mot: "Allemagne", categorie: "Pays"},
    { mot: "Italie", categorie: "Pays"},
    { mot: "Espagne", categorie: "Pays"},
    { mot: "Royaume-Uni", categorie: "Pays"},
    { mot: "Russie", categorie: "Pays"},
    { mot: "Australie", categorie: "Pays"},

  // Ville
    { mot: "Montreal", categorie: "Ville"},
    { mot: "Paris", categorie: "Ville"},
    { mot: "Tokyo", categorie: "Ville"},
    { mot: "Londres", categorie: "Ville"},
    { mot: "Rome", categorie: "Ville"},
    { mot: "Moscou", categorie: "Ville"},
    { mot: "New York", categorie: "Ville"},
    { mot: "Los Angeles", categorie: "Ville"},
    { mot: "Toronto", categorie: "Ville"},
    { mot: "Vancouver", categorie: "Ville"},
    { mot: "Barcelone", categorie: "Ville"},
    { mot: "Berlin", categorie: "Ville"},

  // Couleur
    { mot: "Rouge", categorie: "Couleur"},
    { mot: "Bleu", categorie: "Couleur"},
    { mot: "Vert", categorie: "Couleur"},
    { mot: "Jaune", categorie: "Couleur"},
    { mot: "Orange", categorie: "Couleur"},
    { mot: "Violet", categorie: "Couleur"},
    { mot: "Rose", categorie: "Couleur"},
    { mot: "Noir", categorie: "Couleur"},
    { mot: "Blanc", categorie: "Couleur"},
    { mot: "Gris", categorie: "Couleur"},
    { mot: "Marron", categorie: "Couleur"},
    { mot: "Beige", categorie: "Couleur"},

  // Sport
    { mot: "Judo", categorie: "Sport"},
    { mot: "Basketball", categorie: "Sport"},
    { mot: "Football", categorie: "Sport"},
    { mot: "Hockey", categorie: "Sport"},
    { mot: "Baseball", categorie: "Sport"},
    { mot: "Tennis", categorie: "Sport"},
    { mot: "Golf", categorie: "Sport"},
    { mot: "Natation", categorie: "Sport"},
    { mot: "Cyclisme", categorie: "Sport"},
    { mot: "Athlétisme", categorie: "Sport"},
    { mot: "Boxe", categorie: "Sport"},
    { mot: "Rugby", categorie: "Sport"},

  // Film
    { mot: "Avengers", categorie: "Film"},
    { mot: "Star Wars", categorie: "Film"},
    { mot: "Harry Potter", categorie: "Film"},
    { mot: "Titanic", categorie: "Film"},
    { mot: "Jurassic Park", categorie: "Film"},
    { mot: "Matrix", categorie: "Film"},
    { mot: "Le Seigneur des Anneaux", categorie: "Film"},
    { mot: "Pirates des Caraïbes", categorie: "Film"},
    { mot: "Indiana Jones", categorie: "Film"},
    { mot: "Forrest Gump", categorie: "Film"},
    { mot: "Gladiator", categorie: "Film"},
    { mot: "Le Roi Lion", categorie: "Film"},

  // Série
    { mot: "Game of Thrones", categorie: "Série"},
    { mot: "Breaking Bad", categorie: "Série"},
    { mot: "Friends", categorie: "Série"},
    { mot: "The Walking Dead", categorie: "Série"},
    { mot: "The Big Bang Theory", categorie: "Série"},
    { mot: "Stranger Things", categorie: "Série"},
    { mot: "The Office", categorie: "Série"},
    { mot: "How I Met Your Mother", categorie: "Série"},
    { mot: "Lost", categorie: "Série"},
    { mot: "The Simpsons", categorie: "Série"},
    { mot: "Grey's Anatomy", categorie: "Série"},
    { mot: "The Mandalorian", categorie: "Série"},
  // Marque
    { mot: "Apple", categorie: "Marque"},
    { mot: "Samsung", categorie: "Marque"},
    { mot: "Nike", categorie: "Marque"},
    { mot: "Adidas", categorie: "Marque"},
    { mot: "Sony", categorie: "Marque"},
    { mot: "Microsoft", categorie: "Marque"},
    { mot: "Google", categorie: "Marque"},
    { mot: "Amazon", categorie: "Marque"},
    { mot: "Coca-Cola", categorie: "Marque"},
    { mot: "Pepsi", categorie: "Marque"},
    { mot: "McDonald's", categorie: "Marque"},
    { mot: "Burger King", categorie: "Marque"},

  // Ajoutez d'autres mots avec leurs catégories
];

// Initialiser les variables
let motSecret, motAffiche, lettresUtilisees, erreurs, indiceUtilise;

// Fonction pour initialiser le jeu
function initialiserJeu() {
  let motAleatoire = mots[Math.floor(Math.random() * mots.length)]; // Choisir un mot aléatoire
    motSecret = motAleatoire.mot.toLowerCase(); // Stocker le mot en minuscules
    motAffiche = "_".repeat(motSecret.length); // Créer une chaîne de caractères avec des tirets bas
    indiceUtilise = false;  // Ajout de la variable pour suivre si l'indice a été utilisé
    document.getElementById("boutonIndice").disabled = false;  // Réactiver le bouton Indice
    lettresUtilisees = []; // Initialiser un tableau vide pour stocker les lettres utilisées
    erreurs = 0; // Initialiser le nombre d'erreurs à 0

    // Mettre à jour l'affichage
    document.getElementById("categorie").innerText = `Catégorie: ${motAleatoire.categorie}`; // Afficher la catégorie du mot
    document.getElementById("motAffiche").innerText = motAffiche; // Afficher le mot à deviner
    document.getElementById("lettresUtilisees").innerText = "Lettres utilisées: "; // Afficher les lettres utilisées
    document.getElementById("pendu").innerText = dessinPendu(); // Afficher le pendu
}

// Fonction pour donner un indice
function donnerIndice() {
    const lettresRestantes = motAffiche.split('_').filter(l => l === '').length; // Compter le nombre de lettres restantes à trouver
    // Vérifier s'il reste des lettres à trouver
    if (lettresRestantes > 0) {
      // Trouver une lettre non révélée dans le mot
        let lettreIndice; // Initialiser la variable lettreIndice
        do { // Répéter jusqu'à ce qu'une lettre non révélée soit trouvée
            lettreIndice = motSecret[Math.floor(Math.random() * motSecret.length)]; // Choisir une lettre aléatoire
        } while (motAffiche.includes(lettreIndice) || lettreIndice === '_'); // Répéter si la lettre est déjà révélée ou si c'est un tiret bas

      // Révéler la lettre dans le mot affiché
      if (!indiceUtilise) { // Vérifier si l'indice n'a pas été utilisé
      for (let i = 0; i < motSecret.length; i++) { // Parcourir le mot secret
            if (motSecret[i] === lettreIndice) { // Vérifier si la lettre est égale à la lettre choisie
            motAffiche = motAffiche.substring(0, i) + lettreIndice + motAffiche.substring(i + 1); // Remplacer le tiret bas par la lettre
        }
    }

      // Mettre à jour l'affichage
    document.getElementById("motAffiche").innerText = motAffiche;

      // Désactiver le bouton après utilisation
    document.getElementById("boutonIndice").disabled = true;

        // Mettre à jour la variable indiceUtilise
        indiceUtilise = true;
        }
    }
}

// Fonction pour deviner le mot
function devinerLettre() { // Fonction pour deviner une lettre
    let lettreInput = document.getElementById("lettreInput"); // Récupérer l'élément input
    let lettre = lettreInput.value.toLowerCase(); // Stocker la valeur de l'input en minuscules

    if (lettresUtilisees.includes(lettre)) { // Vérifier si la lettre a déjà été utilisée
        alert("Vous avez déjà deviné cette lettre. Essayez encore."); // Afficher un message d'alerte
        return;
    }

    lettresUtilisees.push(lettre); // Ajouter la lettre à l'array lettresUtilisees

    if (motSecret.includes(lettre)) { // Vérifier si le mot secret contient la lettre
        for (let i = 0; i < motSecret.length; i++) { // Parcourir le mot secret
            if (motSecret[i] === lettre) { // Vérifier si la lettre est égale à la lettre choisie
                motAffiche = motAffiche.substring(0, i) + lettre + motAffiche.substring(i + 1); // Remplacer le tiret bas par la lettre
            }
        }
    } else { // Si le mot secret ne contient pas la lettre
        erreurs++; // Incrémenter le nombre d'erreurs
    }

    document.getElementById("motAffiche").innerText = motAffiche; // Mettre à jour l'affichage
    document.getElementById("lettresUtilisees").innerText = "Lettres utilisées: " + lettresUtilisees.join(", "); // Mettre à jour l'affichage des lettres utilisées
    document.getElementById("pendu").innerText = dessinPendu(); // Mettre à jour l'affichage du pendu

    if (motAffiche === motSecret) { // Vérifier si le mot affiché est égal au mot secret
        alert("Félicitations ! Vous avez deviné le mot: " + motSecret); // Afficher un message d'alerte
        initialiserJeu(); // Réinitialiser le jeu
    } else if (erreurs === 6) { // Vérifier si le nombre d'erreurs est égal à 6
        alert("Désolé, vous avez atteint le maximum d'erreurs. Le mot était: " + motSecret); // Afficher un message d'alerte
        initialiserJeu(); // Réinitialiser le jeu
    }

    // Stocker la valeur de l'input dans une variable temporaire
    let valeurTemporaire = lettreInput.value;

    // Réinitialiser la valeur de l'input après avoir cliqué sur le bouton
    lettreInput.value = "";

    // Restaurer la valeur temporaire dans l'affichage des lettres utilisées
    lettreInput.placeholder = "Lettres utilisées: " + lettresUtilisees.join(", ");


}

function dessinPendu() { // Fonction pour dessiner le pendu
  const pendu = [ // Tableau avec les différentes étapes du pendu
        `
        _______
        |......|
        |
        |
        |
        |
        |________
        `,
        `
        _______
        |......|
        |......O
        |
        |
        |
        |________
        `,
        `
        _______
        |......|
        |......O
        |......|
        |
        |
        |________
        `,
        `
        _______
        |......|
        |......O
        |...../|
        |
        |
        |________
        `,
        `
        _______
        |......|
        |......O
        |...../|\\
        |
        |
        |________
        `,
        `
        _______
        |......|
        |......O
        |...../|\\
        |...../
        |
        |________
        `,
        `
        _______
        |......|
        |......O
        |...../|\\
        |...../ \\
        |
        |________
        `
    ];

return pendu[erreurs]; // Retourner l'étape correspondant au nombre d'erreurs
}

initialiserJeu(); // Appeler la fonction pour initialiser le jeu