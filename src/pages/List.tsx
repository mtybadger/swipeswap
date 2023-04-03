import { useAuthState } from "react-firebase-hooks/auth"
import FormComponent from "../components/FormComponent"
import { useContext, useEffect, useState } from "react"
import { auth, db } from "../firebase"
import { collection, addDoc, Timestamp } from "firebase/firestore"; 
import { User } from "../functions/User";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../components/AuthWrapper";


export interface Listing {
  uid: string,
  nickname: string,
  location: string,
  swipes: number,
  price: number,
  expiry: number,
}

function List() {

  const navigate = useNavigate()

  const [swipes, setSwipes] = useState('')
  const [price, setPrice] = useState('')
  const [location, setLocation] = useState('')
  const [time, setTime] = useState('')

  const currentUser = useContext(UserContext)

  const [errorMessage, setErrorMsg] = useState('')
  async function submit(){
    if([swipes, price, location, time].every((value) => value != '')){
      setErrorMsg('')

      const [hours, minutes] = time.split(':');
      const date = new Date();
      date.setHours(Number(hours));
      date.setMinutes(Number(minutes));
      date.setSeconds(0);
      date.setMilliseconds(0);

      const timestamp = Timestamp.fromDate(date);
      let nickname = currentUser!.firstName
      if(currentUser?.lastName){
        nickname = currentUser!.firstName + ' ' + currentUser?.lastName.charAt(0) + '.'
      }

      const listing: Listing = { uid: currentUser!.uid, nickname: nickname, location: location, swipes: swipes as any, price: price as any, expiry: timestamp.seconds}
      console.log(listing)
      try {
        const docRef = await addDoc(collection(db, 'listings'), listing);
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
