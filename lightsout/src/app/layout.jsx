import "./globals.css";



export const metadata = {
  title: "Turismo no Espirito Santo",
  description: "título da Página",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        
        {children}

      </body>
    </html>
  );
}
