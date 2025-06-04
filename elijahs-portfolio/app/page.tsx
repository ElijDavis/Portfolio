import Image from "next/image";
import {Header, Summary} from "./components/Portfolio-Head";
import { Skill_block } from "./components/Skill-Blocks";

export default function Home() {
  return (
    <div>
      <Header />
      <Summary />
      <div className="flex flex-row justify-center gap-x-32 mt-24">
        <Skill_block title={"Photography"}/>
        <Skill_block title={"Data Structures and Algorithms"}/>
        <Skill_block title={"Fashion Design"}/>
      </div>
    </div>
  );
}
