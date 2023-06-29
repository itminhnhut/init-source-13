import { SwiperClass } from 'swiper/react'

export interface TeamState {
    swiper: null | SwiperClass
    activeIndex: number
}

export type SetTeamState = { swiper: TeamState['swiper'] } | { activeIndex: TeamState['activeIndex'] } | TeamState
