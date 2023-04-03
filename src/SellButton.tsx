import { useSignInWithGoogle, useAuthState} from 'react-firebase-hooks/auth';
import { auth } from './firebase';

import { useNavigate } from "react-router-dom";

function SellButton() {

  const [signInWithGoogle] = useSignInWithGoogle(auth);
  const [user] = useAuthState(auth);
  const navigate = useNavigate()

  function signIn(){
    //TODO: check if this is the user's first sign in
    signInWithGoogle().then(() => navigate('setup/'))
  }

  return (
    <button onClick={() => user ? navigate('sell/') : signIn} className="bg-green-500 font-bold hover:bg-blue-600 text-white px-2 py-1 mt-4 rounded-md">Sell</button>
  )
}

export default SellButton
