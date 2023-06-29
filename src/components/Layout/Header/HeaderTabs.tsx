import colors from '@/styles/colors'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'
import { styled } from 'styled-components'
const Tabs = [
    {
        route: '/',
        title: 'Intro',
    },
    {
        route: '/home',
        title: 'Home',
    },
    {
        route: '/about-us',
        title: 'About Us',
    },
    {
        route: '/blogs',
        title: 'Blogs',
    },
    {
        route: '/portfolio',
        title: 'Portfolio',
    },
    {
        route: '/team',
        title: 'Team',
    },
    {
        route: '/partners',
        title: 'Partners',
    },
]

const HeaderTabs = () => {
    const router = useRouter()

    return (
        <div className="flex flex-col items-center justify-center gap-8 mb:flex-row mb:justify-start">
            {Tabs.map((tab, i) => (
                <Tab
                    as={Link}
                    href={tab.route}
                    className="cursor-pointer transition-colors"
                    key={i}
                    $active={router.pathname === tab.route}
                >
                    {tab.title}
                </Tab>
            ))}
        </div>
    )
}

const Tab = styled.div<{ $active?: boolean }>`
    color: ${({ $active }) => ($active ? 'white' : colors.gray[2])};
    font-weight: ${({ $active }) => ($active ? 500 : 300)};
    &:hover {
        color: white;
    }
`

export default HeaderTabs
