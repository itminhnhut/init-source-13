/* eslint-disable react/display-name */
import IconButton from '@/components/Elements/Button/IconButton'
import Facebook from '@/components/Icons/Facebook'
import Twitter from '@/components/Icons/Twitter'
import classNames from 'classnames'
import { AnimatePresence, motion } from 'framer-motion'
import Image from 'next/image'
import React, { forwardRef } from 'react'
import { styled } from 'styled-components'
import TeamSocials from './TeamSocials'
import { useWindowSize } from '../../../hooks/useWindowSize'

interface ITeamSlide {
    isActive: boolean
    setShowModal: React.Dispatch<boolean>
}

const socialsVariants = {
    hidden: {
        left: -100,
        opacity: 0,
    },
    show: {
        left: 'calc((40px + 30px) * -1)',
        opacity: 1,
        transition: {
            delay: 0.2,
        },
    },
}

const contentVariants = {
    hidden: {
        left: 'calc(100% + 48px)',
        opacity: 0,
    },
    show: {
        left: '100%',
        opacity: 1,
        transition: {
            delay: 0.2,
        },
    },
}

const TeamSlide: React.FC<ITeamSlide> = ({ isActive, setShowModal }) => {
    return (
        <div
            className={classNames('relative transition-all duration-200', {
                'opacity-50 blur-sm': !isActive,
            })}
        >
            <div className="relative flex justify-center">
                <ImageWrapper className="relative flex w-1/2 items-center">
                    <div className="hidden mb:block">
                        <AnimatePresence>
                            {isActive && (
                                <motion.div
                                    variants={socialsVariants}
                                    initial="hidden"
                                    animate="show"
                                    exit="hidden"
                                    className="absolute top-1/2 -translate-y-1/2 space-y-4"
                                >
                                    <TeamSocials />
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>

                    <div className="">
                        <Image src={'/images/avatar.png'} width={296} height={400} alt="avtar" />
                    </div>
                    <div className="hidden mb:block">
                        <AnimatePresence>
                            {isActive && (
                                <motion.div
                                    variants={contentVariants}
                                    initial="hidden"
                                    animate="show"
                                    exit="hidden"
                                    className="absolute bottom-0 left-full ml-[18px] hidden min-w-[300px] mb:block"
                                >
                                    <div className="text-gradient-1 text-[32px] font-medium">David</div>
                                    <div className="mb-2 font-medium"> COO</div>
                                    <div className="mb-3">
                                        A scalable multi-gaming ecosystem buil on Unity A scalable multi-gaming
                                        ecosystem built on Unity A{' '}
                                    </div>
                                    <div className="text-gray-2 underline" onClick={() => setShowModal(true)}>
                                        Learn More
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                </ImageWrapper>
            </div>
            {isActive && (
                <div className="space-y-10 mb:hidden">
                    <motion.div className="mt-4 flex flex-col items-center text-center ">
                        <div className="text-gradient-1 text-[32px] font-medium leading-[40px]">David</div>
                        <div className="mb-2 font-medium"> COO</div>
                        <div className="mb-3">
                            A scalable multi-gaming ecosystem buil on Unity A scalable multi-gaming ecosystem built on
                            Unity A{' '}
                        </div>
                        <div className="text-gray-2 underline" onClick={() => setShowModal(true)}>
                            Learn More
                        </div>
                    </motion.div>

                    <motion.div
                        // variants={socialsVariants}
                        // initial="hidden"
                        // animate="show"
                        // exit="hidden"
                        className="items center flex justify-center gap-2"
                    >
                        <TeamSocials />
                    </motion.div>
                </div>
            )}
        </div>
    )
}

const ImageWrapper = styled.div`
    background: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, #ffffff 100%);
    background-blend-mode: color-dodge;
    background: #d9d9d926;
    position: relative;
    border-radius: 20px;
`

export default TeamSlide
