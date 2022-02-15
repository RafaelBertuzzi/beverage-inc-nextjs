import Head from "next/head";
import {ReactNode} from "react";

interface IPageProps {
    title: string;
    children: ReactNode;
}

export function PageLayout({title, children}: IPageProps) {
    return (
        <>
            <Head>
                <title>{title} | Beverage Inc.</title>
            </Head>
            <div className="grid sm:grid-cols-1 md:grid-cols-2 h-screen">
                <div className="sm:hidden md:grid border-r-2 border-gray-300 items-center" style={{
                    background: "url('images/beer-foam.png') no-repeat",
                    backgroundSize: "cover"
                }}>
                    <span className={"ml-20 md:ml-10 text-8xl uppercase font-bold text-blue-700 border-b-8"}>{title}</span>
                </div>
                <img
                    className={"sm:hidden md:block md: absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"}
                    src="images/corona-bottle.png"
                    alt={"corona beer bottle"}
                />
                <div className="bg-gradient-to-r from-blue-600 to-blue-700 grid items-center">
                    <div className={"grid ml-32 mr-20"}>
                        {children}
                    </div>
                </div>
            </div>
        </>
    )
}
