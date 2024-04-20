"use client";

import { Menu } from "lucide-react";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

import { useMobileSidebar } from "../../../../../hooks/use-mobile-sidebar";
import { Button } from "@/components/ui/button";
import { Sheet ,SheetContent } from "@/components/ui/sheet";
import { Sidebar } from "./sidebar";

export const MobileSidebar = () => {
  const pathName = usePathname();
  const [isMounted, setIsMounted] = useState(false);

  const onOpen = useMobileSidebar((state) => state.onOpen);
  const onClose = useMobileSidebar((state) => state.onOpen);
  const isOpen = useMobileSidebar((state) => state.onOpen);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    onClose();
  }, [pathName, onclose]);
  if (!isMounted) return null;
  return (
    <>
      <Button onClick={onOpen}
      className="block md:hidden"
      variant='ghost'
      size='sm'>
        <Menu className="h-4 w-4"/>
      </Button>
      <Sheet>
        <SheetContent>
            <Sidebar />
        </SheetContent>
      </Sheet>
    </>
  );
};
