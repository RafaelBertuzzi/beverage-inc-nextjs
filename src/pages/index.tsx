import {PageLayout} from "../components/PageLayout";

export default function Home() {
    return (
        <>
            <PageLayout title={"Home"}>
                <>
                    <span className={"text-2xl uppercase ml-20 text-yellow-500 mb-5"}>Living is <br/> a sensory <br/>experience</span>
                    <span className={"text-6xl uppercase mb-5 font-bold"}>This is living</span>
                    <p className={"text-sm ml-20 mb-5 leading-relaxed"}>
                        Born in Mexico and brought up on the beach, Corona is the perfect compliment to life's simple pleasures.
                        The golden colour, light refreshing flavor and iconic hand painted bottle, topped off with a freshly squeezed lime.
                        When the living is easy, the beer is Corona.
                    </p>
                </>
            </PageLayout>
        </>
    )
}
