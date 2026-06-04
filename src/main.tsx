import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';
import { I18nProvider } from './lib/i18n';
import { AccentProvider } from './lib/accent';

const rootEl = document.getElementById('root');
if (!rootEl) throw new Error('Root element #root not found');
createRoot(rootEl).render(
  <StrictMode>
    <I18nProvider>
      <AccentProvider>
        <App />
      </AccentProvider>
    </I18nProvider>
  </StrictMode>
);
