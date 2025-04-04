'use client';
import { useState, useEffect } from "react";

export default function Home() {
    interface Tier {
        pageViews: number,
        price: number,
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
    const [darkMode, setDarkMode] = useState<boolean>(false);

    useEffect(() => {
        if (typeof window !== 'undefined') {
            const isDark = window.matchMedia('(prefers-color-scheme: dark)').matches
            setDarkMode(isDark)
        }
    }, [])


    const toggleDarkMode = () => {
        setDarkMode(!darkMode)
    };

    const currentTier = tiers[tierIndex]
    const pagesViewsString = `${(currentTier.pageViews/1000).toFixed(0)}K PAGEVIEWS`
    const price=isYearly?currentTier.price*0.75*12:currentTier.price

    return (
        <div className={`flex flex-col items-center justify-center h-screen ${darkMode ? 'bg-gradient-to-br from-zinc-800 via-zinc-900 to-zinc-950' : 'bg-white'} relative z-10 font-manrope space-y-8 transition-colors duration-300 overflow-hidden`}>
            <div className={'absolute top-0 w-[290%] md:w-screen left-0 right-0 -z-10'}>
                <img
                    className={`w-full ${darkMode ? 'opacity-15' : ''} transition-opacity duration-300`}
                    src="https://i.ibb.co/Wvd63Ybp/image.png" alt="image"
                />
            </div>
            <header
                className={'text-center bg-[url(https://i.ibb.co/S7mMFpth/img.png)] h-40 bg-center bg-no-repeat flex flex-col items-center justify-center'}>
                <div className="absolute top-4 right-4 md:top-8 md:right-8">
                    <button
                        onClick={toggleDarkMode}
                        className={`p-2 rounded-full ${darkMode ? 'bg-zinc-600 text-white' : 'bg-gray-200 text-zinc-700'} cursor-pointer duration-200 transition-all ease-in-out focus:outline-none focus:shadow-outline`}
                    >
                        {darkMode ? '☀️' : '🌙'}
                    </button>
                </div>
                <h1
                    className={`text-3xl font-bold ${darkMode ? 'text-white' : 'text-[#293356]'} m-2 transition-colors duration-300`}
                >Simple, traffic-based pricing
                </h1>
                <p className={`${darkMode ? 'text-gray-300' : 'text-[#858fad]'} transition-colors duration-300`}>
                    Sign-up for our 30-day trial. No credit card required.
                </p>
            </header>
            <div className={`${darkMode ? 'bg-zinc-800' : 'bg-white'} rounded-lg shadow-xl w-full max-w-md flex flex-col items-center justify-center transition-colors duration-300`}>
                <div className={'p-8 w-full flex flex-col items-center justify-between space-y-10'}>
                    <div className={'flex flex-col md:flex-row items-center justify-between md:items-center w-full text-[#858fad] tracking-wider'}>
                        <h1 className={`uppercase text-sm font-bold ${darkMode ? 'text-gray-300' : ''}`}>
                            {pagesViewsString}
                        </h1>
                        <h1 className="md:flex items-center hidden">
                            <span className={`text-4xl font-bold ${darkMode ? 'text-white' : 'text-[#293356]'} transition-colors duration-300`}> {`$${price}`}</span>
                            <span className={`font-medium ${darkMode ? 'text-gray-300' : ''}`}> / {isYearly? 'year':'month'}</span>
                        </h1>
                    </div>
                    <input type="range"
                           min={0}
                           max={tiers.length-1}
                           step={1}
                           value={tierIndex}
                           onChange={(e)=>setTierIndex(Number(e.target.value))}
                           className={'custom-range'}
                    />
                    <h1 className="md:hidden items-center flex">
                        <span className={`text-4xl font-bold ${darkMode ? 'text-white' : 'text-[#293356]'} transition-colors duration-300`}> {`$${price}`}</span>
                        <span className={`font-medium ${darkMode ? 'text-gray-300' : 'text-[#858fad]'} transition-colors duration-300`}> / {isYearly? 'year':'month'}</span>
                    </h1>
                    <div className={`flex items-center justify-center text-sm ${darkMode ? 'text-gray-300' : 'text-[#858fad]'} font-medium w-full transition-colors duration-300`}>
                        <h1
                            className={'w-[39%] text-right pr-3 text-sm'}
                        >Monthly Billing</h1>
                        <label className={'inline-flex relative items-center justify-center cursor-pointer w-[15%]'}>
                            <input type="checkbox"
                                   className={'sr-only'}
                                   checked={isYearly}
                                   onChange={(e)=>setIsYearly(e.target.checked)}
                            />
                            <div className={`w-13 h-7 rounded-full transition-all duration-200 ease-in-out ${isYearly? 'bg-[#10d5c2]':'bg-[#cdd7ee]'} flex items-center`}>
                                <div className={`bg-white w-5 h-5 rounded-full shadow transform transition-transform duration-200 ease-in-out ${isYearly?'translate-x-7':'translate-x-1'} flex items-center justify-center`}>
                                </div>
                            </div>
                        </label>
                        <h1 className={'w-[45%] text-center text-sm'}>Yearly Billing <span className={'text-[10px] p-1 px-1.5 rounded-full text-[#ff8c66] bg-[#feece7]'}><span className={'inline md:hidden'}>-</span>25% <span className={'hidden md:inline'}>Discount</span></span></h1>
                    </div>
                </div>

                <div className={`w-full h-0.5 ${darkMode ? 'bg-gray-700' : 'bg-gray-200'} transition-colors duration-300`}></div>

                <div className={'p-8 w-full'}>
                    <div className={'flex flex-col md:flex-row items-center justify-between w-full'}>
                        <div className={'flex flex-col text-sm text-[#858fad] space-y-2'}>
                            <div className={'w-full flex items-center space-x-2'}>
                                <img
                                    src="https://i.ibb.co/k2SgSw8N/image.png"
                                    alt="image"
                                />
                                <h1 className={`${darkMode ? 'text-gray-300' : ''} transition-colors duration-300`}>Unlimited websites</h1>
                            </div>
                            <div className={'w-full flex items-center space-x-2'}>
                                <img src="https://i.ibb.co/k2SgSw8N/image.png" alt="image"/>
                                <h1 className={`${darkMode ? 'text-gray-300' : ''} transition-colors duration-300`}>100% data ownership</h1>
                            </div>
                            <div className={'w-full flex items-center space-x-2'}>
                                <img src="https://i.ibb.co/k2SgSw8N/image.png" alt="image"/>
                                <h1 className={`${darkMode ? 'text-gray-300' : ''} transition-colors duration-300`}>Email reports</h1>
                            </div>
                        </div>
                        <button className={`${darkMode ? 'bg-[#10d5c2] text-gray-900' : 'bg-[#293356] text-[#eaeefb]'} px-10 py-3 rounded-full text-sm transition-colors duration-300 cursor-pointer`}>
                            Start my trial
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}