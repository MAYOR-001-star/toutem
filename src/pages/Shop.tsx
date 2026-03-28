import { createRoute } from "@tanstack/react-router";
import { rootRoute } from "../main";

const Shop = () => {
    return (
        <div>Shop</div>
    )
}

export const shopRoute = createRoute({
    getParentRoute: () => rootRoute,
    path: '/shop',
    component: Shop
})