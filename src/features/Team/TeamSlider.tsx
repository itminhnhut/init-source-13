import React from 'react'
import { Swiper, SwiperClass, SwiperSlide, useSwiper } from 'swiper/react'
import { AnimatePresence, motion } from 'framer-motion'

import { EffectCoverflow, Pagination, Navigation } from 'swiper'
import Image from 'next/image'
import { useRef, useState } from 'react'
import classNames from 'classnames'
import { styled } from 'styled-components'
import Facebook from '@/components/Icons/Facebook'
import Twitter from '@/components/Icons/Twitter'
import ChevronLeft from '@/components/Icons/ChevronLeft'
import ChevronRight from '@/components/Icons/ChevronRight'

const ImageWrapper = styled.div`
    background: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, #ffffff 100%);
    background-blend-mode: color-dodge;
    background: #d9d9d926;
    position: relative;
    border-radius: 20px;
`

const IconWrapper = styled.div`
    background: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, #ffffff 100%);
    background-blend-mode: color-dodge;
    background: #d9d9d926;
    position: relative;
`

const TeamSlider = () => {
    const [swiper, setSwiper] = useState<SwiperClass | null>(null)
    const [activeIndex, setActiveIndex] = useState(0)

    return (
        <>
            <Swiper
                onSwiper={(swiper) => setSwiper(swiper)}
                effect={'coverflow'}
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
                onRealIndexChange={(swiper) => {
                    setActiveIndex(swiper.realIndex)
                }}
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
                    const isActiveSlide = activeIndex === index
                    return (
                        <SwiperSlide key={e}>
                            <div
                                className={classNames('relative transition-all duration-200 flex justify-center', {
                                    'blur-sm opacity-40': !isActiveSlide,
                                })}
                            >
                                <ImageWrapper className="relative flex items-center">
                                    <AnimatePresence>
                                        {isActiveSlide && (
                                            <motion.div
                                                initial={{
                                                    left: 0,
                                                    opacity: 0,
                                                }}
                                                animate={{
                                                    left: -48,
                                                    opacity: 1,
                                                    transition: {
                                                        delay: 0.2,
                                                    },
                                                }}
                                                exit={{ left: 0, opacity: 0 }}
                                                className="absolute -translate-y-1/2 top-1/2 space-y-4 -left-12"
                                            >
                                                <IconWrapper className="flex  p-2 rounded-full justify-center items-center">
                                                    <Facebook size={16} color="white" />
                                                </IconWrapper>
                                                <IconWrapper className="flex  p-2 rounded-full justify-center items-center">
                                                    <Twitter size={16} color="white" />
                                                </IconWrapper>
                                                <IconWrapper className="flex  p-2 rounded-full justify-center items-center">
                                                    <Twitter size={16} color="white" />
                                                </IconWrapper>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>

                                    <Image src={'/images/avatar.png'} width={296} height={400} alt="avtar" />
                                    <AnimatePresence>
                                        {isActiveSlide && (
                                            <motion.div
                                                initial={{
                                                    bottom: -100,
                                                    opacity: 0,
                                                }}
                                                animate={{
                                                    bottom: 0,
                                                    opacity: 1,
                                                    transition: {
                                                        delay: 0.2,
                                                    },
                                                }}
                                                exit={{ bottom: -100, opacity: 0 }}
                                                className="absolute ml-4 left-full text-white min-w-[300px]"
                                            >
                                                <div className="text-[32px] font-medium">David</div>
                                                <div className="font-medium mb-2"> COO</div>
                                                <div className="font-light mb-3">
                                                    A scalable multi-gaming ecosystem buil on Unity A scalable multi-gaming ecosystem built on Unity A{' '}
                                                </div>
                                                <div className="underline text-gray-2">Learn More</div>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </ImageWrapper>
                            </div>
                        </SwiperSlide>
                    )
                })}
            </Swiper>

            <div className=" mt-4 flex w-full justify-center">
                <div
                    onClick={() => {
                        swiper?.slidePrev()
                    }}
                    className="border border-gray-1 rounded-[10px] p-2 bg-black-1 w-10 h-10 flex justify-center items-center"
                >
                    <ChevronLeft size={16} color="white" />
                </div>
                <div
                    onClick={() => {
                        swiper?.slideNext()
                    }}
                    className="border  border-gray-1 rounded-[10px] p-2 bg-black-1 w-10 h-10 flex justify-center items-center ml-3"
                >
                    <ChevronRight size={16} color="white" />
                </div>
            </div>
        </>
    )
}

export default TeamSlider
