type Props = {
  texte: string;
};

// Affiche un seul tag dans une petite pastille
export default function Etiquette({ texte }: Props) {
  return (
    <span className="rounded-full border border-neutral-300 px-3 py-1 text-xs text-doux">
      {texte}
    </span>
  );
}
