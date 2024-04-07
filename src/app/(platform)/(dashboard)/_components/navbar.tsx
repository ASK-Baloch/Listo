import { Logo } from "@/components/logo";

export const Navbar =()=>{
    return(
        <div className="fixed z-50 top-0 w-full h-14 border-b shadow-sm bg-white flex items-center">
            {/* TODO: MOBILE SIDEBAR */}
            <div className="flex items-centerg gap-x-4 ">
                <div className="hidden md:flex">
                    <Logo />
                </div>
            </div>
            
        </div>
    )
}

export default Navbar;