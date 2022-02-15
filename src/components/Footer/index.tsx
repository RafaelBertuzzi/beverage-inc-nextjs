import { FaInstagramSquare, FaFacebookSquare, FaTwitterSquare } from "react-icons/fa";

export function Footer() {
    return (
        <header className={"flex w-full absolute bottom-0 sm:-bottom-10 md:-bottom-10 lg:bottom-0 flex-row justify-end items-center px-20 py-5"}>
            <span className={"text-sm font-bold mr-5 uppercase"}>Follow us</span>
            <a href={"/"}><FaInstagramSquare className={"text-yellow-500 text-xl mr-2"} /></a>
            <a href={"/"}><FaFacebookSquare className={"text-yellow-500 text-xl mr-2"} /></a>
            <a href={"/"}><FaTwitterSquare className={"text-yellow-500 text-xl"} /></a>
        </header>
    );
}
