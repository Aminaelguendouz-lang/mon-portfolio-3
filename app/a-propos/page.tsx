import Image from "next/image";
import Bouton from "../components/bouton";
import ListeEtiquettes from "../components/liste-etiquettes";
import Section from "../components/section";

const competences: string[] = ["HTML", "CSS", "JavaScript", "TypeScript", "React", "Next.js", "PHP", "WordPress"];

export default function APropos() {
  return (
    <div className="py-16">
      <div className="flex flex-col gap-8 sm:flex-row sm:items-center">
        <Image
          src="/amina-2.jpg"
          alt="Amina El Guendouz"
          width={1179}
          height={1260}
          className="w-56 rounded-2xl object-cover"
        />
        <div>
          <h1 className="text-4xl font-semibold">À propos</h1>
          <p className="mt-4 max-w-xl text-neutral-600">
            Je suis étudiante en A2 à l&apos;IIM, en création et développement interactif.
            J&apos;aime construire des sites clairs et agréables à utiliser.
          </p>
        </div>
      </div>
      <Section titre="Compétences">
        <ListeEtiquettes tags={competences} />
      </Section>
      <div className="mt-10">
        <Bouton label="Voir mes projets" href="/projets" />
      </div>
    </div>
  );
}
