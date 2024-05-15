import { NavLink } from 'react-router-dom';
import { NavLinkData } from '../../@types/appTypes';

type Props = {
  navLink: NavLinkData;
};

export default function NavLinkSolid({ navLink }: Props) {
  return (
    <NavLink
      to={navLink.href}
      className="flex h-[48px] w-full items-center justify-center rounded-lg bg-reef-300 text-[16px] text-light-950 hover:bg-light-950 hover:text-reef-300 md:w-[152px]"
    >
      {navLink.text}
    </NavLink>
  );
}
