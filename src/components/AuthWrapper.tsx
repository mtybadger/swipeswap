import { auth, db } from '../firebase';
import { useAuthState } from 'react-firebase-hooks/auth';
import { collection, getDocs, limit, query, where} from 'firebase/firestore';
import { useEffect, useState, createContext, ReactNode } from 'react';
import { User } from '../functions/User';

export const UserContext = createContext<User | undefined >(new User);

export default function AuthWrapper({children}:{children:ReactNode}) {

  const [user, loading, error] = useAuthState(auth);
  const [data, setData] = useState<User>()

  useEffect(() => {
    if(user){
      const q = query(collection(db, "users"), where("uid", "==", user?.uid), limit(1));
      getDocs(q).then((querySnapshot) => {
        if(!querySnapshot.empty){
          querySnapshot.forEach((doc) => {
            // doc.data() is never undefined for query doc snapshots
            setData(doc.data() as User)
          });
        } else {
          setData(undefined)
        }
      })
    } else {
      setData(undefined)
    }
  }), [user]


    return (
        <UserContext.Provider value={data}>
        <div>{children}</div>
        </UserContext.Provider>
    )
}