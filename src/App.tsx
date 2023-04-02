import { useState } from 'react'
import maseeh from '/maseeh.jpg'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <div className="grid h-screen place-items-center">
        <div>
          {/* Images so you can see how they're done <img src={maseeh} className="-mt-[121px]" />*/}
          <h1 className='text-3xl font-serif italic'>coming soon...</h1>
        </div>
      </div>
    </div>
  )
}

export default App
