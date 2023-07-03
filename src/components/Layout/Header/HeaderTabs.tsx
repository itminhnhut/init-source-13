import React from 'react'

import Link from 'next/link'
import { useRouter } from 'next/router'

import { useTranslation } from 'next-i18next'

import { MENU } from '@/constants'


import colors from '@/styles/colors'

import { styled } from 'styled-components'
import classNames from 'classnames'

// ** Types
import LANGUAGE from '@/types/language'

const HeaderTabs = () => {
    const { i18n: { language } } = useTranslation()
    const router = useRouter()

    return (
        <div className="flex flex-col items-center justify-center gap-8 mb:flex-row mb:justify-start">
            {MENU.map((tab: {
                route: string,
                title: { vi: string, en: string }
                hide?: boolean,
            }, index: number) => (
                <Tab
                    as={Link}
                    href={tab.route}
                    className={classNames('cursor-pointer transition-colors', { 'hidden': tab.hide })}
                    key={`header_${index}${tab.title?.[language as keyof LANGUAGE]}`}
                    $active={router.pathname === tab.route}
                >
                    {tab.title?.[language as keyof LANGUAGE]}
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
