import IconButton from '@/components/Elements/Button/IconButton'
import Facebook from '@/components/Icons/Facebook'
import Twitter from '@/components/Icons/Twitter'
import React from 'react'

const TeamSocials = () => {
    return (
        <>
            <IconButton className="border-0 !bg-[#d9d9d926]" rounded>
                <Facebook size={16} color="white" />
            </IconButton>
            <IconButton className="border-0 !bg-[#d9d9d926]" rounded>
                <Twitter size={16} color="white" />
            </IconButton>
            <IconButton className="border-0 !bg-[#d9d9d926]" rounded>
                <Twitter size={16} color="white" />
            </IconButton>
        </>
    )
}

export default TeamSocials
