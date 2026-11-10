// Le type Projet décrit la forme de chaque projet du portfolio
export type Projet = {
  slug: string; // la partie de l'adresse : /projets/pokedex
  titre: string;
  resume: string; // phrase courte affichée sur la carte
  description: string; // texte complet affiché sur la page du projet
  annee: number;
  tags: string[]; // une liste de textes
  image: string; // chemin de l'image dans le dossier public/
  misEnAvant: boolean; // true = affiché sur l'accueil
};

// Le tableau des projets : Projet[] veut dire "une liste de Projet"
export const projets: Projet[] = [
  {
    slug: "lynx-boreal",
    titre: "Lynx Boréal",
    resume: "Un site de sensibilisation sur le lynx boréal, avec un quiz.",
    description:
      "Site consacré au lynx boréal : présentation de l'animal, actualités, page de promotion et un quiz pour tester ses connaissances. Le site propose aussi un mode sombre et un menu burger.",
    annee: 2025,
    tags: ["HTML", "CSS", "JavaScript", "Quiz"],
    image: "/projets/lynx-boreal.jpg",
    misEnAvant: true,
  },
  {
    slug: "rpl",
    titre: "RPL",
    resume: "Le site d'un artiste : album, boutique et dates de tournée.",
    description:
      "Site réalisé avec WordPress pour l'artiste RPL : présentation de l'album, boutique en ligne, page contact et page tournée avec toutes les dates de concerts.",
    annee: 2026,
    tags: ["WordPress", "E-commerce", "Musique"],
    image: "/projets/rpl.jpg",
    misEnAvant: true,
  },
  {
    slug: "photobox-event",
    titre: "Photobox Event",
    resume: "Le site vitrine d'une cabine photo magazine pour les événements.",
    description:
      "Site vitrine pour Photobox Event, une cabine photo façon couverture de magazine pour les mariages, anniversaires et soirées d'entreprise : présentation du concept, personnalisation, galerie et demande de devis.",
    annee: 2025,
    tags: ["Site vitrine", "Design", "Responsive"],
    image: "/projets/photobox-event.jpg",
    misEnAvant: true,
  },
  {
    slug: "portfolio",
    titre: "Mon portfolio",
    resume: "Le site que tu es en train de regarder.",
    description:
      "Portfolio réalisé avec Next.js, React et TypeScript. Les pages sont découpées en composants réutilisables et les projets viennent d'un tableau typé.",
    annee: 2026,
    tags: ["Next.js", "React", "TypeScript"],
    image: "/projets/portfolio.png",
    misEnAvant: false,
  },
  {
    slug: "pokedex",
    titre: "Pokédex",
    resume: "Une page qui affiche des Pokémon et leurs informations.",
    description:
      "Un Pokédex en JavaScript : chaque Pokémon est affiché avec son nom, son type et son image.",
    annee: 2025,
    tags: ["HTML", "CSS", "JavaScript"],
    image: "/projets/pokedex.png",
    misEnAvant: false,
  },
  {
    slug: "netflix",
    titre: "Projet Netflix",
    resume: "Une copie de l'interface Netflix en PHP.",
    description:
      "Reproduction de l'interface de Netflix : catalogue de films, page de détail et navigation, réalisée en PHP.",
    annee: 2025,
    tags: ["PHP", "HTML", "CSS"],
    image: "/projets/netflix.png",
    misEnAvant: false,
  },
];

// Retrouve un projet grâce à son slug, ou renvoie undefined s'il n'existe pas
export function trouverProjet(slug: string): Projet | undefined {
  return projets.find((projet) => projet.slug === slug);
}

// Renvoie la liste de tous les tags, sans doublon
export function tousLesTags(): string[] {
  const tags = projets.flatMap((projet) => projet.tags);
  return Array.from(new Set(tags));
}
