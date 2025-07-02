import Image from "next/image";

export function Header (){
    return (
        <div className="h-60 bg-gradient-to-br from-emerald-500 to-sky-500 rounded-b-[3rem]">
            <div className="pt-5 grid-row">
                <button className="h-8 w-24 ml-5 float-left bg-black rounded-full">
                    <div className="font-bold bg-clip-text text-transparent bg-gradient-to-br from-sky-500 to-emerald-500">Contact</div>
                </button>
                <button className="h-8 w-32 mr-5 float-right bg-black rounded-full">
                    <div className="font-bold bg-clip-text text-transparent bg-gradient-to-br from-sky-500 to-emerald-500">Experience</div>
                </button>
            </div>
            <h1 className="relative top-[120] color-black flex-none text-8xl text-center font-bold text-black">Portfolio</h1>
        </div>
    );
}

export function Summary (){
    return (
        <div className="relative mx-auto md:w-3/5 mt-12 md:mt-24 border-2 md:border-4 rounded-full flex gap-x-10">
            <Image 
                className="h-44 w-44 content-center rounded-full bg-white"
                src="/headshot1.svg"
                alt="Picture of author"
                height={32}
                width={32}
            />
            <summary className="content-center mr-6 text-sm font-semibold md:font-bold bg-clip-text text-transparent bg-gradient-to-br from-sky-500 to-emerald-500">Hello! My name is Elijah ad this is my page for all things and skill that pertain to me. Not every page is complete because I am always builidng, creating and making. This is my portfolio for all of my projects. My youtube channel will be up shortly to display. . . actually I will create my own video library to demonstrate my computer skill further. Feel free to roam around and any questions can be added to the forrum.</summary>
        </div>
    );
}
//ml-5 h-44 w-44 content-center rounded-full bg-white