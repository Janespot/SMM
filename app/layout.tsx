import '@mantine/core/styles.css';
import './globals.css';

import { ColorSchemeScript, MantineProvider, mantineHtmlProps } from '@mantine/core';
import { Dongle } from "next/font/google";

const dongle = Dongle({
  subsets: ["latin"],
  weight: ["400"], // Choose desired weights
});

export const metadata = {
  title: 'SMM',
  description: 'Social Media Mangement',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" {...mantineHtmlProps}>
      <head>
        <ColorSchemeScript />
      </head>
      <body>
        <MantineProvider
          theme={{
            fontFamily: dongle.style.fontFamily,
            lineHeights: {
              xs: "1.1",
              sm: "1.2",
              md: "1.3",
              lg: "1.4",
              xl: "1.5",
            },
            fontSizes: {
              xs: "18px",
              sm: "20px",
              md: "24px",
              lg: "28px",
              xl: "32px",
            },
            spacing: {
              xs: "4px",
              sm: "6px",
              md: "8px",
              lg: "10px",
              xl: "12px",
            },
          }}
        >{children}</MantineProvider>
      </body>
    </html>
  );
}