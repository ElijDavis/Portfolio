import Image from "next/image";
import {Header, Summary} from "./components/Portfolio-Head";
import { Skill_block } from "./components/Skill-Blocks";

export default function Home() {
  return (
    <div>
      <Header />
      <Summary />
      <div className="grid-cols-3 justify-center mt-20">
        <Skill_block />
        <Skill_block />
      </div>
    </div>
  );
}
