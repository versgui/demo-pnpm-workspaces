import type { Router } from '@tanstack/react-router'

declare module '@tanstack/react-router' {
  interface Register {
    router: Router // Specify the correct type here
  }
}
