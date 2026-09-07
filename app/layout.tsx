import type { Metadata } from "next";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";
import GSAPAnimations from "@/components/GSAPAnimations";
import CustomCursor from "@/components/CustomCursor";
import WhatsAppButton from "../components/WhatsAppButton";

export const metadata: Metadata = {
  title: "Axentra Labs",
  icons: "/axxe2.png",
  description: "We build digital products that move businesses forward.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <SmoothScroll />
        <GSAPAnimations />
        {/* <CustomCursor/> */}
        {children}
        <WhatsAppButton />
      </body>
    </html>
  );
}