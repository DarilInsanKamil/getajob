import type { Metadata } from "next";
import "./globals.css";
import NavigationBar from "./ui/navbar";
import Footer from "./ui/footer";
import { firacode, inter } from "./ui/fonts";

export const metadata: Metadata = {
  title: {
    template: "%s | Get a Job",
    default: "Job Dreamer",
  },
  description:
    "Discover an exciting career opportunity! Join our growing team and unleash your potential in a role that values innovation, collaboration, and growth. Apply now to become part of a dynamic workplace dedicated to fostering talent and achieving excellence in here.",
  metadataBase: new URL("https://next-learn-dashboard.vercel.sh"),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${firacode.variable}`}>
        <NavigationBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
