import { useSignOut } from 'react-firebase-hooks/auth';
import { auth } from './firebase';
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
      <button className='bg-blue-500 hover:bg-blue-600 text-white px-2 py-1 mt-4 rounded-md'
        onClick={async () => {
          const success = await signOut();
          if (success) {
            navigate('/')
          }
        }}
      >
        Sign out
      </button>
  );
};

export default SignOut