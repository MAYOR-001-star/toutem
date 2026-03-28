import { createRoute } from "@tanstack/react-router";
import { rootRoute } from "../main";


const Blog = () => {
    return (
        <div>Blog</div>
    )
}


export const blogRoute = createRoute({
    getParentRoute: () => rootRoute,
    path: '/blog',
    component: Blog
})