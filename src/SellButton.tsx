import { auth } from './firebase';
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";

import { useNavigate } from "react-router-dom";

function SellButton() {

  const provider = new GoogleAuthProvider();
  const navigate = useNavigate();
  
  function signin(){
    signInWithPopup(auth, provider)
    .then((result) => {
      // This gives you a Google Access Token. You can use it to access the Google API.
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      // The signed-in user info.
      const user = result.user;
      // IdP data available using getAdditionalUserInfo(result)
      // ...
      navigate("/sell");
    }).catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      const email = error.customData.email;
      // The AuthCredential type that was used.
      const credential = GoogleAuthProvider.credentialFromError(error);
      // ...
    });
  }
  
  return (
    <button onClick={signin} className="bg-green-500 font-bold hover:bg-blue-600 text-white px-2 py-1 mt-4 rounded-md">Sell</button>
  )
}

export default SellButton
