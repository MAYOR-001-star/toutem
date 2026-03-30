const BlogSection = () => {
    type BlogCard = {
        img: string;
        title: string;
        content: string;
    }
    const blogCards: BlogCard[] = [
        {
            img: '/blog-card.svg',
            title: "How to create your own essential oil diffuser blends",
            content: "As you begin creating your own diffuser blends, it’s important to keep a few ..."
        },
        {
            img: '/blog-card.svg',
            title: "How to create your own essential oil diffuser blends",
            content: "As you begin creating your own diffuser blends, it’s important to keep a few ..."
        },
        {
            img: '/blog-card.svg',
            title: "How to create your own essential oil diffuser blends",
            content: "As you begin creating your own diffuser blends, it’s important to keep a few ..."
        },
        {
            img: '/blog-card.svg',
            title: "How to create your own essential oil diffuser blends",
            content: "As you begin creating your own diffuser blends, it’s important to keep a few ..."
        }
    ]
    return (
        <section id="blog" className="py-16 sm:py-20 text-center">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <h1 className="text-4xl md:text-5xl font-bold text-[#5FD788] mb-12">BLOG</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {blogCards.map((card: BlogCard, index: number) => (
                        <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col">
                            <img src={card.img} alt={card.title} className="w-full h-48 object-cover"/>
                            <div className="p-6 text-left flex flex-col flex-grow">
                                <h3 className="text-xl font-semibold text-[#5FD788] pb-3 border-b-2 border-gray-100">
                                    {card.title}
                                </h3>
                                <p className="mt-4 text-gray-600 flex-grow">
                                    {card.content}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default BlogSection;
