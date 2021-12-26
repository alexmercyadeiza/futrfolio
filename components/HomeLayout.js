import Head from "next/head";
import Logo from "../assets/logo";
import Welcome from "../components/welcome";

export default function HomeLayout({ children }) {
    return (
        <div>
            <Head>
                <title>FutrFolio</title>
            </Head>
            <div className="bg-white min-h-screen">
                <div className="md:max-w-6xl px-10 md:px-0 mx-auto mt-10 mb-20 space-y-10">

                    <Logo />

                    <Welcome />

                    {children}
                </div>
            </div>
        </div>
    )
}