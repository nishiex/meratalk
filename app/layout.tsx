import type { Metadata } from 'next'
import Script from 'next/script'
import { Inter, Josefin_Sans } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { RouteLoader } from '@/components/route-loader'
import './globals.css'

const blockBisAttrs = `(function(){
  try {
    var BIS_PREFIXES = ['bis_', '__processed_', 'bis-'];
    var matches = function(n){
      if (typeof n !== 'string') return false;
      for (var i = 0; i < BIS_PREFIXES.length; i++) if (n.indexOf(BIS_PREFIXES[i]) === 0) return true;
      return false;
    };
    var origSet = Element.prototype.setAttribute;
    Element.prototype.setAttribute = function(n, v){
      if (matches(n)) return;
      return origSet.apply(this, arguments);
    };
    var origSetNS = Element.prototype.setAttributeNS;
    Element.prototype.setAttributeNS = function(ns, n, v){
      if (matches(n)) return;
      return origSetNS.apply(this, arguments);
    };
    var strip = function(root){
      if (!root || !root.querySelectorAll) return;
      var nodes = root.querySelectorAll('*');
      for (var i = 0; i < nodes.length; i++) {
        var el = nodes[i];
        var attrs = el.attributes;
        if (!attrs) continue;
        for (var j = attrs.length - 1; j >= 0; j--) {
          if (matches(attrs[j].name)) el.removeAttribute(attrs[j].name);
        }
      }
    };
    if (typeof MutationObserver !== 'undefined') {
      var obs = new MutationObserver(function(muts){
        for (var i = 0; i < muts.length; i++) {
          var m = muts[i];
          if (m.type === 'attributes' && matches(m.attributeName)) {
            try { m.target.removeAttribute(m.attributeName); } catch(_){}
          }
        }
      });
      var start = function(){
        if (document.documentElement) {
          strip(document.documentElement);
          obs.observe(document.documentElement, { attributes: true, subtree: true, childList: true });
        }
      };
      if (document.readyState === 'loading') {
        document.addEventListener('readystatechange', start, { once: true });
      }
      start();
    }
  } catch(_) {}
})();`

const inter = Inter({ subsets: ["latin"], variable: '--font-inter' });
const josefinSans = Josefin_Sans({ subsets: ["latin"], variable: '--font-josefin' });

export const metadata: Metadata = {
  title: 'MeraTalk - AI Powered Cloud Contact Center Solution',
  description: 'MeraTalk offers AI-powered cloud contact center solutions with voice termination, SIP trunking, and intelligent communication tools.',
  generator: 'v0.app',
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${josefinSans.variable}`} suppressHydrationWarning>
      <body
        className="font-sans antialiased bg-white text-[#1a1a2e]"
        suppressHydrationWarning
      >
        <Script id="block-bis-attrs" strategy="beforeInteractive">
          {blockBisAttrs}
        </Script>
        <RouteLoader>{children}</RouteLoader>
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
