import { auth } from './firebase';
import { useAuthState } from 'react-firebase-hooks/auth';
import SignOut from './SignOutButton';

function SellerDashboard() {
  
  const [user, loading, error] = useAuthState(auth);

  return (
    <div>
      <div className="grid h-screen place-items-center">
        <div>
          <h1 className='text-3xl font-serif italic'>You're signed in as {user?.uid}</h1>
          <SignOut></SignOut>
        </div>
      </div>
    </div>
  )
}

export default SellerDashboard
