"use client";

import { useState } from "react";

// Bouton qui se souvient s'il est aimé ou non grâce à useState
export default function BoutonJaime() {
  // aime : la valeur actuelle / setAime : la fonction pour la changer
  const [aime, setAime] = useState<boolean>(false);

  const style = aime
    ? "border-red-500 bg-red-500 text-white"
    : "border-neutral-300 text-black";

  return (
    <button
      type="button"
      onClick={() => setAime(!aime)}
      className={`rounded border px-3 py-1 text-sm ${style}`}
    >
      {aime ? "J'aime" : "J'aime pas"}
    </button>
  );
}
