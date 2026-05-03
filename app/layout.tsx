import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "Blind Dev Accessibility Checker",
  description: "Code accessibility scanner for visually impaired developers. Scan codebases and dev environments for screen reader compatibility and keyboard navigation barriers."
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="af5aff3e-a569-4b2f-b462-c02f36ce2ba2"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  )
}
