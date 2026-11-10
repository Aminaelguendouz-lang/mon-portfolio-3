# Portfolio — Amina El Guendouz

Portfolio réalisé avec **Next.js 16**, **React 19**, **TypeScript** et **Tailwind CSS**
dans le cadre du cours Next.js (IIM, A2 C&DI).

- Site en ligne : _à compléter avec le lien Vercel_
- Repo : https://github.com/Aminaelguendouz-lang/mon-portfolio-3

## Lancer le projet

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # vérifie que le projet compile sans erreur
```

## Pages

| Adresse | Fichier | Rôle |
|---|---|---|
| `/` | `app/page.tsx` | Accueil : présentation, projets en vedette, questions fréquentes |
| `/projets` | `app/projets/page.tsx` | Tous les projets, avec filtre par tag et tri par année |
| `/projets/[slug]` | `app/projets/[slug]/page.tsx` | Détail d'un projet, 404 si le slug est inconnu |
| `/a-propos` | `app/a-propos/page.tsx` | Présentation et compétences |
| `/contact` | `app/contact/page.tsx` | Contact |

Le menu et le pied de page sont écrits une seule fois dans `app/layout.tsx`.
La page 404 personnalisée est dans `app/not-found.tsx`.

## Composants (`app/components/`)

| Composant | Props typées | Client ? |
|---|---|---|
| `Menu` | — (liens typés `Lien[]`) | non |
| `PiedDePage` | — | non |
| `Bouton` | `label`, `href`, `variante?: "plein" \| "contour"` | non |
| `Hero` | `titre`, `texte` — utilise `Bouton` | non |
| `Section` | `titre`, `children: ReactNode` | non |
| `Carte` | `projet: Projet` — utilise `ImageProjet`, `ListeEtiquettes`, `BoutonJaime` | non |
| `ImageProjet` | `src`, `alt` | non |
| `Etiquette` | `texte` | non |
| `ListeEtiquettes` | `tags: string[]` — utilise `Etiquette` | non |
| `BoutonJaime` | — (`useState<boolean>`) | **oui** |
| `Accordeon` | `question`, `children` (`useState<boolean>`) | **oui** |
| `FiltreProjets` | `projets: Projet[]`, `tags: string[]` (`useState`) | **oui** |

`"use client"` est placé uniquement sur les composants qui utilisent `useState` et `onClick`.
Les pages et le layout restent des composants serveur.

## Données

Les projets sont dans `app/lib/projets.ts` :

- un type `Projet` (slug, titre, resume, description, annee, tags, image, misEnAvant),
- un tableau `projets: Projet[]` de 6 projets,
- `trouverProjet(slug)` qui renvoie `Projet | undefined`,
- `tousLesTags()` qui renvoie la liste des tags sans doublon.

Les images sont dans `public/projets/`.

## TypeScript

- Toutes les props sont typées avec `type Props`.
- Aucun `any` dans le projet.
- Types union : `variante?: "plein" | "contour"`, `type Tri = "recent" | "ancien"`.
- `params: Promise<{ slug: string }>` sur la page dynamique, avec `await params`.

## Bonus

- Filtre par tag et tri par année sur `/projets`.
- 4e et 5e pages : `/a-propos` et `/contact`.
- Page 404 personnalisée.
