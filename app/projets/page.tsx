import FiltreProjets from "../components/filtre-projets";
import { projets, tousLesTags } from "../lib/projets";

// La page reste un composant serveur : seul FiltreProjets est un composant client
export default function Projets() {
  return (
    <section className="py-16">
      <h1 className="text-4xl font-semibold">Projets</h1>
      <p className="mt-2 text-neutral-600">Filtre mes projets par technologie.</p>
      <div className="mt-8">
        <FiltreProjets projets={projets} tags={tousLesTags()} />
      </div>
    </section>
  );
}
