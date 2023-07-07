import { useCallback, useMemo, useState } from 'react'

import Modal from '@/components/Elements/Modal'
import Page from '@/components/Elements/Page'
import Navigator from '@/components/Elements/SwiperNavigator'
import { getOutScreenVariants } from '@/constants/motion-variants'

import { motion } from 'framer-motion'

import TeamSwiper from './components/TeamSwiper'
import type { SetTeamState, TeamState } from './types'

const initState = {
    swiper: null,
    activeIndex: 0,
}

const Team = () => {
    const [state, set] = useState<TeamState>(initState)
    const [showModal, setShowModal] = useState(false)

    const setState = useCallback((_state: SetTeamState) => set((prev) => ({ ...prev, ..._state })), [])

    const navigate = useMemo(
        () => ({
            next: () => state.swiper?.slideNext(),
            prev: () => state.swiper?.slidePrev(),
        }),
        [state.swiper],
    )

    return (
        <Page className="z-10 flex w-full flex-col items-center justify-center pb-[50px]">
            <motion.div
                variants={getOutScreenVariants('top')}
                initial="hidden"
                animate="show"
                className="z-[1] mb-3 text-4xl4 font-semibold mb:text-6xl4 "
            >
                Team
            </motion.div>
            <motion.div
                className="h-full w-full"
                variants={getOutScreenVariants('bottom')}
                initial="hidden"
                animate="show"
            >
                <TeamSwiper
                    navigate={navigate}
                    setState={setState}
                    activeIndex={state.activeIndex}
                    setShowModal={setShowModal}
                />
            </motion.div>
            <div className="mt-10 hidden mb:block">
                <Navigator slideNext={navigate.next} slidePrev={navigate.prev} />
            </div>
            <Modal isOpen={showModal} onClose={() => setShowModal(false)}>
                <div className="pb-[112px]">
                    <div className="mb-1 text-center text-2xl font-medium">DAVID</div>
                    <div className="mb-4 text-center font-medium">COO</div>
                    <div className="text-base font-light">
                        A scalable multi-gaming ecosystem buil on Unity A scalable multi-gaming ecosystem built on Unity
                        A scalabl... A scalable multi-gaming ecosystem buil on Unity A scalable multi-gaming ecosystem
                        built on Unity A scalabl...A scalable multi-gaming ecosystem buil on Unity A scalable
                        multi-gaming ecosystem built on Unity A scalabl...A scalable multi-gaming ecosystem buil on
                        Unity A scalable multi-gaming ecosystem built on Unity A scalabl...
                    </div>
                </div>
            </Modal>
        </Page>
    )
}

export default Team
