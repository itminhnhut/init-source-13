import { useCallback, useMemo, useState } from 'react'

import TeamSwiper from './components/TeamSwiper'
import NavigateSlider from './components/NavigateSlider'
import type { SetTeamState, TeamState } from './types'
import Modal from '@/components/Elements/Modal'
import Navigator from '@/components/Elements/SwiperNavigator'

const initState = {
    swiper: null,
    activeIndex: 0,
}

const Team = () => {
    const [state, set] = useState<TeamState>(initState)
    const [showModal, setShowModal] = useState(false)

    const setState = useCallback((_state: SetTeamState) => set((prev) => ({ ...prev, ..._state })), [])

    return (
        <main className={`z-10 flex min-h-[calc(100vh-80px)] w-full flex-col items-center justify-center`}>
            <div className="z-[1] mb-3 text-[64px] font-semibold leading-[80px] text-white">Team</div>
            <TeamSwiper setState={setState} activeIndex={state.activeIndex} setShowModal={setShowModal} />
            <Navigator slideNext={() => state.swiper?.slideNext()} slidePrev={() => state.swiper?.slidePrev()} />
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
        </main>
    )
}

export default Team
