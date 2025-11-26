import "./globals.css";
import Footer from "@/components/shared/Footer";
import Navbar from "@/components/shared/Navbar";
import AuthProvider from "../../context/AuthProvider";

export const metadata = {
  title: "VistaPulse | Blogging Website",
  description: "The heartbeat of new experiences and perspectives.",
};

export default function RootLayout({ children }) {

  return (
    <html lang="en">
      <body className="antialiased flex flex-col min-h-screen">
        <AuthProvider>
          <Navbar />
          <div className="grow">{children}</div>
          <Footer />
        </AuthProvider>
      </body>
    </html>
  );
}
