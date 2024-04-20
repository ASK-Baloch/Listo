"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";

import { useMobileSidebar } from "../../../../../hooks/use-mobile-sidebar";


export const MobileSidebar = () => {
const pathName= usePathname();
    const [isMounted,setIsMounted]=useState(false)
    const onOpen=useMobileSidebar((state)=>state.onOpen)
    const onClose=useMobileSidebar((state)=>state.onOpen)
    const isOpen=useMobileSidebar((state)=>state.onOpen)
    return(
        <div>
            SIdebar
        </div>
    )
}