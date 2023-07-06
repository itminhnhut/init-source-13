import { BreadcrumbJsonLd as NextBreadcrumbJsonLd } from 'next-seo'

type BreadcrumbJsonLdProps = {
    data: {
        position: number
        name: string
        item: string
    }[]
}

const BreadcrumbJsonLd = ({ data }: BreadcrumbJsonLdProps) => {
    return <NextBreadcrumbJsonLd itemListElements={data} />
}

export default BreadcrumbJsonLd
