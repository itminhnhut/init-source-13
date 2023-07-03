type SEO_PAGE = '/' | '/home' | '/about-us' | '/blogs' | '/portfolio' | '/team' | '/partners' | any

const DEFAULT_SEO: Record<SEO_PAGE, { title: { vi: string, en: string } | any, des: { vi: string, en: string } | any }> = {
    "/": {
        title: { vi: 'Intro', en: 'Intro' },
        des: { vi: 'Intro', en: 'Intro' }
    },
    "/home": {
        title: { vi: 'Home', en: 'Home' },
        des: { vi: 'Home', en: 'Home' }
    },
    "/about-us": {
        title: { vi: 'about us', en: 'about us' },
        des: { vi: 'about us', en: 'about us' }
    },
    "/blogs": {
        title: { vi: 'blogs', en: 'blogs' },
        des: { vi: 'blogs', en: 'blogs' }
    },
    "/portfolio": {
        title: { vi: 'portfolio', en: 'portfolio' },
        des: { vi: 'portfolio', en: 'portfolio' }
    },
    "/team": {
        title: { vi: 'team', en: 'team' },
        des: { vi: 'team', en: 'team' }
    },
    "/partners": {
        title: { vi: 'partners', en: 'partners' },
        des: { vi: 'partners', en: 'partners' }
    },
    "/footer": {
        title: { vi: 'footer', en: 'footer' },
        des: { vi: 'footer', en: 'footer' }
    }
}

export default DEFAULT_SEO