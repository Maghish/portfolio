export default function TechStackTag({ name }: { name: string }) {
  return (
    <div
      className="w-auto h-auto rounded-lg px-1.5 py-1 bg-white text-black font-inter-bold text-sm cursor-pointer
      transition-transform duration-75 ease-linear hover:scale-110 hover:shadow-tech-stack-tag-shadow
    "
    >
      {name}
    </div>
  );
}
