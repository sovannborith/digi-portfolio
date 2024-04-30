import "../../styles/globals.css";

export const metadata = {
  title: "Sovannborith Next Portfolio",
  description: "Sovannborith Next Portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
