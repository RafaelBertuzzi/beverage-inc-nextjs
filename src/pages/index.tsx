import {PageLayout} from "../components/PageLayout";

export default function Home() {
    return (
        <>
            <PageLayout title={"Home"}>
                <>
                    <span className={"lg:text-2xl md:text-xl sm:text-lg md:mt-32 sm:mt-64 uppercase md:ml-20 sm:ml-5 text-yellow-500 mb-5"}>Living is <br/> a sensory <br/>experience</span>
                    <span className={"lg:text-6xl md:text-5xl sm:text-2xl uppercase mb-5 font-bold"}>This is living</span>
                    <p className={"text-sm md:ml-20 sm:ml-0 mb-5 leading-relaxed"}>
                        Born in Mexico and brought up on the beach, Corona is the perfect compliment to life's simple pleasures.
                        The golden colour, light refreshing flavor and iconic hand painted bottle, topped off with a freshly squeezed lime.
                        When the living is easy, the beer is Corona.
                    </p>
                </>
            </PageLayout>
        </>
    )
}
