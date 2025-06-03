import react from "react";

export function Header (){
    return (
        <div className="flex-row items-stretch bg-gradient-to-br from-emerald-500 to-sky-500 rounded-b-lg">
            <button className="bg-black rounded-md flex-1">Contact</button>
            <button className="bg-black rounded-md flex-1">experience</button>
            <h1 className="color-black flex-none text-center text-black">Portfolio</h1>
        </div>
    );
}