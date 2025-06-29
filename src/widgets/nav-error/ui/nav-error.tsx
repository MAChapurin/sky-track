import { PATHNAMES } from "@/shared/config";
import { Icon } from "@/shared/ui/icon";
import { Link, useNavigate } from "react-router-dom";

export const NavError = () => {
  const navigate = useNavigate();
  return (
    <nav className="grid grid-cols-2 gap-1">
      <Link
        className="flex items-center flex-col bg-primary dark:bg-primary-dark transition-colors gap-2 p-4 rounded-l-2xl text-xl"
        to={PATHNAMES.HOME}
      >
        <Icon name="home" className="w-8 h-8" /> Main
      </Link>
      <button
        className="flex items-center flex-col bg-primary dark:bg-primary-dark transition-colors gap-2 p-4 rounded-r-2xl text-xl"
        onClick={() => navigate(-1)}
      >
        <Icon name="back" className="w-8 h-8" /> Back
      </button>
    </nav>
  );
};
