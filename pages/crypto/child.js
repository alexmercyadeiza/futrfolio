import Image from "next/image";
import Link from "next/link";

var formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
});

export default function CrytoChild({ name, logo, price, symbol, oneDay, sevenDay, thirtyDay, oneYear, border }) {

    const styles = `px-2 grid grid-cols-6 ${border}`;

    return (
        <div className={styles}>
            <div className="flex space-x-3 pl-4 items-center col-span-2 text-black">
                <Image height={28} width={28}
                    src={logo}
                />
                <div className="tracking-tight pt-1 capitalize font-bold hidden md:block">{name}</div>
                <div className="tracking-tight pt-1 md:font-light font-bold">{symbol}</div>
            </div>

            <div className="font-medium self-center text-xl pl-10 text-black">
                {formatter.format(price)}
            </div>

            <div className="col-span-3 grid grid-cols-5 invisible md:visible">
                <div className="grid place-items-center py-3 px-5">
                    <div className="uppercase text-xs tracking-widest rounded px-1 border text-gray-400">
                        1d
                    </div>
                    <div className={oneDay < 0 ? 'text-red-600' : 'text-green-600'}> {oneDay > 0 ? '+' : ''}{(oneDay * 100).toFixed(2)} </div>
                </div>

                <div className="grid place-items-center py-2">
                    <div className="uppercase text-xs tracking-widest rounded px-1 border text-gray-400">
                        7d
                    </div>
                    <div className={sevenDay < 0 ? 'text-red-600' : 'text-green-600'}> {sevenDay > 0 ? '+' : ''}{(sevenDay * 100).toFixed(2)} </div>
                </div>

                <div className="grid place-items-center py-2">
                    <div className="uppercase text-xs tracking-widest rounded px-1 border text-gray-400">
                        30d
                    </div>
                    <div className={thirtyDay < 0 ? 'text-red-600' : 'text-green-600'}> {thirtyDay > 0 ? '+' : ''}{(thirtyDay * 100).toFixed(2)} </div>
                </div>

                <div className="grid place-items-center py-2">
                    <div className="uppercase text-xs tracking-widest rounded px-1 border text-gray-400">
                        1y
                    </div>
                    <div className={oneYear < 0 ? 'text-red-600' : 'text-green-600'}> {oneYear > 0 ? '+' : ''}{(oneYear * 100).toFixed(2)} </div>
                </div>

                <div className="grid place-items-center py-2">
                    <Link href={`/transact/${symbol}`}><button className="btn btn-primary btn-sm">Buy</button></Link>
                </div>
            </div>
        </div>
    )
}