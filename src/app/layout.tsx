// /src/app/layout.tsx

// External libraries
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { headers } from "next/headers";
import { ThirdwebProvider } from "thirdweb/react";
import { Analytics } from "@vercel/analytics/react";

// Blockchain configurations
import { getActiveReceipt } from "@/config/receipts";

// CSS Styling
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export async function generateMetadata(): Promise<Metadata> {
  const host = (await headers()).get("host") || "";
  const { receipt } = getActiveReceipt(host);

  return {
    title: receipt.proTitle, // Title
    description: receipt.proDescription, // Description
    metadataBase: new URL(receipt.proUrl), // Base URL

    other: {
      "talentapp:project_verification":
        "4ad9f659e345183da07bd0a42ae805eac4d4e49af9587bdf324f0881b81b8d1e2a708794dc463c046d9c28535bfdea7c138df41336fa359d4a934c78835ba8b7",
    },

    icons: {
      icon: receipt.proFavicon,
    },
    authors: [
      { name: "MyReceipt", url: "https://myreceipt.endhonesa.com" },
      { name: "Prof. NOTA", url: "https://nota.endhonesa.com" },
    ],
    creator: "MyReceipt and Prof. NOTA Inc.",
    publisher: receipt.proPublisher,
    alternates: {
      canonical: "/",
    },
    openGraph: {
      title: receipt.proTitle, // Title
      description: receipt.proDescription, // Description
      url: receipt.proUrl, // Base URL
      siteName: receipt.proTitle, // Title
      locale: receipt.proLocale,
      images: [
        {
          url: receipt.proImage, // Preview Image URL
          width: 1920,
          height: 1080,
          alt: receipt.proTitle, // Title
        },
      ],
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      siteId: "@MyReceiptTT",
      creator: "@MyReceiptTT",
      creatorId: "@MyReceiptTT",
      title: receipt.proTitle, // Title
      description: receipt.proDescription, // Description
      images: [
        receipt.proImage, // Preview Image URL
      ],
    },
  };
}

interface RootLayoutProps {
  children: React.ReactNode;
}

export default async function RootLayout({ children }: RootLayoutProps) {
  const host = (await headers()).get("host") || "";
  const { receipt } = getActiveReceipt(host);

  return (
    <html lang={receipt.proLang}>
      <body className={inter.className}>
        <ThirdwebProvider>{children}</ThirdwebProvider>
        <Analytics />
      </body>
    </html>
  );
}
