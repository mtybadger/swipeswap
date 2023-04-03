import { useAuthState } from "react-firebase-hooks/auth"
import FormComponent from "../components/FormComponent"
import { useEffect, useState } from "react"
import { auth, db } from "../firebase"
import { collection, addDoc, Timestamp } from "firebase/firestore"; 
import { useNavigate } from "react-router-dom";

export enum DiningHall {
  Maseeh = "Maseeh",
  NewVassar = "New Vassar"
}

export interface Listing {
  uid: string,
  nickname: string,
  swipes: number,
  price: number,
  timestamp: Timestamp,
}

function List() {

  const navigate = useNavigate()

  const [swipes, setSwipes] = useState('')
  const [price, setPrice] = useState('')
  const [location, setLocation] = useState('')
  const [time, setTime] = useState('')
  const [timestamp, setTimestamp] = useState<Timestamp>()

  useEffect(() => {
    const [hours, minutes] = time.split(':');

    const date = new Date();
    date.setHours(Number(hours));
    date.setMinutes(Number(minutes));
    date.setSeconds(0);
    date.setMilliseconds(0);

    const timestamp = Timestamp.fromDate(date);
    setTimestamp(timestamp)
  }, [time])

  const [firebaseUser] = useAuthState(auth);
  const [errorMessage, setErrorMsg] = useState('')
  async function submit(){
    if([swipes, price, location, timestamp].every((value) => value != null)){
      setErrorMsg('')
      const user: User = { uid: firebaseUser!.uid, firstName: name.split(' ')[0], lastName: name.split(' ').slice(1).join(' '), venmo: venmo, quote: quote, victoryQuote: victoryQuote}
      console.log(user)
      try {
        const docRef = await addDoc(collection(db, "users"), user);
        console.log("Document written with ID: ", docRef.id);
        navigate('/sell')
      } catch (e) {
        setErrorMsg("Error adding document: " + e);
      }
    } else {
      setErrorMsg('One or more fields are empty. Please try again.')
    }
  }

  return (
    <div>
        <h1>New Listing</h1>
        <FormComponent val={swipes} setVal={setSwipes} placeholder="Number of swipes"></FormComponent>
        <FormComponent val={price} setVal={setPrice} placeholder="Pricing"></FormComponent>
        <FormComponent val={location} setVal={setLocation} placeholder="Where"></FormComponent>
        <input type="time" value={time} onChange={e => setTime(e.target.value)} className="form-control job-field" id="starttime" name="starttimeadd" placeholder="Job Start Time" required></input>
        <p>You MUST be at {location} before listing</p>
        <p>{errorMessage}</p>
        <button onClick={submit}>Done</button>
    </div>
  )
}

export default List
