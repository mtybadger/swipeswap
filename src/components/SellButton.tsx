import { useSignInWithGoogle, useAuthState} from 'react-firebase-hooks/auth';
import { auth } from '../firebase';

import { useNavigate } from "react-router-dom";

function SellButton() {

  const [signInWithGoogle] = useSignInWithGoogle(auth);
  const [user] = useAuthState(auth);
  const navigate = useNavigate()

  return (
    <button
      onClick={() => user ? navigate('sell/') : signInWithGoogle().then(() => navigate('sell/'))}
      className="mt-2 px-4 py-1 bg-zinc-100 border-2 border-b-[5px] border-zinc-900 rounded-lg text-zinc-900 font-medium text-2xl"
    >
      Sell
    </button>
  )
}

export default SellButton
