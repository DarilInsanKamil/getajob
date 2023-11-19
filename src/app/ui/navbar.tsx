import { Button } from "./button";
import NavLinks from "./nav-links";

export default function NavigationBar() {
  return (
    <nav className="py-2 px-8 shadow-sm shadow-slate-200 flex justify-between items-center fixed w-full bg-white top-0 z-10">
        <div className="font-bold text-2xl">
            <h3>getajob</h3>
        </div>
      <ul className="flex gap-10">
        <NavLinks />
      </ul>
      <Button children="Login" />
    </nav>
  );
}
