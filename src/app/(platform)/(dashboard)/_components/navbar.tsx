import { Logo } from "@/components/logo";
import { Button } from "@/components/ui/button";
import { OrganizationSwitcher } from "@clerk/nextjs";
import { Plus } from "lucide-react";

export const Navbar = () => {
  return (
    <nav className="fixed z-50 top-0 px-4 w-full h-14 border-b shadow-sm bg-white flex items-center">
      {/* TODO: MOBILE SIDEBAR */}
      <div className="flex items-center gap-x-4 ">
        <div className="hidden md:flex">
          <Logo />
        </div>
        <Button
          size="sm"
          className="rounded-sm hidden md:block h-auto py-1.5 mb-2 px-2"
        >
          Create
        </Button>
        <Button size='sm' className="rounded-sm block md:hidden">
            <Plus className="w-4 h-4" />
        </Button>
      </div>
      <div className="ml-auto flex items-center gap-x-2">
        <OrganizationSwitcher />
      </div>
    </nav>
  );
};

export default Navbar;
