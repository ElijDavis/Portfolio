'use client';

import {Header} from "../components/Header";
import { Skill_block } from "../components/Skill-Blocks";
import { Tool } from "../components/Tool_Bar";
import Link from "next/link";
import NavBar from "../components/NavBar";


export default function Home() {
  return (
    <div className="grid conten-center">
      <NavBar/>
      <Header/>
      {/*<div className="flex flex-row justify-center gap-x-20 md:gap-x-32 mt-12 md:mt-24">
        <Skill_block title={"Photography"}/>
        <div className="bg-transparent-80 ">
          <Link href="/Algorithms"><Skill_block title={"Data Structures and Algorithms"}/></Link>
        </div>
        <Skill_block title={"Fashion Design"}/>
      </div>*/}
    </div>
  );
}
