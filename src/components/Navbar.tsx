function Navbar() {
  return (
    <div className="w-full h-16 bg-black flex items-center">
      <p className="text-stone-200 font-robotoCondensed cursor-pointer ml-7 mr-4">
        About
      </p>
      <p className="text-stone-200 font-robotoCondensed cursor-pointer mr-4">
        Contact
      </p>
      <p className="text-stone-200 font-robotoCondensed cursor-pointer mr-4">
        Services
      </p>
    </div>
  );
}

export default Navbar;
