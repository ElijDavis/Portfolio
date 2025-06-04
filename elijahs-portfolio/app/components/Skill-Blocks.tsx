type Props = {
    title?: string;
};

export function Skill_block ({title}:Props){
    return (
        <div className="h-72 w-72 bg-gradient-to-br from-rose-600 to-amber-600 rounded-3xl content-center">
            <p className="text-center text-3xl tracking-widest font-bold">{title}</p>
        </div>
    );
}