import { MobileNotAvailableWrapper } from "@/components/mobile-not-available-wrapper";
import { Sidebar } from "@/components/sidebar";
import NextThemesProvider from "@/libs/next-themes/next-themes-provider";
import "@/styles/globals.css";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Africa Kokiri",
  icons: {
    icon: "/icons/kokiri.svg"
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body
        className="h-screen w-screen antialiased dark:bg-[#171717]
dark:text-white"
      >
        <NextThemesProvider>
          <Sidebar />
          <MobileNotAvailableWrapper>{children}</MobileNotAvailableWrapper>
        </NextThemesProvider>
      </body>
    </html>
  );
}
