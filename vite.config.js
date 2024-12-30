import react from 'react'

import { defineConfig } from 'vite'

export default defineConfig({
  resolve: {
    alias: {
      '@shadcn/ui': 'node_modules/@shadcn/ui'
    }
  }
})