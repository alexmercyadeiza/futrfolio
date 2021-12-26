import Head from 'next/head'
import Image from 'next/image'
import Nfts from './components/Nfts';
import Welcome from './components/Welcome'


export default function Home({ nfts }) {
  return (
    <div>
      <Head>
        <title>FutrFolio</title>
      </Head>
      <div className="bg-white min-h-screen">
        <div className="max-w-6xl mx-auto mt-10 mb-20">

          <Welcome />

          <div className="grid grid-cols-5 gap-8">
            {nfts.orders.map(nft =>
              <Nfts key={nft.asset.id} nft_image={nft.asset.image_url} name={nft.asset.asset_contract.name} currency={nft.payment_token_contract.symbol} currency_image={nft.payment_token_contract.image_url} amount={nft.base_price} />
            )}
          </div>

        </div>
      </div>
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
  }
}
