interface MobileMenuProps {
  visible?: boolean;
}

const MobileMenu = ({ visible }: MobileMenuProps) => {
  if (!visible) {
    return <></>;
  }
  return (
    <div className="absolute w-56 top-8 left-0 border-2 border-gray-400 flex flex-col gap-4 py-4 bg-black">
      <div className="px-4 text-white text-center hover:underline">Home</div>
      <div className="px-4 text-white text-center hover:underline">Series</div>
      <div className="px-4 text-white text-center hover:underline">Films</div>
      <div className="px-4 text-white text-center hover:underline">
        New & Popular
      </div>
      <div className="px-4 text-white text-center hover:underline">My List</div>
      <div className="px-4 text-white text-center hover:underline">
        Browse By Language
      </div>
    </div>
  );
};
export default MobileMenu;
