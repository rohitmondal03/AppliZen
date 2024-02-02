"use client"

import { useMemo, useState } from "react"
import classNames from "classnames"

import { editProfile } from "~/actions/edit-profile"
import EditProfileButton from "~/components/buttons/edit-profile-button"
import InputMockup from "./input-mockup"


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

      <EditProfileButton isSubmitButtonDisabled={isSubmitButtonDisabled} />
    </form>
  )
}