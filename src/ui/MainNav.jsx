import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
// import { TbHomeCog } from 'react-icons/tb';
import { LuDroplets, LuLayoutDashboard } from 'react-icons/lu';

import { TbUsers } from 'react-icons/tb';
import { HiOutlineCog6Tooth } from 'react-icons/hi2';

const NavList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
`;

const StyledNavLink = styled(NavLink)`
  &:link,
  &:visited {
    display: flex;
    align-items: center;
    gap: 1.2rem;

    color: var(--color-brand-600);
    font-size: 1.6rem;
    font-weight: 500;
    padding: 1.2rem 2.4rem;
    transition: all 0.3s;
  }

  /* This works because react-router places the active class on the active NavLink */
  &:hover,
  &:active,
  &.active:link,
  &.active:visited {
    color: var(--color-grey-0);
    background-color: var(--color-blue-700);
    border-radius: var(--border-radius-sm);
  }

  & svg {
    width: 2.4rem;
    height: 2.4rem;
    color: var(--color-brand-400);
    transition: all 0.3s;
  }

  &:hover svg,
  &:active svg,
  &.active:link svg,
  &.active:visited svg {
    color: var(--color-brand-900);
  }
`;

function MainNav() {
  return (
    <nav>
      <NavList>
        <li>
          <StyledNavLink to="/dashboard">
            <LuLayoutDashboard />
            <span>Home</span>
          </StyledNavLink>
        </li>
        {/* <li>
          <StyledNavLink to="/household">
            <TbHomeCog />
            <span>Household</span>
          </StyledNavLink>
        </li> */}
        <li>
          <StyledNavLink to="/readings">
            <LuDroplets />
            <span>Readings</span>
          </StyledNavLink>
        </li>
        <li>
          <StyledNavLink to="/users">
            <TbUsers />
            <span>Users</span>
          </StyledNavLink>
        </li>
        <li>
          <StyledNavLink to="/settings">
            <HiOutlineCog6Tooth />
            <span>Settings</span>
          </StyledNavLink>
        </li>
      </NavList>
    </nav>
  );
}

export default MainNav;
