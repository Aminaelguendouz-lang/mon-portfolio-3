import Accordeon from "./components/accordeon";
import Bouton from "./components/bouton";
import Carte from "./components/carte";
import Hero from "./components/hero";
import Section from "./components/section";
import { projets } from "./lib/projets";

export default function Accueil() {
  // On affiche seulement les projets mis en avant
  const projetsEnVedette = projets.filter((projet) => projet.misEnAvant);

  return (
    <div>
      <Hero
        titre="Bonjour, je suis Amina."
        texte="Étudiante en développement web à l'IIM. Voici une sélection de mes projets."
        image="/amina.jpg"
      />

      <Section titre="Projets en vedette">
        <div className="grid gap-4 sm:grid-cols-3">
          {projetsEnVedette.map((projet) => (
            <Carte key={projet.slug} projet={projet} />
          ))}
        </div>
        <div className="mt-8">
          <Bouton label="Voir tous les projets" href="/projets" variante="contour" />
        </div>
      </Section>

      <Section titre="Questions fréquentes">
        <Accordeon question="Avec quels outils travailles-tu ?">
          Next.js, React, TypeScript, Tailwind CSS, mais aussi HTML, CSS, JavaScript et PHP.
        </Accordeon>
        <Accordeon question="Es-tu disponible pour un stage ?">
          Oui, je cherche un stage en développement web.
        </Accordeon>
        <Accordeon question="Comment te contacter ?">
          Par la page Contact du site.
        </Accordeon>
      </Section>
    </div>
  );
}
