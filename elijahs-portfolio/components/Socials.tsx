'use client';

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export function Socials () {
  const [drop, SetDrop] = useState(false);
  return(
    <div className="p-1 absolute right-10 z-50 flex flex-row justify-between select-none rounded-2xl cursor-pointer border-3 bg-gradient-to-r from-purphaze to-DS2MidPink transition-all duration-200 ease-in-out" onClick={() => SetDrop(!drop)}>
      {drop ? (
        <div className="flex flex-row gap-x-5 justify-between content-center rounded-2xl bg-black" >
          <IconCircle icon="/icons/Github1.png" link="https://github.com/ElijDavis" />
          <IconCircle icon="/icons/LinkedIn.png" link="https://www.linkedin.com/in/elijah-davis-7823ny/" />
          <IconCircle icon="/icons/youtube.png" link="https://www.youtube.com/channel/UCa4X17rOT6q3kohFtT33jzg?sub_confirmation=1" />
          <IconCircle icon="/icons/twitch.png" link="https://www.twitch.tv/elijahdevdavis" />
          <IconCircle icon="/icons/tiktok.png" link="https://www.tiktok.com/@elijahdavisdev" />
          <IconCircle icon="/icons/Outlook.png" link="elijahadavis1@outlook.com" />
          <div className="pr-2 order-first bg-purphaze hover:bg-gradient-to-r from-purphaze to-DS2MidPink rounded-lg content-center">
            <Image src="/icons/arrow.png" alt="arrow" width={40} height={40} className="pl-3 content-center" />
          </div>
        </div>
      ) : (
        <div className="pl-5 pr-5 pb-2 pt-2 z-50 flex flex-row justify-between gap-x-5 select-none rounded-2xl cursor-pointer bg-gradient-to-r from-purphaze to-DS2MidPink p-4">
          <h1 className="text-center rounded-full content-center text-2xl font-[Oranienbaum] tracking-widest cursor-pointer" >
            Socials
          </h1>
        </div>
      )}
    </div>
  );
}

type IconCircleProps = {
  icon: string;
  link: string;
};

const IconCircle = ({ icon, link}: IconCircleProps) => (
  <div className="mt-1 w-12 h-12 rounded-full ">
    <Link href={link}>
      <Image src={icon} alt="media" width={40} height={40} className="" />
    </Link>
  </div>
);