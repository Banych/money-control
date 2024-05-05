import type { Metadata } from 'next';
import { Noto_Sans } from 'next/font/google';
import './globals.css';
import { Menu } from '@/app/_components/Menu';

const noto = Noto_Sans({ subsets: ['latin'] });

export const metadata: Metadata = {
    title: 'Money Control',
    description: 'Application for controlling your money and expenses',
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={noto.className}>
                <Menu>{children}</Menu>
            </body>
        </html>
    );
}
