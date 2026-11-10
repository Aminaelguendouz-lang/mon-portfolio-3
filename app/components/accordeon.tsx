"use client";

import { useState, type ReactNode } from "react";

type Props = {
  question: string;
  children: ReactNode; // la réponse, écrite entre les balises <Accordeon>
};

// Une question qui affiche ou cache sa réponse au clic
export default function Accordeon({ question, children }: Props) {
  const [ouvert, setOuvert] = useState<boolean>(false);

  return (
    <div className="border-b border-neutral-200 py-4">
      <button
        type="button"
        onClick={() => setOuvert(!ouvert)}
        className="flex w-full justify-between text-left font-medium"
      >
        {question}
        <span>{ouvert ? "−" : "+"}</span>
      </button>
      {ouvert && <div className="mt-2 text-neutral-600">{children}</div>}
    </div>
  );
}
