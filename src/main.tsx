import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import { NJSystem } from '@neja-digital/react-ui';
import '@neja-digital/react-ui/react-ui.css';
import Homepage from './pages/Homepage';
import './assets/css/main.css';
import { CookieManager } from 'react-cookie-manager';
import { theme } from './config/theme';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <CookieManager>
      <NJSystem theme={theme}>
        <Homepage />
      </NJSystem>
    </CookieManager>
  </StrictMode>,
);
