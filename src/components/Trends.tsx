import FeaturedSection from "./FeaturedSection.tsx";
import { type ProductCardProps } from "./ProductCard.tsx";

const TRENDS_PRODUCTS: ProductCardProps[] = [
    {
        image: "/trends-1.svg",
        title: "Basket INNER BEAUTY",
        description: "Original product comes in three styles of color, usb charger",
        tag: "$64",
    },
    {
        image: "/trends-2.svg",
        title: "Uplift Handcrafted Soap Bar",
        description: "Beautiful decorative object perfumes the space with your favorite fragrance.",
        tag: "$7",
    },
];

const Trends = () => {
    return (
        <FeaturedSection
            sectionId="trends"
            title="Trends"
            buttonTitle="SHOP ALL"
            bgImage="/visual-flower-2.svg"
            products={TRENDS_PRODUCTS}
        />
    );
};

export default Trends;