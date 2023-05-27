import NavBar from "@/components/NavBar/NavBar";
import "./globals.css";
import Footer from "@/components/Footer/Footer";
import Banner from "@/components/Banner/Banner";

export const metadata = {
  title: "Juan Carlos O. Drada",
  description: "Frontend Developer",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <link rel="icon" href="/ico" />
      <body>
        <div className="flex flex-col h-screen justify-between">
          <NavBar />
          <main className="overflow-auto">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
