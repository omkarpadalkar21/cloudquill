import { ConvexClientProvider } from "@/components/convex-client-provider";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { NuqsAdapter } from "nuqs/adapters/next/app";
import { Toaster } from "@/components/ui/sonner";
import "./globals.css";
import "@liveblocks/react-ui/styles.css";
import "@liveblocks/react-tiptap/styles.css";
const inter = Inter({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "CloudQuill | Real-Time Collaborative Writing Workspace",
  description:
    "A powerful, real-time collaborative writing platform—create, edit, and share documents seamlessly with your team, anytime, anywhere.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NuqsAdapter>
          <ConvexClientProvider>
            <Toaster />
            {children}
          </ConvexClientProvider>
        </NuqsAdapter>
      </body>
    </html>
  );
}
