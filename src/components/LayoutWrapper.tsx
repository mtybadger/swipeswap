import { ReactNode, useContext } from "react"
import { Icon } from '@iconify/react';
import SellButton from "./SellButton"
import { UserContext } from "./AuthWrapper";
import { useNavigate } from "react-router-dom";
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { auth, db } from "../firebase";
import { getDoc, doc } from "firebase/firestore";

interface LayoutProps {
    children: ReactNode
    type: string
}

export default function LayoutWrapper( { children, type} : LayoutProps ) {

    const currentUser = useContext(UserContext)
    const navigate = useNavigate()
    const [signInWithGoogle] = useSignInWithGoogle(auth);

    function signIn(target: Function){
        console.log(currentUser)
        if(currentUser){
            //User is signed in, job done
            target()
        } else {
            //User is signing in
            signInWithGoogle().then((nuser) => {
                if(nuser){
                    getDoc(doc(db, 'users', nuser.user.uid)).then((docSnapshot) => {
                        if(docSnapshot.exists()){
                            // Current user
                            target()
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
            {type == 'buyer' ? <span> <p>{currentUser?.firstName}</p> <SellButton signIn={() => signIn(() => navigate('/sell'))} /></span> : <div>buy button</div>}
            
            </div>
            <div>
                {children}
            </div>
            {type == 'seller' && currentUser && <div className="my-4 text-center underline">Sign Out</div>}
            <div className="my-4 text-center">made at 3am by ppl</div>
        </div>
    )
}