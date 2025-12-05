import { ROUTES } from "../../config/constants";

export default function Header() {
  return (
    <div className="w-full">
      <ul className="flex flex-row items-center max-w-full justify-evenly dark:text-white text-black my-5">
        <li>
          <a href={ROUTES.HOME}>Home</a>
        </li>
        <li>
          <a href={ROUTES.EXPERIMENTS}>Experiments</a>
        </li>
        <li>
          <a href={ROUTES.BLOG}>Blog</a>
        </li>
        <li className="hover:bg-transparent hover:cursor-pointer">
          <a href={ROUTES.ABOUT_ME}>About Me</a>
        </li>
      </ul>
    </div>
  );
}
