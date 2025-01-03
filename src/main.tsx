import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ChakraProvider } from "@chakra-ui/react";
import { HeaderProvider } from './context/headerContext';
import { customTheme } from './theme';
import './index.css'
import App from './App'

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <ChakraProvider theme={customTheme}>
    <HeaderProvider>
     <App/>
    </HeaderProvider>
   </ChakraProvider>
  </StrictMode>,
)
