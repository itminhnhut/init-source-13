import { useCallback, useMemo, useState } from 'react'

import TeamSwiper from './components/TeamSwiper'
import NavigateSlider from './components/NavigateSlider'
import { SetTeamState, TeamState } from './types'

const initState = {
    swiper: null,
    activeIndex: 0,
}

const Team = () => {
    const [state, set] = useState<TeamState>(initState)

    const setState = useCallback((_state: SetTeamState) => set((prev) => ({ ...prev, ..._state })), [])

    return (
        <>
            <TeamSwiper setState={setState} activeIndex={state.activeIndex} />
            <NavigateSlider slideNext={() => state.swiper?.slideNext()} slidePrev={() => state.swiper?.slidePrev()} />
        </>
    )
}

export default Team
