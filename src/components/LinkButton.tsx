import { ReactNode } from "react";
import { useNavigate } from "react-router-dom";

export default function LinkButton({target, children}:{target: string, children: ReactNode}) {
  const navigate = useNavigate();

  return (
      <button className='mt-2 px-4 py-1 bg-zinc-100 border-2 border-b-[5px] border-zinc-900 rounded-lg text-zinc-900 font-medium text-2xl'
        onClick={
            () => navigate(target)
        }
      >
        {children}
      </button>
  );
};

