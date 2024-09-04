import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const links = [
  { label: "Home", link: "/", },
  { label: "Aravi (Sister)", link: "/aravi" },
  { label: "Pre-Birthday", link: "/pre-birthday" },
  { label: "1-12 Months", link: "/one-to-12" },
]

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Shravik Bio",
  description: "Shravik portfolio",
  icons: {
    icon: '/images/siblings-icon.ico'
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex flex-col m-4">
          <h1>Hello, I'm <span className="text-blue-500">Sh<span className="text-blue-800">ravi</span>k</span> GajaReddy, Welcome to my bio</h1>
          <br />
          <div className="flex flex-wrap">
            {
              links.map(i => (
                <Link className="m-2 p-2 bg-cyan-800 text-white" key={i.label} href={i.link}>{i.label}</Link>
              ))
            }
          </div>
          <br />
          {children}
        </div>
      </body>

    </html>
  );
}
