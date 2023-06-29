import React from 'react'
import { Swiper, SwiperClass, SwiperSlide } from 'swiper/react'
import { EffectCoverflow, Navigation, Pagination } from 'swiper'
import TeamSlide from './TeamSlide'
import { SetTeamState } from '../types'

interface ITeamSwiper {
    setState: (_state: SetTeamState) => void
    activeIndex: number
}

const TeamSwiper: React.FC<ITeamSwiper> = ({ setState, activeIndex }) => {
    return (
        <Swiper
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
                    slidesPerView: 3.6,
                },
            }}
            onRealIndexChange={(swiper) => setState({ activeIndex: swiper.realIndex })}
            coverflowEffect={{
                slideShadows: true,
                rotate: 0,
                stretch: 0,
                depth: 100,
                modifier: 1,
            }}
            pagination={{ el: '.swiper-pagination', clickable: true }}
            navigation={{
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            }}
            modules={[EffectCoverflow, Pagination, Navigation]}
            className="swiper_container w-full"
        >
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((e, index) => {
                const isActive = activeIndex === index
                return (
                    <SwiperSlide key={e}>
                        <TeamSlide isActive={isActive} />
                    </SwiperSlide>
                )
            })}
        </Swiper>
    )
}

export default React.memo(TeamSwiper)
