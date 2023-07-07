import React from 'react'

import IconButton from '@/components/Elements/Button/IconButton'

import Link from 'next/link'

const BackToSection = () => {
    return (
        <section className="mb-8 !bg-black-1 py-[22px]">
            <div className="page-container">
                <Link href="/blogs">
                    <IconButton className="!w-auto px-4 py-2 text-sm font-medium text-white">Back to page</IconButton>
                </Link>
            </div>
        </section>
    )
}

export default BackToSection
