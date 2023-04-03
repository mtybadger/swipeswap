import DiningHallCard from "../components/DiningCard"

function Home() {
  return (
    <div className="mx-4">
        <div>Range: $X - $X</div>
        <div>price bar</div>
        <DiningHallCard
            name={"Maseeh D"}
            icon={""}
            numSwipes={27}
            listings={[]}
            colors={{primaryBorder: 'border-[#5182FF]', primaryDark: 'border-[2B66FF]'}}
        />
        <DiningHallCard
            name={"New Vassar"}
            icon={""}
            numSwipes={14}
            listings={[]}
            colors={{primaryBorder: 'border-[#FF7B1C]', primaryDark: 'border-[#DE6914]'}}
        />
    </div>
  )
}

export default Home
