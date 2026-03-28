import { createRoute } from "@tanstack/react-router"
import { rootRoute } from "../main"

const Home = () => {
  return <div>Home</div>
};

export const homeRoute = createRoute({
    getParentRoute: () => rootRoute,
    path: '/',
    component: Home
})