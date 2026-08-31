import type { Metadata } from "next";
import { Oswald, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { siteConfig } from "@/config/site";

const oswald = Oswald({
  variable: "--font-oswald",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "POWER ACADEMIA | Academia em São Félix do Xingu - PA",
    template: "%s | POWER ACADEMIA",
  },
  description:
    "Treine na Power Academia em São Félix do Xingu. Estrutura completa de musculação, peso livre, máquinas de precisão e uma comunidade feita para quem decidiu evoluir. Aberta das 05:30 às 22:00 sem fechar no almoço.",
  keywords: [
    "academia são félix do xingu",
    "academia são félix do xingu pa",
    "power academia",
    "power academia são félix do xingu",
    "musculação são félix do xingu",
    "treino de força",
    "power run 5k",
    "academia pará",
    "fitness são félix do xingu",
    "melhor academia são félix do xingu",
  ],
  authors: [{ name: "POWER ACADEMIA" }],
  creator: "POWER ACADEMIA",
  publisher: "POWER ACADEMIA",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://poweracademia.com.br"),
  openGraph: {
    title: "POWER ACADEMIA | Onde os resultados acontecem",
    description:
      "Estrutura, constância e uma comunidade feita para quem decidiu evoluir em São Félix do Xingu - Pará.",
    url: "https://poweracademia.com.br",
    siteName: "POWER ACADEMIA",
    images: [
      {
        url: "/images/hero/hero-bg.jpg",
        width: 1200,
        height: 630,
        alt: "POWER ACADEMIA - São Félix do Xingu",
      },
    ],
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "POWER ACADEMIA | São Félix do Xingu - PA",
    description:
      "Estrutura, constância e comunidade feita para quem busca evolução real.",
    images: ["/images/hero/hero-bg.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/logo/power-academia.png",
    shortcut: "/logo/power-academia.png",
    apple: "/logo/power-academia.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "SportsActivityLocation", "ExerciseGym"],
    name: "POWER ACADEMIA",
    image: "https://poweracademia.com.br/logo/power-academia.png",
    telephone: siteConfig.socialLinks.phone,
    email: siteConfig.socialLinks.email,
    url: "https://poweracademia.com.br",
    address: {
      "@type": "PostalAddress",
      streetAddress: siteConfig.business.address,
      addressLocality: "São Félix do Xingu",
      addressRegion: "PA",
      postalCode: "68380-000",
      addressCountry: "BR",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: -6.6447,
      longitude: -51.9996,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
        ],
        opens: "05:30",
        closes: "22:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Saturday",
        opens: "06:00",
        closes: "14:00",
      },
    ],
    sameAs: [
      siteConfig.socialLinks.instagram,
      siteConfig.socialLinks.whatsapp,
    ],
    priceRange: "$$",
  };

  return (
    <html lang="pt-BR" className={`${oswald.variable} ${plusJakarta.variable}`} suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-[#080808] text-white font-body antialiased selection:bg-[#84ff00] selection:text-[#080808]" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
