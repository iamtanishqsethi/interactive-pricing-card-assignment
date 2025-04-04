'use client';
import {useState} from "react";

export default function Home() {

    interface Tier{
        pageViews:number,
        price:number,

    }
    const tiers: Tier[] = [
        { pageViews: 10000, price: 8.00 },
        { pageViews: 50000, price: 12.00 },
        { pageViews: 100000, price: 16.00 },
        { pageViews: 500000, price: 24.00 },
        { pageViews: 1000000, price: 36.00 },
    ];

    const [tierIndex, setTierIndex] = useState<number>(0);
    const [isYearly, setIsYearly] = useState<boolean>(false);

    const currentTier=tiers[tierIndex];

    const pagesViewsString=`${(currentTier.pageViews/1000).toFixed(0)}K PAGEVIEWS`

    const price=isYearly ? currentTier.price*0.75*12 : currentTier.price;


    return (
    <div className={'flex flex-col items-center justify-center min-h-screen bg-white relative z-10'}>

        <div className={'absolute top-0 w-screen left-0 right-0 -z-10'}>
            <img
                className={'w-full'}
                src="https://i.ibb.co/Wvd63Ybp/image.png" alt="image"
                                                   />
        </div>
        <header
            className={'text-center mb-8 bg-[url(https://i.ibb.co/S7mMFpth/img.png)] h-40 bg-center bg-no-repeat flex flex-col items-center justify-center'}>
            <h1
                className="text-3xl font-bold text-gray-800"
            >Simple, traffic-based pricing
            </h1>
            <p className="text-gray-500 mt-2">
                Sign-up for our 30-day trial. No credit card required.
            </p>
        </header>
        <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md flex flex-col items-center justify-center ">

            <div className={'flex flex-col md:flex-row items-center justify-between md:items-center w-full'}>
                <h1 className="text-gray-500 uppercase tracking-wide text-sm">
                    {pagesViewsString}
                </h1>
                <h1 className="flex items-center">
                    <span className={'text-4xl font-bold text-[#1D2E67]'}> {`$${price}`}</span><span className={'text-gray-500 font-medium'}> / {isYearly? 'year':'month'}</span>
                </h1>
            </div>


            <input type="range"
                min={0}
                   max={tiers.length-1}
                   step={1}
                   value={tierIndex}
                   onChange={(e)=>setTierIndex(Number(e.target.value))}
                   className={'w-full mt-6 border-0 cursor-pointer rounded-md accent-cyan-500 bg-white'}
            />
            <div className={'flex items-center justify-center'}>
                <h1>Monthly Billing</h1>
                <label className={'inline-flex relative items-center justify-center cursor-pointer'}>
                    <input type="checkbox"
                    className={'sr-only'}
                    checked={isYearly}
                     onChange={(e)=>setIsYearly(e.target.checked)}

                    />
                    <div className={`w-13 h-7 rounded-full transition-all duration-200 ease-in-out ${isYearly? 'bg-blue-600':'bg-gray-200'} flex items-center`}>
                        <div className={`bg-white w-5 h-5 rounded-full shadow  transform transition-transform duration-200 ease-in-out ${isYearly?'translate-x-7':'translate-x-1'} flex items-center justify-center`}>
                        </div>
                    </div>
                </label>
                <div className={'flex items-center justify-center'}>
                    <h1>Yearly Billing</h1>
                    <h2>25% Discount</h2>
                </div>


            </div>
            <div className={'w-full h-0.5 bg-gray-200'}>

            </div>
            <div className={'flex flex-col md:flex-row items-center justify-between w-full'}>
                <div>
                    <ul>
                        <li>Unlimited websites</li>
                        <li>100% data ownership</li>
                        <li>Email reports</li>
                    </ul>
                </div>
                <button className={'bg-indigo-950 text-white px-6 py-2 rounded-full'}>
                    Start my trial
                </button>
            </div>


        </div>
    </div>

  );
}
