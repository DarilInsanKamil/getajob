import { Fira_Code, Inter } from "next/font/google";

export const inter = Inter({
  subsets: ["latin"],
  variable: "--inter",
  weight: ["400", "600", "700"],
});
export const firacode = Fira_Code({
  subsets: ["latin"],
  variable: "--fira",
  weight: ["400", "700"],
});
