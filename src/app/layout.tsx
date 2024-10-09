// src/app/layout.tsx

import "../styles/globals.css";
import ProgressBar from "../components/ProgressBar";
import { ProjectProvider } from "../context/ProjectContext";
import { AnimationProvider } from "../context/AnimationContext";

export const metadata = {
  title: 'RET - Company -_-',
  description: 'Your App Description',
  keywords: 'ret, company, projects, services', 
  author: 'Seelenzo', 
  viewport: 'width=device-width, initial-scale=1, maximum-scale=1', 
  manifest: '/manifest.json', 
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="manifest" href="/manifest.json" />
        <meta name="viewport" content={metadata.viewport} />
        <meta name="description" content={metadata.description} />
        <meta name="author" content={metadata.author} />
        <meta name="keywords" content={metadata.keywords} />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content={metadata.title} />
        <meta property="og:description" content={metadata.description} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="" /> 
        <meta property="og:image" content="" /> 
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={metadata.title} />
        <meta name="twitter:description" content={metadata.description} />
        <meta name="twitter:image" content="" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body>
        <ProjectProvider>
          <AnimationProvider>
            <ProgressBar />
            {children}
          </AnimationProvider>
        </ProjectProvider>
      </body>
    </html>
  );
}
