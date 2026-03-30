export type ProductCardProps = {
    image: string
    title: string
    description: string
    tag?: string
}

const ProductCard = ({
    image,
    title,
    description,
    tag,
}: ProductCardProps) => {
    return (
        <div className="bg-white relative">
            <div className="bg-[#F5F5F5] flex items-center justify-center overflow-hidden">
                <img src={image} alt={title} className="w-[23.44rem] h-[24.38rem] object-contain" />
            </div>

            <div className="absolute bottom-3 pt-[0.81em] pb-[0.63em] px-[0.94em] rounded-tr-[2.50rem] rounded-bl-[2.50rem] bg-[#F4F2F0] opacity-75">
                <div className="flex items-center justify-between">
                    <div>
                        <div className="flex items-center gap-2">
                            <h3 className="font-semibold text-sm">{title}</h3>
                            {tag && (
                                <span className="text-[0.88rem] px-2 bg-green-100 text-green-600 rounded-full">
                                    {tag}
                                </span>
                            )}
                        </div>
                        <p className="text-xs text-gray-500 mt-1">{description}</p>
                    </div>

                    <button className="p-2 hover:bg-gray-100">
                        <img src="/cart.svg" alt="cart-icon" />
                    </button>
                </div>
            </div>
        </div>
    )
}

export default ProductCard