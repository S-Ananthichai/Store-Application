import React from "react";
import { Button } from "@nextui-org/react";
import Image from "next/image";
import googleLogo from "../../Icon/Google-logo.png";

export default function MyNavbar() {
  return (
    <div className="flex justify-between items-center bg-white h-11 px-4">
      <h1 className="text-red-600 font-bold underline text-xl">Cloth!</h1>
      <Button className="bg-gray-200 text-black font-bold flex items-center rounded-lg p-2 text-xs">
        Sign in with
        <Image
          src={googleLogo}
          alt="Google logo"
          width={18}
          height={18}
          className="ml-2"
        />
      </Button>
    </div>
  );
}
