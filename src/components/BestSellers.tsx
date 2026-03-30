import FeaturedSection from "./FeaturedSection.tsx";
import { type ProductCardProps } from "./ProductCard.tsx";

const BEST_SELLERS_PRODUCTS: ProductCardProps[] = [
    {
        image: "/bestsellers-1.svg",
        title: "Aroma Diffuser",
        description: "Original product comes in three styles of color, usb charger",
        tag: "NEW",
    },
    {
        image: "/bestsellers-2.svg",
        title: "Lux Aroma Diffuser",
        description: "Beautiful decorative object perfumes the space with your favorite fragrance.",
        tag: "15%",
    },
];

const BestSellers = () => {
    return (
        <FeaturedSection
            sectionId="bestsellers"
            title="Bestsellers"
            buttonTitle="SHOP ALL"
            bgImage="/visual-flower-1.svg"
            products={BEST_SELLERS_PRODUCTS}
        />
    );
};

export default BestSellers;