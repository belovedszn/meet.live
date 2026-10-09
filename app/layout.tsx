import "./globals.css";
import type { Metadata } from "next";
export const metadata: Metadata = { title: "Kora | Where Africa's creators go live", description: "Early-stage product concept: a livestreaming home for African creators. Interactive prototype." };
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="en"><body>{children}</body></html>;
}
