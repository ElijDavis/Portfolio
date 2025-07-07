'use client';

import {Header} from "../components/Header";
//import { Skill_block } from "../components/Skill-Blocks";
//import { Tool } from "../components/Tool_Bar";
//import Link from "next/link";
import NavBar from "../components/NavBar";


export default function Home() {
  return (
    <div className="flex flex-col justify-center">
      <NavBar/>
      <Header/>
    </div>
  );
}
