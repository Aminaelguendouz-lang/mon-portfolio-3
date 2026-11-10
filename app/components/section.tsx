type Props = {
  titre: string;
  children: React.ReactNode;
};

export default function Section({ titre, children }: Props) {
  return (
    <section className="mt-12">
      <h2 className="text-2xl font-semibold">{titre}</h2>
      <div className="mt-4">{children}</div>
    </section>
  );
}
