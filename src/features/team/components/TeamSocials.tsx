import React from 'react'

import IconButton from '@/components/Elements/Button/IconButton'
import Facebook from '@/components/Icons/Facebook'
import LinkedIn from '@/components/Icons/LinkedIn'
import Twitter from '@/components/Icons/Twitter'

const TeamSocials = () => {
    return (
        <>
            <IconButton className="border-0 " rounded>
                <Facebook size={16} color="white" />
            </IconButton>
            <IconButton className="border-0 " rounded>
                <Twitter size={16} color="white" />
            </IconButton>
            <IconButton className="border-0 " rounded>
                <LinkedIn size={16} color="white" />
            </IconButton>
        </>
    )
}

export default TeamSocials
