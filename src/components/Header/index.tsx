import Link from 'next/link'

export function Header() {
    return (
        <header className={"w-full flex flex-row justify-between items-center fixed px-10 py-5"}>
            <img className="object-cover h-20" src="/images/logo.svg" alt="corona logo" />
            <nav>
                <Link href={"/"}>
                    <a className={"text-md font-bold uppercase mr-10"}>Home</a>
                </Link>
                <Link href={"/join"}>
                    <a className={"text-md font-bold uppercase mr-10"}>Join Us</a>
                </Link>
                <Link href={"/"}>
                    <a className={"text-md font-bold uppercase mr-10"}>About</a>
                </Link>
                <Link href={"/"}>
                    <a className={"text-md font-bold uppercase mr-10"}>Contact</a>
                </Link>
            </nav>
        </header>
    );
}
