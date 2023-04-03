import { ReactNode, useContext } from "react"
import { Icon } from '@iconify/react';
import SellButton from "./SellButton"
import { UserContext } from "./AuthWrapper";
import { useNavigate } from "react-router-dom";
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { auth, db } from "../firebase";
import { query, collection, where, limit, getDocs } from "firebase/firestore";

interface LayoutProps {
    children: ReactNode
    type: string
}

export default function LayoutWrapper( { children, type} : LayoutProps ) {

    const currentUser = useContext(UserContext)
    const navigate = useNavigate()
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);

    function signIn(){
        console.log(currentUser)
        if(currentUser){
            //User is signed in, job done
            navigate('/sell')
        } else {
            //User is signing in
            signInWithGoogle().then((nuser) => {

                if(nuser){
                    const q = query(collection(db, "users"), where("uid", "==", nuser?.user.uid), limit(1));
                    getDocs(q).then((querySnapshot) => {
                      if(!querySnapshot.empty){
                        querySnapshot.forEach((doc) => {
                          // Current user
                          navigate('/sell')
                        });
                      } else {
                        // New user
                        navigate('/setup')
                      }
                    })
                  }
            })
        }
    }

    return (
        <div className="w-full px-4 my-4">
            <div className="flex flex-row justify-between items-center w-full">
            <Icon height={36} color="#18181B" icon="carbon:help" />
            {type == 'buyer' ? <span> <p>{currentUser?.firstName}</p> <SellButton signIn={signIn} /></span> : <div>buy button</div>}
            
            </div>
            <div>
                {children}
            </div>
            {type == 'seller' && <div className="my-4 text-center underline">Sign Out</div>}
            <div className="my-4 text-center">made at 3am by ppl</div>
        </div>
    )
}