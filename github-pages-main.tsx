import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import '@fontsource-variable/oxanium';
import '@fontsource/ibm-plex-mono/500.css';
import '@fontsource/ibm-plex-mono/600.css';
import '@fontsource/ibm-plex-mono/700.css';
import { PortfolioHome } from '@/components/portfolio/portfolio-home';
import '@/app/globals.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <PortfolioHome />
  </StrictMode>,
);
