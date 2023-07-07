import BlogThumbnail from './components/BlogThumbnail'
import Navigator from '@/components/Elements/SwiperNavigator'
import { getOutScreenVariants } from '@/constants/motion-variants'
import GHOST_DETAIL from '@/types/blogs'
import { motion } from 'framer-motion'
import React, { useState } from 'react'
import { Swiper, SwiperClass, SwiperSlide } from 'swiper/react'

const Blogs = ({ dataBlogs }: { dataBlogs: GHOST_DETAIL[] }) => {
    const [swiper, setSwiper] = useState<SwiperClass | null>(null)

    return (
        <div className="z-10 w-full">
            <div className="relative mb-[46px] flex w-full justify-center mb:mb-8">
                <motion.div
                    variants={getOutScreenVariants('top')}
                    initial="hidden"
                    animate="show"
                    className=" text-4xl4 font-semibold mb:text-6xl4"
                >
                    Blogs
                </motion.div>
                <motion.div
                    variants={getOutScreenVariants('right')}
                    initial="hidden"
                    animate="show"
                    className="absolute bottom-0 right-0 hidden mb:block"
                >
                    <Navigator
                        className="!gap-4"
                        slideNext={() => swiper?.slideNext()}
                        slidePrev={() => swiper?.slidePrev()}
                    />
                </motion.div>
            </div>

            <motion.div className="mb-4" variants={getOutScreenVariants('bottom')} initial="hidden" animate="show">
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
                    {dataBlogs.map((blog, index: number) => (
                        <SwiperSlide key={index}>
                            <BlogThumbnail featureImage={blog.feature_image} title={blog.title} slug={blog.slug} />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </motion.div>
            <Navigator
                className="mb:hidden"
                slideNext={() => swiper?.slideNext()}
                slidePrev={() => swiper?.slidePrev()}
            />
        </div>
    )
}

export default Blogs
