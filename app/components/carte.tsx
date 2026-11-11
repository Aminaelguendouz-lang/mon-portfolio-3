import Link from "next/link";
import type { Projet } from "../lib/projets";
import BoutonJaime from "./bouton-jaime";
import ImageProjet from "./image-projet";
import ListeEtiquettes from "./liste-etiquettes";

type Props = {
  projet: Projet;
};

// La carte d'un projet : elle utilise ImageProjet, ListeEtiquettes et BoutonJaime
export default function Carte({ projet }: Props) {
  return (
    <article className="flex flex-col gap-3 rounded-lg border border-neutral-200 p-5">
      <ImageProjet src={projet.image} alt={projet.titre} />
      <div className="flex items-center justify-between">
        <p className="text-xs uppercase text-neutral-500">{projet.annee}</p>
        {projet.misEnAvant && (
          <span className="rounded bg-foreground px-2 py-0.5 text-xs text-background">
            En vedette
          </span>
        )}
      </div>
      <h3 className="font-semibold">
        <Link href={`/projets/${projet.slug}`} className="hover:underline">
          {projet.titre}
        </Link>
      </h3>
      <p className="text-sm text-neutral-600">{projet.resume}</p>
      <ListeEtiquettes tags={projet.tags} />
      <div className="mt-auto pt-2">
        <BoutonJaime />
      </div>
    </article>
  );
}
