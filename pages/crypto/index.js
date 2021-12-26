import Child from "./child";
import HomeLayout from "../../components/HomeLayout";

export default function CryptoParent({ cryptos }) {
    return (
        <HomeLayout>
            <div className="border rounded-xl">
                {cryptos.map(function (crypto) {
                    const { id, name, symbol, logo_url, price } = crypto;
                    return (
                        <Child
                            key={id}
                            name={name}
                            symbol={symbol}
                            logo={logo_url}
                            price={price}

                            oneDay={crypto['1d'].price_change_pct}
                            sevenDay={crypto['7d'].price_change_pct}
                            thirtyDay={crypto['30d'].price_change_pct}
                            oneYear={crypto['365d'].price_change_pct}
                            border={(cryptos.indexOf(crypto) + 1) === cryptos.length ? '' : 'border-b'}
                        />
                    )
                })}
            </div>
        </HomeLayout>
    )
}

export async function getStaticProps() {

    const res = await fetch(`https://api.nomics.com/v1/currencies/ticker?key=${process.env.NEXT_PUBLIC_NOMICS_KEY}&ids=BTC,ETH,BNB,USDT,ADA,SOL,XRP,DOT,DOGE,USDC,LUNA,UNI,SHIB,AVAX,LINK,WBTC,BUSD,LTC,BCH,ALGO&interval=1d,7d,30d,365d&convert=USD&per-page=100&page=1`);

    const cryptos = await res.json()

    return {
        props: {
            cryptos,
        },

        revalidate: 10,
    }
}
