import { ReactNode } from "react"
import { Icon } from '@iconify/react';
import SellButton from "./SellButton"

interface LayoutProps {
    children: ReactNode
    type: string
}

export default function LayoutWrapper( { children, type} : LayoutProps ) {
    return (
        <div className="w-full px-4 my-4">
            <div className="flex flex-row justify-between items-center w-full">
            <Icon height={36} color="#18181B" icon="carbon:help" />
            {type == 'buyer' ? <SellButton /> : <div>buy button</div>}
            
            </div>
            <div>
                {children}
            </div>
            {type == 'seller' && <div className="my-4 text-center underline">Sign Out</div>}
            <div className="my-4 text-center">made at 3am by ppl</div>
        </div>
    )
}