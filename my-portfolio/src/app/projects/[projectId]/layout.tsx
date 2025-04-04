export default function ProductDetailsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-[200vh] ">
      <h2>Featured layout projects</h2>
      {children}
    </div>
  );
}
