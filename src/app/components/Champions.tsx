import { ChampionCard } from "./ChampionCard";

export const Champions = () => {
    const champions = [
        {
            name: "Anish Aggarwala",
            image:
                "/champ1.jpeg",
            description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        },
        {
            name: "Tirtha Aggrawal",
            image:
                "/TirthaAgarwal.jpg",
            description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        },
        // {
        //     name: "Champion 3",
        //     image:
        //         "/champ1.jpeg",
        //     description:
        //         "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        // },
        // {
        //     name: "Champion 4",
        //     image:
        //         "/champ1.jpeg",
        //     description:
        //         "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        // },
        // {
        //     name: "Champion 5",
        //     image:
        //         "/champ1.jpeg",
        //     description:
        //         "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        // },
    ];

    return (
        <section id="champions" className="py-16 px-4 bg-white">
            <div className="container mx-auto">
                <div className="flex flex-col items-center justify-center text-center">
                    {/* Centered line fading out beautifully on both sides */}

                    <p className="text-black  font-semibold tracking-wider uppercase text-lg md:text-2xl mb-2">
                        Our Champions
                    </p>
                    <div className="w-44 h-0.5 bg-linear-to-r from-transparent via-[#E2874B] to-transparent mb-4" />
                </div>
                <p className="text-gray-600 text-center mb-8 max-w-2xl mx-auto">
                    The brilliant minds nurtured at Devang Academy who are making their mark in the world of professional chess.
                </p>


                <div className="carousel w-full space-x-6 rounded-box p-4 items-center justify-center">
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