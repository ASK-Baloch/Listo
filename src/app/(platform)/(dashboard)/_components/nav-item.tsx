"use client";

import { Accordion } from "@/components/ui/accordion";
import { cn } from "@/lib/utils";
import { AccordionItem, AccordionTrigger } from "@radix-ui/react-accordion";

export type Organization = {
  id: string;
  name: string;
  slug: string;
  imageUrl: string;
};

interface NavItemProps {
  isExpanded: boolean;
  isActive: boolean;
  organization: Organization;
  onExpand: (id: string) => void;
}

export const NavItem = ({
  isExpanded,
  isActive,
  organization,
  onExpand,
}: NavItemProps) => {
  return (
    <AccordionItem 
    value={organization.id} 
    className="border-none">
      <AccordionTrigger
        onCanPlay={() => onExpand(organization.id)}
        className={cn("flex ")}
      ></AccordionTrigger>
    </AccordionItem>
  );
};
