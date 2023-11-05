import "./globals.css";
import { Providers } from "./providers";
import NavBar from "@/components/NavBar/NavBar";

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
    <html lang="en" className="dark">
      <body>
        <Providers>
          <NavBar />
          <div className="flex flex-col gap-20">{children}</div>
        </Providers>
      </body>
    </html>
  );
}
