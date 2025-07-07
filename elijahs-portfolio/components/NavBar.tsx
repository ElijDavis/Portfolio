import Link from "next/link";

const NavBar = () => {
    return (
        <div className="w-1/4 mt-10 flex flex-row items-center gap-x-5 justify-self-center">
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
        <div className="pl-5 pr-5 pb-2 hover:pt-2 border-b-4 hover:border-4 border-purphaze rounded-lg hover:rounded-2xl transition-all duration-200">
            <h2>{title}</h2>
        </div>
    )
}

export default NavBar