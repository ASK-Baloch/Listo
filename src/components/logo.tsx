import Image from "next/image";
import Link from "next/link";

import { cn } from "@/lib/utils";
import localFont from "next/font/local";


const headingFont = localFont({
    src: "../../public/fonts/font.woff2",
})
export const Logo = () => {
  return (
    <Link href="/">
      <div className={cn("hover:opacity-75 transition items-center gap-x-2 hidden md:flex", headingFont.className)}>
        <Image src="/logo.svg"
         alt="Listo logo"
          width={100}
           height={100} />
           {/* <p className="text-lg text-neutral-700 pb-1">Listo</p> */}
      </div>
    </Link>
  );
};
