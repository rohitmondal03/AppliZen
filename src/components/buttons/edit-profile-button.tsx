"use client"

import { useFormStatus } from 'react-dom';

import { Button } from '../ui/button'


type TProps = {
  isSubmitButtonDisabled: boolean;
}


export default function EditProfileButton(
  { isSubmitButtonDisabled }: TProps
) {
  const { pending } = useFormStatus();

  return (
    <Button
      type="submit"
      variant={isSubmitButtonDisabled || pending ? "destructive" : "default"}
      disabled={isSubmitButtonDisabled || pending}
      className="font-bold"
    >
      {pending ? "Saving..." : "Save Changes"}
    </Button>
  )
}
