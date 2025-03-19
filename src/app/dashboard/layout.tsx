export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex">
      <main className="flex-1">
        <div className="p-6">{children}</div>
      </main>
    </div>
  );
}