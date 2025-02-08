import { LogOut } from "lucide-react";

const Header = () => {
  return (
    <div className="flex items-center justify-between px-20 pt-10">
      <h1 className="text-2xl font-semibold">
        Hii <br /> <span className="text-4xl font-bold">Lokendra 👋</span>
      </h1>

      <button className="group bg-transparent transition-all duration-300">
        <LogOut
          size={20}
          className="transition-transform duration-300 group-hover:translate-x-1 text-red-700"
        />
      </button>
    </div>
  );
};

export default Header;
