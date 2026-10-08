import type { Metadata } from "next";
import { Cormorant_Garamond, Jost } from "next/font/google";
import "./globals.css";
import { BackToTop } from "./scroll-top";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin", "vietnamese"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
});

const jost = Jost({
  variable: "--font-jost",
  subsets: ["latin"],
  weight: ["300", "400", "500"],
});

export const metadata: Metadata = {
  title: "ALICE & CO. — Your Local Partner in Vietnam",
  description:
    "Market entry, sourcing, local representation, relocation and logistics for foreign companies, investors and expats — handled on the ground in Ho Chi Minh City by one team with a legal background.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${jost.variable}`}
      // Lets Next.js jump instantly to the top on route changes while
      // in-page anchor links keep scrolling smoothly
      data-scroll-behavior="smooth"
    >
      <body>
        {children}
        <BackToTop />
      </body>
    </html>
  );
}
