import { auth, db } from '../firebase';
import { useAuthState } from 'react-firebase-hooks/auth';
import SignOut from '../components/SignOutButton';
import { collection, getDocs, limit, query, where} from 'firebase/firestore';
import { useEffect, useState, createContext } from 'react';
import { User } from '../functions/User';

function SellerDashboard() {
  
  const [user, loading, error] = useAuthState(auth);
  const [data, setData] = useState<User>()

  useEffect(() => {
    if(user){
      const q = query(collection(db, "users"), where("uid", "==", user?.uid), limit(1));
      getDocs(q).then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          // doc.data() is never undefined for query doc snapshots
          setData(doc.data() as User)
        });
      })
    }
  }), [user]
  

  return (
    <div>
      <div className="grid h-screen place-items-center">
        <div>
          <h1 className='text-3xl font-serif italic'>You're signed in as {data ? data.firstName : ''}</h1>
          <SignOut></SignOut>
        </div>
      </div>
    </div>
  )
}

export default SellerDashboard
