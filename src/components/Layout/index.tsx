import { FC, ReactNode } from 'react'

import { usePathname } from 'next/navigation'

import styled from 'styled-components'

import dynamic from 'next/dynamic'

const Header = dynamic(() => import('./Header'), { ssr: false })
const Footer = dynamic(() => import('./Footer'), { ssr: false })

interface LayoutI {
    children: ReactNode
}

const Layout: FC<LayoutI> = ({ children }) => {
    const pathname = usePathname()

    return (
        <WrapperLayout>
            <Header />
            <div className="video-container">
                <video
                    src="/videos/video.webm"
                    autoPlay
                    muted
                    loop
                ></video>
                <div className="relative">{children}</div>
            </div>

            {pathname === '/footer' ? <Footer /> : null}
        </WrapperLayout>
    )
}

const WrapperLayout = styled.section`
    .video-container {
        /* position: absolute; */
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        /* overflow: hidden; */
        background-image: url('/images/layout/bg.png');
        background-size: 100% 100%;
        background-repeat: no-repeat;
        background-position: center center;
    }
    .video-container video {
        min-width: 100%;
        min-height: 100%;
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        object-fit: cover;
    }

    .video-container:before {
        content: '';
        z-index: -1;
        height: 100%;
        width: 100%;
        top: 0;
        left: 0;
        background: rgba(0, 0, 0, 0.5);
        position: absolute;
    }
`

export default Layout
