import "./globals.css";
import { Header } from "../app/components/header"

export const metadata = {
  title: "Turismo no Espirito Santo",
  description: "título da Página",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        
        <Header />

        {children}

      </body>
    </html>
  );
}
