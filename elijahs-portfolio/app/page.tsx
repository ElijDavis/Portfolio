'use client';

import {Header, Summary} from "../components/Portfolio-Head";
import { Skill_block } from "../components/Skill-Blocks";
import { Tool } from "../components/Tool_Bar";
import Link from "next/link";


export default function Home() {
  return (
    <div>
      <Header />
      <Tool />
      <Summary />
      <div className="flex flex-row justify-center gap-x-20 md:gap-x-32 mt-12 md:mt-24">
        <Skill_block title={"Photography"}/>
        <Link href="/Algorithms"><Skill_block title={"Data Structures and Algorithms"}/></Link>
        <Skill_block title={"Fashion Design"}/>
      </div>
    </div>
  );
}
