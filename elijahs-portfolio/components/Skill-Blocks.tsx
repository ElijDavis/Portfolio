type Props = {
  title?: string;
  link?: string;
};

export function Skill_block ({title, link}:Props){
  return (
    <div className="h-48 md:h-72 w-48 md:w-72 bg-gradient-to-br from-rose-600 to-amber-600 rounded-2xl md:rounded-3xl content-center select-none">
      <button>
        <p className="text-center text-lg md:text-3xl tracking-widest font-bold">{title}</p>
      </button>
    </div>
 );
}