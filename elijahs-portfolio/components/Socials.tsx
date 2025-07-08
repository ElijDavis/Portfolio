'use client';

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export function Socials () {
  const [drop, SetDrop] = useState(false);
  return(
    <div className="absolute right-10 pl-5 pr-5 pb-2 pt-2 z-50 flex flex-row justify-between select-none rounded-2xl cursor-pointer bg-gradient-to-r from-purphaze to-DS2MidPink p-4" onClick={() => SetDrop(!drop)}>
      {drop ? (
        <div className="grid grid-cols-6 gap-x-5 content-center" >
          <IconCircle icon="/icons/GitHub.png" link="https://github.com/ElijDavis" />
          <IconCircle icon="/icons/LinkedIn.png" link="https://www.linkedin.com/in/elijah-davis-7823ny/" />
          <IconCircle icon="/icons/youtube.png" link="https://www.youtube.com/channel/UCa4X17rOT6q3kohFtT33jzg" />
          <IconCircle icon="/icons/twitch.png" link="https://www.twitch.tv/elijahdavisdev" />
          <IconCircle icon="/icons/tiktok.png" link="https://www.tiktok.com/@elijahdavisdev" />
          <IconCircle icon="/icons/Outlook.png" link="elijahadavis1@outlook.com" />
        </div>
      ) : (
        <h1 className="text-center rounded-full content-center text-2xl font-[Oranienbaum] tracking-widest cursor-pointer" >
          Socials
        </h1>
      )}
    </div>
  );
}

type IconCircleProps = {
  icon: string;
  link: string;
};

const IconCircle = ({ icon, link }: IconCircleProps) => {
  return (
    <div className="w-12 h-12 rounded-full bg-white">
      <Link href={link}><Image src={icon} alt="media" width={40} height={40} className="" /></Link>
    </div>
  );
};