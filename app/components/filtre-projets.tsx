"use client";

import { useState } from "react";
import type { Projet } from "../lib/projets";
import Carte from "./carte";

type Props = {
  projets: Projet[];
  tags: string[];
};

type Tri = "recent" | "ancien";

// Filtre les projets par tag et les trie par année
export default function FiltreProjets({ projets, tags }: Props) {
  const [tagChoisi, setTagChoisi] = useState<string>("Tous");
  const [tri, setTri] = useState<Tri>("recent");

  // 1. on garde seulement les projets qui ont le tag choisi
  const visibles =
    tagChoisi === "Tous"
      ? projets
      : projets.filter((projet) => projet.tags.includes(tagChoisi));

  // 2. on trie une copie du tableau ([...visibles]) par année
  const tries = [...visibles].sort((a, b) =>
    tri === "recent" ? b.annee - a.annee : a.annee - b.annee
  );

  return (
    <div>
      <div className="flex flex-wrap gap-2">
        {["Tous", ...tags].map((tag) => (
          <button
            key={tag}
            type="button"
            onClick={() => setTagChoisi(tag)}
            className={`rounded-full border px-3 py-1 text-sm ${
              tagChoisi === tag
                ? "border-black bg-black text-white"
                : "border-neutral-300"
            }`}
          >
            {tag}
          </button>
        ))}
      </div>

      <button
        type="button"
        onClick={() => setTri(tri === "recent" ? "ancien" : "recent")}
        className="mt-4 text-sm underline"
      >
        Trier : {tri === "recent" ? "plus récents d'abord" : "plus anciens d'abord"}
      </button>

      <p className="mt-4 text-sm text-neutral-500">
        {tries.length} projet{tries.length > 1 ? "s" : ""}
      </p>

      <div className="mt-4 grid gap-4 sm:grid-cols-2">
        {tries.map((projet) => (
          <Carte key={projet.slug} projet={projet} />
        ))}
      </div>
    </div>
  );
}
