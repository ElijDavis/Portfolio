type Props = {
    title?: string;
};

export function Skill_block ({title}:Props){
    return (
        <div className="h-64 w-64 bg-gradient-to-br from-rose-600 to-amber-600 rounded-2xl">
            <p>{title}</p>
        </div>
    );
}