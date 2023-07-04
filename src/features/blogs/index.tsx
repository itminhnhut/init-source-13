import IconButton from '@/components/Elements/Button/IconButton'
import Navigator from '@/components/Elements/SwiperNavigator'
import Image from 'next/image'
import React, { useState } from 'react'
import { Swiper, SwiperClass, SwiperSlide } from 'swiper/react'
import BlogThumbnail from './components/BlogThumbnail'

const Blogs = ({ dataBlogs }) => {
    const [swiper, setSwiper] = useState<SwiperClass | null>(null)

    console.log(dataBlogs)
    return (
        <div className="z-10 w-full">
            <div className="relative mb-[46px] flex w-full justify-center mb:mb-8 mt-[53px]">
                <div className=" text-4xl4 font-semibold mb:text-6xl4">Blogs</div>
                <div className="absolute bottom-0 right-0 hidden mb:block">
                    <Navigator
                        className="!gap-4"
                        slideNext={() => swiper?.slideNext()}
                        slidePrev={() => swiper?.slidePrev()}
                    />
                </div>
            </div>

            <div className="mb-4">
                <Swiper
                    onSwiper={(swiper) => setSwiper(swiper)}
                    centeredSlides={true}
                    loop={true}
                    slidesPerView={1}
                    breakpoints={{
                        640: {
                            slidesPerView: 2.2,
                            spaceBetween: 16,
                        },
                        1024: {
                            slidesPerView: 3,
                        },
                    }}
                    className="w-full"
                    spaceBetween={24}
                >
                    {dataBlogs.map((blog, index: key) => (
                        <SwiperSlide key={index} >
                            <BlogThumbnail featureImage={blog.feature_image} title={blog.title} slug={blog.slug} />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
            <Navigator
                className="mb:hidden"
                slideNext={() => swiper?.slideNext()}
                slidePrev={() => swiper?.slidePrev()}
            />
        </div>
    )
}

export default Blogs
