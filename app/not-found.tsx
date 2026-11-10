import Bouton from "./components/bouton";

// Page affichée quand l'adresse n'existe pas (erreur 404)
export default function PageIntrouvable() {
  return (
    <section className="py-16">
      <p className="text-sm text-neutral-500">Erreur 404</p>
      <h1 className="mt-2 text-4xl font-semibold">Page introuvable</h1>
      <p className="mt-4 text-neutral-600">Ce projet ou cette page n&apos;existe pas.</p>
      <div className="mt-8">
        <Bouton label="Retour aux projets" href="/projets" />
      </div>
    </section>
  );
}
