import React, { useRef } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { EffectCoverflow } from 'swiper'
import TeamSlide from './TeamSlide'
import { SetTeamState } from '../types'
import ChevronLeft from '@/components/Icons/ChevronLeft'
import ChevronRight from '@/components/Icons/ChevronRight'
import IconButton from '@/components/Elements/Button/IconButton'

interface ITeamSwiper {
    setState: (_state: SetTeamState) => void
    activeIndex: number
    setShowModal: React.Dispatch<boolean>
}

const TeamSwiper: React.FC<ITeamSwiper> = ({ setState, activeIndex, setShowModal }) => {
    const teamImgRef = useRef<HTMLDivElement>(null)

    return (
        <div className="relative h-full w-full">
            {/* <div className="absolute left-0 top-1/2 z-[10] flex w-full -translate-y-1/2 justify-between">
                <IconButton>
                    <ChevronLeft size={16} />
                </IconButton>
                <IconButton>
                    <ChevronRight size={16} />
                </IconButton>
            </div> */}
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
                            <TeamSlide
                                ref={index === 0 ? teamImgRef : null}
                                setShowModal={setShowModal}
                                isActive={isActive}
                            />
                        </SwiperSlide>
                    )
                })}
            </Swiper>
        </div>
    )
}

export default React.memo(TeamSwiper)
