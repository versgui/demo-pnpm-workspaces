import { Outlet, createRootRoute } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/router-devtools'

export const Route = createRootRoute({
  component: () => (
    <>
      <main>
        <div className="container">
          <Outlet />
        </div>
      </main>
      <TanStackRouterDevtools />
    </>
  ),
})
