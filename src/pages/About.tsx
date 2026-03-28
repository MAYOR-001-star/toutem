import { createRoute } from "@tanstack/react-router";
import { rootRoute } from "../main";

const About = () =>{
    return(
        <div>About</div>
    )
}

export const aboutRoute = createRoute({
    getParentRoute: () => rootRoute,
    path: '/about',
    component: About
})  