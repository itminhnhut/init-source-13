/* eslint-disable react/display-name */
import { HEADER_DESKTOP_HEIGHT, HEADER_MOBILE_HEIGHT, MEDIA_QUERY_MOBILE } from '@/styles/constants'
import React, { HTMLProps, PropsWithChildren } from 'react'
import styled from 'styled-components'
const Wrapper = styled.div`
    min-height: calc(100vh - ${HEADER_MOBILE_HEIGHT}px);

    ${MEDIA_QUERY_MOBILE} {
        min-height: calc(100vh - ${HEADER_DESKTOP_HEIGHT}px);
    }
`
interface IPage extends PropsWithChildren, HTMLProps<HTMLDivElement> {}
const Page = React.forwardRef<HTMLDivElement, IPage>(({ children, ...props }, ref) => {
    return (
        <Wrapper ref={ref} {...props}>
            {children}
        </Wrapper>
    )
})

export default Page
