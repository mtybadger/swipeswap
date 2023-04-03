import { useContext } from "react";
import { UserContext } from "./AuthWrapper";

export default function SellButton({signIn}:{signIn:Function}) {

  const currentUser = useContext(UserContext);

  return (
    <button
      onClick={() => signIn(currentUser)}
      className="mt-2 px-4 py-1 bg-zinc-100 border-2 border-b-[5px] border-zinc-900 rounded-lg text-zinc-900 font-medium text-2xl"
    >
      Sell
    </button>
  )
}
