
import { XCircleIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface FormErrorsProps {
  id: string;
  errors?: Record<string, string[] | undefined>;
}

export const FormErrors = ({ id, errors }: FormErrorsProps) => {
    if(!errors) return null
    return(
        <div id={`${id}-error`} aria-live="polite" className="mt-2 text-sm text-rose-600">
            
        </div>
    )
}