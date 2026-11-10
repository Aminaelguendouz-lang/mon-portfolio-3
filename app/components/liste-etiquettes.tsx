import Etiquette from "./etiquette";

type Props = {
  tags: string[];
};

// Affiche les tags un par un, avec un composant Etiquette pour chacun
export default function ListeEtiquettes({ tags }: Props) {
  return (
    <ul className="flex flex-wrap gap-2">
      {tags.map((tag) => (
        <li key={tag}>
          <Etiquette texte={tag} />
        </li>
      ))}
    </ul>
  );
}
