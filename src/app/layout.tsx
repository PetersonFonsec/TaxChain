import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import "./globals.css";

const robotoRegularSans = localFont({
  src: "./fonts/roboto/Roboto-Regular.ttf",
  variable: "--font-roboto-regular",
  weight: "400",
});

const robotoMediumSans = localFont({
  src: "./fonts/roboto/Roboto-Medium.ttf",
  variable: "--font-roboto-medium",
  weight: "700",
});

const robotoBoldSans = localFont({
  src: "./fonts/roboto/Roboto-Bold.ttf",
  variable: "--font-roboto-bold",
  weight: "900",
});


export const metadata: Metadata = {
  title: "TaxChain",
  description: "Não Complica! Faça Sua Analise de Cripto em Minutos.",
  icons: 
  [
    { 
      rel: "apple-touch-icon", 
      sizes:"57x57", 
      type:"image/png", 
      url: "/favicons/apple-icon-57x57.png",
      href: "/favicons/apple-icon-57x57.png"
    }, 
    { 
      rel: "apple-touch-icon", 
      sizes:"60x60", 
      type:"image/png", 
      url: "/favicons/apple-icon-60x60.png",
      href: "/favicons/apple-icon-60x60.png"
    }, 
    { 
      rel: "apple-touch-icon", 
      sizes:"72x72", 
      type:"image/png", 
      url: "/favicons/apple-icon-72x72.png",
      href: "/favicons/apple-icon-72x72.png"
    }, 
    { 
      rel: "apple-touch-icon", 
      sizes:"76x76", 
      type:"image/png", 
      url: "/favicons/apple-icon-76x76.png",
      href: "/favicons/apple-icon-76x76.png"
    }, 
    { 
      rel: "apple-touch-icon", 
      sizes:"114x114", 
      type:"image/png", 
      url: "/favicons/apple-icon-114x114.png",
      href: "/favicons/apple-icon-114x114.png"
    }, 
    { 
      rel: "apple-touch-icon", 
      sizes:"120x120", 
      type:"image/png", 
      url: "/favicons/apple-icon-120x120.png",
      href: "/favicons/apple-icon-120x120.png"
    }, 
    { 
      rel: "apple-touch-icon", 
      sizes:"144x144", 
      type:"image/png", 
      url: "/favicons/apple-icon-144x144.png",
      href: "/favicons/apple-icon-144x144.png"
    }, 
    { 
      rel: "apple-touch-icon", 
      sizes:"152x152", 
      type:"image/png", 
      url: "/favicons/apple-icon-152x152.png",
      href: "/favicons/apple-icon-152x152.png"
    }, 
    { 
      rel: "apple-touch-icon", 
      sizes:"180x180", 
      type:"image/png", 
      url: "/favicons/apple-icon-180x180.png",
      href: "/favicons/apple-icon-180x180.png"
    }, 
    { 
      rel: "icon", 
      sizes:"192x192", 
      type:"image/png", 
      url: "/favicons/android-icon-192x192.png",
      href: "/favicons/android-icon-192x192.png"
    }, 
    { 
      rel: "icon", 
      sizes:"32x32", 
      type:"image/png", 
      url: "/favicons/android-icon-32x32.png",
      href: "/favicons/android-icon-32x32.png"
    }, 
    { 
      rel: "icon", 
      sizes:"96x96", 
      type:"image/png", 
      url: "/favicons/android-icon-96x96.png",
      href: "/favicons/android-icon-96x96.png"
    }, 
    { 
      rel: "icon", 
      sizes:"16x16", 
      type:"image/png", 
      url: "/favicons/android-icon-16x16.png",
      href: "/favicons/android-icon-16x16.png"
    }, 
    { 
      rel: "manifest", 
      url: "/manifest.json",
      href: "/manifest.json"
    }, 
  ],
  openGraph: {
    type: "website",
    url: "https://www.taxchain.com.br",
    title: "TaxChain",
    description: "Não Complica! Faça Sua Analise de Cripto em Minutos.",
    siteName: "TaxChain",
    images: [{
      url: "/share.png",
    }],
  },
  
};

export const viewport: Viewport = {
  themeColor: '#181A20',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className={`${robotoRegularSans.variable} ${robotoMediumSans.variable} ${robotoBoldSans.variable}`}>
        {children}
      </body>
    </html>
  );
}
