import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const NavList = styled.ul`
  display: flex;
  position: absolute;
  top: 0;
  padding: 0;
  margin: 0;
  height: 50px;
`;

const LinkItem = styled.li`
  textalign: center;
  flex: 1;
  list-style-type: none;
  padding: 10px;
  white-space: nowrap;
`;

type NavItem = {
  label: string;
  path: string;
};

type NavigationBarProps = {
  links: NavItem[];
};

export const NavigationBar = ({ links }: NavigationBarProps) =>
  links.length ? (
    <NavList>
      {links.map((link) => (
        <LinkItem key={link.path}>
          <Link to={link.path}>{link.label}</Link>
        </LinkItem>
      ))}
    </NavList>
  ) : null;
