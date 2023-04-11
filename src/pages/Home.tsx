import { useEffect, useState } from "react"
import DiningHallCard from "../components/DiningCard"
import LayoutWrapper from "../components/LayoutWrapper"
import RangeSlider from "../components/RangeSlider"
import { query, collection, where } from 'firebase/firestore';
import { db } from '../firebase';
import { useCollectionDataOnce } from "react-firebase-hooks/firestore"
import { Listing } from "../functions/Listing";

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

    const [now, setNow] = useState(10000000000000)

  useEffect(() => {
    // Update the document title using the browser API
    setNow(Math.round(Date.now() / 1000))
  }, []);

const [maseehData, loading, error, snapshot] = useCollectionDataOnce(query(collection(db, "listings"), (where('location', '==', "Maseeh"), where("expiry", ">", now))))


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
                listings={maseehData as Listing[]}
                colors={{primaryBackground: 'bg-[#5182FF]', primaryBorder: 'border-[#5182FF]', primaryDarkBorder: 'border-[#2B66FF]'}}
            />
        </div>
    </LayoutWrapper>
  )
}

export default Home
