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
            <div className="video-container">
                <video
                    src="https://s3-figma-videos-production-sig.figma.com/video/1242043184777721116/TEAM/e437/c462/-ccfe-402b-9909-8fc5b107edca?Expires=1688947200&Signature=o7NW~iDaBsL0QSQZw2lp8yvpQiCi7HOyBFdLiG5s6Nfq9WaYoi~ZhfCxdizhhdriddjIRhqER9Qi2o5RdEnfyIHeYlpmRJSP-2NYRoTe6xy2LSwPxTlTvKrY75VtODhcXh0rgPhrMurqOmGbRtMhG2TtYzPmNPlVebzV3fME9vfphvSXwtmJLnGNid-gGqU5neUYeyxh297UbNvcKnmi2BBR~q9N1vODfiNnkHENembLk-a0pkN392zB8QNs7x7zDCPCrJEvEeuxUxJSnN3EdcCKHhPwK8Tlg9yoRZRfRbMEXsmIIxmMo3UbMymLGr3rLXlqiCnVi8J42BmniZ7Riw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
                    autoPlay
                    muted
                    loop
                ></video>
            </div>
            <Header />
            {children}
            {pathname === 'footer' ? <Footer /> : null}
        </WrapperLayout>
    )
}

const WrapperLayout = styled.section`
    .video-container {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        overflow: hidden;
        background-image: url('/images/layout/bg.png');
        background-size: 100% 100%;
        background-repeat: no-repeat;
        background-position: center center;
    }
    .video-container video {
        min-width: 100%;
        min-height: 100%;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        object-fit: cover;
    }

    .video-container:after {
        content: '';
        z-index: 1;
        height: 100%;
        width: 100%;
        top: 0;
        left: 0;
        background: rgba(0, 0, 0, 0.5);
        position: absolute;
    }
`

export default Layout
