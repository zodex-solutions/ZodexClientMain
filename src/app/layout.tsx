import "./globals.css";
import Footer from "../components/common/Footer";
import ColorBends from "@/components/ColorBends";
import NextTopLoader from 'nextjs-toploader';




import type { Metadata, Viewport } from 'next'
import ZHeader from "../components/common/ZHeader";

// Viewport settings ke liye alag se export karein
export const viewport: Viewport = {
  width: 1200, // Yahan apni fixed width daalein (e.g. iPad size)
  initialScale: 1,
}

export const metadata: Metadata = {
  title: "ZODEX — We Build Digital Futures",
  description:
    "Premium IT Services, SaaS Products, AI Solutions & Cloud Architecture by Zodex Digital Solutions",
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={` dark`}>
      <body
          // font-[family-name:var(--font-body)]
          // antialiased
        className={`
          text-white
          overflow-x-hidden  w-full
          `}
      >
        <ZHeader />
          <div className="fixed inset-0 z-0">
        <ColorBends
          colors={["#f97316", "#ea580c"]}
          rotation={4}
          speed={0.3}
          scale={1}
          frequency={1}
          warpStrength={1}
          mouseInfluence={0.8}
          parallax={0.5}
          noise={0.08}
          transparent
          autoRotate={0}
        />
      </div>
        <div className="relative bg-black/30 -500">
        <main className="relative w-full">{children}</main>
        <Footer />
        </div>

        <NextTopLoader 
  color="#ea580c"
  height={4} // Thoda thickness badhayein taaki visible ho
  zIndex={99999} // Extreme high z-index
  showSpinner={false}
  shadow="0 0 10px #ea580c, 0 0 5px #ea580c"
/>

      </body>
    </html>
  );
}
