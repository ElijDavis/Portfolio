'use client';

import Link from "next/link";
import { useState } from "react";

export function Tool () {
  const [drop, SetDrop] = useState(false);
  return(
    <div className="sticky top-0 z-50 ml-5 mt-5 w-32 h-32 flex flex-row justify-between select-none rounded-3xl cursor-pointer bg-gradient-to-br from-emerald-600 to-sky-600 p-4 text-white" onClick={() => SetDrop(!drop)}>
      {drop ? (
        <div className="content-center" >
          <h1>Forum</h1>
          <h1><Link href='https://recordion-two.vercel.app/sign-in'>Recordion</Link></h1>
        </div>
      ) : (
        <h1 className="text-center content-center text-2xl font-bold tracking-widest cursor-pointer" >
          Tools
        </h1>
      )}
    </div>
  );
}