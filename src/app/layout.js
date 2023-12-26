import NavBar from "../components/NavBar";
import "./globals.css";
// import { Inter } from "next/font/google";

// const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "ToDos",
  description: "creatre and manage your todos",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="w-3x1 m-5 border-solid border-4 border-blue-900">
          <NavBar />
          <div className="mt-8">{children}</div>
        </div>
      </body>
    </html>
  );
}
