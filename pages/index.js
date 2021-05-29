import Head from 'next/head';

export default function Home({filteredCoins}) {
  return (
    <Layout>
      <div className="flex flex-col items-center mt-3 text-color-white">
        
      </div>
    </Layout>
  )
};

export async function getServerSideProps() {
  const res = await fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false');
  const filteredCoins = await res.json();
  return {
    props: {
      filteredCoins
    }
  }
}
