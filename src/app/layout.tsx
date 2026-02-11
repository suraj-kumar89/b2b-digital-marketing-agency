import { Header } from '@/_components'
import './globals.css'
import Footer from '@/_components/footer/Footer'
import WhatsAppButton from '@/_components/WhatsApp'
export const runtime = "nodejs";

export const metadata = {
  robots: {
    index: false,
    follow: false,
  },
  icons: {
    icon: "/svgfavicon.svg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@0,200..800;1,200..800&display=swap"
          rel="stylesheet"
        />
        {/* GTM script stays */}
      </head>
      <body>
        <div className="flex flex-col flex-1 relative">
          <Header />
          <div className="flex-1">{children}</div>
          <Footer />
        </div>
        <WhatsAppButton />
      </body>
    </html>
  )
}
