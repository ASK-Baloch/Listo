"use client";

import { createBoard } from "../../../../../../actions/create-board";
import { FormInput } from "./form-input";
import { FormButton } from "./form-button";

export const Form = () => {
  return (
    <form action={dispatch}>
      <div className="flex flex-col space-y-2">
       <FormInput errors={state?.errors} />
      </div>
     <FormButton />
    </form>
  );
};
