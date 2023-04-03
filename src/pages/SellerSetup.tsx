import { useAuthState } from "react-firebase-hooks/auth"
import FormComponent from "../components/FormComponent"
import { useState } from "react"
import { auth, db } from "../firebase"
import { collection, doc, setDoc } from "firebase/firestore"; 
import { useNavigate } from "react-router-dom";
import { User } from "../functions/User";

function SellerSetup() {

  const navigate = useNavigate()

  const [firebaseUser] = useAuthState(auth);

  const [name, setName] = useState('')
  const [venmo, setVenmo] = useState('')
  const [quote, setQuote] = useState('')
  const [victoryQuote, setVictoryQuote] = useState('')
  const [errorMessage, setErrorMsg] = useState('')

  async function submit(){
    if([name, venmo, quote, victoryQuote].every((value) => value != '')){
      setErrorMsg('')
      const user: User = { uid: firebaseUser!.uid, firstName: name.split(' ')[0], lastName: name.split(' ').slice(1).join(' '), venmo: venmo, quote: quote, victoryQuote: victoryQuote}
      console.log(user)
      try {
        const docRef = await setDoc(doc(db, 'users', user.uid), user);
        console.log("Document written with ID: ", user.uid);
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
        <h1>Account setup</h1>
        <FormComponent val={name} setVal={setName} placeholder="Name"></FormComponent>
        <FormComponent val={venmo} setVal={setVenmo} placeholder="Venmo link"></FormComponent>
        <FormComponent val={quote} setVal={setQuote} placeholder="Quote"></FormComponent>
        <FormComponent val={victoryQuote} setVal={setVictoryQuote} placeholder="Quote"></FormComponent>
        <a>Get Discord Bot</a>
        <p>{errorMessage}</p>
        <button onClick={submit}>Done</button>
    </div>
  )
}

export default SellerSetup
