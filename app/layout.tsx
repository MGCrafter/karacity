import "../app/globals.css";
import Footer from "../components/ui_self/footer";
import 'react-toastify/dist/ReactToastify.css';

export const metadata = {
  title: "KaraCity",
  description: "Your FiveM Server",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="de">
      <body className="flex flex-col h-auto bg-gray-100 text-gray-900">
        <main className="flex-grow">
          {children}
        </main>
      </body>
    </html>
  );
}