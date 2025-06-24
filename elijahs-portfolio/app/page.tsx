'use client';

import Image from "next/image";
import {Header, Summary} from "../components/Portfolio-Head";
import { Skill_block } from "../components/Skill-Blocks";
import { Tool } from "../components/Tool_Bar";
import { NavLink, Route, Routes } from "react-router-dom";
import AlgorithmsPage from "./Algorithms/page";


export default function Home() {
  return (
    <div>
      <Header />
      <Tool />
      <Summary />
      <div className="flex flex-row justify-center gap-x-20 md:gap-x-32 mt-12 md:mt-24">
        <Skill_block title={"Photography"}/>
        <NavLink to="/algorithms"><Skill_block title={"Data Structures and Algorithms"} link={"/Algorithms/page"}/></NavLink> 
        <Skill_block title={"Fashion Design"}/>
      </div>
      <Routes>
        <Route path="/algroithms" element={<AlgorithmsPage />} />
      </Routes>
    </div>
  );
}
