import SignOut from '../components/SignOutButton';
import { useCollectionData } from 'react-firebase-hooks/firestore/'
import { UserContext } from '../components/AuthWrapper';
import { useContext, useEffect, useState } from 'react';
import { query, collection, where, Timestamp, and, or } from 'firebase/firestore';
import { db } from '../firebase';
import LinkButton from '../components/LinkButton';
import LayoutWrapper from '../components/LayoutWrapper';

function SellerDashboard() {
  
  const currentUser = useContext(UserContext)
  const [now, setNow] = useState(10000000000000)

  useEffect(() => {
    // Update the document title using the browser API
    setNow(Math.round(Date.now() / 1000))
  }, []);
  
  const [values, loading, error, snapshot] = useCollectionData(query(collection(db, "listings"), (where('uid', '==', currentUser ? currentUser?.uid : ''), where("expiry", ">", now))))

  return (
      <LayoutWrapper type={"seller"}>
        <div>
          <h1 className='text-3xl font-serif italic'>You're signed in as {currentUser?.firstName}</h1>
          <h1 className='text-3xl font-serif italic'>You're listing {JSON.stringify(values)}</h1>
          
          <LinkButton target='/list' >List</LinkButton>
        </div>
    </LayoutWrapper>
  )
}

export default SellerDashboard
