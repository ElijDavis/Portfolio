import Image from "next/image";
import {Header} from "./components/Portfolio-Head";

export default function Home() {
  console.log("welcome");
  return (
    <div>
      <Header />
      <h1>Welcome</h1>
    </div>
  );
}
