import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Bouton from "../../components/bouton";
import BoutonJaime from "../../components/bouton-jaime";
import ImageProjet from "../../components/image-projet";
import ListeEtiquettes from "../../components/liste-etiquettes";
import { projets, trouverProjet } from "../../lib/projets";

type Props = {
  params: Promise<{ slug: string }>;
};

// Crée à l'avance une page pour chaque projet du tableau
export function generateStaticParams(): { slug: string }[] {
  return projets.map((projet) => ({ slug: projet.slug }));
}

// Le titre de l'onglet change selon le projet
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const projet = trouverProjet(slug);
  return { title: projet ? `${projet.titre} — Amina` : "Projet introuvable" };
}

export default async function PageProjet({ params }: Props) {
  const { slug } = await params;
  const projet = trouverProjet(slug);

  // Slug inconnu : on affiche la page 404
  if (!projet) {
    notFound();
  }

  return (
    <article className="py-16">
      <p className="text-xs uppercase text-neutral-500">{projet.annee}</p>
      <h1 className="mt-2 text-4xl font-semibold">{projet.titre}</h1>
      <div className="mt-4">
        <ListeEtiquettes tags={projet.tags} />
      </div>
      <div className="mt-8">
        <ImageProjet src={projet.image} alt={projet.titre} />
      </div>
      <p className="mt-6 max-w-xl text-neutral-600">{projet.description}</p>
      <div className="mt-8 flex items-center gap-4">
        <BoutonJaime />
        <Bouton label="Tous les projets" href="/projets" variante="contour" />
      </div>
    </article>
  );
}
