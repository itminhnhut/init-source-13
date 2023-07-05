import { useCallback, useState } from 'react'

import TeamSwiper from './components/TeamSwiper'
import type { SetTeamState, TeamState } from './types'
import Modal from '@/components/Elements/Modal'
import Navigator from '@/components/Elements/SwiperNavigator'
import { motion } from 'framer-motion'
import { getOutScreenVariants } from '@/constants/motion-variants'
import Page from '@/components/Elements/Page'

const initState = {
    swiper: null,
    activeIndex: 0,
}

const Team = () => {
    const [state, set] = useState<TeamState>(initState)
    const [showModal, setShowModal] = useState(false)

    const setState = useCallback((_state: SetTeamState) => set((prev) => ({ ...prev, ..._state })), [])

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
                <TeamSwiper setState={setState} activeIndex={state.activeIndex} setShowModal={setShowModal} />
            </motion.div>
            <div className="mt-10">
                <Navigator slideNext={() => state.swiper?.slideNext()} slidePrev={() => state.swiper?.slidePrev()} />
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
