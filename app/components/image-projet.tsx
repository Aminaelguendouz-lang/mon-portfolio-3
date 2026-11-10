import Image from "next/image";

type Props = {
  src: string;
  alt: string;
};

// Image d'un projet, optimisée par Next.js avec le composant Image
export default function ImageProjet({ src, alt }: Props) {
  return (
    <Image
      src={src}
      alt={alt}
      width={1200}
      height={800}
      className="aspect-[3/2] w-full rounded-lg object-cover object-top"
    />
  );
}
