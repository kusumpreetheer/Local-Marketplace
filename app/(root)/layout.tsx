import Bottombar from "@/components/shared/Bottombar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex h-screen flex-col overflow-hidden">
      <main className="flex-1 overflow-auto">{children}</main>
      <Bottombar />
    </div>
  );
}

