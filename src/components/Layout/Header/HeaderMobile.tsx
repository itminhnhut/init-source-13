import React from 'react'
import dynamic from 'next/dynamic'
import styled from 'styled-components'
const HeaderTabs = dynamic(() => import('./HeaderTabs'), { ssr: false })

const Wrapper = styled.div<{ isOpen: boolean }>`
    z-index: 999;
    right: ${({ isOpen }) => (!isOpen ? '-100vw' : 0)} !important;
    transition: all 0.2s ease-in-out;
    width: 100%;
    height: 100%;
`

const HeaderMobile = ({ isOpen }: { isOpen: boolean }) => {
    return (
        <Wrapper isOpen={isOpen} className="flex justify-center items-center text-white fixed backdrop-blur-[15px] bg-[#151515]/30">
            <HeaderTabs />
        </Wrapper>
    )
}

export default HeaderMobile
