"use client"

import { useAuth } from "~/hooks/use-auth";
import SignOutButton from "~/components/buttons/sign-out-button";
import Image from "next/image";


export default function HomePage() {
  const { isAuthenticated } = useAuth();

  return (
    <section>
      <Image
        loading={"lazy"}
        placeholder="blur"
        src={"/assets/images/home_img.svg"}
        blurDataURL={"/assets/images/home_img.svg"}
        alt=""
        height={200}
        width={300}
      />
      <Image
        loading={"lazy"}
        placeholder="blur"
        src={"/assets/images/applications_img.svg"}
        blurDataURL="/assets/images/applications_img.svg"
        alt=""
        height={200}
        width={300}
      />

      {isAuthenticated === "authenticated" && (
        <SignOutButton />
      )}
    </section>
  );
}
