import Image from "next/image";
import {Header, Summary} from "./components/Portfolio-Head";

export default function Home() {
  return (
    <div>
      <Header />
      <Summary />
    </div>
  );
}
