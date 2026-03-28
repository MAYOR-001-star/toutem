import { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createRouter, createRootRoute } from '@tanstack/react-router'
import { homeRoute } from './pages/Home'
import { aboutRoute } from './pages/About'
import { shopRoute } from './pages/Shop'
import { blogRoute } from './pages/Blog'
import './index.css'
import App from './App'

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router
  }
}

export const rootRoute = createRootRoute({
  component: App
})

const routeTree = rootRoute.addChildren([
  homeRoute,
  aboutRoute,
  shopRoute,
  blogRoute
])

const router = createRouter({ routeTree })

const rootElement = document.getElementById('root')!
if (!rootElement.innerHTML) {
  const root = ReactDOM.createRoot(rootElement)
  root.render(
    <StrictMode>
      <RouterProvider router={router} />
    </StrictMode>,
  )
}