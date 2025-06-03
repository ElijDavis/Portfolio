import react from "react";

export function Header (){
    return (
        <div className=" items-stretch bg-gradient-to-br from-emerald-500 to-sky-500 flex-row rounded-b-lg">
            <button className="bg-black rounded-md flex-1 py-50">Contact</button>
            <button className="bg-black rounded-md flex-1">experience</button>
            <h1 className="color-black flex-none">Portfolio</h1>
        </div>
    );
}