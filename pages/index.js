import Head from 'next/head';
import {useState} from 'react';
import CoinList from '../components/CoinList';

import Layout from '../components/Layout';
import SearchBar from '../components/SearchBar';

export default function Home({filteredCoins}) {
  const [search, setSearch] = useState('');
  const allCoins = filteredCoins.filter(coin => coin.name.toLowerCase().includes(search.toLowerCase()));
  const handleInputChange = (e) => {
    e.preventDefault();
    setSearch(e.target.value);
  }
  return (
    <Layout>
      <div className="flex flex-col items-center mt-3 text-white">
        <SearchBar search={search} handleInputChange={handleInputChange} />
        <CoinList filteredCoins={allCoins} />
      </div>
    </Layout>
  )
};

export async function getServerSideProps() {
  const res = await fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=inr&order=market_cap_desc&per_page=30&page=1&sparkline=false');
  const filteredCoins = await res.json();
  return {
    props: {
      filteredCoins
    }
  }
}
