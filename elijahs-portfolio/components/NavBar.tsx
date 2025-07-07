import Link from "next/link";

const NavBar = () => {
    return (
        <div className=" mt-10 flex items-center md:gap-x-10 gap-x-5 justify-center">
            <Link href="/"><NavComponent title="Home"/></Link>
            <Link href="/Experience"><NavComponent title="Experience"/></Link>
            <Link href="/Projects"><NavComponent title="Projects"/></Link>
        </div>
    )
}

type NavComponentProps = {
    title: string;
};

const NavComponent = ({ title }: NavComponentProps) => {
    return (
        <div className="pl-5 pr-5 pb-2 pt-2 border-b-4 border-t-4 border-t-transparent border-r-transparent border-l-transparent hover:border-4 border-purphaze hover:border-purphaze rounded-lg hover:rounded-2xl transition-all duration-200 ease-in-out">
            <h2>{title}</h2>
        </div>
    )
}

export default NavBar;