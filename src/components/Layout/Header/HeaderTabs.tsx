import React from 'react'

import colors from '@/styles/colors'
import Link from 'next/link'
import { useRouter } from 'next/router'

import { MENU } from '@/constants'
import { styled } from 'styled-components'
import classNames from 'classnames'

const HeaderTabs = () => {
    const router = useRouter()

    return (
        <div className="flex flex-col items-center justify-center gap-8 mb:flex-row mb:justify-start">
            {MENU.map((tab: {
                route: string,
                title: string
                hide?: boolean,
            }, i) => (
                <Tab
                    as={Link}
                    href={tab.route}
                    className={classNames('cursor-pointer transition-colors', { 'hidden': tab.hide })}
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
