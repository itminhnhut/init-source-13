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
                    src="https://s3-figma-videos-production-sig.figma.com/video/1242043184777721116/TEAM/adae/55c5/-7560-4d1d-90c5-b99c93fd3f2f?Expires=1689552000&Signature=qIn5qA90ttZts54J4Wr5~c6u31ZQxVtpaHSkn9irzkd9tFS8hQN61ijOsKm18EGqrwBFkx-pLe2iikV7q7q33EgGNBnWkSPQy6KYPp6qcHgGWxX7IVuYtI861eRc46t5fAY1SQcETrstBURO6lCmf5tm0f7KVny6JzcMON08VWRR6DCjP06Tgg0xfMZu5ANfk7FhkPy52h25Bz6upIp74rHVP58p26TVh15xBONR26f~NObJb-1oLApQWVew4hUNzlm9T1B5~hKCHhf0UGhE5vNOCw2qGEF3UPanmw2oP1arbtsm96kEepZAjlkKBBbGCGAKL6cwnA33S6wnVyxCdw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
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
