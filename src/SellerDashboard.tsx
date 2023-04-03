import { auth } from './firebase';
import { useAuthState } from 'react-firebase-hooks/auth';

function SellerDashboard() {
  
  
  return (
    <div>
      <div className="grid h-screen place-items-center">
        <div>
          <h1 className='text-3xl font-serif italic'>You're signed in as user</h1>
        </div>
      </div>
    </div>
  )
}

export default SellerDashboard
