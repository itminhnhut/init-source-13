
import colors from '@/styles/colors';
import React from 'react';
import { styled } from 'styled-components';

const Tabs = [
  {
    route: '/',
    title: 'Intro',
  },
  {
    route: '/',
    title: 'Home',
  },
  {
    route: '/',
    title: 'About Us',
  },
  {
    route: '/',
    title: 'Blogs',
  },
  {
    route: '/',
    title: 'Portfolio',
  },
  {
    route: '/',
    title: 'Team',
  },
  {
    route: '/',
    title: 'Partners',
  },
];

const HeaderTabs = () => {
  return (
    <div className='flex items-center'>
      {Tabs.map((tab, i) => (
        <Tab key={i} active={i === 1}>
          {tab.title}
        </Tab>
      ))}
    </div>
  );
};

const Tab = styled.div.attrs({
  className: 'mx-4',
})<{ active?: boolean }>`
  color: ${({ active }) =>
      active ? 'white' : 'white'};
    ${({ active }) =>
      active && `font-weight:500;`};
`;

export default HeaderTabs;
