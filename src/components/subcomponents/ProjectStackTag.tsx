export default function ProjectStackTag({ tag }: { tag: string }) {
  return (
    <div className="px-[10px] py-[4px] rounded-lg bg-white font-inter-extrabold text-black text-xs cursor-pointer transition-transform delay-0 duration-300 ease-out transform hover:scale-105">
      {tag}
    </div>
  );
}
