interface AccountMenuProps {
  visible?: boolean;
}
const AccountMenu = ({ visible }: AccountMenuProps) => {
  if (!visible) {
    return <></>;
  }
  return (
    <div className="absolute top-8 right-0 w-56 bg-black border-2 border-gray-400 mt-4">
      <div className="flex flex-col">
        <div className="flex flex-row gap-4 px-3 h-12 border-b-2 border-gray-400 group">
          <div className="flex items-center justify-center">
            <img
              src="/images/default-blue.png"
              alt="profile-icon"
              className="w-7 h-7 rounded-md"
            />
          </div>

          <p className="text-white text-sm hover:underline flex items-center h-12 group-hover:underline">
            Username
          </p>
        </div>
        <div className="text-center p-3 flex text-white items-center justify-center text-sm hover:underline">
          Sign Out
        </div>
      </div>
    </div>
  );
};
export default AccountMenu;
