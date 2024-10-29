import type { Metadata } from "next";
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
      rel: "icon", 
      sizes:"180x180", 
      type:"image/png", 
      url: "/favicons/android-chrome-512x512.png" 
    }, 
    { 
      rel: "apple-touch-icon",
      type:"image/png",
      sizes:"32x32" ,
      url: "/favicons/apple-touch-icon.png" 
    }
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
  }
};

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
