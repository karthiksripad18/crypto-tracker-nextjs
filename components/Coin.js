import Link from 'next/link';
import Image from 'next/image';

function Coin({name, price, symbol, marketcap, volume, image, priceChange, id}) {
    return (
        <div className="group hover-effect rounded border-4 border-white container p-2 m-2 cursor-pointer flex justify-evenly items-center">
            <div>
                <Image 
                layout="fixed"
                height={100}
                width={100}
                src={image} 
                />
            </div>
            <div className="font-bold">
                <p>{name} ({symbol.toUpperCase()})</p>
                <p className="text-2xl">Rs. {price}</p>
                {
                    priceChange > 0? (
                        <p className="text-green-500 opacity-0 group-hover:opacity-100">{priceChange.toFixed(2)}%</p>
                    ): (
                        <p className="text-red-500 opacity-0 group-hover:opacity-100">{priceChange.toFixed(2)}%</p>
                    )
                }
            </div>
        </div>
    )
}

export default Coin;
