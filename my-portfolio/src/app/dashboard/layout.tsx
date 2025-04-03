export default function DashboardLayout({
  hero,
  grid,
}: {
  hero: React.ReactNode;
  grid: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-black text-white">
      <header className="p-4 bg-gray-900"></header>
      <main className="flex flex-col gap-5 p-5">
        {hero}
        {grid}
      </main>
    </div>
  );
}
