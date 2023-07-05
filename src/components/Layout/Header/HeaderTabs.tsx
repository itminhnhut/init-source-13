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
    const {
        i18n: { language },
    } = useTranslation()
    const router = useRouter()

    return (
        <div className="flex flex-col items-center justify-center gap-8 mb:flex-row mb:justify-start">
            {MENU.map(
                (
                    tab: {
                        route: string
                        title: { vi: string; en: string }
                        hide?: boolean
                    },
                    index: number,
                ) => (
                    <Tab
                        as={Link}
                        href={tab.route}
                        className={classNames('cursor-pointer text-lg transition-colors mb:text-base', {
                            hidden: tab.hide,
                        })}
                        key={`header_${index}${tab.title?.[language as keyof LANGUAGE]}`}
                        $active={router.pathname === tab.route}
                    >
                        {tab.title?.[language as keyof LANGUAGE]}
                    </Tab>
                ),
            )}
        </div>
    )
}

const Tab = styled.div<{ $active?: boolean }>`
    color: ${({ $active }) => ($active ? 'white' : colors.gray[2])};
    font-weight: ${({ $active }) => ($active ? 500 : 600)};
    @media screen and (min-width: 820px) {
        color: ${({ $active }) => ($active ? colors.gray[2] : 'white')};
        font-weight: 500;
    }
    font-style: normal;
`

export default HeaderTabs
