/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck

/* eslint-disable prettier/prettier */
import GhostAdminAPI from '@tryghost/admin-api'

import { runEnv } from '@/configs/ENV'

const { GHOST_VERSION, GHOST_URL, GHOST_KEY_ADMIN } = runEnv

export const api = new GhostAdminAPI({
    url: GHOST_URL,
    key: GHOST_KEY_ADMIN as string,
    version: GHOST_VERSION,
})

// Create a token without the client

const GhostAdmin = {
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    postMember: () => { },
}

export default GhostAdmin
