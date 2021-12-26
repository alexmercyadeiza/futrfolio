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


