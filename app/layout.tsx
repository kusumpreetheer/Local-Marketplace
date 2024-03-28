import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";
import "./globals.css";
import '@mantine/core/styles.css';
import { ColorSchemeScript, MantineProvider } from '@mantine/core';


const poppins = Poppins({ 
  subsets: ["latin"],
  weight: ['400', '500', '600', '700'],
  variable: '--font-poppins',
});

export const metadata: Metadata = {
  title: "Local Marketplace",
  description: "Buy and sell services locally.",
  icons: {

  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
        <html lang="en">
          <head>
            <ColorSchemeScript />
          </head>
          <body className={poppins.variable}>
            <MantineProvider>{children}</MantineProvider>
          </body>
        </html>
    </ClerkProvider>
  );
}
