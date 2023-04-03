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
    primaryBorder: string
    primaryDark: string
}
  

export default function DiningHallCard( {name, icon, numSwipes, listings, colors} : DiningHallCardProps ) {
    return (
        <div className={`border-2 border-b-4 ${colors.primaryBorder} rounded-lg p-4 mb-4`}>
            <div className="text-3xl font-medium text-zinc-900">{name}</div>
            <div className="text-md text-zinc-500">{numSwipes} swipes for sale</div>
        </div>
    )
}