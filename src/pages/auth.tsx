/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import { signIn, signOut, useSession } from "next-auth/client";
import Image from "next/image";

const auth: React.VFC = () => {
  console.log(process.env.NEXT_PUBLIC_NEXTAUTH_URL);
  console.log(process.env.NEXT_PUBLIC_FOO);

  const [session, loading] = useSession();
  return (
    <>
      {console.log(session)}
      {!session && (
        <>
          {loading ? (
            <>Loading ...</>
          ) : (
            <>
              Not signed in <br />
              <button onClick={() => signIn()}>Sign in</button>
            </>
          )}
        </>
      )}
      {session && (
        <>
          {console.log(session)}
          <div className="flex items-center">
            <div className=" rounded-full">
              <Image
                src={session.user.image ?? ""}
                width="50px"
                height="50px"
              />
            </div>
            {session.user.name}
          </div>
          <button onClick={() => signOut()}>Sign out</button>
        </>
      )}
    </>
  );
};

export default auth;
