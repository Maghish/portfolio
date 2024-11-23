interface TabProps {
  onClick: () => void;
  text: string;
}

export default function Tab({ onClick, text }: TabProps) {
  return (
    <button
      onClick={onClick}
      className="lg:transform lg:-rotate-90 w-36 lg:w-32 h-12 bg-primaryColor bg-opacity-20 hover:bg-opacity-70 font-inter font-bold text-white hover:text-black rounded-lg flex items-center justify-center"
    >
      {text}
    </button>
  );
}
