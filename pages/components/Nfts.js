import Image from "next/image"

export default function Nfts({ name, currency_image, currency, amount, nft_image }) {

    const defaultImage = 'https://images.pexels.com/photos/5702943/pexels-photo-5702943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940';

    return (
        <div>
            <Image className="object-center rounded-xl object-cover mb-5" width={200} height={200} src={nft_image ? nft_image : defaultImage} />
            <div>
                <div className="font-bold">{name}</div>
                <div className="text-xs space-x-1">
                    <Image src={currency_image} width={10} height={10} />
                    <span className="font-bold">
                        {`${(amount / 1000000000000000000).toFixed(2)}`}
                    </span>
                </div>
            </div>
        </div>
    )
}

