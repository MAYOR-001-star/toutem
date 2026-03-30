const AboutSection = () => {
    return (
        <section id="about" className="py-26 md:px-[11rem] bg-white lg:min-h-screen flex items-center">
            <div className="mx-auto flex flex-col lg:flex-row items-center justify-center lg:justify-between gap-12 lg:gap-[14rem] w-full">
                {/* Left side: Visuals - hidden on mobile/tablet */}
                <div className="relative flex-1 hidden lg:flex items-center justify-between">
                    <img
                        src="/Blob.svg"
                        alt="Background Shape"
                        className="absolute w-[29.37rem] h-[33.25rem] h-auto left-[-11rem]"
                    />
                    <div className="relative z-10 flex flex-col md:flex-row items-center gap-4">
                        <img
                            src="/left-flower.svg"
                            alt="Left Flower"
                            className="absolute -left-12 bottom-12 w-20 md:w-32 h-auto"
                        />
                        <img
                            src="/about-img.svg"
                            alt="About Product"
                            className="w-[37.56rem] h-[33.25rem] drop-shadow-2xl"
                        />
                        <img
                            src="/right-flower.svg"
                            alt="Right Flower"
                            className="absolute -right-12 bottom-12 w-20 md:w-32 h-auto"
                        />
                    </div>
                </div>

                {/* Right side: Content */}
                <div className="flex-1 text-center lg:text-left space-y-6 md:space-y-8 px-4 md:px-0">
                    <h1 className="text-3xl md:text-4xl lg:text-[3rem] font-bold text-[#3ACF85] leading-tight">
                        Improve your well-being with Aromatherapy
                    </h1>
                    <p className="text-gray-500 text-sm md:text-[0.88rem] max-w-md mx-auto lg:mx-0">
                        Diffusing can be exactly what you need to add purpose and focus to your daily tasks. We've got tons of fun diffuser blends, with scents to suit every mood, day and situation.
                    </p>
                    <button className="bg-[#3ACF85] text-white py-3 px-8 md:py-2.5 md:px-8 rounded-lg text-xs font-bold uppercase tracking-widest transition-all duration-300 hover:bg-[#2EB875] hover:shadow-xl hover:-translate-y-1">
                        Explore the Collection
                    </button>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;
