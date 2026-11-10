import Image from "next/image";
import Bouton from "./bouton";

type Props = {
  titre: string;
  texte: string;
  image?: string; // facultatif : une photo à côté du texte
};

// Le bandeau d'accueil : il utilise le composant Bouton
export default function Hero({ titre, texte, image }: Props) {
  return (
    <div className="flex flex-col-reverse items-center gap-8 py-16 sm:flex-row">
      <div className="flex-1">
        <h1 className="max-w-xl text-4xl font-semibold">{titre}</h1>
        <p className="mt-4 max-w-lg text-neutral-600">{texte}</p>
        <div className="mt-8 flex gap-4">
          <Bouton label="Voir les projets" href="/projets" />
          <Bouton label="Me contacter" href="/contact" variante="contour" />
        </div>
      </div>
      {image && (
        <Image
          src={image}
          alt="Photo d'Amina"
          width={943}
          height={1400}
          priority
          className="w-48 rounded-2xl object-cover sm:w-60"
        />
      )}
    </div>
  );
}
