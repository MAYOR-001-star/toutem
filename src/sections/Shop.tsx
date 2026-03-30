import Button from "../components/Button";
import BestSellers from "../components/BestSellers.tsx";
import Trends from "../components/Trends.tsx";

const ShopSection = () => {
    return (
        <>
            <BestSellers />
            <section
                id="shop"
                className="flex flex-col md:flex-row items-center mt-[6.81rem]"
            >
                {/* Left Side */}
                <div
                    className="flex-1 bg-[#5FD788] px-8 sm:px-12 md:px-16 lg:px-24 py-12 md:py-24 text-center md:text-left">
                    <h2 className="mb-8 text-3xl sm:text-4xl lg:text-5xl leading-tight text-white font-semibold max-w-2xl mx-auto md:mx-0">
                        Our luxury soaps are 100% natural, providing nourishing benefits for your skin.
                    </h2>

                    <Button title="SHOP ALL" variant="ghost" />
                </div>

                {/* Right Side */}
                <div className="flex-1 w-full hidden lg:block">
                    <img
                        src="/right-side.svg"
                        alt="Natural soap products"
                        className="w-full h-64 md:h-full object-cover"
                    />
                </div>
            </section>
            <Trends />
        </>
    );
};

export default ShopSection;
