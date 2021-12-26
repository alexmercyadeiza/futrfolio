import HomeLayout from '../components/HomeLayout';
import Nfts from './nft/index';

export default function Home({ nfts }) {
  return (
    <HomeLayout>
      <Nfts nfts={nfts} />
    </HomeLayout>
  )
}

//why must i send in the data here na!

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