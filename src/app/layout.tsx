import type { Metadata, Viewport } from 'next';
import { Figtree as FontBody } from 'next/font/google';

import { Provider } from '@/components/ui/provider';
import { Layout } from '@/lib/layout';

const fontBody = FontBody({
  subsets: ['latin'],
  variable: '--font-body',
});

type RootLayoutProps = {
  children: React.ReactNode;
};

const APP_NAME = 'custom-stickers';

export const metadata: Metadata = {
  title: { default: APP_NAME, template: '%s | custom-stickers' },
  description: 'minimalist-stickers',
  applicationName: APP_NAME,
  appleWebApp: {
    capable: true,
    title: APP_NAME,
    statusBarStyle: 'default',
  },
  formatDetection: {
    telephone: false,
  },
  openGraph: {
    url: '',
    title: 'custom-stickers',
    description: 'minimalist-stickers',
    images: {
      url: 'https://instagram.fuln2-2.fna.fbcdn.net/v/t51.2885-19/479547299_1152598073247832_5799681621990159804_n.jpg?efg=eyJ2ZW5jb2RlX3RhZyI6InByb2ZpbGVfcGljLmRqYW5nby4xMDgwLmMyIn0&_nc_ht=instagram.fuln2-2.fna.fbcdn.net&_nc_cat=104&_nc_oc=Q6cZ2QFiG_Sc71LEdKOOHBvk65yy-TaDlrs6By24EBhZjVbEO0gWIJL_no1lWYDGFksIlKQ&_nc_ohc=JR7f-UkusiwQ7kNvwFWMJq9&_nc_gid=i1LdqbHAukzQ7BFVu_gmzg&edm=APoiHPcBAAAA&ccb=7-5&oh=00_AfweSLa2O29LSXeRs8HM3OjRW5ImpfgnDs8qtjAp6pFBvw&oe=69C0479A&_nc_sid=22de04',
      alt: 'stickers-og-image',
    },
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#FFFFFF',
};

const RootLayout = ({ children }: RootLayoutProps) => {
  return (
    <html className={fontBody.className} lang="en" suppressHydrationWarning>
      <body>
        <Provider>
          <Layout>{children}</Layout>
        </Provider>
      </body>
    </html>
  );
};

export default RootLayout;
