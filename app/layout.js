import "./../styles/globals.css";

export const metadata = {
  title: "GrapeMC",
  description: "Minecraft Server — GrapeMC"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <main className="min-h-screen flex flex-col">
          {children}
        </main>
      </body>
    </html>
  );
}
