import Facebook from '@/components/Icons/Facebook'
import Twitter from '@/components/Icons/Twitter'
import classNames from 'classnames'
import { AnimatePresence, motion } from 'framer-motion'
import Image from 'next/image'
import React from 'react'
import { styled } from 'styled-components'

interface ITeamSlide {
    isActive: boolean
}

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

const TeamSlide: React.FC<ITeamSlide> = ({ isActive }) => {
    return (
        <div
            className={classNames('relative flex justify-center transition-all duration-200', {
                'opacity-40 blur-sm': !isActive,
            })}
        >
            <ImageWrapper className="relative flex items-center">
                <AnimatePresence>
                    {isActive && (
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
                            className="absolute -left-12 top-1/2 -translate-y-1/2 space-y-4"
                        >
                            <IconWrapper className="flex  items-center justify-center rounded-full p-2">
                                <Facebook size={16} color="white" />
                            </IconWrapper>
                            <IconWrapper className="flex  items-center justify-center rounded-full p-2">
                                <Twitter size={16} color="white" />
                            </IconWrapper>
                            <IconWrapper className="flex  items-center justify-center rounded-full p-2">
                                <Twitter size={16} color="white" />
                            </IconWrapper>
                        </motion.div>
                    )}
                </AnimatePresence>

                <Image src={'/images/avatar.png'} width={296} height={400} alt="avtar" />
                <AnimatePresence>
                    {isActive && (
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
                            className="absolute left-full ml-4 min-w-[300px] text-white"
                        >
                            <div className="text-[32px] font-medium">David</div>
                            <div className="mb-2 font-medium"> COO</div>
                            <div className="mb-3 font-light">
                                A scalable multi-gaming ecosystem buil on Unity A scalable multi-gaming ecosystem built
                                on Unity A{' '}
                            </div>
                            <div className="text-gray-2 underline">Learn More</div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </ImageWrapper>
        </div>
    )
}

export default TeamSlide
