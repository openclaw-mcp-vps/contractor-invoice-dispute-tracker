import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Invoice Dispute Tracker — Get Paid What You\'re Owed',
  description: 'Track invoice statuses, automate follow-ups, and access legal templates to resolve freelancer payment disputes fast.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="63bf5f68-cae5-40fc-911d-3cf03f97187e"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  )
}
