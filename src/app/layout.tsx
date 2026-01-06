import "./globals.css";
import { Cabin } from "next/font/google";
import { ReactQueryClientProvider } from "@/utils/react-query";

const cabin = Cabin({
  subsets: ["latin"],
  display: "swap",
  weight: ["400"],
  variable: "--cabin-display-font",
});
export const metadata = {
  title: "UCR AGSM",
  description: "A website for AGSM at UC Riverside",
};

type LayoutProps = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: LayoutProps) {
  return (
    <html lang="en">
      <body className={cabin.className}>
        <ReactQueryClientProvider>{children}
        </ReactQueryClientProvider>
      </body>
    </html>
  );
}
