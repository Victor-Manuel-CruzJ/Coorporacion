// app/layout.tsx
import "./globals.css";

export const metadata = {
  title: "Corporación Choquehuanca",
  description: "Piensa en grande, piensa en expansión",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
