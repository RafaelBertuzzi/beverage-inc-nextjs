import Link from 'next/link'
import {useRouter} from "next/router";

export function Header() {
    const router = useRouter();

    return (
        <header className={"w-full flex flex-row justify-between items-center absolute px-10 py-5"}>
            <Link href={"/"}>
                <a>
                    <img className="object-cover h-20" src="/images/logo.svg" alt="corona logo" />
                </a>
            </Link>
            <nav>
                <Link href={"/"}>
                    <a className={(router.pathname == "/" ? "border-b-2 border-white" : "") + " text-md font-bold uppercase lg:mr-10 sm:mr-5"}>Home</a>
                </Link>
                <Link href={"/join"}>
                    <a className={(router.pathname == "/join" ? "border-b-2 border-white" : "") + " text-md font-bold uppercase lg:mr-10 sm:mr-5"}>Join Us</a>
                </Link>
                <Link href={"/"}>
                    <a className={"text-md font-bold uppercase lg:mr-10 sm:mr-5"}>About</a>
                </Link>
                <Link href={"/"}>
                    <a className={"text-md font-bold uppercase lg:mr-10 sm:mr-0"}>Contact</a>
                </Link>
            </nav>
        </header>
    );
}
