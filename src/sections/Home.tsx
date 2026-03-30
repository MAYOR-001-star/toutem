import { useTheme } from "../components/ThemeContext";

const HomeSection = () => {
    const { theme } = useTheme()
    return (
        <section id="home" className={`pb-24 px-6 md:px-12 lg:px-[11rem] ${theme === "dark" ? "bg-[#1F2937]" : "bg-[#FAFAFA]"} overflow-hidden`}>
            {/* Hero Section */}
            <div className="flex flex-col-reverse lg:flex-row items-center justify-between mb-24 w-full gap-12 lg:gap-0">
                {/* Left side: Content */}
                <div className="flex-1 space-y-4 lg:space-y-8 z-10 text-center lg:text-left mt-8 lg:mt-0">
                    <h1 className="text-[2.5rem] md:text-6xl lg:text-[5rem] font-bold text-[#55D283] leading-tight">
                        Pear kiwi<br />& Mint
                    </h1>
                    <p className="text-gray-400 font-medium text-xs md:text-sm max-w-[22rem] mx-auto lg:mx-0 leading-relaxed">
                        They say that home is where the heart is. Perhaps that's why a feeling of loss is so apparent when you are far from the ones you love.
                    </p>
                </div>

                {/* Right side: Visuals */}
                <div className="relative flex-1 flex items-center justify-center lg:justify-end w-full">
                    <div className="relative w-full flex justify-center lg:justify-end items-center my-[2rem] md:my-[6rem] lg:my-0">
                        {/* Blob for Mobile/Tablet */}
                        <img
                            src="/blob-small.svg"
                            alt="Background Shape Mobile"
                            className="absolute lg:hidden top-0 w-[24rem] sm:w-[28rem] md:w-[35rem] h-auto z-0 left-1/2 transform -translate-x-1/2 -translate-y-[10%]"
                        />
                        {/* Blob for Desktop */}
                        <img
                            src="/blob-2.svg"
                            alt="Background Shape Desktop"
                            className="hidden lg:block absolute right-[-11rem] top-1/2 transform -translate-y-[45%] w-[40rem] xl:w-[50rem] h-auto z-0"
                        />

                        <img
                            src="/pear-kiwi.svg"
                            alt="Pear Kiwi & Mint"
                            className="relative z-10 w-[15rem] md:w-[20rem] lg:w-[35rem] xl:w-[40rem] h-auto drop-shadow-2xl lg:right-[-10rem] mt-[2rem] lg:mt-[5rem]"
                        />
                    </div>
                </div>
            </div>
            <div className="md:pt-20 mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-0">
                {["Essential oils", "Natural cosmetics", "Diffusers", "Aromatherapy"].map((title) => (
                    <div
                        key={title}
                        className={`p-4 flex flex-col items-center justify-between rounded-tr-lg rounded-bl-lg shadow-sm transition-all duration-300 hover:shadow-lg ${title === "Diffusers" ? "bg-[#3ACF85] text-white" : `${theme === "dark" ? "bg-[#374151]" : "bg-white"} text-[#3ACF85]`
                            }`}
                    >
                        <div className="flex-1 flex items-center justify-center">
                            <img src={`/${title.toLowerCase().replace(" ", "-")}.svg`} alt={title} className="" />
                        </div>
                        <h3 className="text-xs font-bold tracking-widest uppercase">{title}</h3>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default HomeSection;
