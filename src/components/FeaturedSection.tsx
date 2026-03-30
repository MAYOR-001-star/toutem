import Button from "./Button.tsx";
import ProductCard, { type ProductCardProps } from "./ProductCard.tsx";

interface FeaturedSectionProps {
    title: string;
    buttonTitle: string;
    bgImage: string;
    products: ProductCardProps[];
    sectionId?: string;
}

const FeaturedSection = ({
    title,
    buttonTitle,
    bgImage,
    products,
    sectionId
}: FeaturedSectionProps) => {
    return (
        <section 
            id={sectionId}
            className="relative flex flex-col lg:flex-row items-center justify-between px-6 py-16 md:px-12 md:py-24 lg:px-20 lg:py-28 bg-[#F8F8F8] overflow-hidden"
        >
            {/* Left Side - Content */}
            <div className="relative w-full lg:w-[30%] mb-12 lg:mb-0 text-center lg:text-left z-10">
                <h2 className="text-3xl md:text-4xl font-semibold text-green-500 mb-4 uppercase">
                    {title}
                </h2>
                <div className="flex justify-center lg:justify-start">
                    <Button title={buttonTitle} variant="green" />
                </div>
            </div>

            {/* Background Decoration */}
            <img 
                src={bgImage} 
                alt="decoration" 
                className="absolute hidden lg:block w-[26.94rem] h-[38.38rem] right-[50%] lg:right-[70%] translate-x-1/2 lg:translate-x-0 bottom-0 opacity-50 lg:opacity-100 pointer-events-none" 
            />

            {/* Right Side - Product Cards */}
            <div className="flex flex-col md:flex-row gap-6 w-full lg:w-auto justify-center items-center z-10">
                {products.map((product, index) => (
                    <ProductCard key={index} {...product} />
                ))}
            </div>

            {/* Pagination Dots (Placeholder for slider logic if needed later) */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2">
                <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                <span className="w-2 h-2 bg-gray-300 rounded-full"></span>
                <span className="w-2 h-2 bg-gray-300 rounded-full"></span>
            </div>
        </section>
    );
};

export default FeaturedSection;
