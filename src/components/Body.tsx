import CommandBox from "./CommandBox";

function Body() {
  const handleEnterPressed = (value: string) => {
    console.log(value);
  };

  return (
    <div className="absolute w-full h-full top-0 bottom-0 pt-14 p-4 pb-6">
      <div>
        <CommandBox onEnterPressed={handleEnterPressed} />
      </div>
    </div>
  );
}

export default Body;
