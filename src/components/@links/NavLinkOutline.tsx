import { NavLink } from 'react-router-dom';
import { NavLinkData } from '../../@types/appTypes';

type Props = {
  navLink: NavLinkData;
};

export default function NavLinkOutline({ navLink }: Props) {
  return (
    <NavLink
      to={navLink.href}
      className="flex h-12 w-[130px] items-center justify-center rounded-lg border border-reef-300 font-groteskspace text-reef-300 hover:bg-reef-300 hover:text-light-950"
    >
      {navLink.text}
    </NavLink>
  );
}