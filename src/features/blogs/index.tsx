import IconButton from '@/components/Elements/Button/IconButton'
import Navigator from '@/components/Elements/SwiperNavigator'
import Image from 'next/image'
import React, { useState } from 'react'
import { Swiper, SwiperClass, SwiperSlide } from 'swiper/react'

const Blogs = () => {
    const [swiper, setSwiper] = useState<SwiperClass | null>(null)

    return (
        <div className="z-10 w-full">
            <div className=" relative mb-8 flex w-full justify-center">
                <div className=" text-6xl4 font-semibold text-white">Blogs</div>
                <div className="absolute right-0">
                    <Navigator
                        className="!gap-4"
                        slideNext={() => swiper?.slideNext()}
                        slidePrev={() => swiper?.slidePrev()}
                    />
                </div>
            </div>

            <div className="mb-12">
                <Swiper
                    onSwiper={(swiper) => setSwiper(swiper)}
                    grabCursor={true}
                    centeredSlides={true}
                    loop={true}
                    slidesPerView={3}
                    className="w-full"
                    spaceBetween={56}
                >
                    {[1, 2, 3, 4, 5, 6].map((e) => (
                        <SwiperSlide key={e} className="">
                            <div className="relative h-full ">
                                <Image
                                    src="/images/blog-image.png"
                                    className="!static !h-[205px]  rounded-lg object-cover"
                                    fill
                                    alt="blog-image"
                                />
                                <div className="font-medium">
                                    Tune In on May 30 to Binance Talks: Paying With Crypto
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
            <div className="flex justify-center">
                <IconButton className="!w-auto px-4 py-2">See more</IconButton>
            </div>
        </div>
    )
}

export default Blogs
