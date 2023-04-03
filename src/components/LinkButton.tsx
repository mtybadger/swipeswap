import { ReactNode } from "react";
import { useNavigate } from "react-router-dom";

export default function LinkButton({target, children}:{target: string, children: ReactNode}) {
  const navigate = useNavigate();

  return (
      <button className='bg-blue-500 hover:bg-blue-600 text-white px-2 py-1 mt-4 rounded-md'
        onClick={
            () => navigate(target)
        }
      >
        {children}
      </button>
  );
};

