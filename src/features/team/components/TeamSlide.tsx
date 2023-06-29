import IconButton from '@/components/Elements/Button/IconButton'
import Facebook from '@/components/Icons/Facebook'
import Twitter from '@/components/Icons/Twitter'
import classNames from 'classnames'
import { AnimatePresence, motion } from 'framer-motion'
import Image from 'next/image'
import React from 'react'
import { styled } from 'styled-components'

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
            className={classNames('relative flex justify-center transition-all duration-200', {
                'opacity-50 blur-sm': !isActive,
            })}
        >
            <ImageWrapper className="relative flex items-center">
                <AnimatePresence>
                    {isActive && (
                        <motion.div
                            variants={socialsVariants}
                            initial="hidden"
                            animate="show"
                            exit="hidden"
                            className="absolute top-1/2 -translate-y-1/2 space-y-4"
                        >
                            <IconButton className="border-0 !bg-[#d9d9d926]" rounded>
                                <Facebook size={16} color="white" />
                            </IconButton>
                            <IconButton className="border-0 !bg-[#d9d9d926]" rounded>
                                <Twitter size={16} color="white" />
                            </IconButton>
                            <IconButton className="border-0 !bg-[#d9d9d926]" rounded>
                                <Twitter size={16} color="white" />
                            </IconButton>
                        </motion.div>
                    )}
                </AnimatePresence>

                <Image src={'/images/avatar.png'} width={296} height={400} alt="avtar" />
                <AnimatePresence>
                    {isActive && (
                        <motion.div
                            variants={contentVariants}
                            initial="hidden"
                            animate="show"
                            exit="hidden"
                            className="absolute bottom-0 left-full ml-[18px] min-w-[300px]"
                        >
                            <div className="text-[32px] font-medium">David</div>
                            <div className="mb-2 font-medium"> COO</div>
                            <div className="mb-3">
                                A scalable multi-gaming ecosystem buil on Unity A scalable multi-gaming ecosystem built
                                on Unity A{' '}
                            </div>
                            <div className="text-gray-2 underline" onClick={() => setShowModal(true)}>
                                Learn More
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </ImageWrapper>
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

const IconWrapper = styled.div`
    background: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, #ffffff 100%);
    background-blend-mode: color-dodge;
    background: #d9d9d926;
    position: relative;
`

export default TeamSlide
