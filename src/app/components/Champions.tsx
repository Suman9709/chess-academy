import { ChampionCard } from "./ChampionCard";

export const Champions = () => {
    const champions = [
        {
            name: "Champion 1",
            image:
                "https://img.daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.webp",
            description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        },
        {
            name: "Champion 2",
            image:
                "https://img.daisyui.com/images/stock/photo-1565098772267-60af42b81ef2.webp",
            description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        },
        {
            name: "Champion 3",
            image:
                "https://img.daisyui.com/images/stock/photo-1572635148818-ef6fd45eb394.webp",
            description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        },
        {
            name: "Champion 4",
            image:
                "https://img.daisyui.com/images/stock/photo-1494253109108-2e30c049369b.webp",
            description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        },
        {
            name: "Champion 5",
            image:
                "https://img.daisyui.com/images/stock/photo-1550258987-190a2d41a8ba.webp",
            description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        },
    ];

    return (
        <section id="champions" className="py-16 px-4 bg-white">
            <div className="container mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold text-center text-black mb-2">
                    Our Champions
                </h2>
                <div className="mb-4 md:mb-6 flex justify-center items-center">
                    <img src="/Vector.svg" alt="vector" className="w-24 md:w-32 h-auto" />
                </div>

                <div className="carousel w-full space-x-6 rounded-box p-4">
                    {champions.map((champion, index) => (
                        <div key={index} className="carousel-item">
                            <ChampionCard {...champion} />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};