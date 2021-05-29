import Coin from './Coin';

function CoinList({filteredCoins}) {
    return (
        <div className="m-5 sm:grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {
                filteredCoins.map(
                    coin => (
                        <Coin
                            key={coin.id}
                            name={coin.name}
                            id={coin.id}
                            price={coin.current_price}
                            symbol={coin.symbol}
                            marketcap={coin.total_volume}
                            volume={coin.market_cap}
                            image={coin.image}
                            priceChange={coin.price_change_percentage_24h}
                        />
                    )
                )
            }
        </div>
    )
}

export default CoinList;
