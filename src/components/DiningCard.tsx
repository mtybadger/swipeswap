import { Icon } from '@iconify/react';

interface DiningHallCardProps {
    name: string
    icon: string
    numSwipes: number
    listings: Array<Listing>
    colors: ColorTheme
}

interface Listing {
    name: string
    price: number
    numSwipes: number
}

interface ColorTheme {
    primaryBackground: string
    primaryBorder: string
    primaryDarkBorder: string
}
  

export default function DiningHallCard( {name, icon, numSwipes, listings, colors} : DiningHallCardProps ) {
    return (
        <div className={`w-full border-2 border-b-8 ${colors.primaryBorder} rounded-lg rounded-b-xl p-4 mb-4`}>
            <div className="flex flex-row items-center">
                <Icon className="mr-4" height={56} icon={icon} />
                <div>
                    <div className="text-3xl font-medium text-zinc-900">{name}</div>
                    <div className="text-md text-zinc-500">{numSwipes} swipes for sale</div>
                </div>
            </div>
            <div className="mt-4">
                {
                    listings.map(listing => (
                        <div className="flex flex-row items-center mb-3">
                            <div className="flex justify-center items-center mr-2 rounded-full bg-zinc-200 h-6 w-6">
                                <div className="text-sm font-medium text-zinc-700">{listing.name[0]}</div>
                            </div>
                            <div className="text-md font-medium text-zinc-700">{listing.name}</div>
                            <div className="text-md text-zinc-500 px-2">∗</div>
                            <div className="text-md text-zinc-500">{listing.price}</div>
                            <div className="text-md text-zinc-500 px-2">∗</div>
                            <div className="text-md text-zinc-500">{listing.numSwipes} swipes</div>
                        </div>
                    ))
                }
                <div className="flex flex-row items-start justify-between">
                    <div className="text-md text-zinc-500 font-medium">and X more...</div>
                    <button className={`mt-2 px-6 py-2 ${colors.primaryBackground} border-b-[5px] ${colors.primaryDarkBorder} rounded-lg text-white font-semibold text-xl`}>Let's Go</button>
                </div>
            </div>
        </div>
    )
}