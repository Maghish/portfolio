interface TagProps {
  text: string;
}

export default function Tag({ text }: TagProps) {
  return (
    <button className="bg-[#FFFFFF] bg-opacity-[24%] backdrop-blur-lg opacity-75 rounded-3xl px-[10px] sm:px-[20px] py-[5px] text-primaryColor font-inter font-bold text-xs lg:text-sm transition-all delay-75 duration-200 ease-linear hover:bg-opacity-50 hover:text-barBackground hover:text-opacity-70">
      {text}
    </button>
  );
}
