import "./globals.css";
import 'aos/dist/aos.css';
import AosProvider from '@/components/AosProvider';

export const metadata = {
  title: "Veliquix Studio",
  description: "agency company",
  
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <AosProvider>
        {children}
        </AosProvider>
      </body>
    </html>
  );
}
