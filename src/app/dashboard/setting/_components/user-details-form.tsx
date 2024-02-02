"use client"

import { useMemo, useState } from "react"
import classNames from "classnames"

import { editProfile } from "~/actions/edit-profile"
import EditProfileButton from "~/components/buttons/edit-profile-button"
import { Input } from "~/components/ui/input"
import { Label } from "~/components/ui/label"


type TProps = {
  name: string;
  email: string;
}


export default function UserDetailsForm(
  { name, email }: TProps
) {
  const [userName, setName] = useState<string>(name);
  const [userEmail, setEmail] = useState<string>(email);

  let oldName = name;
  let oldEmail = email;

  const isSubmitButtonDisabled = useMemo(() => {
    return (userName.trim() === oldName && userEmail.trim() === oldEmail) ||
      userName.length === 0 ||
      userEmail.length === 0;
  },
    [userName, userEmail]
  )

  return (
    <form
      action={() => editProfile({
        name: userName,
        email: userEmail
      })}
      className={classNames({
        "max-w-96": true,
        "space-y-6": true,
      })}
    >
      <InputMockup
        id="name"
        label={"Name"}
        setDetail={setName}
        value={userName}
      />

      <InputMockup
        id="email"
        label={"Email"}
        setDetail={setEmail}
        value={userEmail}
      />

      <EditProfileButton
        isSubmitButtonDisabled={isSubmitButtonDisabled}
      />
    </form>
  )
}


type TInputMockupParams = {
  id: string;
  label: string;
  value: string;
  setDetail: (val: string) => void;
}


function InputMockup(
  { id, label, value, setDetail }: TInputMockupParams
) {
  return (
    <div className="">
      <Label
        htmlFor={id}
        className="font-bold text-lg text-muted-foreground"
      >
        {label}
      </Label>
      <Input
        id={id}
        autoComplete="off"
        value={value}
        onChange={(e) => setDetail(e.target.value)}
      />
    </div>
  )
}