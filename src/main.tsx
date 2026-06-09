import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import type { TNJTheme } from '@neja-digital/react-ui'
import { NJSystem } from '@neja-digital/react-ui'
import '@neja-digital/react-ui/react-ui.css'
import Homepage from './pages/Homepage'
import './assets/main.css'

const theme: TNJTheme = {
  colors: {
    primary: '#6F4E37',
    secondary: '#C89F7A',
    accent: '#D97757',
    background: '#F5F1EC',
    surface: '#FFF',
    'text-primary': '#2B1D14',
    'text-secondary': '#6B5B52',
    divider: '#E6D8CC',
    success: '#4F8A5B',
    warning: '#D9A441',
    error: '#B84A4A',
  },
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <NJSystem theme={theme}>
      <Homepage />
    </NJSystem>
  </StrictMode>,
)
