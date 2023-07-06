import React, { useEffect, useRef, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { EffectCoverflow } from 'swiper'
import TeamSlide from './TeamSlide'
import { SetTeamState } from '../types'
import ChevronLeft from '@/components/Icons/ChevronLeft'
import ChevronRight from '@/components/Icons/ChevronRight'
import IconButton from '@/components/Elements/Button/IconButton'
import Navigator from '@/components/Elements/SwiperNavigator'

interface ITeamSwiper {
    setState: (_state: SetTeamState) => void
    activeIndex: number
    navigate: {
        next: () => void | undefined
        prev: () => void | undefined
    }
    setShowModal: React.Dispatch<boolean>
}

const NAVIGATOR_BUTTON_HEIGHT = 40

const TeamSwiper: React.FC<ITeamSwiper> = ({ navigate, setState, activeIndex, setShowModal }) => {
    const [imgHeight, setImgHeight] = useState(0)
    useEffect(() => {
        const image = document.getElementsByClassName('avatarImage')[0]
        setImgHeight(image.clientHeight)
    }, [])

    return (
        <div className="relative h-full w-full">
            <div
                style={{ top: imgHeight / 2 - NAVIGATOR_BUTTON_HEIGHT / 2 }}
                className="absolute mb:hidden left-0 z-[10] w-full px-4"
            >
                <Navigator className="justify-between" slidePrev={navigate.prev} slideNext={navigate.next} />
            </div>
            <Swiper
                slideToClickedSlide
                onSwiper={(swiper) => setState({ swiper })}
                effect="coverflow"
                grabCursor={true}
                centeredSlides={true}
                loop={true}
                slidesPerView={1}
                breakpoints={{
                    820: {
                        slidesPerView: 2,
                    },
                    1440: {
                        slidesPerView: 3.1,
                    },
                }}
                onRealIndexChange={(swiper) => setState({ activeIndex: swiper.realIndex })}
                coverflowEffect={{
                    rotate: 0,
                    stretch: 0,
                    depth: 100,
                    modifier: 1.5,
                }}
                modules={[EffectCoverflow]}
                className="w-full"
            >
                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((e, index) => {
                    const isActive = activeIndex === index
                    return (
                        <SwiperSlide key={e} className=" px-4 mb:px-0">
                            <TeamSlide setShowModal={setShowModal} isActive={isActive} />
                        </SwiperSlide>
                    )
                })}
            </Swiper>
        </div>
    )
}

export default React.memo(TeamSwiper)
