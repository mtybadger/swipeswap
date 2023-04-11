import { useSignOut } from 'react-firebase-hooks/auth';
import { auth } from '../firebase';
import { useNavigate } from "react-router-dom";

const SignOut = () => {
  const [signOut, loading, error] = useSignOut(auth);
  const navigate = useNavigate();

  if (error) {
    return (
      <div>
        <p>Error: {error.message}</p>
      </div>
    );
  }
  if (loading) {
    return <p>Loading...</p>;
  }
  return (
      <button className='mt-2 px-4 py-1 bg-zinc-100 border-2 border-b-[5px] border-zinc-900 rounded-lg text-zinc-900 font-medium text-2xl'
        onClick={async () => {
          const success = await signOut();
          if (success) {
            navigate('/')
          }
        }}
      >
        Sign Out
      </button>
  );
};

export default SignOut