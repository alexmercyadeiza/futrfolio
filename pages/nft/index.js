import Child from "./child"

export default function Nfts({ nfts }) {
    return (
        <div className="grid md:grid-cols-5 gap-8">
            {nfts.orders.map(nft =>
                <Child key={nft.asset.id} nft_image={nft.asset.image_url} name={nft.asset.asset_contract.name} currency={nft.payment_token_contract.symbol} currency_image={nft.payment_token_contract.image_url} amount={nft.base_price} />
            )}
        </div>
    )
}

const options = {
    method: 'GET',
    headers: { Accept: 'application/json', 'X-API-KEY': process.env.NEXT_PUBLIC_OPENSEA_KEY }
};

export async function getStaticProps() {
    const res = await fetch('https://api.opensea.io/wyvern/v1/orders?bundled=false&include_bundled=false&limit=20&offset=10&order_by=created_date&order_direction=desc', options);

    const nfts = await res.json()

    return {
        props: {
            nfts,
        },

        revalidate: 10,
    }
}