"use client";

import { useMobileSidebar } from "../../../../../hooks/use-mobile-sidebar";

export const MobileSidebar = () => {
    const onOpen=useMobileSidebar((state)=>state.onOpen)
    const onClose=useMobileSidebar((state)=>state.onOpen)
    const isOpen=useMobileSidebar((state)=>state.onOpen)
    return(
        <div>
            SIdebar
        </div>
    )
}