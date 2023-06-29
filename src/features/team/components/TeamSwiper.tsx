import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { EffectCoverflow } from 'swiper'
import TeamSlide from './TeamSlide'
import { SetTeamState } from '../types'

interface ITeamSwiper {
    setState: (_state: SetTeamState) => void
    activeIndex: number
    setShowModal: React.Dispatch<boolean>
}

const TeamSwiper: React.FC<ITeamSwiper> = ({ setState, activeIndex, setShowModal }) => {
    return (
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
                    <SwiperSlide key={e}>
                        <TeamSlide setShowModal={setShowModal} isActive={isActive} />
                    </SwiperSlide>
                )
            })}
        </Swiper>
    )
}

export default React.memo(TeamSwiper)
