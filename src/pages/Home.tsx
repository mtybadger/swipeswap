import { useState } from "react"
import DiningHallCard from "../components/DiningCard"
import LayoutWrapper from "../components/LayoutWrapper"
import RangeSlider from "../components/RangeSlider"

const fakeListings = [
    {
        name: "Julie S",
        price: 5.50,
        numSwipes: 5
    },
    {
        name: "Spruce C",
        price: 6.25,
        numSwipes: 7
    }
]

function Home() {

    const [price, setPrice] = useState(12.50)

  return (
    <LayoutWrapper type={"buyer"}>
        <div className="w-full flex flex-col items-start mt-20">
            <div className="text-zinc-900 text-2xl font-medium">Range: $0 - ${price}</div>
            <div className="w-full self-center mt-1 mb-4">
                <RangeSlider min={0} max={15} value={price} setValue={setPrice}/>
            </div>
            <DiningHallCard
                name={"Maseeh D"}
                icon={"noto:castle"}
                numSwipes={27}
                listings={fakeListings}
                colors={{primaryBackground: 'bg-[#5182FF]', primaryBorder: 'border-[#5182FF]', primaryDarkBorder: 'border-[#2B66FF]'}}
            />
            <DiningHallCard
                name={"New Vassar"}
                icon={"emojione-v1:houses"}
                numSwipes={14}
                listings={fakeListings}
                colors={{primaryBackground: 'bg-[#FF7B1C]', primaryBorder: 'border-[#FF7B1C]', primaryDarkBorder: 'border-[#DE6914]'}}
            />
        </div>
    </LayoutWrapper>
  )
}

export default Home
