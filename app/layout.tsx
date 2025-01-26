import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/app/globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { cn } from "@/lib/utils";

type TLayout = Readonly<{
  children: React.ReactNode;
}>;

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "N.Ririnui",
  description: "Software and Cloud Engineer Portfolio.",
};

export default function Layout({ children }: TLayout) {
  return (
    <html>
      <body>
        <div
          className={cn(inter.className, "h-full w-full flex flex-col items-center")}
        >
          <Header />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
